"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface HolographicLogoProps {
  src: string;
  size?: "navbar" | "sm" | "md" | "lg";
  className?: string;
}

export const HolographicLogo = ({ src, size = "lg", className = "" }: HolographicLogoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinates for the 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform coordinates into degrees of rotation (less intense for navbar)
  const rotationIntensity = (size === "navbar" || size === "sm") ? 8 : 15;
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${rotationIntensity}deg`, `-${rotationIntensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${rotationIntensity}deg`, `${rotationIntensity}deg`]);

  // Handle mouse movement over the logo
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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

  // Size classes
  const sizeClasses = {
    navbar: "w-16 h-16",
    sm: "w-12 h-12",
    md: "w-32 h-32",
    lg: "w-64 h-64 md:w-80 md:h-80",
  };

  const borderRadiusClasses = {
    navbar: "rounded-2xl",
    sm: "rounded-xl",
    md: "rounded-2xl",
    lg: "rounded-[3rem]",
  };

  const accentSizeClasses = {
    navbar: "w-5 h-5",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${sizeClasses[size]} flex items-center justify-center group ${className}`}
    >
      {/* 1. Ambient Background Glow behind the logo */}
      <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full group-hover:bg-secondary/30 transition-colors duration-700" />

      {/* 2. The Glass "Slab" */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className={`relative w-full h-full glass-dark ${borderRadiusClasses[size]} border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl`}
      >
        {/* The Interactive Shine Effect */}
        <motion.div
          style={{
            background: "radial-gradient(circle at center, rgba(0,174,239,0.15) 0%, transparent 80%)",
            x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
          }}
          className="absolute inset-0 pointer-events-none"
        />

        {/* 3. The Logo itself with a "Holographic" feel */}
        <motion.img
          src={src}
          alt="Ennova Logo"
          className="w-2/3 h-2/3 object-contain drop-shadow-[0_0_15px_rgba(0,174,239,0.5)] transition-transform duration-500 group-hover:scale-110"
          style={{ transform: "translateZ(80px)" }}
        />

        {/* 4. Scanning Line Effect (Technical/Robotic Vibe) - shown on navbar and medium+ */}
        {size !== "sm" && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent h-1/2 w-full animate-marquee-vertical opacity-20 pointer-events-none" />
        )}
      </div>

      {/* 5. Corner Accents (The "Extraordinary" touch) - shown on navbar and medium+ */}
      {size !== "sm" && (
        <>
          <div className={`absolute -top-2 -left-2 ${accentSizeClasses[size]} border-t-2 border-l-2 border-secondary/50 rounded-tl-xl`} />
          <div className={`absolute -bottom-2 -right-2 ${accentSizeClasses[size]} border-b-2 border-r-2 border-secondary/50 rounded-br-xl`} />
        </>
      )}
    </motion.div>
  );
};