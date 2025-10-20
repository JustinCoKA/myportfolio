// AI Agency — v1.1 (2025-10-25)
// Updated by Copilot Revision

// Portfolio context data for AI assistant (enhanced for category-aware retrieval)
export interface PortfolioContext {
  personal: {
    name: string
    title: string
    summary: string
    location: string
    experience_years: number
  }
  
  skills: {
    programming_languages: string[]
    frameworks: string[]
    tools: string[]
    specialties: string[]
  }
  
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    impact: string
    role: string
    year: string
    link?: string
    github?: string
    category_tags?: string[]
    summary?: string
  }>
  
  experience: Array<{
    company: string
    title: string
    duration: string
    responsibilities: string[]
    achievements: string[]
  }>
  
  volunteer: Array<{
    organization: string
    role: string
    description: string
    impact: string
    period: string
    category_tags?: string[]
  }>
  
  education: {
    degree: string
    institution: string
    graduation_year: string
    relevant_coursework?: string[]
  }
}

export const portfolioContext: PortfolioContext = {
  personal: {
    name: "Justin Lee",
    title: "IT Student & Data Engineer",
    summary: "IT student specializing in data engineering and backend development. Building data pipelines, APIs, and dashboards in Melbourne/Sydney, Australia.",
    location: "Melbourne/Sydney, Australia",
    experience_years: 2
  },
  
  skills: {
    programming_languages: ["Python", "SQL", "JavaScript", "TypeScript"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Node.js"],
    tools: ["Docker", "Git", "GitHub", "PostgreSQL", "AWS S3", "AWS Lambda", "AWS RDS"],
    specialties: ["Data Engineering", "ETL Pipelines", "REST APIs", "Data Modeling", "Backend Development", "Real-time Processing"]
  },
  
  projects: [
    {
      name: "UrSaviour",
      description: "Full-stack application to track weekly supermarket discounts with watchlist and alert features. Architected serverless ETL pipeline on AWS using Lambda, S3, and RDS to process unstructured PDF data.",
      category_tags: ["project", "data-engineering", "serverless"],
      summary: "Serverless ETL + full-stack app for grocery deals tracking",
      technologies: ["React", "TailwindCSS", "Node.js", "PostgreSQL", "AWS S3", "Docker", "ETL"],
      impact: "Helps users save money on groceries by tracking discounts across major supermarkets",
      role: "Full-stack Developer & Data Engineer",
      year: "2024",
      link: "https://ursaviour.com",
      github: "https://github.com/JustinCoKA/UrSaviour-Project"
    },
    {
      name: "Cancer Data ETL",
      description: "Analyzed 1.7M cancer records with Python and SQL, identifying tumor patterns and survival rates. Built ETL pipeline to normalize public cancer datasets into PostgreSQL with schema constraints.",
      category_tags: ["project", "healthcare", "data-engineering"],
      summary: "Large-scale healthcare ETL and analysis pipeline",
      technologies: ["Python", "Pandas", "PostgreSQL", "ETL", "Jupyter", "Data Analysis"],
      impact: "Processed and analyzed large healthcare dataset to identify important patterns in cancer data",
      role: "Data Engineer & Analyst",
      year: "2024",
      github: "https://github.com/JustinCoKA/ProjectCancerData"
    },
    {
      name: "SiteSync Solutions", 
      description: "Full-stack web platform for small and medium businesses offering drone services and BIM solutions. Modern, responsive design with focus on performance and user experience.",
      category_tags: ["project", "frontend", "smb"],
      summary: "SMB web platform showcasing responsive design and performance",
      technologies: ["React", "TailwindCSS", "Next.js", "Vite", "TypeScript"],
      impact: "Professional business website serving SMB clients with drone and construction technology services",
      role: "Frontend Developer",
      year: "2024",
      link: "https://sitesync.solutions"
    }
  ],
  
  experience: [
    {
      company: "Various Projects",
      title: "Data Engineer & Full-stack Developer", 
      duration: "2023 - Present",
      responsibilities: [
        "Design and implement ETL pipelines for data processing",
        "Build full-stack web applications with modern technologies",
        "Work with cloud services (AWS) for scalable solutions",
        "Analyze large datasets to extract meaningful insights"
      ],
      achievements: [
        "Successfully processed 1.7M+ healthcare records",
        "Built production web applications with user authentication",
        "Implemented serverless architectures on AWS",
        "Created responsive, accessible user interfaces"
      ]
    }
  ],
  
  volunteer: [
    {
      organization: "The LBW Trust (Learning for a Better World)",
      role: "Volunteer — LBW Trust Gala Dinner",
      description: "Assisted with guest registration, welcoming, and event coordination for high-profile charity gala at Sydney Cricket Ground. Supported silent and live auctions during the fundraising dinner.",
      category_tags: ["volunteer", "events"],
      impact: "Contributed to the success of a charity gala raising funds for international education. Developed event coordination and hospitality experience in a multicultural environment.",
      period: "October 2024"
    }
  ],
  
  education: {
    degree: "Information Technology",
    institution: "Currently studying",
    graduation_year: "Expected 2025-2026",
    relevant_coursework: ["Data Structures", "Database Systems", "Software Engineering", "Web Development"]
  }
}

export function getPortfolioPrompt(): string {
  return `You are an AI assistant that helps people learn about Justin Lee's professional background and portfolio. 

Here's what you know about Justin:

PERSONAL INFO:
- Name: ${portfolioContext.personal.name}
- Title: ${portfolioContext.personal.title}
- Location: ${portfolioContext.personal.location}
- Experience: ${portfolioContext.personal.experience_years} years in software development
- Summary: ${portfolioContext.personal.summary}

SKILLS & EXPERTISE:
- Programming Languages: ${portfolioContext.skills.programming_languages.join(", ")}
- Frameworks: ${portfolioContext.skills.frameworks.join(", ")}
- Tools & Technologies: ${portfolioContext.skills.tools.join(", ")}
- Specialties: ${portfolioContext.skills.specialties.join(", ")}

NOTABLE PROJECTS:
${portfolioContext.projects.map(project => `
- ${project.name}: ${project.description}
  Technologies: ${project.technologies.join(", ")}
  Role: ${project.role}
  Impact: ${project.impact}
  Year: ${project.year}
  ${project.link ? `Live Site: ${project.link}` : ''}
  ${project.github ? `GitHub: ${project.github}` : ''}
`).join('\n')}

EXPERIENCE:
${portfolioContext.experience.map(exp => `
- ${exp.title} at ${exp.company} (${exp.duration})
  Responsibilities: ${exp.responsibilities.join(", ")}
  Key Achievements: ${exp.achievements.join(", ")}
`).join('\n')}

VOLUNTEER WORK:
${portfolioContext.volunteer.map(vol => `
- ${vol.role} at ${vol.organization} (${vol.period})
  Description: ${vol.description}
  Impact: ${vol.impact}
`).join('\n')}

EDUCATION:
- Degree: ${portfolioContext.education.degree}
- Institution: ${portfolioContext.education.institution}
- Expected Graduation: ${portfolioContext.education.graduation_year}
- Relevant Coursework: ${portfolioContext.education.relevant_coursework?.join(", ") || "Various IT and computer science subjects"}

INSTRUCTIONS:
1. Answer questions about Justin's background, skills, projects, and experience based on the information above
2. Be helpful, professional, and enthusiastic about Justin's capabilities
3. If asked about something not in the context, politely say you don't have that specific information but suggest related topics you can help with
4. Keep responses concise but informative
5. Highlight Justin's strengths in data engineering, full-stack development, and problem-solving
6. If appropriate, mention specific projects or achievements that relate to the question

Remember: You're helping recruiters and potential collaborators learn about Justin's professional background and capabilities.`
}

// --- Retrieval helpers (simple keyword matching for v1.1)
// Local ContextSnippet type for retrieval helpers
type ContextSnippet = { id: string; category: string; title: string; summary: string }

/**
 * getContextForMessage
 * Basic retrieval that returns snippets relevant to the message. For v1.1 this is
 * keyword matching; later replace with embedding similarity.
 */
export function getContextForMessage(message: string) {
  const q = message.toLowerCase()
  const snippets: Array<{ id: string; category: string; title: string; summary: string }>
    = []

  // Skills snippet
  snippets.push({ id: 'skills', category: 'skills', title: 'Core Skills', summary: `Programming: ${portfolioContext.skills.programming_languages.join(', ')}; Frameworks: ${portfolioContext.skills.frameworks.join(', ')}` })

  // Projects relevance
  for (const p of portfolioContext.projects) {
    const title = p.name
    const summary = p.summary || p.description.substring(0, 180)
    if (q.includes(p.name.toLowerCase()) || p.category_tags?.some((t: string) => q.includes(t))) {
      snippets.unshift({ id: `project:${p.name}`, category: 'project', title, summary })
    } else {
      snippets.push({ id: `project:${p.name}`, category: 'project', title, summary })
    }
  }

  // Experience and volunteer
  snippets.push({ id: 'experience', category: 'experience', title: 'Experience', summary: portfolioContext.experience.map(e => `${e.title} at ${e.company}`).join('; ') })
  snippets.push({ id: 'volunteer', category: 'volunteer', title: 'Volunteer', summary: portfolioContext.volunteer.map(v => `${v.role} at ${v.organization}`).join('; ') })

  // Return top N (configurable)
  return snippets.slice(0, 6)
}

/**
 * generatePrompt
 * Builds system+context+user messages for LLM calls
 */
export function generatePrompt({ message, context, persona = 'recruiter' }: { message: string; context: any[]; persona?: string }) {
  const system = `You are a concise, professional assistant answering questions about Justin Lee. Use the context provided and do not invent facts.`
  const contextText = context.map((c: any) => `- ${c.title}: ${c.summary}`).join('\n')
  const prompt = [
    { role: 'system', content: system },
    { role: 'system', content: `Context:\n${contextText}` },
    { role: 'user', content: message }
  ]
  return prompt
}