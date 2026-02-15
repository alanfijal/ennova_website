"use client";

import { useEffect, useRef } from "react";
import { UsersIcon, BriefcaseIcon, TrophyIcon, TrendUpIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NumberTicker } from "@/components/magicui/number-ticker";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    icon: UsersIcon,
    value: 500,
    suffix: "+",
    label: "Active Members",
    description: "Engineering students collaborating",
  },
  {
    icon: BriefcaseIcon,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Innovative solutions delivered",
  },
  {
    icon: TrophyIcon,
    value: 15,
    suffix: "+",
    label: "Departments",
    description: "Specialized technical teams",
  },
  {
    icon: TrendUpIcon,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Project completion rate",
  },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger animation for stat cards
      gsap.fromTo(
        cardsRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-primary overflow-hidden">
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full z-0" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Our Impact in <span className="italic text-gradient-accent">Numbers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Quantifying the engineering excellence we bring to the Sheridan ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative glass-dark p-8 rounded-3xl transition-all duration-500 hover:border-secondary/40 hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle Card Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-500">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  
                  <div className="text-5xl font-extrabold mb-3 text-white tracking-tighter">
                    <NumberTicker value={stat.value} className="text-white" />
                    <span className="text-secondary">{stat.suffix}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-white/90">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}