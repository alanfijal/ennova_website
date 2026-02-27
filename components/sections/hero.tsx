"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon, SparkleIcon, GlobeIcon, CalendarIcon } from "@phosphor-icons/react";
import NextLink from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["0em", "0.15em"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#030712] text-white"
    >
      {/* Background: Mouse-following light source */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(0,174,239,0.15)_0%,transparent_70%)] blur-[120px] pointer-events-none"
      />

      {/* Grid overlay — fades to edges */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Interactive content layer */}
      <motion.div
        style={{ y: y1, opacity, scale }}
        className="container relative z-10 mx-auto px-4 w-full"
      >
        <div className="max-w-6xl mx-auto text-center w-full">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-dark border border-white/10 group cursor-default">
              <SparkleIcon className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400 group-hover:text-white transition-colors">
                Inspiring the Next Wave of Innovators
              </span>
            </div>
          </motion.div>

          {/* Kinetic heading */}
          <div className="overflow-hidden mb-10">
            <motion.h1
              style={{ letterSpacing }}
              initial={{ y: "100%", skewY: 10 }}
              animate={{ y: 0, skewY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase px-4"
            >
              Ennova
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-lg md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Bridging the gap between Barcelona's brightest talents and the global innovation ecosystem.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Button
              as={Link}
              href="/work-with-us"
              className="h-16 px-12 bg-white text-dark hover:bg-secondary hover:text-white font-black text-lg rounded-none shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all group"
              endContent={<ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" />}
            >
              Work With Us
            </Button>

            <NextLink href="/join" className="group flex items-center gap-3 text-white font-bold text-lg hover:text-secondary transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors">
                <GlobeIcon className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              Join the Community
            </NextLink>
          </motion.div>

          {/* View Events — discreet tertiary link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-6"
          >
            <NextLink
              href="/events"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 text-sm text-gray-300 hover:text-white hover:border-white/35 transition-all"
            >
              <CalendarIcon className="w-4 h-4" />
              View Events
            </NextLink>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gradient to-transparent z-20 pointer-events-none" />
    </section>
  );
}
