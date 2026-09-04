"use client";

import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { ArrowRightIcon, LockIcon } from "@phosphor-icons/react";

import { applications, applyShareUrl } from "@/config/site";
import { CopyLinkButton } from "@/components/shared/CopyLinkButton";

export function ApplicationsCTA() {
  if (!applications.isOpen) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-5">
          <LockIcon className="w-5 h-5 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">
          Applications are closed
        </h3>
        <p className="text-sm text-gray-400 max-w-xs">
          Follow us on social media to know when they reopen.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full py-12 px-8 md:px-12 flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl shadow-gray-200/50"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
        </span>
        <span className="text-[11px] font-black tracking-[0.2em] uppercase text-secondary">
          Applications open
        </span>
      </div>

      <h3 className="font-heading text-3xl md:text-4xl font-black text-primary mb-3">
        Ready to apply?
      </h3>
      <p className="text-base text-slate-500 max-w-md mb-8 leading-relaxed">
        Applications for the next intake are open. Fill in the form, it takes
        about 10 minutes.
        {applications.deadline ? ` Closes ${applications.deadline}.` : ""}
      </p>

      <Button
        as="a"
        href={applications.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="h-16 px-12 bg-primary text-white hover:bg-secondary hover:text-white font-black text-lg rounded-none transition-all shadow-lg group"
        endContent={
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        }
      >
        Apply Now
      </Button>

      <div className="mt-8 pt-6 border-t border-gray-200 w-full flex flex-col items-center gap-2">
        <p className="text-xs text-slate-400">Know someone who should apply?</p>
        <CopyLinkButton
          url={applyShareUrl}
          label="Copy link to this section"
          className="text-primary hover:text-secondary"
        />
      </div>
    </motion.div>
  );
}
