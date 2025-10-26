"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { volunteer } from "@/data/volunteer"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Volunteer() {
  return (
    <section id="volunteer" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Volunteer Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteer.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="min-w-0"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all hover:border-primary/50 group">
                          <div className="flex-1">
                            <div className="flex flex-col gap-4 mb-4">
                              <div className="flex-1">
                                <div className="flex items-start gap-3 mb-2">
                                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                  <div>
                                    <h3 className="text-xl font-bold text-balance">{item.title}</h3>
                                    <p className="text-lg text-muted-foreground">{item.org}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2">
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

                            <ul className="space-y-2 ml-9 mb-4">
                              {item.bullets.slice(0, 3).map((bullet, i) => (
                                <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                  <span className="text-primary mt-1.5">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                              {item.bullets.length > 3 && (
                                <li className="text-sm text-muted-foreground italic">
                                  + {item.bullets.length - 3} more contributions...
                                </li>
                              )}
                            </ul>
                          </div>

                          {/* Explore Button */}
                          <div className="ml-9 pt-4 border-t border-border">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="gap-2 group-hover:text-primary transition-colors" 
                              asChild
                            >
                              <Link href={`/volunteer/${item.slug}`} aria-label={`Explore ${item.title}`}>
                                Explore Full Story
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                        </Card>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to view full details and gallery</p>
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
