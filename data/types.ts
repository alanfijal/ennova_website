import type { LucideIcon } from "lucide-react";

// ─── Departments ─────────────────────────────────────────────

export interface Department {
  icon: LucideIcon;
  name: string;
  slug: string;
  description: string;
  members: number;
  projects: number;
  color: string;
  focus: string;
}

export interface DepartmentMember {
  id: number;
  name: string;
  role: string;
  position: string;
  image: string;
  linkedin: string;
  email: string;
  bio: string;
  skills?: string[];
}

export interface DepartmentDetail {
  name: string;
  description: string;
  color: string;
  stats: {
    members: number;
    projects: number;
  };
  whatWeDo: string[];
  tools: string[];
  teamPhoto: string;
  members: DepartmentMember[];
}

// ─── Events ──────────────────────────────────────────────────

export interface Event {
  id: string;
  slug: string;
  title: string;
  domain: string;
  description: string;
  specs: Record<string, string>;
  image: string;
  keyHighlights: string[];
}

export interface EventDetail {
  slug: string;
  title: string;
  domain: string;
  date: string;
  location: string;
  description: string;
  registrationUrl: string;
  impact: {
    partnerships: number;
    participants: number;
    outcomes: string;
    funding: string;
  };
  overview: string;
  objectives: string[];
  outcomes: {
    title: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  media: string[];
  partners: string[];
}
