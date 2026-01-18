"use client";

import { motion } from "framer-motion";

export const BarcelonaBadge = () => {
  return (
    <div className="fixed bottom-10 left-10 z-50 pointer-events-none hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl"
      >
        {/* Minimalist Skyline SVG */}
        <svg width="60" height="20" viewBox="0 0 100 30" fill="none" className="text-secondary opacity-60">
          <path d="M0 30H100V25H90V10H80V25H70V5H60V25H50V15H40V25H30V0H20V25H10V30H0Z" fill="currentColor" fillOpacity="0.3"/>
          <path d="M10 25V30M30 0V30M50 15V30M70 5V30M90 10V30" stroke="currentColor" strokeWidth="1"/>
        </svg>

        <div className="flex flex-col">
          <span className="text-[10px] font-black tracking-widest text-white uppercase">BCN // HUB</span>
          <span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">
            41.3851° N, 2.1734° E
          </span>
        </div>
      </motion.div>
    </div>
  );
};
