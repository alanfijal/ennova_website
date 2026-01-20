"use client";

import { motion } from "framer-motion";

export const BarcelonaBadge = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50 hidden lg:block group">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ opacity: 0, x: -10 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-lg shadow-2xl pointer-events-auto cursor-pointer"
      >
        {/* Barcelona Skyline SVG - Vertical Oriented */}
        <svg
          width="50"
          height="18"
          viewBox="0 0 100 30"
          fill="none"
          className="text-secondary opacity-80"
        >
          {/* Detailed Barcelona Skyline Silhouette */}
          <path
            d="M0 25
               L10 25 L12 12 Q22 12 25 25
               L35 25 L35 15 L38 15 L38 25
               L42 25 L45 8 L48 25
               L50 25 L54 4 L58 25
               L60 25 L63 8 L66 25
               L75 25 Q82 6 89 25
               L100 25 V30 H0 Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
        </svg>

        <div className="w-full h-px bg-white/10" />

        <div className="flex flex-col items-center text-center">
          <span className="text-[9px] font-black tracking-[0.2em] text-white uppercase leading-tight">BCN // HUB</span>
          <span className="text-[7px] font-mono text-gray-500 uppercase tracking-tight leading-tight mt-1">
            41.3851° N<br />2.1734° E
          </span>
        </div>
      </motion.div>
    </div>
  );
};