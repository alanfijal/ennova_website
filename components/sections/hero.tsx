"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#13182e] text-white">
      {/* 1. Enhanced Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={100}
        color="#00AEEF"
        size={0.6}
        staticity={40}
      />

      {/* 2. Abstract Ambient Glows (This adds the "stunning" depth) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00AEEF]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card">
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">
                Innovation Through Collaboration
              </span>
            </div>
          </motion.div>

          {/* Headline with Kinetic feel */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight"
          >
            Empowering <br />
            <span className="text-gradient-accent">Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Ennova connects bright minds with global corporate partners to drive technical excellence through hands-on engineering projects.
          </motion.p>

          {/* Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              as={Link}
              href="/work-with-us"
              className="h-14 px-10 bg-white text-[#13182e] hover:bg-[#00AEEF] hover:text-white font-bold rounded-full transition-all group"
              endContent={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            >
              Work With Us
            </Button>
            <Button
              as={Link}
              href="/join"
              variant="bordered"
              className="h-14 px-10 border-white/20 text-white hover:bg-white/5 font-bold rounded-full"
            >
              Join the Community
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}