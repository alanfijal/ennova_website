"use client";

import { Button } from "@heroui/button";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";

import { applications, applyShareUrl } from "@/config/site";
import { CopyLinkButton } from "@/components/shared/CopyLinkButton";

/** Home-page announcement — renders nothing once the intake closes. */
export function ApplicationsBanner() {
  if (!applications.isOpen) return null;

  return (
    <section className="relative z-30 w-full bg-[#000313] border-y border-white/10 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left"
      >
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary">
              Applications are open
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            Join Ennova this year
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            We take a limited number of members a year. Applications are open now
            {applications.deadline ? ` until ${applications.deadline}` : ""}. Apply
            before they close.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              as="a"
              href={applications.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-10 bg-white text-dark hover:bg-secondary hover:text-white font-black rounded-none transition-all group"
              endContent={
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              }
            >
              Apply Now
            </Button>
            <NextLink
              href={applications.anchor}
              className="text-sm font-bold text-gray-300 hover:text-secondary transition-colors underline underline-offset-4"
            >
              Read more first
            </NextLink>
          </div>
          <CopyLinkButton
            url={applyShareUrl}
            label="Copy link to share"
            className="text-gray-500 hover:text-secondary"
          />
        </div>
      </motion.div>
    </section>
  );
}
