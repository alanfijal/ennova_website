import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { PartnerMarquee } from "@/components/sections/partner-marquee";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <PartnerMarquee />
    </main>
  );
}
