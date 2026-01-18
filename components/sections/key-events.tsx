"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Featured key events data
const keyEvents = [
  {
    id: 1,
    title: "Sustainable Energy Innovation Summit",
    description: "Join industry leaders for a deep-dive into renewable energy solutions. Network with Fortune 500 companies and witness student-led innovation showcases.",
    date: "March 2026",
    participants: "250+ Participants",
    category: "Sustainability",
    slug: "sustainable-energy-summit",
    gradient: "from-emerald-500/20 to-green-500/10",
    iconColor: "text-emerald-400",
  },
  {
    id: 2,
    title: "Entrepreneurship Pitch Competition",
    description: "Annual competition showcasing student ventures with $500K in seed funding commitments. Get mentorship from serial entrepreneurs and VCs.",
    date: "April 2026",
    participants: "150+ Participants",
    category: "Entrepreneurship",
    slug: "startup-pitch-competition",
    gradient: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-400",
  },
  {
    id: 3,
    title: "AI Strategy Consulting Bootcamp",
    description: "Intensive training where students deliver AI transformation roadmaps to real SME clients under faculty supervision.",
    date: "February 2026",
    participants: "40+ Participants",
    category: "Consulting",
    slug: "ai-consulting-bootcamp",
    gradient: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
];

export function KeyEvents() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger animation for event cards
      gsap.fromTo(
        cardsRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-dark overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/15 blur-[150px] rounded-full"
        />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-dark border border-white/10">
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Upcoming Opportunities
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight"
          >
            Key <span className="text-gradient-accent italic">Events</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Join our flagship initiatives that connect students with industry leaders and drive real impact.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {keyEvents.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative glass-dark rounded-3xl p-8 transition-all duration-500 hover:border-secondary/40 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 ${event.iconColor} uppercase tracking-wider`}>
                    <Calendar className="w-3 h-3" />
                    {event.category}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-2xl font-extrabold mb-3 text-white group-hover:text-secondary transition-colors duration-300 tracking-tight leading-tight">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                {/* Event Meta */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Date</div>
                    <div className="text-sm font-bold text-white">{event.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase mb-1">Expected</div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-secondary">
                      <Users className="w-4 h-4" />
                      {event.participants.split(" ")[0]}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <NextLink href={`/events/${event.slug}`} className="block">
                  <div className="flex items-center justify-between text-white group-hover:text-secondary transition-colors duration-300">
                    <span className="font-bold text-sm">Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </NextLink>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            as={NextLink}
            href="/events"
            className="h-14 px-10 bg-white/10 text-white hover:bg-white hover:text-primary border border-white/20 font-bold text-base rounded-full shadow-lg transition-all group"
            endContent={<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />}
          >
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
