"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      title: "International student leadership and ambassador",
      company: "City of Sydney",
      period: "Sep 2025 - Present",
      type: "volunteer",
      responsibilities: [
        "As an Ambassador in the City of Sydney's ISLA Program , I am currently planning and executing a community project to support international students. Through this role, I am contributing 60 hours of volunteer service while actively strengthening my skills in project management , leadership , and cross-cultural team collaboration."
      ],
    },
    {
      title: "Marketing & Sales Assistant | Digital Dental Solutions",
      company: "CM Medical",
      period: "Sep 2025 - Present",
      type: "Internship",
      responsibilities: [
        "Contributing to the digital transformation of the dental industry by supporting key technology workflows, including 3D scanning, CAD/CAM, and specialized software",
        "Responsible for managing sales data and customer records, and optimizing daily administrative processes to improve operational efficiency",
        "Providing client support and technical troubleshooting for a range of digital dental software solutions",
        "Sharing product expertise and providing technical assistance at industry seminars, exhibitions, and training events",
      ],
    },
    {
      title: "AI Business Analyst",
      company: "Ausbiz Consulting",
      period: "Sep 2025 - Present",
      type: "Part-Time",
      responsibilities: [
        "Defined business requirements through stakeholder engagement",
        "Designed PoC and iterative prototypes with v0.app & LLM tools",
        "Applied data validation, KPI tracking, and ROI analysis",
        "Delivered reports and demos bridging technical and business teams",
      ],
    },
    {
      title: "Team Supervisor",
      company: "YH Interior",
      period: "Jun 2024 - Sep 2025",
      type: "Contractor",
      responsibilities: [
        "Supervised construction site operations, achieving 15% increase in project completion rates",
        "Fostered collaboration by negotiating with site engineers and supervisors",
        "Provided guidance to installers ensuring high-quality work and safety standards",
        "Managed tech-enabled admin work including Xero invoicing and data dashboards",
      ],
    },
    {
      title: "Cancer Data Analyst",
      company: "Ausbiz Consulting",
      period: "JAN 2025 - FEB 2025",
      type: "Internship",
      responsibilities: [
        "Evaluate data analysis technologies including PostgreSQL, Google Colab, and Generative AI",
        "Provide data-driven recommendations for improving healthcare strategies",
        "Enhance data exploration, visualization, and interpretation skills to communicate findings effectively",
        "Extract valuable insights through in-depth analysis of cancer datasets",
      ],
    },
    {
      title: "Operations Clerk / Squad Leader",
      company: "Republic of Korea Army Aviation Command",
      period: "AUG 2019 - MAR 2021",
      type: "Full-Time",
      responsibilities: [
        "Led a 7-member squad at the Republic of Korea Army Aviation Command, enhancing operational readiness",
        "Maintained 24-hour operations at the brigade Command Center, ensuring effective communication across units",
        "Supported real-time crisis responses, streamlining processes during high-pressure situations.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
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
                        <Briefcase className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-balance">{exp.title}</h3>
                          <p className="text-lg text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <Badge>{exp.type}</Badge>
                    </div>
                  </div>

                  <ul className="space-y-2 ml-9">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
