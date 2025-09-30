export type VolunteerItem = {
  title: string
  org: string
  hours?: string
  period?: string
  location?: string
  bullets: string[]
  outcomes?: string[]
  links?: { label: string; href: string }[]
  heroImage?: string
  gallery?: string[]
  slug: string
}

export const volunteer: VolunteerItem[] = [
  {
    title: "International Student Leadership Ambassador",
    org: "City of Sydney — ISLA Program",
    hours: "60+ hours",
    period: "2025",
    location: "Sydney, Australia",
    bullets: [
      "Planning and executing community projects to support international students",
      "Contributing 60 hours of volunteer service to strengthen community engagement",
      "Strengthening project management and leadership skills through hands-on experience",
      "Facilitating cross-cultural team collaboration and building inclusive communities",
    ],
    outcomes: [
      "Successfully organized multiple community events with strong participation from international students",
      "Developed leadership capabilities through coordinating diverse volunteer teams",
      "Enhanced cross-cultural communication skills by working with students from various backgrounds",
    ],
    links: [
      {
        label: "ISLA Program Overview",
        href: "https://www.cityofsydney.nsw.gov.au/",
      },
    ],
    slug: "isla-ambassador",
  },
]
