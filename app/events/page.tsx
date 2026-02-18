import { fetchEvents } from "@/sanity/lib/fetch";
import { EventsPageClient } from "./EventsPageClient";

export default async function EventsPage() {
  const initiatives = await fetchEvents();

  return <EventsPageClient initiatives={initiatives} />;
}
