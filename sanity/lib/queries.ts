import { groq } from 'next-sanity'

// ─── Events ─────────────────────────────────────────────────

export const ALL_EVENTS_QUERY = groq`
  *[_type == "event"] | order(eventId asc) {
    eventId,
    title,
    "slug": slug.current,
    domain,
    description,
    image,
    keyHighlights,
    specs,
    featured,
    date,
    impact,
  }
`

export const KEY_EVENTS_QUERY = groq`
  *[_type == "event" && featured == true] | order(eventId asc) {
    eventId,
    title,
    "slug": slug.current,
    domain,
    description,
    image,
    specs,
    date,
    impact,
  }
`

export const EVENT_BY_SLUG_QUERY = groq`
  *[_type == "event" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    domain,
    date,
    location,
    description,
    registrationUrl,
    overview,
    objectives,
    impact,
    outcomes,
    testimonial,
    media,
    partners,
    image,
  }
`

// ─── Departments ────────────────────────────────────────────

export const ALL_DEPARTMENTS_QUERY = groq`
  *[_type == "department"] | order(order asc) {
    name,
    "slug": slug.current,
    description,
    icon,
    members,
    projects,
    color,
    focus,
  }
`

export const DEPARTMENT_BY_SLUG_QUERY = groq`
  *[_type == "department" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    description,
    color,
    "stats": {
      "members": members,
      "projects": projects,
    },
    whatWeDo,
    tools,
    "logoUrl": logo.asset->url,
    teamPhoto,
    "members": teamMembers[] {
      name,
      role,
      position,
      image,
      linkedin,
      email,
      bio,
      skills,
    },
  }
`
