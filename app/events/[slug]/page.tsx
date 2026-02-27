import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchEventBySlug } from "@/sanity/lib/fetch";
import { EventDetailClient } from "./EventDetailClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = await fetchEventBySlug(slug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: event.title,
    description: event.description ?? `Ennova event: ${event.title}. Join us for this exclusive ESADE entrepreneurship experience.`,
    openGraph: {
      title: event.title,
      description: event.description ?? `Ennova event: ${event.title}.`,
      ...(event.media?.[0] ? { images: [{ url: event.media[0], width: 1200, height: 630, alt: event.title }] } : {}),
    },
  };
}

export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = await fetchEventBySlug(slug);

  if (!activity) {
    notFound();
  }

  return <EventDetailClient activity={activity} />;
}
