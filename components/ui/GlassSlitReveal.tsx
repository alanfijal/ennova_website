"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface GlassSlitRevealProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export function GlassSlitReveal({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
}: GlassSlitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to reveal percentage (0-100%)
  const revealProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100]);

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-gray-900 via-dark to-gray-900 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,111,0,0.1),transparent_70%)]" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            The <span className="text-gradient-accent">Talent Pipeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch our engineering students transform from academic excellence to industry leaders.
            Your partnership provides the bridge.
          </p>
        </motion.div>

        {/* Glass Slit Reveal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Before Image (Student in Lab) */}
          <div className="absolute inset-0 w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${beforeImage})`,
              }}
            >
              {/* Placeholder gradient if image doesn't load */}
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🔬</div>
                  <h3 className="text-3xl font-bold text-white mb-2">{beforeLabel}</h3>
                  <p className="text-gray-300">Learning, Building, Innovating</p>
                </div>
              </div>
            </div>
          </div>

          {/* After Image (Professional in Office) - Revealed via Slit */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              clipPath: useTransform(
                revealProgress,
                (value) => `inset(0 ${100 - value}% 0 0)`
              ),
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${afterImage})`,
              }}
            >
              {/* Placeholder gradient if image doesn't load */}
              <div className="w-full h-full bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💼</div>
                  <h3 className="text-3xl font-bold text-white mb-2">{afterLabel}</h3>
                  <p className="text-gray-300">Leading, Delivering, Excelling</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Glass Slit Effect - The Reveal Line */}
          <motion.div
            className="absolute top-0 bottom-0 w-1 pointer-events-none z-10"
            style={{
              left: useTransform(revealProgress, (value) => `${value}%`),
              background: "linear-gradient(to bottom, transparent, rgba(255,111,0,0.8) 20%, rgba(255,111,0,0.8) 80%, transparent)",
              boxShadow: "0 0 30px 10px rgba(255,111,0,0.6)",
            }}
          />

          {/* Frosted Glass Overlay on the Slit */}
          <motion.div
            className="absolute top-0 bottom-0 w-20 pointer-events-none z-10"
            style={{
              left: useTransform(revealProgress, (value) => `calc(${value}% - 40px)`),
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          />

          {/* Labels */}
          <div className="absolute bottom-8 left-8 z-20">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card"
              style={{
                opacity: useTransform(revealProgress, [0, 30], [1, 0]),
              }}
            >
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-white font-bold text-sm">{beforeLabel}</span>
            </motion.div>
          </div>

          <div className="absolute bottom-8 right-8 z-20">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card"
              style={{
                opacity: useTransform(revealProgress, [70, 100], [0, 1]),
              }}
            >
              <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
              <span className="text-white font-bold text-sm">{afterLabel}</span>
            </motion.div>
          </div>

          {/* Progress Indicator */}
          <motion.div
            className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="px-6 py-3 rounded-full glass-dark backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="text-white text-sm font-mono">
                  Scroll to reveal transformation
                </div>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ↓
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Journey Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
        >
          <div className="text-center p-6 rounded-2xl glass-card">
            <div className="text-4xl font-extrabold text-white mb-2">85%</div>
            <div className="text-gray-300 text-sm">
              Ennova members receive job offers before graduation
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-card">
            <div className="text-4xl font-extrabold text-white mb-2">$75K+</div>
            <div className="text-gray-300 text-sm">
              Average starting salary for our engineering graduates
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-card">
            <div className="text-4xl font-extrabold text-white mb-2">6-12</div>
            <div className="text-gray-300 text-sm">
              Months from Ennova member to your full-time employee
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
