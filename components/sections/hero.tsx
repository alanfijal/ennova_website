"use client";

import { useEffect, useRef } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Globe } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import NextLink from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-dark text-white"
    >
      {/* 1. The "Ethereal" Background Layer - Breathing Effect */}
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0"
          quantity={200}
          ease={80}
          color="rgb(0, 174, 239)"
          size={0.8}
          staticity={30}
        />
        {/* Animated Gradient Orbs - Breathing & Moving */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-secondary/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.08, 0.12, 0.08],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"
        />
      </div>

      {/* 2. Interactive Content Layer */}
      <motion.div
        style={{ y: y1, opacity, scale }}
        className="container relative z-10 mx-auto px-4 w-full"
      >
        <div className="max-w-6xl mx-auto text-center w-full overflow-hidden">
          
          {/* Badge: High-Energy Intro */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-dark border border-white/10 group cursor-default">
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400 group-hover:text-white transition-colors">
                The Future of Engineering is Here
              </span>
            </div>
          </motion.div>

          {/* Majestic Heading: Using Cal Sans + Kinetic Split Text */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black mb-10 leading-[0.85] tracking-tighter uppercase px-4">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="block"
            >
              Engineering
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gradient-accent block italic"
            >
              Excellence
            </motion.span>
          </h1>

          {/* Refined Subtext: Geist Sans Precision */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-lg md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Bridging the gap between Esade&apos;s brightest minds and the global innovation ecosystem.
          </motion.p>

          {/* Action Group: High Contrast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Button
              as={Link}
              href="/work-with-us"
              className="h-16 px-12 bg-white text-dark hover:bg-secondary hover:text-white font-black text-lg rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all group"
              endContent={<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />}
            >
              Work With Us
            </Button>
            
            <NextLink href="/join" className="group flex items-center gap-3 text-white font-bold text-lg hover:text-secondary transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors">
                 <Globe className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              Join the Community
            </NextLink>
          </motion.div>
        </div>
      </motion.div>

      {/* 3. Cinematic Bottom Mask */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gradient to-transparent z-20 pointer-events-none" />
    </section>
  );
}