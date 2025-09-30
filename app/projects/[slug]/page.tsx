import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Project data with detailed case study information
const projects = {
  ursaviour: {
    title: "UrSaviour",
    subtitle: "Grocery Deals Tracker",
    tagline: "Helping Australians save money on groceries through intelligent deal tracking",
    overview:
      "UrSaviour is a full-stack web application designed to help Australian consumers track weekly supermarket discounts across major retailers. The platform features a watchlist system, price alerts, and a comprehensive database of grocery deals updated weekly.",
    role: "Team Leader, Data Engineering, Full-Stack Developer",
    timeline: "May 2025 - Present",
    team: "4 members",
    tech: ["React", "TailwindCSS", "Node.js", "PostgreSQL", "AWS Lambda", "AWS S3", "AWS RDS", "Docker", "ETL"],
    link: "https://ursaviour.com",
    github: null,
    challenge:
      "Major Australian supermarkets publish weekly catalogues as PDFs, making it difficult for consumers to track deals across multiple retailers. The challenge was to automatically extract, normalize, and present this unstructured data in a user-friendly format while maintaining data accuracy and freshness.",
    solution: [
      {
        title: "Serverless ETL Pipeline",
        description:
          "Architected an automated ETL pipeline using AWS Lambda to process weekly PDF catalogues. The system extracts product information, prices, and discount percentages, then normalizes the data into a structured PostgreSQL database hosted on AWS RDS.",
      },
      {
        title: "Data Processing & Storage",
        description:
          "Implemented robust data validation and deduplication logic to ensure accuracy. Raw PDFs are stored in S3 for audit purposes, while processed data is indexed in PostgreSQL for fast querying and filtering.",
      },
      {
        title: "User-Facing Application",
        description:
          "Built a responsive React frontend with TailwindCSS that allows users to browse deals, create watchlists, and receive notifications when tracked items go on sale. The interface is optimized for mobile devices, as most users shop on their phones.",
      },
    ],
    impact: [
      "Automated processing of 50+ weekly catalogues from major retailers",
      "Reduced manual data entry time by 95% through automated ETL",
      "Enabled price comparison across 3 major supermarket chains",
      "Serving 200+ active users tracking grocery deals",
    ],
    learnings: [
      "Gained hands-on experience with serverless architecture and AWS services",
      "Learned to handle unstructured data extraction from PDFs with varying formats",
      "Developed skills in database schema design for e-commerce applications",
      "Improved understanding of full-stack development and deployment workflows",
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
    team: "Individual Project",
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
    timeline: "2024 - Present",
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
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Justin Lee`,
    description: project.tagline,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

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
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.tagline}</p>

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
                  Visit Live Site
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

        {/* Project Info Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Timeline</h3>
            </div>
            <p className="text-sm text-muted-foreground">{project.timeline}</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Team</h3>
            </div>
            <p className="text-sm text-muted-foreground">{project.team}</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Role</h3>
            </div>
            <p className="text-sm text-muted-foreground">{project.role}</p>
          </Card>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
        </section>

        {/* Challenge */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">The Challenge</h2>
          <Card className="p-6 bg-muted/50">
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </Card>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold mb-6">The Solution</h2>
          <div className="space-y-6">
            {project.solution.map((item, index) => (
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
              {project.impact.map((item, index) => (
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
              {project.learnings.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

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
