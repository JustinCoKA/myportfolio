export type ProjectItem = {
  title: string
  subtitle: string
  description: string
  tech: string[]
  link: string | null
  github: string | null
  slug: string | null
}

export const projects: ProjectItem[] = [
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
