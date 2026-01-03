export type ProjectItem = {
  title: string
  subtitle: string
  description: string
  detailedDescription?: string
  role?: string
  problemStatement?: string
  solution?: string
  impact?: string
  learnings?: string
  images?: string[]
  tech: string[]
  link: string | null
  github: string | null
  slug: string | null
}

export const projects: ProjectItem[] = [
  {
    title: "UrSaviour – Full Stack Software Project (AWS & Python)",
    subtitle: "AI-Supported Grocery Discount Intelligence Platform",
    description:
      "Full-stack application to track weekly supermarket discounts with watchlist and alert features. Architected serverless ETL pipeline on AWS using Lambda, S3, and RDS to process unstructured PDF data.",
    detailedDescription: `📌 Project Overview (Final)

UrSaviour is a law-compliant, AI-assisted grocery discount tracking platform designed to help Australian consumers—particularly international students—make smarter purchasing decisions amid rising living costs.

Instead of relying on prohibited web scraping or restricted supermarket APIs, UrSaviour introduces an ethically simulated data ecosystem that mirrors real-world grocery discount workflows. The system automatically generates weekly promotional PDFs, ingests them through a serverless AWS ETL pipeline, and delivers personalized discount insights through watchlists and an AI assistant.

This project was delivered as a full-stack, production-style capstone, emphasizing scalability, data governance, automation, and real-world cloud architecture.`,
    role: `👤 Role & Contribution

**Team Leader · Data Engineering · Full-Stack Developer**

• Designed the end-to-end ETL architecture
• Implemented PDF generation & ingestion workflow
• Built backend APIs for product pricing & comparison
• Led system integration, testing, and troubleshooting
• Coordinated technical direction across a 4-member team`,
    problemStatement: `🧠 Problem Statement (Refined)

Australian supermarkets tightly restrict automated data access:
• Woolworths API → approval required
• Coles → no public API
• Web scraping → violates ToS & copyright

**As a result:**
• Users manually check multiple apps weekly
• International students struggle to understand discount cycles
• Existing tools face legal, sustainability, and reliability risks

**Key Challenge:**
How can we design a scalable, realistic grocery discount platform without scraping or real retailer data, while still delivering real value?`,
    solution: `💡 Solution Architecture (Final Implementation)

**1️⃣ Ethical Data Simulation & PDF Generation**
• Manually curated foundational grocery dataset (SSOT)
• Python scripts apply randomized discount logic (10%, 30%, Half-Price)
• ReportLab generates realistic weekly promotional PDFs
• PDFs stored in AWS S3 (ETL watch bucket)
✔ Ensures legal compliance | ✔ Enables continuous testing & automation | ✔ Mirrors real supermarket workflows

**2️⃣ Serverless ETL Pipeline (AWS)**
• S3 Event Trigger detects new PDF uploads
• AWS Lambda executes Extract → Transform → Load
• Data parsed, validated, standardized
• Loaded into MySQL (AWS RDS)
• ETL logging: etlJobs → job-level tracking | etlJobLogs → step-by-step diagnostics
✔ Fully automated | ✔ Scalable & cost-efficient | ✔ Production-grade observability

**3️⃣ Product Comparison Engine**
• Unified product catalog with multi-store pricing
• Search, filter, and sorting APIs
• Near-real-time reflection of ETL updates on frontend
✔ Accurate price comparison | ✔ Clean REST API design | ✔ Optimized for low latency

**4️⃣ Personalized Watchlist & Alerts**
• Users track favorite products
• Background scheduler compares new ETL data
• One-alert-per-discount-cycle logic
• Email & UI notifications
✔ Noise-free alerts | ✔ User-controlled notifications | ✔ Aggregated trend insights

**5️⃣ AI-Powered Shopping Assistant**
• OpenAI GPT integrated with internal product & pricing data
• Context-aware answers (not generic chatbot replies)
• Graceful fallback when AI unavailable
✔ Improves engagement | ✔ Reduces user friction | ✔ Demonstrates real AI-data integration

**6️⃣ Admin Dashboard & System Control**
• ETL monitoring (success / failure / logs)
• User account management
• Product & pricing overrides
• Secure JWT-based admin access
✔ Operational visibility | ✔ Real-world DevOps mindset | ✔ Audit-friendly design`,
    impact: `📈 Measurable Impact

• Automated weekly generation & ingestion of 50+ discount items
• End-to-end ETL execution with full logging & monitoring
• Zero reliance on scraping or external retailer APIs
• Fully functional AI-assisted shopping workflow
• Production-ready system suitable for real data replacement`,
    learnings: `🧪 Real-World Engineering Learnings

• Designing ethical data pipelines under legal constraints
• Debugging event-driven systems (S3 → Lambda → RDS)
• Handling ETL failures, retries, and observability
• Balancing realism vs. simulation in data engineering
• Leading cross-functional collaboration in a capstone environment

🚀 Why This Project Matters

UrSaviour is not just a student project—it demonstrates:
• Cloud-native data engineering
• Legal-aware system design
• AI + ETL integration
• Production-style architecture & documentation

It forms a strong foundation for:
• Data Engineer roles
• Cloud / Backend internships
• AI-driven platform development
• Real-world system scaling`,
    images: ["/ursaviour-overview.png"],
    tech: ["Python", "FastAPI", "MySQL", "AWS S3", "AWS Lambda", "AWS RDS", "OpenAI API", "ETL", "Docker"],
    link: "https://www.linkedin.com/posts/dataausjustin_aws-dataengineering-python-activity-7396148194671374336-ane1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdTT8oBva1fwa9zicx0eKNHiP7o9gSA43oYzX6Z1V6PmU6K3JHcXoXKX4Yz9h8W_gj6nE5GJg0bV0bG1R4BA3E7VbXoGg",
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
