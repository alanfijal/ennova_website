"use client";

import { motion } from "framer-motion";
import { HolographicLogo } from "@/components/ui/HolographicLogo";

export function BrandArtifactSection() {
  return (
    <section className="py-32 bg-primary flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HolographicLogo src="/images/community/ennova-logo copy.png" />
      </motion.div>

      <div className="mt-16 max-w-xl">
        <h2 className="font-heading text-4xl text-white mb-4 italic">
          More than a mark. <br />
          <span className="text-secondary text-2xl uppercase tracking-[0.3em] font-sans font-black">
            An Engineering Legacy
          </span>
        </h2>
        <p className="text-gray-400 text-sm font-mono leading-relaxed">
          The current emblem represents our journey from student collective to
          professional ecosystem leader. It remains our standard until the 2026 evolution.
        </p>
      </div>
    </section>
  );
}
