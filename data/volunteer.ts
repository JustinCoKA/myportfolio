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
  heroImageSize?: { width: number; height: number }
  gallery?: string[]
  slug: string
}

export const volunteer: VolunteerItem[] = [
   {
    title: "Social — ISLA Cultural Fest 2025 Stories, Flavours & Friendships",
    org: "International Student Leadership Association (ISLA)",
    period: "6 December 2025",
    location: "Redfern Community Centre, Sydney, Australia",
    bullets: [
      "Participated in the early planning and program design phase of the Cultural Fest as part of the organising team",
      "Led the Korean cultural segment, introducing Korean culture and traditions during the main cultural presentation session",
      "Facilitated and hosted a Bibimbap food workshop, guiding participants through ingredients, preparation, and cultural significance",
      "Supported overall event operations including guest engagement, coordination, and on-site logistics",
      "Collaborated with a diverse volunteer team to ensure smooth event delivery and participant experience",
    ],
    outcomes: [
      "Successfully engaged 30+ participants, with post-event survey results indicating high overall satisfaction",
      "Strengthened public speaking and facilitation skills through leading cultural presentations and interactive workshops",
      "Contributed to a vibrant multicultural environment, fostering cross-cultural understanding and community connections",
      "Gained hands-on experience in event planning, cultural programming, and community leadership"
    ],
    links: [
      {
        label: "Cultural Fest Eventbrite",
        href: "https://www.eventbrite.com/e/culture-fest-stories-flavours-and-friendship-tickets-1893961031429?aff=ebdsoporgprofile&keep_tld=1",
      },
    ],
    heroImage: "/2025Cultural.jpeg",
    heroImageSize: { width: 52, height: 74},
    gallery: [
      "/cul1.JPEG",
      "/cul2.JPEG",
      "/cul3.JPG",
      "/cul4.JPG",
    ],
    slug: "isla-cultural-fest",
  },
  {
    title: "Social — ISLA International Student Career Panel 2025",
    org: "International Student Leadership Association (ISLA)",
    period: "29 November 2025",
    location: "Townhall House, Sydney, Australia",
    bullets: [
      "Supported on-site event operations and attendee coordination for the International Student Career Panel 2025, contributing to smooth program delivery and positive participant experience."
    ],
    outcomes: [
      "I was pleased to support the International Student Career Panel 2025 as an event-day volunteer, assisting with the smooth delivery of the program. On the day of the event, I helped with on-site coordination, attendee guidance, and general event flow, ensuring panelists and participants felt welcomed and supported throughout the session. It was inspiring to witness international students share their real career journeys and practical advice across diverse industries. Supporting this event gave me valuable exposure to professional panel discussions, event operations, and community-led initiatives that empower international students in Australia. I appreciated being part of a collaborative volunteer team contributing to a meaningful and well-organised program. This event was proudly delivered through the International Student Leadership and Ambassador Program (ISLA), and it was a great opportunity to contribute, learn, and engage with a vibrant multicultural community." 
    ],
    links: [
      {
        label: "Career Panel Eventbrite",
        href: "https://www.eventbrite.com/e/international-students-career-panel-2025-tickets-1840052750309?aff=ebdsoporgprofile&keep_tld=1",
      },
    ],
    heroImage: "/career.jpeg",
    heroImageSize: { width: 52, height: 74},
    gallery: [
      "/car1.JPEG",
      "/car2.JPEG",
      "/car3.JPEG",
      "/car4.JPEG",
    ],
    slug: "isla-international-student-career-panel",
  },
   {
    title: "Volunteer — Christmas in the city: an international student festive walk",
    org: "City of Sydney",
    period: "27 November 2025",
    location: "Sydney Town Hall → Martin Place, Sydney",
    bullets: [
      "Volunteered at the City of Sydney’s International Student Festive Walk, supporting on-site operations and student engagement."
    ],
    outcomes: [
      "I supported the event as an event-day volunteer, assisting with on-site operations and participant guidance. My role focused on helping international students navigate the venue smoothly, supporting check-in and wayfinding, and contributing to the overall flow of the event during the festive walk from Sydney Town Hall to Martin Place. The event brought together international students for a community celebration featuring a guided walk, Christmas activities, and the city’s Christmas tree light-up and fireworks." 
    ],
    links: [
      {
        label: "Christmas in the City Eventbrite",
        href: "https://www.eventbrite.com.au/e/christmas-in-the-city-an-international-student-festive-walk-tickets-1902391657659",
      },
    ],
    heroImage: "/Christmas.jpeg",
    heroImageSize: { width: 52, height: 74},
    gallery: [
      "/chr1.JPG",
      "/chr2.JPG",
      "/chr3.JPG",
      "/chr4.JPG",
    ],
    slug: "christmas-in-the-city",
  },
    {
    title: "Volunteer — NSW Police Officer of the Year Awards 2025 — Event Support Volunteer",
    org: "Rotary Clubs of NSW",
    period: "7 November 2025",
    location: "Hyatt Regency Sydney",
    bullets: [
      "Volunteered at the NSW Police Officer of the Year Awards 2025, supporting event operations and guest coordination at Hyatt Regency Sydney." 
    ],
    outcomes: [
      "Supported the delivery of the NSW Police Officer of the Year Awards 2025 as a volunteer, assisting with event setup and on-the-night operations. Responsibilities included preparing silent auction displays, arranging guest materials and table settings, assisting with stage-side coordination during finalist call-ups, supporting raffle ticket sales and silent auctions, and helping guests with directions and general enquiries. Worked closely with event hosts and fellow volunteers to ensure a professional, respectful, and well-organised awards evening.",
    ],
    heroImage: "/pol.jpg",
    heroImageSize: { width: 52, height: 74},
    gallery: [
      "/pol1.JPG",
      "/pol2.JPG",
    ],
    slug: "nsw-police-officer-of-the-year-awards-2025",
  },
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
      "/placeholder1.JPEG",
      "/placeholder2.JPEG",
      "/placeholder3.JPEG",
      "/placeholder4.JPEG",
    ],
    slug: "lbw-gala-dinner",
  },
]
