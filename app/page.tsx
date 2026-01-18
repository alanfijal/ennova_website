import { Hero } from "@/components/sections/hero";
import { TeamReveal } from "@/components/sections/TeamReveal";
import { BarcelonaBadge } from "@/components/ui/BarcelonaBadge";
import { Stats } from "@/components/sections/stats";
import { KeyEvents } from "@/components/sections/key-events";
import { PartnerMarquee } from "@/components/sections/partner-marquee";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BarcelonaBadge />
      <Hero />
      <TeamReveal />
      <Stats />
      <KeyEvents />
      <PartnerMarquee />
    </main>
  );
}
