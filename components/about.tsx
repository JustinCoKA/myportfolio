"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Languages, Calendar, Award, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  const highlights = [
    {
      icon: "/placeholder-logo.svg",
      title: "AWS Certified",
      subtitle: "Data Engineer Associate",
      badge: "2024",
    },
    {
      icon: "/placeholder-logo.svg",
      title: "Victoria University",
      subtitle: "Bachelor of IT",
      badge: "Expected 2026",
    },
    {
      icon: "/placeholder-logo.svg",
      title: "Udacity",
      subtitle: "Data Engineering Nanodegree",
      badge: "2024",
    },
  ]

  const facts = [
    { icon: MapPin, label: "Location", value: "Sydney, Australia" },
    { icon: Mail, label: "Email", value: "ausjustin12@gmail.com" },
    { icon: Languages, label: "Languages", value: "English, Korean, Chinese" },
    { icon: Calendar, label: "Availability", value: "Open to opportunities" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12 text-center">About Me</h2>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all hover:border-primary/50 group relative overflow-hidden">
                    {/* Gradient Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative flex flex-col items-center text-center gap-4">
                      {/* Icon/Logo */}
                      <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-snug">{item.subtitle}</p>
                      </div>
                      
                      {/* Badge */}
                      <Badge variant="secondary" className="mt-auto">
                        {item.badge}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <Avatar className="h-48 w-48 border-4 border-primary/20">
                <AvatarImage src="/professional-headshot.jpg" alt="Justin Lee" />
                <AvatarFallback className="text-4xl font-serif">JL</AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="md:col-span-2 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-muted-foreground text-center md:text-left"
              >
                Trilingual IT student with a strong passion for software engineering, particularly in data-driven systems and analytics. Experienced in Python, SQL, and cloud platforms, with hands-on involvement in data analysis, automation, and project coordination.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-muted-foreground text-center md:text-left"
              >
                Beyond core software skills, I am especially interested in applying data and digital technologies to transform and modernise traditional industries, bridging software engineering with real-world operational and business contexts. I am currently contributing to community and leadership initiatives through the City of Sydney’s ISLA Program.About Me
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4 pt-4"
              >
                {facts.map((fact, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <fact.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-muted-foreground">{fact.label}</p>
                        <p className="text-sm font-semibold text-balance">{fact.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
