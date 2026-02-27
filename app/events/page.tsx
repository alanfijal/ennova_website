import { Metadata } from "next";
import { fetchEvents } from "@/sanity/lib/fetch";
import { EventsPageClient } from "./EventsPageClient";

export const metadata: Metadata = {
  title: "Events",
  description: "Explore Ennova's upcoming and past events — from VC workshops and consulting competitions to networking dinners and innovation summits at ESADE.",
  openGraph: {
    title: "Ennova Events",
    description: "Explore Ennova's upcoming and past events at ESADE — VC workshops, consulting competitions, networking, and more.",
  },
};

export default async function EventsPage() {
  const initiatives = await fetchEvents();

  return <EventsPageClient initiatives={initiatives} />;
}
