import { projects } from '@/data/projects'
import { experiences } from '@/data/experience'
import { volunteer } from '@/data/volunteer'
import { education } from '@/data/education'
import { skillCategories } from '@/data/skills'
import { loadDocuments } from '@/lib/document-loader'

export function getPortfolioContext() {
  // Projects
  const projectsText = projects.map(p => 
    `**${p.title}**
- Subtitle: ${p.subtitle}
- Description: ${p.description}
${p.role ? `- Role: ${p.role}` : ''}
${p.detailedDescription ? `- Details: ${p.detailedDescription}` : ''}
- Tech Stack: ${p.tech.join(', ')}
${p.github ? `- GitHub: ${p.github}` : ''}
${p.link ? `- Link: ${p.link}` : ''}
`).join('\n\n')

  // Experience
  const experienceText = experiences.map(e =>
    `**${e.title}** at ${e.company}
- Period: ${e.period}
- Type: ${e.type}
- Responsibilities: ${e.responsibilities.join('; ')}
`).join('\n\n')

  // Volunteer
  const volunteerText = volunteer.map(v =>
    `**${v.title}**
- Organization: ${v.org}
- Period: ${v.period || 'N/A'}
- Location: ${v.location || 'N/A'}
- Activities: ${v.bullets.join('; ')}
${v.outcomes ? `- Outcomes: ${v.outcomes.join('; ')}` : ''}
`).join('\n\n')

  // Education
  const educationText = education.map(e =>
    `**${e.degree}**
- Institution: ${e.institution}
- Period: ${e.period}
- Location: ${e.location}
${e.details ? `- Details: ${e.details.join('; ')}` : ''}
`).join('\n\n')

  // Skills
  const skillsText = skillCategories.map(s =>
    `**${s.title}**: ${s.skills.join(', ')}`
  ).join('\n')

  // Additional Documents
  const additionalDocs = loadDocuments()

  return `
# Justin Lee's Portfolio

## About
I am a trilingual IT student with a strong passion for software engineering, particularly in data-driven systems and analytics. Experienced in Python, SQL, and cloud platforms (AWS), with hands-on involvement in data analysis, automation, and project coordination.

Location: Sydney, Australia
Email: ausjustin12@gmail.com
Languages: English, Korean, Chinese

## Skills
${skillsText}

## Education
${educationText}

## Projects
${projectsText}

## Work Experience
${experienceText}

## Volunteer & Social Work
${volunteerText}

${additionalDocs ? `\n## Additional Documents\n${additionalDocs}` : ''}
  `.trim()
}
