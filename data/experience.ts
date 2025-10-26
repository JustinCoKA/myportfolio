export type ExperienceItem = {
  title: string
  company: string
  period: string
  type: string
  responsibilities: string[]
}

export const experiences: ExperienceItem[] = [
  {
    title: "International student leadership and ambassador",
    company: "City of Sydney",
    period: "Sep 2025 - Present",
    type: "volunteer",
    responsibilities: [
      "As an Ambassador in the City of Sydney's ISLA Program , I am currently planning and executing a community project to support international students. Through this role, I am contributing 60 hours of volunteer service while actively strengthening my skills in project management , leadership , and cross-cultural team collaboration.",
    ],
  },
  {
    title: "AI Business Analyst",
    company: "Internship",
    period: "Sep 2025 - Present",
    type: "Part-Time",
    responsibilities: [
      "Defined business requirements through stakeholder engagement",
      "Designed PoC and iterative prototypes with v0.app & LLM tools",
      "Applied data validation, KPI tracking, and ROI analysis",
      "Delivered reports and demos bridging technical and business teams",
    ],
  },
  {
    title: "Team Supervisor",
    company: "YH Interior",
    period: "Jun 2024 - Sep 2025",
    type: "Contractor",
    responsibilities: [
      "Supervised construction site operations, achieving 15% increase in project completion rates",
      "Fostered collaboration by negotiating with site engineers and supervisors",
      "Provided guidance to installers ensuring high-quality work and safety standards",
      "Managed tech-enabled admin work including Xero invoicing and data dashboards",
    ],
  },
  {
    title: "Cancer Data Analyst",
    company: "Ausbiz Consulting",
    period: "JAN 2025 - FEB 2025",
    type: "Internship",
    responsibilities: [
      "Evaluate data analysis technologies including PostgreSQL, Google Colab, and Generative AI",
      "Provide data-driven recommendations for improving healthcare strategies",
      "Enhance data exploration, visualization, and interpretation skills to communicate findings effectively",
      "Extract valuable insights through in-depth analysis of cancer datasets",
    ],
  },
  {
    title: "Operations Clerk / Squad Leader",
    company: "Republic of Korea Army Aviation Command",
    period: "AUG 2019 - MAR 2021",
    type: "Full-Time",
    responsibilities: [
      "Led a 7-member squad at the Republic of Korea Army Aviation Command, enhancing operational readiness",
      "Maintained 24-hour operations at the brigade Command Center, ensuring effective communication across units",
      "Supported real-time crisis responses, streamlining processes during high-pressure situations.",
    ],
  },
]
