"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Bot, Sparkles, MessageCircle, Shield, Clock, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AIChat } from "@/components/ai-chat"
import { ExampleQuestions } from "@/components/ai-example-questions"

export function AIAgency() {
  const [selectedQuestion, setSelectedQuestion] = useState<string>("")

  useEffect(() => {
    // Check for query parameter on mount
    const urlParams = new URLSearchParams(window.location.search)
    const question = urlParams.get('q')
    if (question) {
      setSelectedQuestion(decodeURIComponent(question))
    }
  }, [])

  const features = [
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Ask questions in plain English about Justin's background and experience"
    },
    {
      icon: Zap,
      title: "Instant Responses", 
      description: "Get immediate answers about projects, skills, and professional journey"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "No conversation data is stored - your privacy is protected"
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Get information about Justin anytime, 24/7"
    }
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
      <div className="container mx-auto max-w-7xl">
        {/* Compact Hero Section - Desktop Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex items-center justify-between mb-6 pb-4 border-b border-border"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold">
                AI <span className="text-primary">Assistant</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Get instant answers about Justin's background, projects, and experience
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              <Sparkles className="h-3 w-3 mr-1" />
              Powered by AI
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Shield className="h-3 w-3 mr-1" />
              Privacy Protected
            </Badge>
          </div>
        </motion.div>

        {/* Mobile Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </div>
          
          <h1 className="text-3xl font-serif font-bold mb-2">
            AI <span className="text-primary">Assistant</span>
          </h1>
          
          <p className="text-sm text-muted-foreground mb-4">
            Get instant answers about Justin's background, projects, and experience
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="text-xs">Powered by AI</Badge>
            <Badge variant="secondary" className="text-xs">Privacy Protected</Badge>
          </div>
        </motion.div>

        {/* Main Content Grid - Optimized for Desktop Scroll-Free */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-6 lg:h-[calc(100vh-200px)]">
          {/* Left Sidebar - Example Questions + Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 lg:overflow-y-auto lg:pr-2"
          >
            {/* Example Questions */}
            <Card className="p-6">
              <ExampleQuestions onQuestionSelect={setSelectedQuestion} />
            </Card>

            {/* Quick Features - Desktop Only */}
            <Card className="p-4 bg-secondary/30 hidden lg:block">
              <div className="space-y-3">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg flex-shrink-0">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-0.5">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            {/* Usage Guidelines - Desktop Only */}
            <Card className="p-4 bg-secondary/30 hidden lg:block">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-semibold">Privacy & Usage</h4>
              </div>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• <strong>No Data Storage:</strong> Not saved anywhere</p>
                <p>• <strong>Rate Limited:</strong> 10 messages per hour</p>
                <p>• <strong>AI Generated:</strong> Based on portfolio data</p>
                <p>• <strong>Always Updated:</strong> Current information</p>
              </div>
            </Card>
          </motion.div>

          {/* Right Side - Chat Interface (Sticky on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-0 lg:h-[calc(100vh-200px)]"
          >
            <div className="h-full">
              <AIChat initialMessage={selectedQuestion} key={selectedQuestion} />
            </div>
          </motion.div>
        </div>

        {/* Mobile Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:hidden mt-8 grid grid-cols-2 gap-4"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="p-4 text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl mx-auto mb-2">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </motion.div>

        {/* Mobile Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="lg:hidden mt-6"
        >
          <Card className="p-4 bg-secondary/30">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">Privacy & Usage Guidelines</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <p>• <strong>No Data Storage</strong></p>
              <p>• <strong>AI Generated</strong></p>
              <p>• <strong>Rate Limited</strong></p>
              <p>• <strong>Always Updated</strong></p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}