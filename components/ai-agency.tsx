"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Bot, Sparkles, MessageCircle, Shield, Clock, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AIChat } from "@/components/ai-chat"
import { ExampleQuestions } from "@/components/ai-example-questions"

export function AIAgency() {
  const [selectedQuestion, setSelectedQuestion] = useState<string>("")

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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            AI <span className="text-primary">Assistant</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get instant answers about Justin's background, projects, skills, and experience.
            Perfect for recruiters and collaborators who want to learn more.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm">
              Powered by AI
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Real Portfolio Data
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Privacy Protected
            </Badge>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Example Questions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-6 h-fit">
              <ExampleQuestions onQuestionSelect={setSelectedQuestion} />
            </Card>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AIChat initialMessage={selectedQuestion} key={selectedQuestion} />
          </motion.div>
        </div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="p-6 bg-secondary/30">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Privacy & Usage Guidelines</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p className="mb-2">
                  • <strong>No Data Storage:</strong> Conversations are not saved or stored anywhere
                </p>
                <p className="mb-2">
                  • <strong>Rate Limited:</strong> Fair usage policy applies (10 messages per hour)
                </p>
              </div>
              <div>
                <p className="mb-2">
                  • <strong>AI Generated:</strong> Responses are AI-generated based on portfolio data
                </p>
                <p className="mb-2">
                  • <strong>Always Updated:</strong> Information reflects Justin's current portfolio
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}