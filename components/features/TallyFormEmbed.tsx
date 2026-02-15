"use client";

import { motion } from "framer-motion";
import { ClockIcon, BellIcon } from "@phosphor-icons/react";

interface TallyFormEmbedProps {
  showComingSoon?: boolean;
}

export function TallyFormEmbed({
  showComingSoon = true,
}: TallyFormEmbedProps) {
  return (
    <div className="w-full">
      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 backdrop-blur-sm rounded-2xl border-2 border-dashed border-primary/30 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full" />
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-secondary rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-primary/50 rounded-full" />
        </div>

        {/* Content */}
        <div className="relative text-center p-8 md:p-12 max-w-2xl">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-gradient-to-br from-primary to-secondary rounded-full"
          >
            <ClockIcon className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Coming Soon
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/70 mb-8"
          >
            We&apos;re preparing an amazing application experience for you.
            Recruitment applications will open soon!
          </motion.p>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-4 mb-8"
          >
            <div className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <BellIcon className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Get Notified</h4>
              </div>
              <p className="text-sm text-foreground/60">
                Follow us on social media to be the first to know when applications open
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-secondary/20">
              <div className="flex items-center gap-3 mb-2">
                <ClockIcon className="w-5 h-5 text-secondary" />
                <h4 className="font-semibold">Stay Tuned</h4>
              </div>
              <p className="text-sm text-foreground/60">
                Check back soon for updates on our recruitment timeline
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-foreground/50"
          >
            Questions? Reach out to us at{" "}
            <a
              href="mailto:recruitment@ennova.org"
              className="text-primary hover:underline font-medium"
            >
              recruitment@ennova.org
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
