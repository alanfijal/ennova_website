import { fetchEvents } from "@/sanity/lib/fetch";
import { SponsorsPageClient } from "./SponsorsPageClient";

export default async function EventSponsorshipPage() {
  const events = await fetchEvents();

  return <SponsorsPageClient events={events} />;
}
