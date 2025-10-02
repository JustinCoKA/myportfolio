"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Mail, Languages, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
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
                Trilingual IT student with hands-on experience in data analysis, project management, and process
                optimization. Skilled in Python, SQL, and cloud platforms, with practical experience leading annotation
                and automation projects.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-muted-foreground text-center md:text-left"
              >
                Passionate about supporting AI data ecosystems and social content platforms through accurate data
                modeling and efficient project delivery. Currently contributing to community projects through the City
                of Sydney's ISLA Program.
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
