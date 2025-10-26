import { Database, Code, Cloud, Wrench, Layout, type LucideIcon } from "lucide-react"

export type SkillCategory = {
  icon: LucideIcon
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Database,
    title: "Data & Backend",
    skills: ["Python", "SQL", "PostgreSQL", "ETL Pipelines", "REST APIs", "Data Modeling"],
  },
  {
    icon: Code,
    title: "Data Tools",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Scikit-learn"],
  },
  {
    icon: Wrench,
    title: "Streaming (Basics)",
    skills: ["Apache Spark", "Apache Kafka", "Apache Flink", "Real-time Processing"],
  },
  {
    icon: Cloud,
    title: "Infrastructure & DevOps",
    skills: ["Docker", "AWS S3", "AWS Lambda", "AWS RDS", "Git", "GitHub"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
]
