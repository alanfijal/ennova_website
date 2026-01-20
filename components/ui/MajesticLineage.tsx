"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, CircleDot } from "lucide-react";

const eras = [
  {
    id: "01",
    year: "2019",
    era: "THE GENESIS",
    title: "The First Spark",
    description: "A collective of engineering students at Sheridan decide to tear down the walls between the classroom and the real world. Ennova is born.",
    metric: "12 Visionaries"
  },
  {
    id: "02",
    year: "2021",
    era: "THE EXPANSION",
    title: "Scaling the Network",
    description: "From a small group to a 200-node ecosystem. We deployed our first 10 specialized departments, each a powerhouse of niche innovation.",
    metric: "10 Departments"
  },
  {
    id: "03",
    year: "2023",
    era: "THE VALIDATION",
    title: "Market Proof",
    description: "The first Ennova-born venture is acquired for $2.5M. We proved that student intelligence isn't just potential—it's high-value capital.",
    metric: "$2.5M Exit"
  },
  {
    id: "04",
    year: "2024",
    era: "THE STANDARD",
    title: "Global Pings",
    description: "Deloitte and global partners join the circle. Ennova is officially recognized as the premiere student innovation hub in the country.",
    metric: "Global Impact"
  },
  {
    id: "05",
    year: "2026",
    era: "THE BEYOND",
    title: "Your Chapter",
    description: "The system is ready. The next deployment isn't ours—it's yours. Join the lineage and define what happens next.",
    metric: "Unlimited"
  }
];

export function MajesticLineage() {
  const [activeEra, setActiveEra] = useState<number>(0);

  return (
    <section className="relative py-40 bg-[#000313] overflow-hidden">
      {/* Background Glow removed for a clean, high-contrast aesthetic */}
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <div className="mb-32 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <CircleDot className="text-secondary w-4 h-4 animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-gray-500 uppercase">Operational History // Deployment Log</span>
            </div>
            <h2 className="font-heading text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-white leading-[0.8]">
              Strategic <br /> <span className="italic text-gradient-accent">Lineage</span>
            </h2>
          </div>
          <div className="max-w-xs border-l border-white/10 pl-6 py-2">
            <p className="text-gray-500 font-mono text-[10px] leading-relaxed tracking-widest uppercase">
              Chronological system upgrades that transformed Ennova into a professional powerhouse.
            </p>
          </div>
        </div>

        {/* 2. The Era Scroller */}
        <div className="flex flex-col border-t border-white/5">
          {eras.map((era, index) => {
            const isActive = activeEra === index;

            return (
              <div
                key={era.id}
                onMouseEnter={() => setActiveEra(index)}
                className="group relative border-b border-white/5 py-16 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 relative z-10">
                  
                  {/* Era Label & Year */}
                  <div className="flex items-center gap-12 min-w-[300px]">
                    <span className={`font-mono text-xs transition-colors duration-700 ${isActive ? 'text-secondary' : 'text-gray-700'}`}>
                      {era.id} // 05
                    </span>
                    <h3 className={`font-heading text-6xl md:text-9xl font-black transition-all duration-1000 uppercase tracking-tighter ${
                      isActive ? 'text-white' : 'text-white/5'
                    }`}>
                      {era.year}
                    </h3>
                  </div>

                  {/* Cinematic Content Reveal */}
                  <div className="max-w-2xl flex-grow">
                    <div className={`transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-secondary" />
                        <span className="font-mono text-[10px] text-secondary tracking-[0.4em] font-black uppercase">{era.era}</span>
                      </div>
                      
                      <h4 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight italic text-balance">
                        {era.title}
                      </h4>
                      
                      <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl">
                        {era.description}
                      </p>
                      
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                           <Sparkles className="w-4 h-4 text-secondary" />
                           <span className="font-mono text-[10px] text-white tracking-[0.3em] uppercase font-bold">{era.metric}</span>
                        </div>
                        <motion.div 
                          animate={{ x: isActive ? [0, 5, 0] : 0 }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="text-secondary hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase font-black"
                        >
                          System Log Verified <ArrowUpRight size={14} />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Status Brackets */}
                  <div className="hidden xl:flex flex-col items-end gap-2 text-right opacity-20">
                     <div className="text-[8px] font-mono text-white uppercase tracking-[0.5em]">Auth: BCN_HUB</div>
                     <div className="w-20 h-px bg-white/20" />
                     <div className="text-[8px] font-mono text-white uppercase tracking-[0.5em]">Sector: {era.id}</div>
                  </div>
                </div>

                {/* Massive Kinetic Ghost Text */}
                <motion.div 
                  animate={{ 
                    opacity: isActive ? 0.07 : 0,
                    x: isActive ? 50 : 150,
                    skewX: isActive ? -5 : 0
                  }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[25rem] font-black text-white pointer-events-none select-none z-0 italic"
                >
                  {era.year}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Corner Brackets */}
      <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-white/5 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-white/5 pointer-events-none" />
      
      <div className="absolute bottom-10 right-10 flex gap-12 font-mono text-[8px] text-gray-700 tracking-[0.5em] uppercase">
         <span>Sequence: {activeEra + 1} // 05</span>
         <span className="text-secondary animate-pulse underline underline-offset-8">Status: Stable</span>
      </div>
    </section>
  );
}