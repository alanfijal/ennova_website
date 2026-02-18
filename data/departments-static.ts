import type { DepartmentDetail } from "./types";

// ─── Serializable department listing data (no React imports) ──────
// This file mirrors departments.ts but without Phosphor icon imports,
// making it safe for server-side rendering and static generation.

export interface StaticDepartment {
  iconName: string
  name: string
  slug: string
  description: string
  members: number
  projects: number
  color: string
  focus: string
}

export const staticDepartments: StaticDepartment[] = [
  {
    iconName: "BriefcaseIcon",
    name: "Consulting",
    slug: "consulting",
    description: "Consulting services for startups.",
    members: 15,
    projects: 15,
    color: "from-secondary to-gradient",
    focus: "Services",
  },
  {
    iconName: "FootballIcon",
    name: "Sports",
    slug: "sports",
    description: "Sports-tech & management events.",
    members: 7,
    projects: 12,
    color: "from-purple-500 to-gradient",
    focus: "Events",
  },
  {
    iconName: "RocketLaunchIcon",
    name: "Ventures",
    slug: "ventures",
    description: "Events that offer students an entry to the startup ecosystem.",
    members: 8,
    projects: 10,
    color: "from-[#FFD700] to-secondary",
    focus: "Events",
  },
  {
    iconName: "LightbulbIcon",
    name: "Innovation",
    slug: "Innovation",
    description: "Connecting students to most accomplished professionals in the startup ecosystem.",
    members: 12,
    projects: 8,
    color: "from-green-500 to-secondary",
    focus: "Events",
  },
  {
    iconName: "LightbulbFilamentIcon",
    name: "Impact",
    slug: "impact",
    description: "Social entrepreneurship & sustainability events.",
    members: 7,
    projects: 18,
    color: "from-orange-500 to-purple-500",
    focus: "Events",
  },
  {
    iconName: "UsersIcon",
    name: "Human Resources",
    slug: "hr",
    description: "Assuring success of each member.",
    members: 6,
    projects: 7,
    color: "from-pink-500 to-[#FFD700]",
    focus: "Core",
  },
  {
    iconName: "LightningIcon",
    name: "Marketing",
    slug: "marketing",
    description: "Brand management, content creation & leading Ennova's growth.",
    members: 12,
    projects: 7,
    color: "from-pink-500 to-[#FFD700]",
    focus: "Core",
  },
  {
    iconName: "DatabaseIcon",
    name: "Data Analytics",
    slug: "data",
    description: "Developing digital solutions to improve the experience of all stakeholders.",
    members: 13,
    projects: 7,
    color: "from-pink-500 to-[#FFD700]",
    focus: "Core",
  },
  {
    iconName: "CoinsIcon",
    name: "Finance & Partnerships",
    slug: "finance-partnerships",
    description: "Budget control & financial planning. Establishing relationships with corporate partners.",
    members: 13,
    projects: 7,
    color: "from-pink-500 to-[#FFD700]",
    focus: "Core",
  },
];

// ─── Department details (no React imports) ──────

const departmentDetails: Record<string, DepartmentDetail> = {
  "software-engineering": {
    name: "Software Engineering",
    description: "Our software engineering team builds cutting-edge web and mobile applications, develops robust backend systems, and creates innovative software solutions for clients and internal projects.",
    color: "from-secondary to-gradient",
    stats: { members: 120, projects: 15 },
    whatWeDo: [
      "Build full-stack web applications using modern frameworks and best practices",
      "Develop mobile applications for iOS and Android platforms",
      "Create RESTful APIs and microservices architectures",
      "Implement cloud infrastructure and DevOps solutions",
      "Conduct code reviews and maintain high code quality standards",
      "Collaborate with clients to deliver custom software solutions",
    ],
    tools: ["React", "Next.js", "Node.js", "Python", "TypeScript", "Docker", "AWS", "PostgreSQL", "MongoDB", "Git"],
    teamPhoto: "/images/departments/software-team.jpg",
    members: [
      { id: 1, name: "Sarah Johnson", role: "Head of Software Engineering", position: "Lead Developer", image: "/images/team/placeholder.jpg", linkedin: "https://linkedin.com/in/sarahjohnson", email: "sarah@ennova.org", bio: "Full-stack developer with 3 years of experience in building scalable web applications. Passionate about clean code and mentoring junior developers.", skills: ["React", "Node.js", "TypeScript", "AWS"] },
      { id: 2, name: "Michael Chen", role: "Backend Developer", position: "Senior Developer", image: "/images/team/placeholder.jpg", linkedin: "https://linkedin.com/in/michaelchen", email: "michael@ennova.org", bio: "Specialized in building high-performance APIs and microservices architecture. Love working with databases and optimization.", skills: ["Python", "PostgreSQL", "Docker", "Redis"] },
      { id: 3, name: "Emma Rodriguez", role: "Frontend Developer", position: "UI/UX Developer", image: "/images/team/placeholder.jpg", linkedin: "https://linkedin.com/in/emmarodriguez", email: "emma@ennova.org", bio: "Creating beautiful and accessible user interfaces. Strong focus on performance and user experience." },
      { id: 4, name: "James Anderson", role: "Mobile Developer", position: "iOS/Android Developer", image: "/images/team/placeholder.jpg", linkedin: "https://linkedin.com/in/jamesanderson", email: "james@ennova.org", bio: "Building cross-platform mobile applications with React Native. Focused on delivering smooth user experiences." },
    ],
  },
  "consulting": {
    name: "Consulting",
    description: "Our consulting team provides strategic advisory services to businesses, helping them solve complex challenges and drive growth through data-driven insights and innovative solutions.",
    color: "from-orange-500 to-purple-500",
    stats: { members: 45, projects: 18 },
    whatWeDo: [
      "Deliver strategic consulting projects for Fortune 500 companies",
      "Conduct market research and competitive analysis",
      "Develop business cases and financial models",
      "Design operational improvement strategies",
      "Facilitate client workshops and stakeholder interviews",
      "Create data-driven recommendations and presentations",
    ],
    tools: ["PowerPoint", "Excel", "Tableau", "SQL", "Python", "Miro", "Notion", "Figma"],
    teamPhoto: "/images/departments/consulting-team.jpg",
    members: [
      { id: 1, name: "David Williams", role: "Head of Consulting", position: "Lead Consultant", image: "/images/team/placeholder.jpg", linkedin: "https://linkedin.com/in/davidwilliams", email: "david@ennova.org", bio: "Strategic consultant with experience in digital transformation and operational excellence. Delivered 20+ successful projects.", skills: ["Strategy", "Business Analysis", "Change Management", "Stakeholder Management"] },
      { id: 2, name: "Sophie Martin", role: "Business Analyst", position: "Senior Analyst", image: "/images/team/placeholder.jpg", linkedin: "https://linkedin.com/in/sophiemartin", email: "sophie@ennova.org", bio: "Data-driven analyst specializing in market research and competitive analysis. Passionate about turning insights into action." },
    ],
  },
  "entrepreneurship": {
    name: "Entrepreneurship",
    description: "Our entrepreneurship team supports aspiring founders in building and scaling their startups, providing mentorship, resources, and connections to bring innovative ideas to life.",
    color: "from-pink-500 to-[#FFD700]",
    stats: { members: 60, projects: 7 },
    whatWeDo: [
      "Support student founders in building their startups from idea to launch",
      "Organize pitch competitions and demo days",
      "Connect startups with investors and mentors",
      "Provide workshops on fundraising and business development",
      "Facilitate networking events with the startup ecosystem",
      "Help teams validate ideas and find product-market fit",
    ],
    tools: ["Pitch Deck", "Lean Canvas", "Notion", "Airtable", "Figma", "Google Analytics", "LinkedIn", "Canva"],
    teamPhoto: "/images/departments/entrepreneurship-team.jpg",
    members: [
      { id: 1, name: "Alex Thompson", role: "Head of Entrepreneurship", position: "Venture Lead", image: "/images/team/placeholder.jpg", linkedin: "https://linkedin.com/in/alexthompson", email: "alex@ennova.org", bio: "Serial entrepreneur with 2 successful exits. Passionate about helping students build their dream companies.", skills: ["Business Strategy", "Fundraising", "Pitch Design", "Network Building"] },
      { id: 2, name: "Lisa Park", role: "Venture Developer", position: "Growth Specialist", image: "/images/team/placeholder.jpg", linkedin: "https://linkedin.com/in/lisapark", email: "lisa@ennova.org", bio: "Helping startups find product-market fit and scale efficiently. Background in growth marketing and operations." },
    ],
  },
};

export function getStaticDepartmentBySlug(slug: string): DepartmentDetail | undefined {
  return departmentDetails[slug];
}
