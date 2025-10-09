import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIAgency } from "@/components/ai-agency"

export const metadata: Metadata = {
  title: "AI Assistant | Justin Lee Portfolio",
  description: "Ask our AI assistant about Justin Lee's background, projects, skills, and experience. Get instant answers about his data engineering expertise and portfolio.",
  keywords: ["AI Assistant", "Justin Lee", "Portfolio Assistant", "Data Engineering", "Projects", "Skills"],
}

export default function AIAgencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <AIAgency />
      </main>
      <Footer />
    </div>
  )
}