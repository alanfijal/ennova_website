import { Hero } from "@/components/sections/hero";
import { TeamReveal } from "@/components/sections/TeamReveal";
import { BarcelonaBadge } from "@/components/ui/BarcelonaBadge";
import { Stats } from "@/components/sections/stats";
import { KeyEvents } from "@/components/sections/key-events";
import { PartnerMarquee } from "@/components/sections/partner-marquee";
import { fetchKeyEvents } from "@/sanity/lib/fetch";

export default async function Home() {
  const keyEvents = await fetchKeyEvents();

  return (
    <main className="relative min-h-screen">
      <BarcelonaBadge />
      <Hero />
      <TeamReveal />
      <Stats />
      <KeyEvents events={keyEvents} />
      <PartnerMarquee />
    </main>
  );
}
