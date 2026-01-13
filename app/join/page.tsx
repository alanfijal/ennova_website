"use client";

import { motion } from "framer-motion";
import { MasonryGallery } from "@/components/features/MasonryGallery";
import { TallyFormEmbed } from "@/components/features/TallyFormEmbed";

export default function JoinPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section with Animation */}
      <section className="relative w-full py-20 px-6 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Join Ennova
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto"
          >
            Be part of a community that transforms ideas into impact.
            Join Europe&apos;s leading student consulting and entrepreneurship organization.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
              <div className="text-sm text-foreground/60 mt-1">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-foreground/60 mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-foreground/60 mt-1">Years Legacy</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life at Ennova - Masonry Gallery */}
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Life at Ennova
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              From ski trips to networking dinners, we create unforgettable experiences
              while building the next generation of entrepreneurs and consultants.
            </p>
          </motion.div>

          <MasonryGallery />
        </div>
      </section>

      {/* Application Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-b from-background/50 to-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Apply Now
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Take the first step towards joining our community
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TallyFormEmbed />
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Why Join Ennova?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Real Impact</h3>
              <p className="text-foreground/70">
                Work on real consulting projects with leading companies and launch ventures that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 backdrop-blur-md border border-secondary/20 hover:border-secondary/40 transition-colors"
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-3">Personal Growth</h3>
              <p className="text-foreground/70">
                Develop your skills through workshops, mentorship, and hands-on experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Lifelong Network</h3>
              <p className="text-foreground/70">
                Connect with ambitious peers, alumni, and industry leaders across Europe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
