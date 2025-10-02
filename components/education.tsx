"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Information Technology (Professional)",
      school: "Victoria University",
      location: "Sydney Campus",
      period: "Oct 2024 - Sep 2026",
      status: "Expected",
      highlights: [
        "Databases & Data Engineering",
        "Cloud Computing Fundamentals",
        "Backend Development",
        "Software Engineering Practices",
      ],
    },
    {
      degree: "Diploma of Information Technology",
      school: "Victoria University",
      location: "Sydney Campus",
      period: "Oct 2023 - Sep 2024",
      status: "Completed",
      highlights: ["Programming Fundamentals", "Data Structures & Algorithms", "Web Development", "Database Design"],
    },
    {
      degree: "Bachelor of Flight Vehicle Design and Engineering",
      school: "Harbin Institute of Technology",
      location: "Harbin, Heilongjiang China",
      period: "AUG 2018 - JUL 2022",
      status: "incompleted",
      highlights: ["Drop out of colleage after only two year", "Two years gap between 2019 and 2021 due to Military service\n"],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-all hover:border-primary/50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-balance">{edu.degree}</h3>
                          <p className="text-lg text-muted-foreground">
                            {edu.school} • {edu.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <Badge variant={edu.status === "Expected" ? "default" : "secondary"}>{edu.status}</Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 ml-9">
                    {edu.highlights.map((highlight, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
