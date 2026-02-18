import type { Event, EventDetail } from "./types";


export const events: Event[] = [
  {
    id: "ENNOVA-001",
    slug: "vc101",
    title: "VC101",
    domain: "SUSTAINABILITY",
    description: "Architecting renewable energy frameworks with Fortune 500 corporations and emerging technical founders.",
    specs: { reach: "250+ ENGAGED", conversion: "15 PARTNERS", status: "3 VENTURES_FORMED" },
    image: "https://placehold.co/1200x800/13182e/white?text=ENERGY_INITIATIVE",
    keyHighlights: [
      "Corporate partner engagement from Fortune 500 companies",
      "Technical workshops on solar and wind technology",
      "Student-led innovation showcases",
    ],
  },
  {
    id: "ENNOVA-002",
    slug: "case-cracking",
    title: "Case Cracking Competition",
    domain: "CONSULTING",
    description: "Intensive deployment protocol where technical teams delivered transformation roadmaps to SME partners.",
    specs: { reach: "40+ DEPLOYED", conversion: "5 DELIVERABLES", status: "ACTIVE_CYCLE" },
    image: "/images/events/case_cracking.png",
    keyHighlights: [
      "Real client engagements with measurable ROI",
      "Faculty-supervised consulting methodologies",
      "Professional case study documentation",
    ],
  },
  {
    id: "ENNOVA-003",
    slug: "f4x",
    title: "F4X",
    domain: "ENTREPRENEURSHIP",
    description: "Annual deployment showcasing technical ventures with global capital market participation.",
    specs: { reach: "150+ FOUNDERS", conversion: "12 VC_FIRMS", status: "$500K_COMMITTED" },
    image: "/images/events/f4x.png",
    keyHighlights: [
      "Venture capital firm participation",
      "Mentorship from serial entrepreneurs",
      "Live pitch deck feedback sessions",
    ],
  },
  {
    id: "ENNOVA-004",
    slug: "female-founders-night",
    title: "Female Founders Night",
    domain: "SUSTAINABILITY",
    description: "Technical deployment focused on waste reduction frameworks and sustainable manufacturing protocols.",
    specs: { reach: "60+ ENGINEERS", conversion: "8 PARTNERS", status: "4 PROTOTYPES" },
    image: "/images/events/female_founders_night.png",
    keyHighlights: [
      "Industry partner co-creation sessions",
      "Life cycle analysis training",
      "Prototype development support",
    ],
  },
  {
    id: "ENNOVA-005",
    slug: "ideaup",
    title: "IdeaUp",
    domain: "CONSULTING",
    description: "Multi-phase engagement with financial institutions deploying blockchain and digital banking frameworks.",
    specs: { reach: "30+ DEPLOYED", conversion: "3 INSTITUTIONS", status: "3 PAPERS_PUBLISHED" },
    image: "/images/events/IdeaUp.png",
    keyHighlights: [
      "Blockchain technology implementation analysis",
      "Regulatory compliance consulting",
      "Digital transformation strategy",
    ],
  },
  {
    id: "ENNOVA-006",
    slug: "inside-the-game",
    title: "Inside The Game",
    domain: "ENTREPRENEURSHIP",
    description: "12-week intensive protocol transforming technical concepts into incorporated market entities.",
    specs: { reach: "45+ FOUNDERS", conversion: "10 PARTNERS", status: "6 INCORPORATED" },
    image: "https://placehold.co/1200x800/13182e/white?text=BUILDER_SYSTEM",
    keyHighlights: [
      "Legal and incorporation support",
      "Go-to-market strategy development",
      "Investor pitch preparation",
    ],
  },
];

const eventDetails: Record<string, EventDetail> = {
  "sustainable-energy-summit": {
    slug: "sustainable-energy-summit",
    title: "Sustainable Energy Innovation Summit",
    domain: "Sustainability",
    date: "March 15-16, 2026",
    location: "Sheridan College, Mississauga Campus",
    description: "A comprehensive two-day summit bringing together industry leaders, academic researchers, and student innovators to explore renewable energy solutions and sustainable technology.",
    registrationUrl: "https://ennova-events.com/events/sustainable-energy-summit",
    impact: {
      partnerships: 15,
      participants: 250,
      outcomes: "3 startups formed",
      funding: "$1.2M in commitments",
    },
    overview: "The Sustainable Energy Innovation Summit represented a landmark collaboration between Ennova, leading energy corporations, and venture capital firms. Over two intensive days, participants engaged in technical workshops, innovation showcases, and strategic networking sessions focused on accelerating the adoption of renewable energy technologies.",
    objectives: [
      "Foster collaboration between students and industry leaders in the renewable energy sector",
      "Showcase cutting-edge student research and prototypes in solar, wind, and energy storage",
      "Facilitate funding connections for promising energy startups",
      "Address technical and policy challenges in sustainable energy adoption",
    ],
    outcomes: [
      {
        title: "Three Student Startups Formed",
        description: "Three teams incorporated companies focused on solar panel optimization, community wind energy, and battery recycling technology. Combined valuation of $3.5M.",
      },
      {
        title: "15 Corporate Partnerships Established",
        description: "Fortune 500 companies including Tesla, Siemens, and Schneider Electric committed to ongoing collaboration through internships, research grants, and pilot projects.",
      },
      {
        title: "$1.2M in Funding Commitments",
        description: "Venture capital firms and corporate innovation funds pledged early-stage capital to support student ventures emerging from the summit.",
      },
      {
        title: "Technical Innovation Showcase",
        description: "25 student projects presented, with 8 advancing to prototype development with industry mentorship and resources.",
      },
    ],
    testimonial: {
      quote: "The caliber of student innovation at this summit exceeded our expectations. We're proud to partner with Ennova to develop the next generation of clean energy solutions.",
      author: "Sarah Chen",
      role: "VP of Innovation, Siemens Energy",
    },
    media: [
      "https://placehold.co/1200x675/13182e/00AEEF?text=Summit+Keynote",
      "https://placehold.co/1200x675/00AEEF/ffffff?text=Workshop+Session",
      "https://placehold.co/1200x675/13182e/FFD700?text=Student+Showcase",
    ],
    partners: [
      "Tesla Energy", "Siemens", "Schneider Electric", "Ontario Ministry of Energy",
      "Greentech Ventures", "Solar Innovations Corp", "Wind Future Fund",
    ],
  },
};


export function getEventBySlug(slug: string): EventDetail | undefined {
  return eventDetails[slug];
}
