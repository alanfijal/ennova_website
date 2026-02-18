import { notFound } from "next/navigation";
import { fetchEventBySlug } from "@/sanity/lib/fetch";
import { EventDetailClient } from "./EventDetailClient";

export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = await fetchEventBySlug(slug);

  if (!activity) {
    notFound();
  }

  return <EventDetailClient activity={activity} />;
}
