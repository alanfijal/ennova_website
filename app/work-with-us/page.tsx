"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { ArrowRight, Briefcase, Handshake, Award, ChevronRight } from "lucide-react";
import { Button } from "@heroui/button";
import { ContactForm } from "@/components/features/ContactForm";
import { BarcelonaConnectivityMap } from "@/components/ui/BarcelonaConnectivityMap";

const services = [
  {
    icon: Briefcase,
    title: "Consulting Services",
    description: "Partner with our talented engineering students to deliver innovative solutions for your business challenges.",
    href: "/work-with-us/consulting",
    color: "from-secondary to-gradient",
    features: ["Technical Consulting", "Product Development", "Research & Innovation"],
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Build long-term relationships with Ennova and gain access to top engineering talent and cutting-edge projects.",
    href: "/work-with-us/partners",
    color: "from-purple-500 to-gradient",
    features: ["Exclusive Access", "Co-Innovation", "Talent Pipeline"],
  },
  {
    icon: Award,
    title: "Event Sponsorship",
    description: "Sponsor our hackathons, workshops, and competitions to showcase your brand to future engineering leaders.",
    href: "/work-with-us/sponsors",
    color: "from-[#FFD700] to-secondary",
    features: ["Brand Visibility", "Networking", "Talent Recruitment"],
  },
];

const benefits = [
  "Access to 500+ engineering students across 15+ departments",
  "Cost-effective solutions with academic partnership benefits",
  "Fresh perspectives and cutting-edge technical expertise",
  "Flexible engagement models tailored to your needs",
  "Direct pipeline to top engineering talent for recruitment",
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Corporate Partners" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$2M+", label: "Value Created" },
];

export default function WorkWithUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dark text-white">
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card">
                <Briefcase className="w-4 h-4 text-secondary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">
                  Corporate Partnerships
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight"
            >
              Partner with the Future of{" "}
              <span className="text-gradient-accent">Engineering</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with Sheridan's top engineering talent. From consulting projects to
              strategic partnerships, we deliver innovative solutions that drive your business forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                as={NextLink}
                href="#services"
                className="h-14 px-10 bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-none transition-all group"
                endContent={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              >
                Explore Services
              </Button>
              <Button
                as={NextLink}
                href="#contact"
                variant="bordered"
                className="h-14 px-10 border-white/20 text-white hover:bg-white/5 font-bold rounded-none"
              >
                Get in Touch
              </Button>
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

                      <div className="relative z-10">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
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
                              <ChevronRight className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center text-secondary font-bold group-hover:gap-2 transition-all duration-300">
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
              The Barcelona <span className="text-gradient-accent">Technical Stamp</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between Esade's business excellence, Barcelona's 22@ innovation district,
              and global industry leaders. Your partnership connects you to an entire ecosystem.
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
                Ennova provides a unique bridge between industry and academia, delivering
                exceptional value through our talented student community and faculty expertise.
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
                      <ChevronRight className="w-4 h-4 text-secondary" />
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
                    endContent={<ArrowRight className="w-5 h-5" />}
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
