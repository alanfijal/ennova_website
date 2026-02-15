"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";
import NextLink from "next/link";
import { Button } from "@heroui/button";

interface HolographicTierCardProps {
  tier: string;
  price: string;
  features: string[];
  color: string;
  hologramColor: string;
  recommended?: boolean;
  delay?: number;
}

export function HolographicTierCard({
  tier,
  price,
  features,
  color,
  hologramColor,
  recommended = false,
  delay = 0,
}: HolographicTierCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse coordinates for the 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform coordinates into degrees of rotation (moderate intensity)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Holographic shine position
  const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]);
  const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]);

  // Handle mouse movement over the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group cursor-default ${recommended ? "scale-105" : ""}`}
    >
      {/* Recommended Badge */}
      {recommended && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 px-6 py-2 rounded-full bg-gradient-to-r from-secondary to-gradient text-white font-bold text-sm shadow-xl shadow-secondary/50"
        >
          Most Popular
        </motion.div>
      )}

      {/* Ambient Glow */}
      <div
        className="absolute inset-0 blur-[80px] rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${hologramColor}, transparent 70%)`,
        }}
      />

      {/* The Card Container */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
          recommended
            ? "bg-white border-2 border-secondary"
            : "glass-dark border border-white/10"
        }`}
      >
        {/* Holographic Shine Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${hologramColor}40 0%, transparent 60%)`,
            x: shineX,
            y: shineY,
          }}
        />

        {/* Iridescent Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, transparent 0%, ${hologramColor}15 50%, transparent 100%)`,
          }}
        />

        {/* Tier Badge at Top */}
        <div className="relative z-20 p-8 pb-6">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${color} mb-6 shadow-lg`}
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="text-4xl font-extrabold text-white">{tier[0]}</div>
          </div>

          <h3
            className={`text-4xl font-extrabold mb-2 tracking-tight ${
              recommended ? "text-dark" : "text-white"
            }`}
            style={{ transform: "translateZ(25px)" }}
          >
            {tier}
          </h3>

          <div
            className={`text-5xl font-extrabold mb-6 ${
              recommended ? "text-secondary" : "text-white"
            }`}
            style={{ transform: "translateZ(20px)" }}
          >
            {price}
          </div>

          <div className={`h-px w-full mb-6 ${recommended ? "bg-gray-200" : "bg-white/10"}`} />
        </div>

        {/* Features List */}
        <div className="relative z-20 px-8 pb-8">
          <ul className="space-y-4 mb-8" style={{ transform: "translateZ(15px)" }}>
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.1 + idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    recommended ? "bg-secondary/10" : "bg-white/10"
                  }`}
                >
                  <CheckIcon
                    className={`w-4 h-4 ${
                      recommended ? "text-secondary" : "text-secondary"
                    }`}
                  />
                </div>
                <span
                  className={`leading-relaxed ${
                    recommended ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>

          <Button
            as={NextLink}
            href="#contact"
            className={`w-full font-bold rounded-full h-14 transition-all group/btn ${
              recommended
                ? "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/30"
                : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
            }`}
            style={{ transform: "translateZ(20px)" }}
            endContent={
              <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            }
          >
            Choose {tier}
          </Button>
        </div>

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-5"
          initial={{ y: "-100%" }}
          animate={{ y: "200%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          style={{
            background: `linear-gradient(to bottom, transparent, ${hologramColor}20, transparent)`,
            height: "30%",
          }}
        />

        {/* Edge Glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 60px ${hologramColor}40`,
          }}
        />
      </div>

      {/* 3D Corner Accents */}
      <div
        style={{ transform: "translateZ(60px)", borderColor: hologramColor }}
        className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
      >
        <div
          className="absolute -top-1 -left-1 w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: hologramColor }}
        />
      </div>

      <div
        style={{ transform: "translateZ(60px)", borderColor: hologramColor }}
        className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
      >
        <div
          className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: hologramColor, animationDelay: "0.5s" }}
        />
      </div>
    </motion.div>
  );
}
