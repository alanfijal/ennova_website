"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const TeamReveal = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imageRef.current,
      { clipPath: "inset(20% 30% 20% 30% round 40px)" },
      {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-[#13182e] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={imageRef} className="relative w-full h-full overflow-hidden">
          {/* Overlay to match Ennova aesthetic */}
          <div className="absolute inset-0 bg-[#13182e]/40 z-10" />

          <Image
            src="/images/community/IMG_1178.JPG"
            alt="Ennova Team"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover grayscale"
          />

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-center w-full px-4">
            <h2 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-tighter italic">
              The Humans Behind <span className="text-secondary">Innovation</span>
            </h2>
            <p className="text-white-400 font-mono text-sm mt-4 uppercase tracking-[0.4em]">
              80+ Entreprenuers & Visionaries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
