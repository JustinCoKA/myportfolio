import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/data/projects"

// Legacy project data for backwards compatibility
const legacyProjects = {
  ursaviour: {
    title: "UrSaviour",
    subtitle: "Grocery Deals Tracker",
    tagline: "Personalized savings through AI and automated discount tracking",
    overview:
      "UrSaviour is a centralized, lawfully compliant web-based application designed to help Australian consumers—especially international students—make informed grocery shopping decisions. The system simulates weekly discount data using a foundational dataset, automates ETL processing, and provides users with personalized watchlists, discount alerts, and an AI chatbot assistant for better shopping insights.",
    role: "Team Leader, Data Engineering, Full-Stack Developer",
    timeline: "May 2025 - Present, Semester 1 ~ 2, 2025 (Capstone Project)",
    team: "4 members",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python (FastAPI/Flask)",
      "MySQL",
      "AWS Lambda",
      "AWS S3",
      "Docker",
      "ETL",
      "OpenAI GPT"],
    link: "https://ursaviour.com",
    github: "https://github.com/JustinCoKA/UrSaviour-Project",
    challenge:
      "Australian supermarkets restrict web scraping and provide limited API access (e.g., Woolworths API requires approval, Coles has no public API). Consumers—especially international students—struggle to track discounts across multiple stores. The challenge was to design a legal, sustainable, and user-friendly platform that could simulate realistic data and still provide value to end users.",
    solution: [
      {
        title: "Simulated Data & PDF Generation",
        description:
          "Built a foundational dataset of grocery items. Python scripts apply randomized discounts weekly and generate realistic PDF pamphlets using ReportLab. This ensures compliance with retailer policies while maintaining a continuous flow of data."
      },
      {
        title: "Serverless ETL Pipeline",
        description:
          "Automated an AWS-based ETL workflow triggered by new PDFs uploaded to S3. Lambda functions parse, validate, and load data into MySQL on RDS, ensuring up-to-date price and discount information."
      },
      {
        title: "Watchlist & Notifications",
        description:
          "Developed a system where users can track favorite items. Background tasks compare watchlist items with new ETL data and trigger personalized email or push notifications when discounts occur."
      },
      {
        title: "AI-Powered Assistant",
        description:
          "Integrated OpenAI GPT with product and discount databases, enabling a chatbot to answer user questions, recommend items, and guide them through the platform."
      },
      {
        title: "Admin Dashboard",
        description:
          "Built an admin panel for monitoring ETL jobs, managing users, and maintaining product datasets, with role-based access control."
      }
    ],
    impact: [
      "Provides legal, ethical, and sustainable discount tracking without scraping",
      "Automates weekly generation and ingestion of 50+ simulated grocery discounts",
      "Delivers personalized watchlist alerts and trend analysis for users",
      "Introduces AI chatbot support for a smarter and more engaging shopping experience"
    ],
    learnings: [
      "Hands-on experience with serverless architecture and AWS services",
      "Built ETL pipelines with automated logging, monitoring, and error handling",
      "Designed ethical data simulations for testing large-scale applications",
      "Enhanced teamwork skills by coordinating a 4-member development team across multiple domains"
    ],
  },
  "cancer-data-etl": {
    title: "Cancer Data ETL",
    subtitle: "Healthcare Data Analysis",
    tagline: "Transforming 1.7M cancer records into actionable healthcare insights",
    overview:
      "A comprehensive data engineering project focused on analyzing public cancer datasets to identify tumor patterns, survival rates, and treatment outcomes. The project involved building a robust ETL pipeline to process and normalize 1.7 million cancer records from multiple sources.",
    role: "Data Analyst & ETL Engineer",
    timeline: "January 2025 - February 2025",
    team: "DA Interns",
    tech: ["Python", "Pandas", "NumPy", "PostgreSQL", "Jupyter Notebook", "Matplotlib", "Seaborn", "Plotly"],
    link: null,
    github: "https://github.com/JustinCoKA/ProjectCancerData",
    challenge:
      "Public cancer datasets are often fragmented, inconsistent, and stored in various formats. The challenge was to consolidate multiple data sources, clean and normalize the data, and perform meaningful analysis to extract insights about cancer patterns and survival rates.",
    solution: [
      {
        title: "ETL Pipeline Development",
        description:
          "Built a Python-based ETL pipeline to extract data from multiple CSV sources, transform it through cleaning and normalization processes, and load it into a PostgreSQL database with proper schema constraints and indexing.",
      },
      {
        title: "Data Quality & Validation",
        description:
          "Implemented comprehensive data validation rules to handle missing values, outliers, and inconsistencies. Created data quality reports to track completeness and accuracy throughout the pipeline.",
      },
      {
        title: "Statistical Analysis & Visualization",
        description:
          "Performed exploratory data analysis using Pandas and NumPy to identify tumor patterns, survival rates by cancer type, and demographic trends. Created interactive visualizations with Matplotlib, Seaborn, and Plotly to communicate findings.",
      },
    ],
    impact: [
      "Successfully processed and normalized 1.7M cancer records",
      "Identified key survival rate patterns across 15+ cancer types",
      "Discovered demographic trends in cancer incidence and outcomes",
      "Provided data-driven recommendations for healthcare strategy improvements",
    ],
    learnings: [
      "Developed expertise in handling large-scale healthcare datasets",
      "Learned best practices for data cleaning and normalization",
      "Gained experience with statistical analysis and data visualization",
      "Understood the importance of data quality in healthcare analytics",
    ],
  },
  "sitesync-solutions": {
    title: "SiteSync Solutions",
    subtitle: "SMB Web Platform",
    tagline: "Modern web platform for construction and surveying businesses",
    overview:
      "SiteSync Solutions is a professional web platform designed for small and medium businesses in the construction and surveying industry. The platform showcases drone services, BIM (Building Information Modeling) solutions, and provides a modern digital presence for technical service providers.",
    role: "Full-Stack Developer & Designer",
    timeline: "2025 - Present",
    team: "Individual Project",
    tech: ["React", "Next.js", "TailwindCSS", "TypeScript", "Vite", "Vercel"],
    link: "https://sitesync.solutions",
    github: null,
    challenge:
      "Small construction and surveying businesses often lack modern web presence, making it difficult to showcase their technical capabilities and attract clients. The challenge was to create a professional, performant website that effectively communicates complex technical services while maintaining excellent user experience.",
    solution: [
      {
        title: "Modern Design System",
        description:
          "Designed a clean, professional interface using TailwindCSS with a focus on typography, whitespace, and visual hierarchy. The design system emphasizes trust and technical expertise while remaining approachable for potential clients.",
      },
      {
        title: "Performance Optimization",
        description:
          "Built with Next.js for optimal performance, implementing server-side rendering, image optimization, and code splitting. Achieved Lighthouse scores above 90 across all categories for fast load times and excellent user experience.",
      },
      {
        title: "Responsive & Accessible",
        description:
          "Ensured full responsiveness across all device sizes with mobile-first design approach. Implemented WCAG AA accessibility standards with semantic HTML, proper ARIA labels, and keyboard navigation support.",
      },
    ],
    impact: [
      "Established professional online presence for SMB clients",
      "Achieved 95+ Lighthouse performance score",
      "Reduced page load time to under 2 seconds",
      "Increased client inquiries by 40% through improved digital presence",
    ],
    learnings: [
      "Mastered Next.js App Router and modern React patterns",
      "Developed skills in performance optimization and SEO",
      "Learned to balance aesthetic design with technical requirements",
      "Gained experience in client communication and requirement gathering",
    ],
  },
}

export function generateStaticParams() {
  return projects
    .filter(p => p.slug)
    .map((project) => ({
      slug: project.slug as string,
    }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Justin Lee`,
    description: project.subtitle,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  const legacyProject = legacyProjects[params.slug as keyof typeof legacyProjects]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-balance">{project.title}</h1>
          <p className="text-xl sm:text-2xl text-primary font-medium mb-4">{project.subtitle}</p>
          
          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <div className="my-8 rounded-lg overflow-hidden border">
              <Image
                src={project.images[0]}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Short Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <Badge key={i} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.link && (
              <Button variant="default" className="gap-2" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Play Demo Video
                </a>
              </Button>
            )}
            {project.github && (
              <Button variant="outline" className="gap-2 bg-transparent" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Source Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Project Info Cards - Only show if legacy data exists */}
        {legacyProject && (
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Timeline</h3>
              </div>
              <p className="text-sm text-muted-foreground">{legacyProject.timeline}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Team</h3>
              </div>
              <p className="text-sm text-muted-foreground">{legacyProject.team}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Role</h3>
              </div>
              <p className="text-sm text-muted-foreground">{legacyProject.role}</p>
            </Card>
          </div>
        )}

        {/* Detailed Description */}
        {project.detailedDescription && (
          <section className="mb-12">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                {project.detailedDescription}
              </div>
            </div>
          </section>
        )}

        {/* Role & Contribution */}
        {project.role && (
          <section className="mb-12">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                  {project.role}
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Problem Statement */}
        {project.problemStatement && (
          <section className="mb-12">
            <Card className="p-6 bg-muted/50">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                  {project.problemStatement}
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Solution */}
        {project.solution && (
          <section className="mb-12">
            <Card className="p-6">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                  {project.solution}
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Impact */}
        {project.impact && (
          <section className="mb-12">
            <Card className="p-6 bg-muted/50">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                  {project.impact}
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Learnings */}
        {project.learnings && (
          <section className="mb-12">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                  {project.learnings}
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Legacy Overview - Only show if no detailed description exists */}
        {!project.detailedDescription && legacyProject && (
          <>
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{legacyProject.overview}</p>
            </section>

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">The Challenge</h2>
              <Card className="p-6 bg-muted/50">
                <p className="text-muted-foreground leading-relaxed">{legacyProject.challenge}</p>
              </Card>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">The Solution</h2>
              <div className="space-y-6">
                {legacyProject.solution.map((item, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Impact */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Impact & Results</h2>
              <Card className="p-6">
                <ul className="space-y-3">
                  {legacyProject.impact.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* Learnings */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Key Learnings</h2>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <ul className="space-y-3">
                  {legacyProject.learnings.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>
          </>
        )}

        {/* Back to Projects */}
        <div className="text-center pt-8">
          <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
