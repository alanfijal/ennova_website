"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import Image from "next/image";
import { ArrowRightIcon, BriefcaseIcon, HandshakeIcon, TrophyIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Button } from "@heroui/button";
import { ContactForm } from "@/components/features/ContactForm";
import { BarcelonaConnectivityMap } from "@/components/ui/BarcelonaConnectivityMap";

const services = [
  {
    icon: BriefcaseIcon,
    title: "Consulting Services",
    description: "Ennova Consulting is powered by highly motivated, competent students who thrive on real-world challenges, if you need agile, hands-on teams to tackle operational issues or market research, we're the right people to work with.",
    href: "/work-with-us/consulting",
    color: "bg-secondary",
    features: ["Operational Consulting", "Market Research", "Business Solutions"],
  },
  {
    icon: HandshakeIcon,
    title: "Strategic Partnerships",
    description: "Strategic Partnerships with Ennova offer long-term brand exposure within ESADE's student community. Choose this option if you want continuous visibility across our events, social media, and ecosystem through a sustained partnership with Ennova.",
    href: "/work-with-us/partners",
    color: "bg-secondary",
    features: ["Brand Visibility", "Event Presence", "Social Media Exposure"],
  },
  {
    icon: TrophyIcon,
    title: "Event Sponsorship",
    description: "Be an Event Sponsor if you are looking for focused, high-impact visibility through a specific Ennova event, with opportunities to engage on-site, promote your brand, and participate as a mentor, speaker, or judge.",
    href: "/work-with-us/sponsors",
    color: "bg-secondary",
    features: ["On-Site Engagement", "Mentorship & Speaking", "Targeted Brand Promotion"],
  },
];

const benefits = [
  "Access to ESADE's entrepreneurial talent across all Bachelor and Master's programs",
  "Connection to an international network through joint events with top business schools",
  "Proven partnerships with global leaders like Deloitte, Coca-Cola, and Notion",
  "Flexible engagement models: consulting, strategic partnerships, or event sponsorship",
  "Direct access to Barcelona's innovation ecosystem including Bcombinator, Connector and more",
];

const stats = [
  { value: "5000+", label: "Annual Digital Reach" },
  { value: "1000+", label: "Students Reached per year" },
  { value: "85", label: "Active Ennova Members" },
  { value: "20+", label: "Corporate Partnerships" },
];

export function WorkWithUsPageClient() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dark text-white">
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 sm:px-6 z-10 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 lg:mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                  <BriefcaseIcon className="w-4 h-4 text-secondary" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-300">
                    Corporate Partnerships
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 lg:mb-8 leading-[1.1] tracking-tight"
              >
                Partner with the Future of{" "}
                <span className="text-gradient-accent">Entrepreneurship</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 lg:mb-12 leading-relaxed"
              >
                At Ennova, we bring together ESADE's most entrepreneurial talents, combining strong
                business foundations with hands-on innovation experience. Partner with us to create
                real impact and generate value across our entire ecosystem for our members, event
                participants, and your company.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <Button
                  as={NextLink}
                  href="#services"
                  className="h-12 sm:h-14 px-8 sm:px-10 w-full sm:w-auto bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-none transition-all group"
                  endContent={<ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                >
                  Explore Services
                </Button>
                <Button
                  as={NextLink}
                  href="#contact"
                  variant="bordered"
                  className="h-12 sm:h-14 px-8 sm:px-10 w-full sm:w-auto border-white/20 text-white hover:bg-white/5 font-bold rounded-none"
                >
                  Get in Touch
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
                src="/images/community/Screenshot 2026-01-30 at 15.21.56.png"
                alt="Ennova team collaboration"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-dark mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark tracking-tight">
              How We Can <span className="text-gradient-accent">Help</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible partnership models designed for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <NextLink href={service.href}>
                    <div className="group relative bg-white rounded-3xl p-8 h-full border border-gray-200 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      {/* Gradient Glow on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-dark group-hover:text-secondary transition-colors duration-300">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CaretRightIcon className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto flex items-center text-secondary font-bold group-hover:gap-2 transition-all duration-300">
                          Learn More
                          <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                  </NextLink>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Barcelona Technical Stamp Section */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              The Ennova <span className="text-gradient-accent">Network</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From global leaders like Deloitte, Coca-Cola, and Notion to local innovators like Frit Ravich
              and Sandwichez, we connect you with Barcelona's entrepreneurial ecosystem. Through partnerships
              with Bcombinator and Conector, Ennova creates meaningful
              collaborations that drive real business impact.
            </p>
          </motion.div>

          <BarcelonaConnectivityMap />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
                Why Partner with <span className="text-gradient-accent">Ennova</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ennova connects you to ESADE's most entrepreneurial students across all Bachelor
                and Master's programs, plus an international network through joint events with
                top business schools worldwide.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <CaretRightIcon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-dark rounded-3xl p-12 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Let's discuss how Ennova can help drive your next innovation project.
                    Our team is ready to understand your challenges and propose tailored solutions.
                  </p>
                  <Button
                    as={NextLink}
                    href="#contact"
                    className="bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-none transition-all duration-500 px-8 h-12"
                    endContent={<ArrowRightIcon className="w-5 h-5" />}
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Let's Build Something <span className="text-gradient-accent">Amazing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Contact us to explore partnership opportunities and discover how we can help achieve your goals.
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
