'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ChatLog {
  id: string
  session_id: string
  user_message: string
  ai_response: string
  created_at: string
  user_agent: string
  ip_address: string
}

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([])
  const [loading, setLoading] = useState(false)
  const [stats, setStats] = useState({ totalChats: 0, uniqueUsers: 0, todayChats: 0 })

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true)
      loadData()
    } else {
      alert('Incorrect password')
    }
  }

  const loadData = async () => {
    setLoading(true)
    
    // Load chat logs
    const { data: logs } = await supabase
      .from('chat_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)
    
    if (logs) {
      setChatLogs(logs)
      
      // Calculate stats
      const uniqueUsers = new Set(logs.map(log => log.session_id)).size
      const today = new Date().toISOString().split('T')[0]
      const todayChats = logs.filter(log => log.created_at.startsWith(today)).length
      
      setStats({
        totalChats: logs.length,
        uniqueUsers,
        todayChats
      })
    }
    
    setLoading(false)
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Admin Dashboard</CardTitle>
            <CardDescription>Enter password to access</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => setAuthenticated(false)}>
            Logout
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Chats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stats.totalChats}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Unique Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stats.uniqueUsers}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Today's Chats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stats.todayChats}</p>
            </CardContent>
          </Card>
        </div>

        {/* Chat Logs */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Chat Logs</CardTitle>
            <CardDescription>Last 50 conversations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : chatLogs.length === 0 ? (
                <p className="text-center text-gray-500">No chat logs yet</p>
              ) : (
                chatLogs.map((log) => (
                  <div key={log.id} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>{new Date(log.created_at).toLocaleString()}</span>
                      <span>Session: {log.session_id.slice(0, 8)}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-sm font-semibold text-blue-900">User:</p>
                        <p className="text-sm text-blue-800">{log.user_message}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-sm font-semibold text-green-900">AI:</p>
                        <p className="text-sm text-green-800">{log.ai_response}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Document Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle>Document Management</CardTitle>
            <CardDescription>Upload documents to enhance AI knowledge base</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                To add documents, place .txt or .md files in the <code className="bg-gray-100 px-2 py-1 rounded">public/documents/</code> folder and restart the server.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                <p className="text-sm text-yellow-800">
                  📁 Current location: <code>/public/documents/</code><br/>
                  📝 Supported formats: .txt, .md<br/>
                  🔄 Restart server after adding files
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
