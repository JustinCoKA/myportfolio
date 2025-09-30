"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { volunteer } from "@/data/volunteer"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Volunteer() {
  return (
    <section id="volunteer" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Volunteer Work</h2>

          <div className="space-y-6">
            {volunteer.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={`/volunteer/${item.slug}`} aria-label={`Open volunteer case study: ${item.title}`}>
                        <Card className="p-6 hover:shadow-xl transition-all hover:border-primary/50 cursor-pointer">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-3 mb-2">
                                <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                  <h3 className="text-xl font-bold text-balance">{item.title}</h3>
                                  <p className="text-lg text-muted-foreground">{item.org}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2">
                              {item.period && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  {item.period}
                                </div>
                              )}
                              {item.location && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <MapPin className="h-4 w-4" />
                                  {item.location}
                                </div>
                              )}
                              {item.hours && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {item.hours}
                                </Badge>
                              )}
                            </div>
                          </div>

                          <ul className="space-y-2 ml-9">
                            {item.bullets.map((bullet, i) => (
                              <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to view details</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
