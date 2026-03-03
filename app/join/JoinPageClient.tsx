"use client";

import { motion } from "framer-motion";
import { StarIcon, SparkleIcon, UsersIcon, TrophyIcon, LightbulbIcon, HeartIcon, ArrowRightIcon, CalendarDotsIcon, GraduationCapIcon } from "@phosphor-icons/react";
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
  { name: "Growth Capital", logo: "/images/alumni_companies_logos/gc_transparent.png" },
  { name: "Deloitte", logo: "/images/alumni_companies_logos/DeloitteNewLogo_transparent.png" },
  { name: "P&G", logo: "/images/alumni_companies_logos/pg_transparent.png" },
  { name: "KPMG", logo: "/images/alumni_companies_logos/KPMG_transparent.png" },
  { name: "Danone", logo: "/images/alumni_companies_logos/DANONE_LOGO_HORIZONTAL.png" },
  { name: "CaixaBank", logo: "/images/alumni_companies_logos/CaixaBank_transparent.png" },
];

// Benefits data for Bento grid
const benefits = [
  {
    icon: CalendarDotsIcon,
    title: "Vibrant Community Events",
    description: "From BBQs and holiday dinners to department-led activities and weekly meetings, we cultivate a thriving community.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: GraduationCapIcon,
    title: "Learning & Development",
    description: "Grow through internal workshops, panel discussions, and skill-building sessions designed to push you further.",
    gradient: "from-[#A78BFA]/10 to-[#A78BFA]/5",
  },
  {
    icon: TrophyIcon,
    title: "Lead Real Projects",
    description: "Develop project management, teamwork, and partnership outreach skills by leading hands-on initiatives.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: UsersIcon,
    title: "Highly Selective",
    description: "This year, only 40 members were accepted from over 250 applicants — you'll be surrounded by the most ambitious peers.",
    gradient: "from-[#A78BFA]/10 to-[#A78BFA]/5",
  },
  {
    icon: LightbulbIcon,
    title: "Real-World Experience",
    description: "Turn classroom theory into entrepreneurial practice. Bring your ideas to life in a hands-on environment.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: HeartIcon,
    title: "Lifelong Alumni Network",
    description: "Current and past members in leadership positions gain access to exclusive events, networking opportunities, and lifelong support.",
    gradient: "from-[#A78BFA]/10 to-[#A78BFA]/5",
  },
];

export function JoinPageClient() {
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
              <SparkleIcon className="w-4 h-4 text-secondary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70">
                Join 80+ Members
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
            Bring your ideas to life, surround yourself with ambitious peers and mentors, and turn
            classroom theory into real-world experience. Lead real projects, grow as a leader, and
            meet genuinely cool people.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-12 mb-16"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-secondary mb-2">80+</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#A78BFA] mb-2">10+</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Events Organised every year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-secondary mb-2">9</div>
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

        {/* Mobile: swipeable scroll row */}
        <div className="md:hidden flex gap-6 overflow-x-auto px-6 pb-2 scrollbar-hide snap-x snap-mandatory">
          {alumniCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-none snap-center flex items-center justify-center w-36 h-20 grayscale opacity-50"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full max-h-full object-contain p-3 mix-blend-multiply"
              />
            </div>
          ))}
        </div>

        {/* Desktop: auto-scrolling marquee */}
        <div className="hidden md:block">
          <Marquee pauseOnHover className="[--duration:30s]">
            {alumniCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-40 h-24 mx-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain p-4 mix-blend-multiply"
                />
              </div>
            ))}
          </Marquee>
        </div>
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
                            <StarIcon className="w-5 h-5 text-red-500 fill-red-500" />
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
              A safe, ambitious community where you lead real projects, grow as a leader, and meet genuinely cool people.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                  className="h-full"
                >
                  <Card className="h-full bg-white/70 backdrop-blur-md border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-500">
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
              endContent={<ArrowRightIcon className="w-5 h-5" />}
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

      {/* Section 5: Applications */}
      <section className="relative w-full py-24 px-6 z-10">
        <div className="max-w-md mx-auto">
          <TallyFormEmbed />
        </div>
      </section>
    </div>
  );
}
