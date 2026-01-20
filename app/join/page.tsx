"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, Users, Award, Lightbulb, Heart, ArrowRight } from "lucide-react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { MasonryGallery } from "@/components/features/MasonryGallery";
import { TallyFormEmbed } from "@/components/features/TallyFormEmbed";
import { Marquee } from "@/components/magicui/marquee";
import { WorldStudentMap } from "@/components/ui/WorldStudentMap";

// Alumni success stories data
const alumniStories = [
  {
    name: "Sofia Rodriguez",
    role: "Software Engineer",
    company: "Google",
    quote: "Ennova was the bridge between theory and industry.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia&backgroundColor=00AEEF",
    elite: true,
  },
  {
    name: "Marc Jensen",
    role: "Strategy Consultant",
    company: "Deloitte",
    quote: "Leading the Consulting department taught me high-stakes results.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc&backgroundColor=A78BFA",
    elite: true,
  },
];

// Alumni company logos data
const alumniCompanies = [
  { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Deloitte", logo: "https://cdn.simpleicons.org/deloitte/86BC25" },
  { name: "Amazon", logo: "https://cdn.simpleicons.org/amazon/FF9900" },
  { name: "McKinsey", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/McKinsey_and_Company_Logo.svg" },
  { name: "Microsoft", logo: "https://cdn.simpleicons.org/microsoft/5E5E5E" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta/0668E1" },
  { name: "BCG", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/The_Boston_Consulting_Group_Logo.svg" },
  { name: "Goldman Sachs", logo: "https://cdn.simpleicons.org/goldmansachs/0033A0" },
];

// Benefits data for Bento grid
const benefits = [
  {
    icon: Users,
    title: "Elite Network",
    description: "Connect with 500+ ambitious peers and industry leaders across Europe.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Lightbulb,
    title: "Technical Workshops",
    description: "Master cutting-edge skills through hands-on workshops led by experts.",
    gradient: "from-[#A78BFA]/10 to-[#A78BFA]/5",
  },
  {
    icon: Award,
    title: "Real Projects",
    description: "Work on consulting projects with Fortune 500 companies and startups.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Heart,
    title: "Personal Mentorship",
    description: "Get 1-on-1 guidance from successful alumni and industry veterans.",
    gradient: "from-[#A78BFA]/10 to-[#A78BFA]/5",
  },
];

export default function JoinPage() {
  return (
    <div className="w-full overflow-hidden bg-[#FAFAFA]">
      {/* Ethereal Background - Animated Mesh Gradient Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.2, 0.15],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-[#A78BFA]/15 blur-[120px] rounded-full"
        />
      </div>

      {/* Section 1: Majestic Hero */}
      <section className="relative w-full pt-32 pb-20 px-6 z-10 bg-gradient-to-br from-primary/10 via-primary/5 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70">
                Join 500+ Members
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-6xl md:text-8xl font-black mb-8 tracking-tight text-primary"
          >
            Start Your{" "}
            <span className="text-secondary italic">Journey</span> Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Join Europe's leading student engineering organization. Be part of a 500+ member community
            bridging the gap between elite education and world-class careers.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-12 mb-16"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-secondary mb-2">500+</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#A78BFA] mb-2">50+</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-secondary mb-2">15+</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Departments</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Alumni Career Wall - Logo Marquee */}
      <section className="relative py-16 border-y border-primary/10 bg-gradient-to-r from-primary/5 via-white/50 to-primary/5 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-3"
          >
            Our Alumni Work At
          </motion.h2>
          <p className="text-center text-slate-500 text-sm md:text-base">
            Ennova members launch careers at the world's most prestigious companies
          </p>
        </div>

        <Marquee pauseOnHover className="[--duration:30s]">
          {alumniCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-40 h-24 mx-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full max-h-full object-contain p-4"
              />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Section 3: Alumni Success Stories */}
      <section className="relative w-full py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Alumni Success <span className="text-secondary italic">Pathways</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
              Real stories from members who leveraged Ennova to launch exceptional careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {alumniStories.map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <CardBody className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={alumni.avatar}
                        alt={alumni.name}
                        className="w-16 h-16 rounded-full border-2 border-secondary/30"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-primary">{alumni.name}</h3>
                          {alumni.elite && (
                            <Star className="w-5 h-5 text-red-500 fill-red-500" />
                          )}
                        </div>
                        <p className="text-sm font-semibold text-secondary">{alumni.role}</p>
                        <p className="text-sm text-slate-500">{alumni.company}</p>
                      </div>
                    </div>

                    <blockquote className="text-base text-slate-600 italic leading-relaxed border-l-4 border-secondary/30 pl-4">
                      "{alumni.quote}"
                    </blockquote>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Student Network Map */}
      <WorldStudentMap />

      {/* Section 4: Benefits Bento Grid */}
      <section className="relative w-full py-24 px-6 z-10 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Why Join Ennova?
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
              Transform your university experience into a launchpad for your career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className="bg-white/70 backdrop-blur-md border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-500">
                    <CardBody className="p-8">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5`}>
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-extrabold mb-3 text-primary">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Departments Section */}
      <section className="relative w-full py-24 px-6 z-10 bg-gradient-to-br from-primary/10 via-primary/5 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Find Your <span className="text-secondary italic">Department</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              Discover specialized teams working on cutting-edge projects across multiple disciplines.
              From Software Engineering to AI, Mechanical to Data Science - find where you belong.
            </p>
            <Button
              as={NextLink}
              href="/about#departments"
              className="h-16 px-12 bg-primary text-white hover:bg-secondary hover:text-white font-bold rounded-none transition-all shadow-lg"
              endContent={<ArrowRight className="w-5 h-5" />}
            >
              Explore All Departments
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Life at Ennova - Masonry Gallery */}
      <section className="relative w-full py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Life at <span className="text-secondary italic">Ennova</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
              From ski trips to networking dinners, we create unforgettable experiences
              while building the next generation of entrepreneurs and consultants.
            </p>
          </motion.div>

          <MasonryGallery />
        </div>
      </section>

      {/* Section 5: Application Funnel - Mega Card */}
      <section className="relative w-full py-24 px-6 z-10 bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Apply Now
            </h2>
            <p className="text-lg md:text-xl text-slate-500">
              Take the first step towards joining our community of future leaders
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mega Card Wrapper */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-primary/20 border border-primary/20">
              <TallyFormEmbed />
            </div>
          </motion.div>

          {/* Extra CTA after form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 mb-4">Have questions about the application process?</p>
            <Button
              as={NextLink}
              href="/about"
              variant="bordered"
              className="border-primary/20 text-primary hover:bg-primary hover:text-white font-bold rounded-none px-8"
              endContent={<ArrowRight className="w-4 h-4" />}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
