"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { ArrowRight, Award, Users, TrendingUp, Megaphone, Camera, Trophy, Sparkles } from "lucide-react";
import { Button } from "@heroui/button";
import { ContactForm } from "@/components/features/ContactForm";

const flagshipEvents = [
  {
    name: "VC101",
    tagline: "Venture Capital Mastery",
    description: "A premium summit connecting students with top VCs, angel investors, and startup founders. Includes pitch competitions, workshops, and exclusive networking.",
    color: "from-green-400 to-emerald-600",
    icon: TrendingUp,
    stats: { attendance: "200+", partners: "15+ VCs", prize: "$10K+" },
    audience: "Future founders, finance students, early-stage investors",
  },
  {
    name: "Vision",
    tagline: "Sustainability & Future-Tech",
    description: "An innovation showcase focused on sustainable engineering, climate tech, and future-forward solutions. Features keynote speakers, demo booths, and impact challenges.",
    color: "from-blue-400 to-cyan-600",
    icon: Sparkles,
    stats: { attendance: "300+", partners: "20+ Companies", prize: "$15K+" },
    audience: "Environmental engineers, tech innovators, corporate sustainability teams",
  },
  {
    name: "IDIA",
    tagline: "Engineering & Design Innovation",
    description: "The premier hackathon combining engineering excellence with design thinking. 48 hours of intense building, mentorship, and innovation across all engineering disciplines.",
    color: "from-purple-400 to-fuchsia-600",
    icon: Trophy,
    stats: { attendance: "400+", partners: "25+ Sponsors", prize: "$20K+" },
    audience: "All engineering students, designers, product managers",
  },
];

const sponsorshipBenefits = [
  {
    icon: Users,
    title: "Talent Pipeline",
    description: "Direct access to 500+ top engineering students across 15+ departments. Identify and recruit future team members before they hit the job market.",
  },
  {
    icon: Megaphone,
    title: "Brand Visibility",
    description: "Showcase your brand to the next generation of engineers through prominent placement across all event touchpoints and marketing channels.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Professional photos, videos, and social media content featuring your brand. Perfect for recruitment marketing and employer branding campaigns.",
  },
  {
    icon: Award,
    title: "Thought Leadership",
    description: "Position your company as an innovation leader through speaking opportunities, technical challenges, and direct engagement with the brightest minds.",
  },
];

const pastSponsors = [
  { name: "Google" },
  { name: "Microsoft" },
  { name: "Deloitte" },
  { name: "IBM" },
  { name: "Amazon" },
  { name: "Tesla" },
  { name: "Shopify" },
  { name: "RBC" },
];

const vibeReportStats = [
  { value: "1,000+", label: "Annual Attendees" },
  { value: "50+", label: "Corporate Partners" },
  { value: "15+", label: "Events Per Year" },
  { value: "$50K+", label: "Prize Money Distributed" },
];

export default function EventSponsorshipPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-primary to-dark text-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>

        <div className="container relative mx-auto px-4 z-10 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card">
                <Award className="w-5 h-5 text-secondary" />
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
              Impact &{" "}
              <span className="text-gradient-accent">Visibility</span> Showcase
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Sponsor our flagship events and connect your brand with Canada's top engineering talent.
              From hackathons to VC summits, we deliver high-energy experiences that drive recruitment and innovation.
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
                className="h-14 px-10 bg-secondary text-white hover:bg-secondary/90 font-bold rounded-full transition-all group shadow-xl shadow-secondary/30"
                endContent={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              >
                Explore Events
              </Button>
              <Button
                as={NextLink}
                href="#contact"
                variant="bordered"
                className="h-14 px-10 border-white/30 text-white hover:bg-white/10 font-bold rounded-full"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Vibe Report - Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {vibeReportStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
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

      {/* Flagship Events Portfolio */}
      <section id="events" className="py-24 bg-gradient-to-br from-gray-50 to-white">
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

          <div className="space-y-8 max-w-6xl mx-auto">
            {flagshipEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative rounded-3xl p-8 lg:p-12 bg-white border-2 border-gray-200 hover:border-secondary/30 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Event Info */}
                      <div className="lg:col-span-2">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-4xl font-extrabold text-dark mb-2 tracking-tight">
                          {event.name}
                        </h3>
                        <p className="text-lg text-secondary font-bold mb-4">{event.tagline}</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">Target: {event.audience}</span>
                        </div>
                      </div>

                      {/* Stats Cards */}
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                          <div className="text-3xl font-extrabold text-dark mb-1">{event.stats.attendance}</div>
                          <div className="text-sm text-gray-600">Expected Attendance</div>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                          <div className="text-3xl font-extrabold text-dark mb-1">{event.stats.partners}</div>
                          <div className="text-sm text-gray-600">Partner Organizations</div>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                          <div className="text-3xl font-extrabold text-dark mb-1">{event.stats.prize}</div>
                          <div className="text-sm text-gray-600">Prize Pool</div>
                        </div>
                      </div>
                    </div>

                    {/* Accent Line */}
                    <div className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r ${event.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
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
              Why <span className="text-gradient-accent">Sponsor</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Event sponsorship delivers measurable ROI across brand awareness, talent acquisition, and market positioning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipBenefits.map((benefit, index) => {
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

      {/* Past Sponsors */}
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
              Trusted by <span className="text-gradient-accent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the world's top companies in supporting the next generation of engineers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {pastSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <div className="text-xl font-bold text-secondary">{sponsor.name[0]}</div>
                </div>
                <div className="text-sm font-bold text-gray-700">{sponsor.name}</div>
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
              Become a <span className="text-gradient-accent">Sponsor</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how event sponsorship can accelerate your talent acquisition and brand positioning goals
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
