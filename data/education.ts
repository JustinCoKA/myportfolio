export type EducationItem = {
  degree: string
  school: string
  location: string
  period: string
  status: string
  highlights: string[]
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Information Technology",
    school: "Victoria University",
    location: "Sydney Campus",
    period: "Oct 2024 - Sep 2026",
    status: "Expected",
    highlights: [
      "Databases & Data Engineering",
      "Cloud Computing Fundamentals",
      "Backend Development",
      "Software Engineering Practices",
    ],
  },
  {
    degree: "Diploma of Information Technology",
    school: "Victoria University",
    location: "Sydney Campus",
    period: "Oct 2023 - Sep 2024",
    status: "Completed",
    highlights: [
      "Programming Fundamentals",
      "Data Structures & Algorithms",
      "Web Development",
      "Database Design",
    ],
  },
  {
    degree: "Bachelor of Flight Vehicle Design and Engineering",
    school: "Harbin Institute of Technology",
    location: "Harbin, Heilongjiang China",
    period: "AUG 2018 - JUL 2022",
    status: "incompleted",
    highlights: [
      "Drop out of colleage after only two year",
      "Two years gap between 2019 and 2021 due to Military service\n",
    ],
  },
]
