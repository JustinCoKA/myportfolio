"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { projects } from "@/data/projects"

export function Projects() {
  const router = useRouter()

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="min-w-0"
              >
                {project.slug ? (
                  <Card
                    className="p-6 h-full flex flex-col hover:shadow-xl transition-all hover:border-primary/50 cursor-pointer group"
                    onClick={() => router.push(`/projects/${project.slug}`)}
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1 gap-2">
                        <h3 className="text-2xl font-bold text-balance group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs whitespace-nowrap">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
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
                      <Button variant="ghost" size="sm" className="gap-2 sm:ml-auto">
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
                          <Badge key={i} variant="outline" className="text-xs whitespace-nowrap">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
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
