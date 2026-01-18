"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { ArrowRight, Calendar, Building2, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@heroui/button";

// Mock portfolio data - replace with Sanity CMS data later
const portfolioItems = [
  {
    id: 1,
    title: "AI-Powered Supply Chain Optimization",
    client: "TechCorp Industries",
    industry: "Manufacturing",
    summary: "Developed machine learning models to optimize inventory management and reduce costs by 30%.",
    services: ["Machine Learning", "Data Analytics", "Process Optimization"],
    results: ["30% cost reduction", "50% faster processing", "Real-time insights"],
    featured: true,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Mobile App Development",
    client: "RetailCo",
    industry: "Retail",
    summary: "Built a cross-platform mobile application for enhanced customer engagement.",
    services: ["Mobile Development", "UI/UX Design", "Cloud Integration"],
    results: ["100K+ downloads", "4.8★ rating", "2x engagement"],
    featured: false,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "IoT Smart Building System",
    client: "GreenTech Solutions",
    industry: "Real Estate",
    summary: "Designed and implemented IoT sensors for energy-efficient building management.",
    services: ["IoT Development", "Embedded Systems", "Data Visualization"],
    results: ["40% energy savings", "Automated controls", "ROI in 18 months"],
    featured: false,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Financial Analytics Dashboard",
    client: "FinanceHub",
    industry: "Finance",
    summary: "Created comprehensive real-time analytics platform for financial data visualization.",
    services: ["Full-Stack Development", "Data Engineering", "Business Intelligence"],
    results: ["Real-time analytics", "Custom reporting", "Integration with 5+ APIs"],
    featured: false,
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    title: "Cybersecurity Audit & Enhancement",
    client: "SecureNet Corp",
    industry: "Technology",
    summary: "Conducted security assessment and implemented enterprise-grade security measures.",
    services: ["Security Audit", "Penetration Testing", "Infrastructure Hardening"],
    results: ["Zero breaches", "Compliance achieved", "24/7 monitoring"],
    featured: false,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "E-Learning Platform",
    client: "EduTech Academy",
    industry: "Education",
    summary: "Built scalable online learning platform with interactive features and assessments.",
    services: ["Platform Development", "Video Streaming", "Assessment Engine"],
    results: ["10K+ students", "99.9% uptime", "Interactive learning"],
    featured: false,
    span: "md:col-span-1 md:row-span-1",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business challenges, goals, and requirements through detailed consultation.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Our team designs a comprehensive solution strategy with clear milestones and deliverables.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Expert students work on your project with faculty oversight, ensuring quality and innovation.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "We deliver thoroughly tested solutions with documentation and ongoing support options.",
  },
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-dark text-white">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <NextLink href="/work-with-us" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Work With Us
              </NextLink>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight"
            >
              Consulting <span className="text-gradient-accent">Portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our successful consulting engagements delivering innovative solutions
              across industries
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bento Grid Portfolio */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 overflow-hidden ${item.span}`}
              >
                {/* Gradient Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    {item.featured && (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-secondary to-gradient text-white mb-4">
                        Featured Project
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{item.client}</span>
                      <span>•</span>
                      <span>{item.industry}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-dark mb-3 group-hover:text-secondary transition-colors duration-300 ${item.featured ? 'text-3xl' : 'text-xl'}`}>
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className={`text-gray-600 mb-6 leading-relaxed ${item.featured ? 'text-base' : 'text-sm'}`}>
                    {item.summary}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="mt-auto">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                      Key Results
                    </div>
                    <ul className="space-y-2">
                      {item.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark tracking-tight">
              Our <span className="text-gradient-accent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative mb-4">
                  <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-secondary/20 to-secondary/5 group-hover:from-secondary/40 group-hover:to-secondary/10 transition-all duration-500">
                    {item.step}
                  </div>
                  <div className="absolute inset-0 text-7xl font-black text-secondary/30 blur-sm group-hover:text-secondary/50 transition-all duration-500">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-secondary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Start Your <span className="text-gradient-accent">Project</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's discuss how our consulting services can help bring your vision to life.
            </p>
            <Button
              as={NextLink}
              href="/work-with-us"
              className="h-14 px-10 bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-full transition-all"
              endContent={<ArrowRight className="w-5 h-5" />}
            >
              Request a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}