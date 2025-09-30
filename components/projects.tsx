"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function Projects() {
  const router = useRouter()

  const projects = [
    {
      title: "UrSaviour",
      subtitle: "Grocery Deals Tracker",
      description:
        "Full-stack application to track weekly supermarket discounts with watchlist and alert features. Architected serverless ETL pipeline on AWS using Lambda, S3, and RDS to process unstructured PDF data.",
      tech: ["React", "TailwindCSS", "Node.js", "PostgreSQL", "AWS S3", "Docker", "ETL"],
      link: "https://ursaviour.com",
      github: "https://github.com/JustinCoKA/UrSaviour-Project",
      slug: "ursaviour",
    },
    {
      title: "Cancer Data ETL",
      subtitle: "Healthcare Data Analysis",
      description:
        "Analyzed 1.7M cancer records with Python and SQL, identifying tumor patterns and survival rates. Built ETL pipeline to normalize public cancer datasets into PostgreSQL with schema constraints.",
      tech: ["Python", "Pandas", "PostgreSQL", "ETL", "Jupyter", "Data Analysis"],
      link: null,
      github: "https://github.com/JustinCoKA/ProjectCancerData",
      slug: "cancer-data-etl",
    },
    {
      title: "SiteSync Solutions",
      subtitle: "SMB Web Platform",
      description:
        "Full-stack web platform for small and medium businesses offering drone services and BIM solutions. Modern, responsive design with focus on performance and user experience.",
      tech: ["React", "TailwindCSS", "Next.js", "Vite", "TypeScript"],
      link: "https://sitesync.solutions",
      github: null,
      slug: "sitesync-solutions",
    },
    {
      title: "Cloud Data Warehouse",
      subtitle: "AWS Redshift Implementation",
      description:
        "Built scalable data warehouse on Amazon Redshift for music streaming startup. Developed Python ETL pipeline using Infrastructure as Code for data integrity and improved query performance with star schema.",
      tech: ["Python", "AWS Redshift", "AWS S3", "IAM", "SQL", "ETL", "IaC"],
      link: null,
      github: null,
      slug: null,
    },
    {
      title: "Data Modeling with Cassandra",
      subtitle: "NoSQL Database Design",
      description:
        "Designed and built Python-based ETL pipeline to process user activity data from CSV files. Created query-optimized Apache Cassandra database for music streaming analytics.",
      tech: ["Python", "Apache Cassandra", "NoSQL", "ETL", "Data Modeling"],
      link: null,
      github: null,
      slug: null,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.slug ? (
                  <Card
                    className="p-6 h-full flex flex-col hover:shadow-xl transition-all hover:border-primary/50 cursor-pointer group"
                    onClick={() => router.push(`/projects/${project.slug}`)}
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-2xl font-bold text-balance group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4 border-t border-border">
                      {project.link && (
                        <Button
                          variant="default"
                          size="sm"
                          className="gap-2"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Visit Site
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all hover:border-primary/50">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1 text-balance">{project.title}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4 border-t border-border">
                      {project.link && (
                        <Button
                          variant="default"
                          size="sm"
                          className="gap-2"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Visit Site
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 bg-transparent"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
