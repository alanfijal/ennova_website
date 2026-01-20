"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { ArrowRight, Users, Rocket, TrendingUp, Building2, GraduationCap, Lightbulb } from "lucide-react";
import { Button } from "@heroui/button";
import { ContactForm } from "@/components/features/ContactForm";
import { BarcelonaConnectivityMap } from "@/components/ui/BarcelonaConnectivityMap";
import { GlassSlitReveal } from "@/components/ui/GlassSlitReveal";

const partnershipBenefits = [
  {
    icon: Users,
    title: "Exclusive Talent Access",
    description: "First access to our top engineering students across 15+ technical departments before they hit the job market.",
  },
  {
    icon: Rocket,
    title: "Co-Innovation Labs",
    description: "Propose technical challenges for our Software, AI, and Robotics departments to solve as capstone projects.",
  },
  {
    icon: TrendingUp,
    title: "Barcelona Tech Ecosystem",
    description: "Bridge the gap between Esade business excellence and Barcelona's vibrant tech scene at 22@ innovation district.",
  },
  {
    icon: Building2,
    title: "Brand Prestige",
    description: "Position your company as an innovation leader by associating with Canada's premier engineering student organization.",
  },
];

const departments = [
  "Software Engineering",
  "Artificial Intelligence",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Robotics & Automation",
  "Data Science",
  "Computer Science",
  "Aerospace Engineering",
  "Chemical Engineering",
  "Industrial Engineering",
  "Biomedical Engineering",
];

const successStories = [
  {
    company: "Tech Giant Inc.",
    logo: "🏢",
    result: "15 student hires in 2 years",
    testimonial: "Ennova gave us direct access to exceptional talent before our competitors even knew they existed.",
  },
  {
    company: "Innovation Labs",
    logo: "🔬",
    result: "3 co-developed products",
    testimonial: "Working with Ennova's AI department accelerated our R&D timeline by 6 months.",
  },
  {
    company: "Global Consulting",
    logo: "💼",
    result: "$500K+ value delivered",
    testimonial: "The technical depth and fresh perspectives from Ennova students consistently exceed expectations.",
  },
];

export default function StrategicPartnersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-primary to-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,111,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(138,43,226,0.1),transparent_50%)]" />

        <div className="container relative mx-auto px-4 z-10 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card">
                <Building2 className="w-5 h-5 text-secondary" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-200">
                  Strategic Partnerships
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.05] tracking-tight"
            >
              The Talent &{" "}
              <span className="text-gradient-accent">Innovation</span> Hub
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Build a strategic partnership roadmap with Canada's premier engineering community.
              Access elite talent, co-create innovations, and connect to the Barcelona technical ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                as={NextLink}
                href="#contact"
                className="h-14 px-10 bg-secondary text-white hover:bg-secondary/90 font-bold rounded-none transition-all group shadow-xl shadow-secondary/30"
                endContent={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              >
                Schedule Consultation
              </Button>
              <Button
                as={NextLink}
                href="#benefits"
                variant="bordered"
                className="h-14 px-10 border-white/30 text-white hover:bg-white/10 font-bold rounded-none"
              >
                Explore Benefits
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-secondary/30 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-purple-500/30 rounded-lg rotate-45 animate-float-delayed" />
      </section>

      {/* The Talent Pipeline - Glass Slit Reveal */}
      <GlassSlitReveal
        beforeImage="/images/partnerships/student-lab.jpg"
        afterImage="/images/partnerships/professional-office.jpg"
        beforeLabel="Ennova Engineering Student"
        afterLabel="Your Future Employee"
      />

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
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-gradient mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-secondary/20">
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


      {/* Co-Innovation Projects */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6">
                <Lightbulb className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold text-secondary">Innovation Engine</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
                Co-Innovation <span className="text-gradient-accent">Projects</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Propose technical challenges for our departments to solve. From AI algorithms to
                mechanical prototypes, our students deliver production-ready solutions as capstone projects.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Propose Challenge</h4>
                    <p className="text-gray-600 text-sm">Submit a technical problem or innovation opportunity</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Department Match</h4>
                    <p className="text-gray-600 text-sm">We match you with the ideal student team and faculty advisor</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Deliver Innovation</h4>
                    <p className="text-gray-600 text-sm">Receive a professional deliverable in 4-8 months</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {departments.slice(0, 8).map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl glass-card hover:bg-white/80 transition-all duration-300 group cursor-default"
                >
                  <GraduationCap className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-sm text-dark">{dept}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Proven <span className="text-gradient-accent">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partners consistently report exceptional ROI, faster hiring cycles, and breakthrough innovations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="text-6xl mb-4">{story.logo}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{story.company}</h3>
                <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-4">
                  {story.result}
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "{story.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-gradient-to-br from-dark via-primary to-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,111,0,0.05),transparent_70%)]" />

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
              Schedule a consultation to discuss how a strategic partnership with Ennova can accelerate your talent and innovation goals.
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
