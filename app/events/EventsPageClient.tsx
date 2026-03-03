"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import {
  TrophyIcon,
  MicrophoneStageIcon,
  SoccerBallIcon,
  HeartIcon,
  ArrowRightIcon,
  FileTextIcon,
  ArrowSquareOutIcon,
  TargetIcon,
  FingerprintIcon
} from "@phosphor-icons/react";
import { Button } from "@heroui/button";
import { TechnicalGrid } from "@/components/ui/TechnicalGrid";
import type { SerializableEvent } from "@/sanity/lib/fetch";

function InitiativeSpec({ initiative, index }: { initiative: SerializableEvent; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="relative w-full min-h-screen flex items-center justify-center group overflow-hidden py-20 border-b border-white/5"
    >
      {/* Background Grid - Visible on hover or when in view on mobile */}
      <div className={`absolute inset-0 transition-opacity duration-700 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] ${isInView ? "opacity-10" : "opacity-0 group-hover:opacity-10"}`} />

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl">

        {/* Technical Label (1X Style) */}
        <div className="lg:col-span-1 hidden lg:block">
           <span className="font-mono text-[10px] text-gray-600 rotate-90 block whitespace-nowrap tracking-[0.5em]">
             {initiative.id} // BCN_HUB
           </span>
        </div>

        {/* Cinematic Slit Image (1X Playbook) */}
        <div className="lg:col-span-5">
           <div className={`relative aspect-[4/5] overflow-hidden transition-all duration-1000 ${isInView ? "grayscale-0" : "grayscale hover:grayscale-0"}`}>
              <div className={`absolute inset-0 bg-[#13182e]/40 z-10 transition-colors duration-700 ${isInView ? "bg-transparent" : "group-hover:bg-transparent"}`} />
              <img
                src={initiative.image}
                className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${isInView ? "scale-105" : "group-hover:scale-105"}`}
                alt={initiative.title}
              />
           </div>
        </div>

        {/* Content & Specs */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-4 mb-6">
            <FingerprintIcon className="text-secondary w-5 h-5 opacity-40" />
            <span className="font-black text-[10px] tracking-[0.4em] text-secondary uppercase italic">
               {initiative.domain}
            </span>
          </div>

          <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tighter uppercase">
            {initiative.title}
          </h3>

          <p className="font-sans text-lg md:text-xl text-gray-500 mb-12 max-w-md leading-relaxed">
            {initiative.description}
          </p>

          {/* Technical Data Block */}
          <div className="grid grid-cols-3 gap-8 border-y border-white/5 py-8 mb-12">
            {Object.entries(initiative.specs).map(([key, value]) => (
              <div key={key}>
                <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-2">{key}</div>
                <div className="font-bold text-white text-sm tracking-widest">{value}</div>
              </div>
            ))}
          </div>

          <Button
            as={NextLink}
            href={`/events/${initiative.slug}`}
            className="h-14 px-10 bg-white text-primary rounded-none font-black text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-all"
            endContent={<ArrowRightIcon className="w-4 h-4" />}
          >
            Open Initiative File
          </Button>
        </div>
      </div>

      {/* 1X-Style Corner Brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10" />
    </motion.div>
  );
}

// Vertical Scrolling Layout Component
function VerticalInitiativesLayout({ initiatives: initiativesList }: { initiatives: SerializableEvent[] }) {
  return (
    <div className="relative bg-primary">
      {/* Render all initiatives in a vertical stack */}
      {initiativesList.map((initiative, index) => (
        <InitiativeSpec key={initiative.id} initiative={initiative} index={index} />
      ))}
    </div>
  );
}

export function EventsPageClient({ initiatives }: { initiatives: SerializableEvent[] }) {
  const [selectedDomain, setSelectedDomain] = useState("all");

  const domains = [
    {
      id: "all",
      label: "ALL OPERATIONS",
      count: initiatives.length,
      icon: TargetIcon,
    },
    {
      id: "COMPETITION",
      label: "COMPETITION",
      count: initiatives.filter(a => a.domain === "COMPETITION").length,
      icon: TrophyIcon,
    },
    {
      id: "CONFERENCE",
      label: "CONFERENCE",
      count: initiatives.filter(a => a.domain === "CONFERENCE").length,
      icon: MicrophoneStageIcon,
    },
    {
      id: "SPORTS",
      label: "SPORTS",
      count: initiatives.filter(a => a.domain === "SPORTS").length,
      icon: SoccerBallIcon,
    },
    {
      id: "IMPACT",
      label: "IMPACT",
      count: initiatives.filter(a => a.domain === "IMPACT").length,
      icon: HeartIcon,
    },
  ];

  const filteredInitiatives = selectedDomain === "all"
    ? initiatives
    : initiatives.filter(init => init.domain === selectedDomain);

  return (
    <main className="min-h-screen bg-primary text-white overflow-hidden">
      {/* 1. Industrial Hero */}
      <section className="relative pt-40 pb-20 border-b border-white/5">
        <TechnicalGrid />
        <div className="container relative mx-auto px-4 z-10">
           <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-12 h-[1px] bg-secondary" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-gray-500 uppercase">
                   Events // 2026_Cycle
                </span>
              </motion.div>

              <h1 className="font-heading text-5xl sm:text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-12">
                Ennova<br />
                <span className="italic text-gradient-accent">Initiatives</span>
              </h1>

              <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                A high-fidelity record of Ennova&apos;s events, bringin in together the most talented future entreprenuers from Barcelona and more.
              </p>
           </div>
        </div>

        {/* Background Film Grain Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </section>

      {/* Domain Filtering - Industrial Style */}
      <section className="sticky top-20 z-40 bg-primary/95 backdrop-blur-xl border-b border-white/5 py-6">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-black text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 border ${
                    selectedDomain === domain.id
                      ? "bg-white text-primary border-white"
                      : "bg-transparent text-gray-500 hover:text-white border-white/10 hover:border-white/30"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {domain.label}
                  <span className={`${
                    selectedDomain === domain.id ? "text-primary/60" : "text-gray-700"
                  }`}>
                    [{domain.count}]
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Vertical Scrolling Initiatives Section */}
      <section className="relative">
        {filteredInitiatives.length > 0 ? (
          <VerticalInitiativesLayout key={selectedDomain} initiatives={filteredInitiatives} />
        ) : (
          <div className="py-40 text-center">
            <FileTextIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No initiatives found</h3>
            <p className="text-gray-500">
              Check back later for new deployments in this domain.
            </p>
          </div>
        )}
      </section>

      {/* 3. Terminal Style CTA */}
      <section className="py-40 bg-white text-primary relative overflow-hidden">
        <TechnicalGrid />
         <div className="container relative mx-auto px-4 text-center z-10">
            <h2 className="font-heading text-5xl md:text-8xl font-black tracking-tighter uppercase mb-12">
               Participate in the <br />Next Events
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              While this hub showcases our ecosystem impact, <strong className="text-primary">all event registrations
              and logistics are managed through our dedicated Events Platform</strong>. Browse upcoming
              opportunities, register instantly, and track your involvement.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
               <Button
                as="a"
                href={siteConfig.links.platform}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 px-12 bg-primary text-white rounded-none font-black text-xs uppercase tracking-widest hover:bg-secondary"
                endContent={<ArrowSquareOutIcon className="w-5 h-5" />}
               >
                 Join Events
               </Button>
               <Button
                  as={NextLink}
                  href="/work-with-us"
                  className="h-16 px-12 bg-transparent text-primary rounded-none font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white border-2 border-primary transition-all"
                  endContent={<ArrowRightIcon className="w-5 h-5" />}
                >
                  Partner With Us
                </Button>
            </div>
         </div>
      </section>
    </main>
  );
}
