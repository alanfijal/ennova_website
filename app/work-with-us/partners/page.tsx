"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import Image from "next/image";
import { ArrowRightIcon, UsersIcon, RocketIcon, TrendUpIcon, BuildingsIcon, LightbulbIcon, TargetIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Button } from "@heroui/button";
import { ContactForm } from "@/components/features/ContactForm";
import { corporatePartners } from "@/data/partners";

const partnershipBenefits = [
  {
    icon: UsersIcon,
    title: "Exclusive Talent Access",
    description: "Gain early access to top emerging talent in Barcelona's innovation ecosystem while strengthening your employer brand as a supporter of student entrepreneurship.",
  },
  {
    icon: RocketIcon,
    title: "Hands-On Engagement",
    description: "Host innovation workshops, provide real-world case challenges for our competitions, serve as judges at our flagship pitch events, and join panel discussions on industry trends and entrepreneurship.",
  },
  {
    icon: TrendUpIcon,
    title: "Barcelona Entrepreneurship Ecosystem",
    description: "Position your brand at the forefront of Barcelona's student innovation movement and demonstrate genuine commitment to developing the next generation of entrepreneurs and leaders.",
  },
  {
    icon: BuildingsIcon,
    title: "Tailored to Your Needs",
    description: "Most engagements require minimal time commitment (typically 2-4 hours per event), with flexible scheduling tailored to your team's availability.",
  },
];

const engagementOptions = [
  "Host innovation workshops or technical skill-building sessions",
  "Provide real-world case challenges for our competitions",
  "Serve as judges at our flagship pitch events and innovation competitions",
  "Join panel discussions on industry trends, career paths, and entrepreneurship",
];

const idealPartners = [
  "Tech scale-ups",
  "Venture capital firms",
  "Corporate innovation units",
  "Companies seeking talent pipelines",
  "Industry leaders building employer brand in the startup ecosystem",
];

export default function StrategicPartnersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dark text-white">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 sm:px-6 z-10 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <NextLink
                  href="/work-with-us"
                  className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8"
                >
                  <ArrowRightIcon className="w-4 h-4 mr-2 rotate-180" />
                  Back to Work With Us
                </NextLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                  <BuildingsIcon className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">
                    Strategic Partnerships
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 lg:mb-8 leading-[1.1] tracking-tight"
              >
                Long-Term Brand{" "}
                <span className="text-gradient-accent">Exposure</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 lg:mb-12 leading-relaxed"
              >
                Strategic Partnerships with Ennova offer continuous visibility across our events, social media,
                and ecosystem within ESADE&apos;s student community through a sustained collaboration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  as={NextLink}
                  href="#contact"
                  className="h-12 sm:h-14 px-8 sm:px-10 w-full sm:w-auto bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-none transition-all group"
                  endContent={<ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                >
                  Get in Touch
                </Button>
                <Button
                  as={NextLink}
                  href="#benefits"
                  variant="bordered"
                  className="h-12 sm:h-14 px-8 sm:px-10 w-full sm:w-auto border-white/20 text-white hover:bg-white/5 font-bold rounded-none"
                >
                  Explore Benefits
                </Button>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/partnerships/partnerships_hero.jpeg"
                alt="Ennova strategic partnerships"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-dark tracking-tight">
              Partnership <span className="text-gradient-accent">Value</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic alliance that delivers measurable ROI across talent acquisition,
              innovation velocity, and brand positioning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-secondary/20">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Competitions Matter */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6">
                <LightbulbIcon className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold text-secondary">Why Partner with Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
                See Talent in <span className="text-gradient-accent">Action</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Competitions reveal how students solve issues under pressure and perform in high-stakes
                environments — far more revealing than CVs. You see their real decision-making, resilience,
                and creativity in action.
              </p>

              <div className="space-y-3">
                {engagementOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{option}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-dark rounded-3xl p-12 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl" />
                <div className="relative z-10">
                  <TargetIcon className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Ideal Partners</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our partnerships work best with organizations looking to connect with top student talent
                    and Barcelona&apos;s innovation ecosystem.
                  </p>
                  <ul className="space-y-3">
                    {idealPartners.map((partner, index) => (
                      <li key={index} className="flex items-center text-gray-200">
                        <CaretRightIcon className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
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
              Companies That Work with <span className="text-gradient-accent">Ennova</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From global leaders to local innovators, our partners span industries and scales.
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
                className={`flex items-center justify-center px-6 py-5 rounded-2xl border hover:border-secondary/30 hover:shadow-lg transition-all duration-300 ${partner.logo.includes("grupo-billingham") ? "bg-dark border-dark/20" : "bg-white border-gray-200"}`}
              >
                <div className="relative w-28 h-10">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
              How to Get <span className="text-gradient-accent">Started</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact our partnerships team with your interest areas and availability, and we&apos;ll craft
              a customized collaboration that aligns with your business objectives and team capacity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Reach Out", description: "Contact us with your interest areas and availability" },
              { step: "2", title: "Custom Proposal", description: "We craft a tailored collaboration aligned with your objectives" },
              { step: "3", title: "Launch Partnership", description: "Begin engaging with our community and events" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-white border border-gray-200"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              Ready to <span className="text-gradient-accent">Partner</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact our partnerships team to discuss how a strategic partnership with Ennova
              can connect you to ESADE&apos;s entrepreneurial ecosystem.
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
