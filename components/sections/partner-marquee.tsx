"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

const partners = [
  { name: "Sheridan College", logo: "/logos/sheridan.svg" },
  { name: "Deloitte", logo: "/logos/deloitte.svg" },
  { name: "Esade", logo: "/logos/esade.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
];

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="group relative mx-4 flex h-32 w-64 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-secondary/50 hover:bg-white/10">
      {/* 1. Subtle Background Glow on Hover */}
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-secondary/10" />

      {/* 2. Logo Container with Grayscale-to-Color logic */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="relative h-12 w-40 filter grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
           {/* In reality, use your real logos here. For now, text fallback. */}
           <span className="text-xl font-bold tracking-tight text-white/80 group-hover:text-white">
            {partner.name}
           </span>
        </div>
      </div>
    </div>
  );
}

export function PartnerMarquee() {
  return (
    <section id="partners" className="relative bg-dark py-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-20 mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Our <span className="text-secondary">Strategic</span> Partners
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Ennova bridges the gap between Esade&apos;s top talent and the world&apos;s most innovative organizations.
          </p>
        </motion.div>
      </div>

      {/* The Marquee with Edge Fades */}
      <div className="relative flex flex-col items-center justify-center gap-4 py-10">
        <Marquee pauseOnHover className="[--duration:40s]">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </Marquee>

        {/* Cinematic Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gradient to-transparent z-30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gradient to-transparent z-30" />
      </div>

      {/* Action CTA with "Join Us" energy */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-col items-center"
      >
        <p className="mb-6 text-gray-500 font-medium tracking-wide uppercase text-xs">
          Interested in a partnership?
        </p>
        <a
          href="/work-with-us/partners"
          className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-dark transition-all hover:bg-secondary hover:text-white"
        >
          Explore Collaboration
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </a>
      </motion.div>
    </section>
  );
}