"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Github, Linkedin } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "AI Assistant", href: "/ai-agency" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an external link (starts with /), let it navigate normally
    if (href.startsWith('/')) {
      return
    }
    
    // Otherwise, handle as smooth scroll for anchor links
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold">
            Justin <span className="text-primary">Lee</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.href.startsWith('/')) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                  >
                    {item.name}
                  </Link>
                )
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {item.name}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
              <a
                href="https://www.linkedin.com/in/dataausjustin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
              <a href="https://github.com/JustinCoKA" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
