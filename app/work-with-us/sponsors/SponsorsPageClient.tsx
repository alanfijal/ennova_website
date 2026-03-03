"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { ArrowRightIcon, UsersIcon, MegaphoneIcon, CrownIcon, CaretRightIcon, ShieldCheckIcon } from "@phosphor-icons/react";
import { Button } from "@heroui/button";
import { ContactForm } from "@/components/features/ContactForm";
import type { SerializableEvent } from "@/sanity/lib/fetch";
import { corporatePartners } from "@/data/partners";
import Image from "next/image";

const talentAccessFeatures = [
  "CV Book with full participant profiles and background information",
  "Private branded interview rooms during the event",
  "Sponsored challenge with assessment center format to evaluate candidates in real-time",
  "Exclusive post-event candidate matching report with top prospects",
];

const brandVisibilityFeatures = [
  "Keynote speaking slot (15 minutes) on the main stage",
  "Logo placement on main stage backdrop and event materials",
  "Branded \"After-movie\" featuring your company and employees",
  "Premium booth space in high-traffic networking zone",
];

export function SponsorsPageClient({ events }: { events: SerializableEvent[] }) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-dark text-white">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 z-10 pt-20 pb-16">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card">
                <CrownIcon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-200">
                  Event Sponsorship
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.05] tracking-tight"
            >
              High-Impact{" "}
              <span className="text-gradient-accent">Visibility</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Sponsoring Ennova provides direct access to ESADE&apos;s top entrepreneurial talent from business,
              tech, and innovation tracks before they enter the competitive job market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                as={NextLink}
                href="#events"
                className="h-14 px-10 bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-none transition-all group"
                endContent={<ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              >
                Explore Events
              </Button>
              <Button
                as={NextLink}
                href="#contact"
                variant="bordered"
                className="h-14 px-10 border-white/30 text-white hover:bg-white/10 font-bold rounded-none"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get - Talent Access & Brand Visibility */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-dark tracking-tight">
              What You <span className="text-gradient-accent">Get</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Event sponsorship delivers measurable ROI across brand awareness and talent acquisition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Talent Access */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">Talent Access</h3>
              <p className="text-gray-600 mb-6">Direct pipeline to ESADE&apos;s top entrepreneurial students.</p>
              <ul className="space-y-3">
                {talentAccessFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CaretRightIcon className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Brand Visibility */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6">
                <MegaphoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">Brand Visibility</h3>
              <p className="text-gray-600 mb-6">Maximum exposure across all event touchpoints.</p>
              <ul className="space-y-3">
                {brandVisibilityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CaretRightIcon className="w-4 h-4 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flagship Events Portfolio */}
      <section id="events" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-dark tracking-tight">
              Flagship <span className="text-gradient-accent">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each event is carefully designed to maximize brand impact, talent connection, and innovation showcase opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NextLink href={`/events/${event.slug}`}>
                  <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Event Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold">
                          {event.domain}
                        </span>
                      </div>
                    </div>

                    {/* Event Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-secondary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {event.description}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(event.specs).map(([key, value]) => (
                          <span key={key} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </NextLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESADE Compliance */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-8 p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary flex-shrink-0">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark mb-3">Seamless Corporate Compliance</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  All financial transactions and compliance are managed directly through ESADE Business School,
                  providing seamless corporate invoicing, tax documentation, and vendor management for your
                  finance department.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-dark tracking-tight">
              Companies That Sponsor <span className="text-gradient-accent">Ennova</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From global leaders to local innovators, our sponsors span industries and scales
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {corporatePartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="px-8 py-6 rounded-2xl bg-white border border-gray-200 hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-lg font-bold text-dark">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Become a <span className="text-gradient-accent">Sponsor</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let&apos;s discuss how event sponsorship can connect your brand with ESADE&apos;s entrepreneurial community
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
