"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import {
  TrendingUp,
  Leaf,
  Lightbulb,
  ArrowRight,
  FileText,
  ExternalLink,
  Target,
  Users
} from "lucide-react";
import { Button } from "@heroui/button";

// Mock activity data - replace with Sanity CMS data later
// Structured to highlight impact and outcomes over logistics
const activitiesData = [
  {
    id: 1,
    slug: "sustainable-energy-summit",
    title: "Sustainable Energy Innovation Summit",
    description: "A deep-dive into renewable energy solutions with industry leaders, resulting in 3 startup pitches and 15+ corporate partnerships.",
    domain: "sustainability",
    impact: {
      partnerships: 15,
      participants: 250,
      outcomes: "3 startups formed",
    },
    date: "March 2026",
    featured: true,
    image: "https://placehold.co/1200x600/13182e/00AEEF?text=Sustainability+Summit",
    keyHighlights: [
      "Corporate partner engagement from Fortune 500 companies",
      "Technical workshops on solar and wind technology",
      "Student-led innovation showcases",
    ],
  },
  {
    id: 2,
    slug: "ai-consulting-bootcamp",
    title: "AI Strategy Consulting Bootcamp",
    description: "Intensive consulting training where students delivered AI transformation roadmaps to 5 SME clients.",
    domain: "consulting",
    impact: {
      partnerships: 5,
      participants: 40,
      outcomes: "5 client deliverables",
    },
    date: "February 2026",
    featured: false,
    image: "https://placehold.co/1200x600/00AEEF/ffffff?text=AI+Consulting",
    keyHighlights: [
      "Real client engagements with measurable ROI",
      "Faculty-supervised consulting methodologies",
      "Professional case study documentation",
    ],
  },
  {
    id: 3,
    slug: "startup-pitch-competition",
    title: "Entrepreneurship Pitch Competition",
    description: "Annual competition showcasing student ventures, attracting $500K in seed funding commitments.",
    domain: "entrepreneurship",
    impact: {
      partnerships: 12,
      participants: 150,
      outcomes: "$500K funding secured",
    },
    date: "April 2026",
    featured: true,
    image: "https://placehold.co/1200x600/13182e/FFD700?text=Pitch+Competition",
    keyHighlights: [
      "Venture capital firm participation",
      "Mentorship from serial entrepreneurs",
      "Live pitch deck feedback sessions",
    ],
  },
  {
    id: 4,
    slug: "circular-economy-workshop",
    title: "Circular Economy Design Workshop",
    description: "Collaborative design thinking session focused on waste reduction and sustainable manufacturing.",
    domain: "sustainability",
    impact: {
      partnerships: 8,
      participants: 60,
      outcomes: "4 prototype solutions",
    },
    date: "January 2026",
    featured: false,
    image: "https://placehold.co/1200x600/00AEEF/13182e?text=Circular+Economy",
    keyHighlights: [
      "Industry partner co-creation sessions",
      "Life cycle analysis training",
      "Prototype development support",
    ],
  },
  {
    id: 5,
    slug: "fintech-consulting-series",
    title: "FinTech Consulting Series",
    description: "Multi-week engagement with financial institutions exploring blockchain and digital banking solutions.",
    domain: "consulting",
    impact: {
      partnerships: 3,
      participants: 30,
      outcomes: "3 white papers published",
    },
    date: "March 2026",
    featured: false,
    image: "https://placehold.co/1200x600/13182e/00AEEF?text=FinTech",
    keyHighlights: [
      "Blockchain technology implementation analysis",
      "Regulatory compliance consulting",
      "Digital transformation strategy",
    ],
  },
  {
    id: 6,
    slug: "venture-builder-program",
    title: "Venture Builder Accelerator",
    description: "12-week intensive program transforming student ideas into market-ready startups.",
    domain: "entrepreneurship",
    impact: {
      partnerships: 10,
      participants: 45,
      outcomes: "6 companies incorporated",
    },
    date: "May 2026",
    featured: false,
    image: "https://placehold.co/1200x400/00AEEF/ffffff?text=Venture+Builder",
    keyHighlights: [
      "Legal and incorporation support",
      "Go-to-market strategy development",
      "Investor pitch preparation",
    ],
  },
];

const domains = [
  {
    id: "all",
    label: "All Activities",
    count: activitiesData.length,
    icon: Target,
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    count: activitiesData.filter(a => a.domain === "entrepreneurship").length,
    icon: Lightbulb,
  },
  {
    id: "sustainability",
    label: "Sustainability",
    count: activitiesData.filter(a => a.domain === "sustainability").length,
    icon: Leaf,
  },
  {
    id: "consulting",
    label: "Consulting",
    count: activitiesData.filter(a => a.domain === "consulting").length,
    icon: TrendingUp,
  },
];

function ActivityCard({ activity, index }: { activity: typeof activitiesData[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative glass-dark rounded-3xl overflow-hidden border border-white/10 hover:border-secondary/40 transition-all duration-500 ${
        activity.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`relative z-10 ${activity.featured ? "md:flex" : ""}`}>
        {/* Image Section */}
        <div className={`relative overflow-hidden bg-[#13182e] ${activity.featured ? "md:w-1/2" : "h-56"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#13182e]/60 to-transparent z-10" />
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
          />
          {activity.featured && (
            <div className="absolute top-6 left-6 z-20">
              <span className="px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-secondary to-primary text-white uppercase tracking-wider">
                Flagship Initiative
              </span>
            </div>
          )}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="glass-dark px-4 py-3 rounded-xl">
              <div className="text-xs text-gray-400 mb-1">Impact Date</div>
              <div className="font-bold text-white">{activity.date}</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-8 ${activity.featured ? "md:w-1/2 flex flex-col" : ""}`}>
          {/* Domain Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-secondary/20 text-secondary border border-secondary/30 uppercase tracking-wider">
              {activity.domain}
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-extrabold text-white mb-3 group-hover:text-secondary transition-colors duration-300 tracking-tight ${
            activity.featured ? "text-3xl" : "text-xl"
          }`}>
            {activity.title}
          </h3>

          {/* Description */}
          <p className={`text-gray-400 mb-6 leading-relaxed ${activity.featured ? "text-base" : "text-sm"}`}>
            {activity.description}
          </p>

          {/* Impact Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
            <div>
              <div className="text-2xl font-bold text-secondary">{activity.impact.partnerships}</div>
              <div className="text-xs text-gray-500 uppercase">Partners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">{activity.impact.participants}</div>
              <div className="text-xs text-gray-500 uppercase">Participants</div>
            </div>
            <div className="col-span-3 border-t border-white/10 pt-2 mt-2">
              <div className="text-xs text-gray-500 uppercase mb-1">Key Outcome</div>
              <div className="text-sm font-semibold text-white">{activity.impact.outcomes}</div>
            </div>
          </div>

          {/* Key Highlights */}
          {activity.featured && (
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                Key Highlights
              </div>
              <ul className="space-y-2">
                {activity.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Buttons */}
          <div className={`flex gap-3 ${activity.featured ? "mt-auto" : ""}`}>
            <NextLink href={`/events/${activity.slug}`} className="flex-1">
              <Button
                className="w-full bg-white/10 text-white hover:bg-secondary hover:text-white border border-white/20 font-bold rounded-full transition-all duration-500 group/btn"
                endContent={<FileText className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />}
              >
                View Case Study
              </Button>
            </NextLink>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
  );
}

export default function ActivityLibraryPage() {
  const [selectedDomain, setSelectedDomain] = useState("all");

  const filteredActivities = selectedDomain === "all"
    ? activitiesData
    : activitiesData.filter(activity => activity.domain === selectedDomain);

  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card">
                <Target className="w-4 h-4 text-secondary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">
                  Ecosystem Impact Hub
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight text-white"
            >
              Activity Library &<br />
              <span className="text-gradient-accent">Case Studies</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Explore how Ennova bridges the gap between engineering excellence and industry impact
              across Entrepreneurship, Sustainability, and Consulting domains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                <span>500+ Students Engaged</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-secondary" />
                <span>45+ Corporate Partners</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domain Filtering */}
      <section className="sticky top-20 z-40 glass-dark backdrop-blur-xl border-b border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-500 ${
                    selectedDomain === domain.id
                      ? "bg-secondary text-white shadow-lg shadow-secondary/20 scale-105"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {domain.label}
                  <span className={`${
                    selectedDomain === domain.id ? "text-white/80" : "text-gray-600"
                  }`}>
                    ({domain.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDomain}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity, index) => (
                  <ActivityCard key={activity.id} activity={activity} index={index} />
                ))
              ) : (
                <div className="col-span-2 text-center py-16">
                  <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">No activities found</h3>
                  <p className="text-gray-500">
                    Check back later for new initiatives in this domain.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Platform Separation CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-dark rounded-3xl p-12 text-center border border-white/10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
                <ExternalLink className="w-4 h-4" />
                Events Platform
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">
                Ready to <span className="text-gradient-accent">Participate</span>?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                While this hub showcases our ecosystem impact, <strong className="text-white">all event registrations
                and logistics are managed through our dedicated Events Platform</strong>. Browse upcoming
                opportunities, register instantly, and track your involvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as="a"
                  href={typeof window !== "undefined" ? "https://platform.ennova.org/events" : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 px-10 bg-white text-primary hover:bg-secondary hover:text-white font-bold rounded-full transition-all"
                  endContent={<ExternalLink className="w-5 h-5" />}
                >
                  Visit Events Platform
                </Button>
                <Button
                  as="a"
                  href="mailto:partnerships@ennova.org"
                  variant="bordered"
                  className="h-14 px-10 border-white/20 text-white hover:bg-white/5 font-bold rounded-full"
                  endContent={<ArrowRight className="w-5 h-5" />}
                >
                  Partner With Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}