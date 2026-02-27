"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";
import { strategicPartners, type Partner } from "@/data/partners";

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="mx-10 flex items-center justify-center w-48 h-16 flex-shrink-0">
      <img
        src={partner.logo}
        alt={partner.name}
        className="w-full h-full object-contain brightness-0 invert opacity-40 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-500"
      />
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
          {strategicPartners.map((partner, index) => (
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
          href="/work-with-us"
          className="group relative flex items-center gap-2 overflow-hidden rounded-none bg-white px-8 py-4 text-sm font-bold text-dark transition-all hover:bg-secondary hover:text-white"
        >
          Explore Collaboration
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </a>
      </motion.div>
    </section>
  );
}