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
    title: "Volunteer — 2025 LBW Trust Gala Dinner",
    org: "The LBW Trust (Learning for a Better World)",
    hours: "7 hours",
    period: "24 October 2025",
    location: "Sydney Cricket Ground (Noble Room), Sydney, Australia",
    bullets: [
      "Assisted with guest registration, welcoming, and event coordination",
      "Supported silent and live auctions during the fundraising dinner",
      "Helped with guest seating, logistics, and smooth flow of the evening",
      "Participated in event set-up and pack-down with the volunteer team",
      "Engaged with distinguished guests and promoted LBW Trust initiatives",
    ],
    outcomes: [
      "Contributed to the success of a high-profile charity gala raising funds for international education",
      "Developed event coordination and hospitality experience in a multicultural environment",
      "Expanded professional network through interactions with community leaders, alumni, and public figures including Nathan Lyon",
    ],
    links: [
      {
        label: "LBW Trust Overview",
        href: "https://2025-annual-dinner.raiselysite.com",
      },
      {
        label: "Reflection IN LinkedIn",
        href: "https://www.linkedin.com/posts/dataausjustin_educationlightsuptheworld-thelbwtrust-volunteeringexperience-activity-7387480972776288256-EH81?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdTT8oBva1fwa9zicx0eKNHiP7o9gSA43o",
      },
    ],
    heroImage: "/2025GalaDinner.png",
    gallery: [
      "/placeholder1.svg",
      "/placeholder2.svg",
      "/placeholder3.svg",
      "/placeholder4.svg",
    ],
    slug: "lbw-gala-dinner",
  },
]
