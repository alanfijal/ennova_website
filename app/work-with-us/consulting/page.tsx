"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeIcon,
  ChartLineUpIcon,
  RobotIcon,
  MegaphoneIcon,
  BookOpenIcon,
  UsersIcon,
  ClockIcon,
  FileTextIcon,
  ShieldCheckIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { TechnicalGrid } from "@/components/ui/TechnicalGrid";
import { ContactForm } from "@/components/features/ContactForm";
import { Button } from "@heroui/button";

const testimonials = [
  {
    quote:
      "The overall experience was great. The team was very professional and delivered on what exactly was requested for. The level of analysis was thorough and insightful.",
    company: "Planteka",
    logo: "/images/consulting/planteka.png",
  },
  {
    quote:
      "Interesting and deep analysis done on the market and the company. Hands on is important in our company culture and the team was able to do it. Good compromise of the whole team.",
    company: "Lets Cook",
    logo: "/images/consulting/lets cook.png",
  },
  {
    quote:
      "Our overall experience with Ennova Consulting has been extremely positive. From day one, their team showed remarkable creativity and a strong command of AI solutions. Their knack for creative problem-solving and effective use of AI\u2014combined with their thorough understanding of our environment\u2014made the recommended strategies immediately beneficial for our internal teams.",
    company: "Sociabble",
    logo: "/images/consulting/socciable.png",
  },
];

const serviceAreas = [
  {
    icon: GlobeIcon,
    title: "Market Entry & International Expansion Strategy",
    description:
      "Help startups and established companies enter new markets with structured market entry strategies and expansion roadmaps.",
  },
  {
    icon: ChartLineUpIcon,
    title: "Go-to-Market & Competitive Positioning",
    description:
      "Develop go-to-market plans and competitive positioning frameworks to capture market share effectively.",
  },
  {
    icon: RobotIcon,
    title: "AI-Enabled Procurement & Digital Transformation",
    description:
      "Design AI-enabled procurement roadmaps and digital transformation strategies to modernize operations.",
  },
  {
    icon: MegaphoneIcon,
    title: "Organizational & Internal Communication Strategy",
    description:
      "Craft internal communication strategies that align teams, drive culture change, and improve organizational effectiveness.",
  },
  {
    icon: BookOpenIcon,
    title: "Research & White Paper Publications",
    description:
      "Conduct in-depth studies and research to support white paper publications and thought leadership content.",
  },
];

const deliverables = [
  "30–60 slide executive strategy deck",
  "Structured market entry or transformation roadmap",
  "Financial / operational impact assessment",
  "AI or procurement solution benchmarking matrix",
  "Executive-ready summary for board-level discussions",
  "Excel with key numbers and graphs",
];

const engagementPhases = [
  {
    step: "01",
    title: "Discovery & Scoping",
    weeks: "Weeks 1–3",
    description:
      "Understand business challenges, define project scope, and assemble a tailored team of 4–6 consultants.",
  },
  {
    step: "02",
    title: "Research & Analysis",
    weeks: "Weeks 4–8",
    description:
      "Deep-dive research leveraging academic databases, structured workstreams, and regular client check-ins.",
  },
  {
    step: "03",
    title: "Mid-Project Review",
    weeks: "Weeks 8–9",
    description:
      "Alignment review with the client to validate direction, refine hypotheses, and adjust workstreams as needed.",
  },
  {
    step: "04",
    title: "Final Delivery",
    weeks: "Weeks 10–16",
    description:
      "Finalize deliverables and present a final executive-level strategic presentation to senior stakeholders.",
  },
];

const teamHighlights = [
  {
    stat: "10%",
    label: "Acceptance Rate",
    description: "Selected through a competitive process from ESADE's top-performing students",
  },
  {
    stat: "10+",
    label: "Nationalities",
    description: "Diverse international perspectives across every project team",
  },
  {
    stat: "4–6",
    label: "Consultants per Project",
    description: "Dedicated team combining analytical rigor with market insight",
  },
  {
    stat: "16",
    label: "Week Engagements",
    description: "Structured semester-long projects with clear milestones",
  },
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dark text-white">
        <TechnicalGrid />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

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

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 lg:mb-8 leading-[1.1] tracking-tight"
              >
                Strategic <span className="text-gradient-accent">Consulting</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 lg:mb-12 leading-relaxed"
              >
                We help startups and established companies enter new markets and modernize operations
                by delivering market entry strategies, go-to-market plans, and AI-enabled procurement
                roadmaps through structured, 16-week consulting engagements.
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
                  endContent={
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  }
                >
                  Start a Project
                </Button>
                <Button
                  as={NextLink}
                  href="#services"
                  variant="bordered"
                  className="h-12 sm:h-14 px-8 sm:px-10 w-full sm:w-auto border-white/20 text-white hover:bg-white/5 font-bold rounded-none"
                >
                  Our Expertise
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
                src="/images/consulting/IMG_3512.JPG"
                alt="Ennova Consulting team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
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
              Our <span className="text-gradient-accent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured consulting engagements across five core practice areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="relative py-24 bg-white overflow-hidden">
        <TechnicalGrid />
        <div className="container relative mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark tracking-tight">
              16-Week <span className="text-gradient-accent">Engagement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Projects run one full semester with structured workstreams, regular client check-ins,
              and executive-level presentations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-16"
          >
            <ClockIcon className="w-4 h-4" />
            <span>One semester (16 weeks) per engagement</span>
            <span className="mx-2">·</span>
            <UsersIcon className="w-4 h-4" />
            <span>Team of 4–6 consultants</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementPhases.map((item, index) => (
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
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary mb-3">
                  {item.weeks}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                {index < engagementPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-secondary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <TechnicalGrid />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 mb-6">
                <FileTextIcon className="w-4 h-4 text-secondary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">
                  What You Receive
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Executive-Grade <span className="text-gradient-accent">Deliverables</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Every engagement concludes with a comprehensive set of professional deliverables
                designed for board-level discussions and strategic decision-making.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircleIcon
                      weight="fill"
                      className="w-6 h-6 text-secondary mr-4 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our <span className="text-gradient-accent">Consultants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selected through a competitive process from ESADE&apos;s top-performing students,
              representing 10+ nationalities and diverse backgrounds across business, finance,
              economics, politics, artificial intelligence, and engineering
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-5xl font-extrabold text-dark mb-2 tracking-tight group-hover:text-secondary transition-colors duration-300">
                  {item.stat}
                </div>
                <div className="text-sm font-bold uppercase tracking-wider text-secondary mb-2">
                  {item.label}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Quality & Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-6">
                <ShieldCheckIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Every engagement is supervised by the Head of Consulting and reviewed internally
                through structured quality gates to ensure professional-grade analytical depth and
                delivery standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-6">
                <UsersIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Why Work With Us</h3>
              <ul className="space-y-3">
                {[
                  "Full consulting team with diverse international perspectives",
                  "Access to academic research databases",
                  "Pro bono model removes financial barriers",
                  "High analytical standards and execution discipline",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <CaretRightIcon className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Feedback Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark tracking-tight">
              Client <span className="text-gradient-accent">Feedback</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What our clients say about working with Ennova Consulting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-3xl p-8 border border-gray-200 flex flex-col ${
                  index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="text-6xl font-serif text-secondary/20 leading-none mb-4">
                  &ldquo;
                </div>
                <p className="text-gray-600 leading-relaxed italic flex-1 mb-8">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.company}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="font-bold text-dark">{testimonial.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-dark text-white relative overflow-hidden">
        <TechnicalGrid />
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
              Ready to Start Your <span className="text-gradient-accent">Project</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let&apos;s discuss how our consulting team can help your company enter new markets,
              modernize operations, or develop winning strategies.
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
