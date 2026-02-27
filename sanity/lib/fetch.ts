import { client } from './client'
import { urlFor } from './image'
import {
  ALL_EVENTS_QUERY,
  KEY_EVENTS_QUERY,
  EVENT_BY_SLUG_QUERY,
  ALL_DEPARTMENTS_QUERY,
  DEPARTMENT_BY_SLUG_QUERY,
} from './queries'
import type { EventDetail, DepartmentDetail } from '@/data/types'
import { events as staticEvents, getEventBySlug as getStaticEventBySlug } from '@/data/events'
import { staticDepartments, getStaticDepartmentBySlug } from '@/data/departments-static'

// ─── Serializable department type (no React components) ─────
// The Department interface has `icon: Icon` (React component) which
// can't cross the server→client boundary. We use a serializable
// version with `iconName: string` instead.

export interface SerializableDepartment {
  iconName: string
  name: string
  slug: string
  description: string
  members: number
  projects: number
  color: string
  focus: string
}

// Serializable event type for the listing page
export interface SerializableEvent {
  id: string
  slug: string
  title: string
  domain: string
  description: string
  specs: Record<string, string>
  image: string
  keyHighlights: string[]
  featured?: boolean
  date?: string
  expectedParticipants?: string
}

// ─── Image helpers ──────────────────────────────────────────

function sanityImageUrl(image: unknown): string {
  if (!image) return ''
  try {
    return urlFor(image).width(1200).url()
  } catch {
    return ''
  }
}

function sanityImageUrlSmall(image: unknown): string {
  if (!image) return ''
  try {
    return urlFor(image).width(400).url()
  } catch {
    return ''
  }
}

// ─── Events ─────────────────────────────────────────────────

export async function fetchEvents(): Promise<SerializableEvent[]> {
  try {
    const sanityEvents = await client.fetch(ALL_EVENTS_QUERY)

    if (sanityEvents && sanityEvents.length > 0) {
      return sanityEvents.map((e: Record<string, unknown>) => ({
        id: (e.eventId as string) || '',
        slug: (e.slug as string) || '',
        title: (e.title as string) || '',
        domain: (e.domain as string) || '',
        description: (e.description as string) || '',
        specs: (e.specs as Record<string, string>) || {},
        image: sanityImageUrl(e.image) || '',
        keyHighlights: (e.keyHighlights as string[]) || [],
        featured: (e.featured as boolean) || false,
        date: (e.date as string) || undefined,
        expectedParticipants: ((e.impact as Record<string, unknown>)?.participants as string) || undefined,
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch events from Sanity, using static data:', error)
  }

  // Static fallback — already serializable (no React components)
  return staticEvents.map((e) => ({
    id: e.id,
    slug: e.slug,
    title: e.title,
    domain: e.domain,
    description: e.description,
    specs: e.specs,
    image: e.image,
    keyHighlights: e.keyHighlights,
  }))
}

export async function fetchKeyEvents(): Promise<SerializableEvent[]> {
  try {
    const sanityEvents = await client.fetch(KEY_EVENTS_QUERY)

    if (sanityEvents && sanityEvents.length > 0) {
      return sanityEvents.map((e: Record<string, unknown>) => ({
        id: (e.eventId as string) || '',
        slug: (e.slug as string) || '',
        title: (e.title as string) || '',
        domain: (e.domain as string) || '',
        description: (e.description as string) || '',
        specs: (e.specs as Record<string, string>) || {},
        image: sanityImageUrl(e.image) || '',
        keyHighlights: [],
        featured: true,
        date: (e.date as string) || undefined,
        expectedParticipants: ((e.impact as Record<string, unknown>)?.participants as string) || undefined,
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch key events from Sanity, using static fallback:', error)
  }

  // Fallback: return featured static events (or first 3)
  const all = await fetchEvents()
  return all.filter((e) => e.featured).slice(0, 3)
}

export async function fetchEventBySlug(slug: string): Promise<EventDetail | undefined> {
  try {
    const event = await client.fetch(EVENT_BY_SLUG_QUERY, { slug })

    if (event) {
      return {
        slug: event.slug || '',
        title: event.title || '',
        domain: event.domain || '',
        date: event.date || undefined,
        location: event.location || undefined,
        description: event.description || undefined,
        registrationUrl: event.registrationUrl || undefined,
        impact: event.impact ? {
          partnerships: event.impact.partnerships ?? 0,
          participants: event.impact.participants ?? 0,
          outcomes: event.impact.outcomes || '',
          funding: event.impact.funding || '',
        } : undefined,
        overview: event.overview || undefined,
        objectives: event.objectives?.length ? event.objectives : undefined,
        outcomes: event.outcomes?.length
          ? event.outcomes.map((o: Record<string, string>) => ({
              title: o.title || '',
              description: o.description || '',
            }))
          : undefined,
        testimonial: event.testimonial?.quote ? event.testimonial : undefined,
        media: event.media?.length
          ? event.media.map((m: unknown) => sanityImageUrl(m)).filter(Boolean)
          : undefined,
        partners: event.partners?.length ? event.partners : undefined,
      }
    }
  } catch (error) {
    console.warn('Failed to fetch event from Sanity, using static data:', error)
  }

  return getStaticEventBySlug(slug)
}

// ─── Departments ────────────────────────────────────────────

export async function fetchDepartments(): Promise<SerializableDepartment[]> {
  try {
    const sanityDepts = await client.fetch(ALL_DEPARTMENTS_QUERY)

    if (sanityDepts && sanityDepts.length > 0) {
      return sanityDepts.map((d: Record<string, unknown>) => ({
        iconName: (d.icon as string) || 'BriefcaseIcon',
        name: (d.name as string) || '',
        slug: (d.slug as string) || '',
        description: (d.description as string) || '',
        members: (d.members as number) || 0,
        projects: (d.projects as number) || 0,
        color: (d.color as string) || 'from-secondary to-gradient',
        focus: (d.focus as string) || '',
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch departments from Sanity, using static data:', error)
  }

  // Static fallback — already serializable (no React components)
  return staticDepartments.map((d) => ({
    iconName: d.iconName,
    name: d.name,
    slug: d.slug,
    description: d.description,
    members: d.members,
    projects: d.projects,
    color: d.color,
    focus: d.focus,
  }))
}

export async function fetchDepartmentBySlug(slug: string): Promise<DepartmentDetail | undefined> {
  try {
    const dept = await client.fetch(DEPARTMENT_BY_SLUG_QUERY, { slug })

    if (dept) {
      return {
        name: dept.name || '',
        description: dept.description || '',
        color: dept.color || 'from-secondary to-gradient',
        logoUrl: (dept.logoUrl as string) || undefined,
        stats: (dept.stats?.members || dept.stats?.projects) ? dept.stats : undefined,
        whatWeDo: dept.whatWeDo?.length ? dept.whatWeDo : undefined,
        tools: dept.tools?.length ? dept.tools : undefined,
        teamPhoto: sanityImageUrl(dept.teamPhoto) || undefined,
        members: dept.members?.length
          ? dept.members.map((m: Record<string, unknown>, idx: number) => ({
              id: idx + 1,
              name: (m.name as string) || '',
              role: (m.role as string) || '',
              position: (m.position as string) || undefined,
              image: sanityImageUrlSmall(m.image) || undefined,
              linkedin: (m.linkedin as string) || undefined,
              email: (m.email as string) || undefined,
              bio: (m.bio as string) || undefined,
              skills: (m.skills as string[])?.length ? (m.skills as string[]) : undefined,
            }))
          : undefined,
      }
    }
  } catch (error) {
    console.warn('Failed to fetch department from Sanity, using static data:', error)
  }

  return getStaticDepartmentBySlug(slug)
}
