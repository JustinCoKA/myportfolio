"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Download, Mail, Linkedin, Github, Sparkles, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const constraintsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
      }
    }

    const timer = setTimeout(() => {
      setShowScrollIndicator(false)
    }, 5000)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const skills = [
    { name: "Python", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { name: "SQL", color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
    { name: "PostgreSQL", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { name: "AWS", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    { name: "Docker", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
    { name: "ETL", color: "bg-green-500/10 text-green-500 border-green-500/20" },
    { name: "React", color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
    { name: "Next.js", color: "bg-slate-500/10 text-slate-500 border-slate-500/20" },
  ]

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={constraintsRef} className="relative min-h-[600px] flex items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98, cursor: "grabbing" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 lg:space-y-8 p-8 rounded-2xl bg-card/50 backdrop-blur-xl border border-border shadow-md hover:shadow-lg transition-shadow cursor-grab active:cursor-grabbing"
                    aria-roledescription="Draggable profile card"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-block"
                    >
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0)",
                            "0 0 0 8px rgba(59, 130, 246, 0.1)",
                            "0 0 0 0 rgba(59, 130, 246, 0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 backdrop-blur-sm"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Sparkles className="h-4 w-4 text-primary" />
                        </motion.div>
                        <span className="text-sm font-medium bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                          Open to Internships · Data & Backend
                        </span>
                      </motion.div>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-balance leading-tight"
                    >
                      <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                        Justin (Juhwan) Lee
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed"
                    >
                      IT student building data pipelines, APIs, and dashboards in Australia.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
                    >
                      <Button size="lg" className="w-full sm:w-auto gap-2 group" asChild>
                        <a href="/resume/justin-lee-resume.pdf" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 group-hover:animate-bounce" />
                          Download Resume
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto gap-2 bg-transparent group"
                        asChild
                      >
                        <a href="#contact" onClick={handleContactClick}>
                          <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                          Contact Me
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="flex items-center gap-4 pt-2"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-primary/10 hover:text-primary transition-colors"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/dataausjustin/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-primary/10 hover:text-primary transition-colors"
                        asChild
                      >
                        <a
                          href="https://github.com/JustinCoKA"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="right" className="text-sm">
                  Drag me around!
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
            onMouseMove={handleMouseMove}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-3xl" />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-purple-500" />
                    <div>
                      <div className="h-3 w-32 bg-muted rounded-full" />
                      <div className="h-2 w-24 bg-muted/50 rounded-full mt-2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-muted rounded-full" />
                    <div className="h-2 w-5/6 bg-muted rounded-full" />
                    <div className="h-2 w-4/6 bg-muted rounded-full" />
                  </div>
                </div>
              </motion.div>

              {skills.map((skill, index) => {
                const angle = (index / skills.length) * Math.PI * 2
                const radius = 200
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: [x, x + Math.cos(angle) * 10, x],
                      y: [y, y + Math.sin(angle) * 10, y],
                    }}
                    transition={{
                      opacity: { delay: 0.6 + index * 0.1, duration: 0.4 },
                      scale: { delay: 0.6 + index * 0.1, duration: 0.4 },
                      x: {
                        delay: 0.6 + index * 0.1,
                        duration: 3 + index * 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                      y: {
                        delay: 0.6 + index * 0.1,
                        duration: 3 + index * 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      x: mousePosition.x ? (mousePosition.x - 250) * 0.02 : 0,
                      y: mousePosition.y ? (mousePosition.y - 250) * 0.02 : 0,
                    }}
                  >
                    <Badge
                      variant="outline"
                      className={`${skill.color} border px-3 py-1.5 text-xs font-medium backdrop-blur-sm cursor-default shadow-lg`}
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: showScrollIndicator ? 1 : 0,
          y: showScrollIndicator ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden pointer-events-none z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
