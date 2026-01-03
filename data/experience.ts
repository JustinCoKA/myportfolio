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
      "Project: Culture Fest: Stories, Flavours, and Friendship — GLOW (Grow, Link, Orientate, Welcome) Initiative  Event Date: December 6, 2025 | Redfern Community Centre Role: - Led the Korean Food Workshop, guiding participants in hands-on preparation of traditional dishes while sharing cultural stories. - Collaborated with multicultural ambassador teams to design a 5-hour cultural exchange event connecting over 70 participants from diverse backgrounds. - Supported the development of the event structure, run sheet, and risk assessment, ensuring compliance and participant safety. - Contributed to content for marketing, social media, and “Passport to Taste” engagement activities. Promoted inclusion and cross-cultural understanding among international and local students through interactive presentations and food experiences."
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
    title: "Software Engineering Intern – Data Systems",
    company: "Ausbiz Consulting",
    period: "JAN 2025 - FEB 2025",
    type: "Internship",
    responsibilities: [
      "Developed Python- and SQL-based data processing pipelines to support automated data validation and reproducibility",
      "Implemented testing workflows to improve data quality and reliability",
      "Built data outputs to support operational and stakeholder decision-making",
      "Collaborated with cross-functional teams in an Agile environment",
      "Supported software engineering tasks aligned with engineering intern responsibilities",
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
