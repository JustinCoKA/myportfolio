"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ExampleQuestions } from "@/components/ai-example-questions"

export function AISimpleChat() {
  const [selectedQuestion, setSelectedQuestion] = useState<string>("")

  return (
    <section id="ai-assistant" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl"
            >
              <Bot className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="h-6 w-6 text-yellow-500" />
            </motion.div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Meet My AI <span className="text-primary">Assistant</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Have questions about my background, projects, or experience?
            <br />
            Ask my AI assistant — available 24/7 to help recruiters and collaborators.
          </p>
        </motion.div>

        {/* Quick Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Example Questions */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  Try asking me...
                </h3>
                <ExampleQuestions 
                  onQuestionSelect={(question) => {
                    setSelectedQuestion(question)
                    // Redirect to full AI Assistant page with the question
                    window.location.href = `/ai-agency?q=${encodeURIComponent(question)}`
                  }} 
                  maxQuestions={4}
                />
              </div>

              {/* CTA Section */}
              <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Powered by AI</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-3">
                    Get Instant Answers
                  </h4>
                  
                  <p className="text-muted-foreground mb-6">
                    Chat with my AI assistant to learn about my projects, technical skills, work experience, and availability for opportunities.
                  </p>

                  <ul className="space-y-2 text-sm text-muted-foreground mb-6 text-left">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Real-time responses based on portfolio data
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Privacy protected - no conversation storage
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Perfect for recruiters and collaborators
                    </li>
                  </ul>
                </div>

                <Button asChild size="lg" className="gap-2 group w-full sm:w-auto">
                  <Link href="/ai-agency">
                    Open AI Assistant
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {[
            { title: "Natural Conversations", desc: "Ask in plain English" },
            { title: "Instant Responses", desc: "Get answers immediately" },
            { title: "Always Available", desc: "24/7 accessibility" }
          ].map((feature, index) => (
            <div key={index} className="p-4">
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
