"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { siteConfig } from "@/config/site";
import { HolographicLogo } from "@/components/ui/HolographicLogo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Social Icons remain consistent with your branding
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !navRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial transparent state
      gsap.set(navRef.current, {
        backgroundColor: "rgba(0, 26, 59, 0)",
        backdropFilter: "blur(0px)",
        borderBottomColor: "rgba(255, 255, 255, 0)",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      });

      // Transparent to Glass transition on scroll
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: "body",
          start: "50px top",
          end: "150px top",
          scrub: true,
        },
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(0, 26, 59, 0.85)", // Navy with transparency
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      });

      if (logoRef.current) {
        gsap.to(logoRef.current, {
          scrollTrigger: {
            trigger: "body",
            start: "50px top",
            end: "150px top",
            scrub: true,
          },
          scale: 0.9,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all duration-500"
        style={{
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* 1. Primary Homepage Link via Logo */}
            <NextLink href="/" className="relative z-10" aria-label="Ennova Home">
              <div ref={logoRef}>
                <HolographicLogo
                  src="/images/community/ennova-logo-white copy.png"
                  size="navbar"
                />
              </div>
            </NextLink>

            {/* 2. Streamlined Navigation (Home removed per decision) */}
            <div className="hidden lg:flex items-center gap-8">
              {siteConfig.navItems
                .filter(item => item.href !== "/")
                .map((item) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-semibold transition-colors duration-300 group ${
                    pathname === item.href
                      ? "text-secondary"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </NextLink>
              ))}
            </div>

            {/* 3. Corporate & Social Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex gap-3 mr-2">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
              <Button
                as={NextLink}
                href="https://ennova-events.com/"
                className="bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-full transition-all duration-500 px-6"
              >
                Join Events
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-dark/95 backdrop-blur-xl"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              <nav className="flex flex-col gap-2">
                {siteConfig.navMenuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NextLink
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-4 px-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                        pathname === item.href
                          ? "bg-secondary/20 text-secondary"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </NextLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pb-8">
                <Button
                  as={NextLink}
                  href="https://ennova-events.com/"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-full transition-all duration-500 h-12"
                >
                  Join Events
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};