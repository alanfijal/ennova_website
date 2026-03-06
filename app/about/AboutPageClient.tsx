"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon, UsersIcon, BriefcaseIcon, LightningIcon, BookOpenIcon, SparkleIcon,
  DatabaseIcon, FootballIcon, RocketLaunchIcon, LightbulbIcon, LightbulbFilamentIcon, CoinsIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Button } from "@heroui/button";
import { MajesticLineage } from "@/components/ui/MajesticLineage";
import type { SerializableDepartment } from "@/sanity/lib/fetch";

const iconMap: Record<string, Icon> = {
  DatabaseIcon, BriefcaseIcon, LightningIcon, FootballIcon,
  RocketLaunchIcon, LightbulbIcon, LightbulbFilamentIcon, UsersIcon, CoinsIcon,
};

function getIcon(name: string): Icon {
  return iconMap[name] || BriefcaseIcon;
}

// LinkedIn Icon Component
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const story = {
  founding: {
    year: "2018",
    story: "It all began in September 2018, when five passionate students sat down with Esade and dared to dream bigger. Together, they founded Ennova, not just another student association, but the driving force behind Esade's Rambla of Innovation, a space where ideas come to life and the future of engineering takes shape."
  },
  mission: "To open the gates of the startup ecosystem to the best talents in Barcelona, empowering them to leave their mark and shape the future of innovation.",
  vision: "To be the leading student-run entrepreneurial hub in Spain, recognized by top VCs, Founders and Corporates. To have assisted in creation of unicorns when they were still just ideas of talented students.",
  values: [
    {
      icon: BriefcaseIcon,
      title: "Professionalism",
      description: "We maintain the highest standards in everything we do, exceeding what is commonly expected from students.",
    },
    {
      icon: LightningIcon,
      title: "Boldness",
      description: "We keep raising our bar and doing things we've never done before.",
    },
    {
      icon: BookOpenIcon,
      title: "Learning",
      description: "We treat every problem we encounter as an opportunity.",
    },
    {
      icon: SparkleIcon,
      title: "Fun",
      description: "We maintain an upbeat, cheerful, and positive attitude because what we all do together simply brings us joy.",
    },
  ],
};


const stats = [
  { value: "80+", label: "Active Members" },
  { value: "10", label: "Departments" },
  { value: "8", label: "Years of history" },
  { value: "135+", label: "Events organized" },
  { value: "100+", label: "Professionals involved a year" },

];

const boardMembers = [
  {
    id: "member-1",
    name: "Nuria Diaz Noguerol",
    role: "Marketing Director",
    linkedin: "https://www.linkedin.com/in/nuria-diaz-noguerol/",
    hotspot: { x: 25, y: 75 },
  },
  {
    id: "member-2",
    name: "María José Peralta",
    role: "Vice President",
    linkedin: "https://www.linkedin.com/in/marina-haeckel-blanke-81919728b/",
    hotspot: { x: 40, y: 72 },
  },
  {
    id: "member-3",
    name: "Piotr Fiebig",
    role: "President",
    linkedin: "https://www.linkedin.com/in/piotr-fiebig-b54151268/",
    hotspot: { x: 56, y: 65 },
  },
  {
    id: "member-4",
    name: "Marina Haeckel Blanke",
    role: "Vice President",
    linkedin: "https://www.linkedin.com/in/marina-haeckel-blanke-81919728b/",
    hotspot: { x: 68, y: 72 },
  },
  {
    id: "member-5",
    name: "Lucia Castillo Rodriguez",
    role: "Internal Operations Director",
    linkedin: "https://www.linkedin.com/in/lucia-castillo-rodriguez/ ",
    hotspot: { x: 85, y: 75 },
  },
];

export function AboutPageClient({ departments }: { departments: SerializableDepartment[] }) {
  const [activeMember, setActiveMember] = useState<string | null>(null);
  const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((id: string) => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
    setActiveMember(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    leaveTimeout.current = setTimeout(() => {
      setActiveMember(null);
    }, 500);
  }, []);

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
                  <UsersIcon className="w-4 h-4 text-secondary" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-300">
                    About Ennova
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 lg:mb-8 leading-[1.1] tracking-tight"
              >
                Building the{" "}
                <span className="text-gradient-accent">Future of Entrepreneurship</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 lg:mb-12 leading-relaxed"
              >
                {story.mission}
              </motion.p>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/community/Screenshot 2026-01-30 at 15.21.42.png"
                alt="Ennova community event"
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
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

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark tracking-tight text-center">
              Our <span className="text-gradient-accent">Story</span>
            </h2>
            <div className="glass-dark rounded-3xl p-12 text-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl font-extrabold text-secondary">{story.founding.year}</div>
                <div className="h-1 flex-1 bg-gradient-to-r from-secondary to-transparent" />
              </div>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                {story.founding.story}
              </p>
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  {story.vision}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Our <span className="text-gradient-accent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {story.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-gradient mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments - Industrial Grid */}
      <section id="departments" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark tracking-tight">
              Our <span className="text-gradient-accent">Departments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized teams working on cutting-edge projects across multiple disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200 border border-gray-200">
            {departments.map((dept) => {
              const Icon = getIcon(dept.iconName);
              return (
                <NextLink
                  key={dept.slug}
                  href={`/about/departments/${dept.slug}`}
                  className="bg-white p-8 group hover:bg-primary transition-all duration-500 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 border border-gray-200 flex items-center justify-center group-hover:border-white/10 group-hover:bg-white/5 transition-all">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary/10 text-secondary group-hover:bg-white/10 group-hover:text-white transition-all">
                      {dept.focus}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-dark group-hover:text-white transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors text-sm">
                    {dept.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 group-hover:border-white/10 transition-colors mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary group-hover:text-white transition-colors">{dept.members}</div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-400 uppercase transition-colors">Members</div>
                    </div>
                    {dept.focus !== "Core" && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary group-hover:text-white transition-colors">{dept.projects}</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400 uppercase transition-colors">
                          {dept.focus === "Events" ? "Events" : "Projects"}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-secondary group-hover:text-white font-semibold text-sm transition-all">
                    <span>View Team</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </NextLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* Majestic Lineage - Strategic Timeline */}
      <MajesticLineage />

      {/* Institutional Board Section */}
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
              Institutional <span className="text-gradient-accent">Board</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders guiding Ennova&apos;s vision and strategic direction
            </p>
            <p className="text-sm text-gray-400 mt-2 md:hidden">
              Tap a member to view their profile
            </p>
          </motion.div>

          {/* Interactive Group Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative aspect-[3/2] rounded-3xl overflow-hidden">
              <Image
                src="/images/community/Inst_Board.jpeg"
                alt="Ennova Institutional Board members"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              />
              {/* Bottom gradient for label readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />

              {/* Mobile tap-outside dismiss backdrop */}
              {activeMember && (
                <div
                  className="absolute inset-0 z-10 md:hidden"
                  onClick={() => setActiveMember(null)}
                />
              )}

              {/* Pulsing dot indicators only — no labels on the image */}
              {boardMembers.map((member) => (
                <div
                  key={member.id}
                  className="absolute z-20"
                  style={{
                    left: `${member.hotspot.x}%`,
                    top: `${member.hotspot.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${member.name}'s profile`}
                  onMouseEnter={() => handleMouseEnter(member.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() =>
                    setActiveMember(activeMember === member.id ? null : member.id)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveMember(activeMember === member.id ? null : member.id);
                    }
                  }}
                >
                  <motion.div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-colors duration-300 ${
                      activeMember === member.id
                        ? "border-secondary bg-secondary/20"
                        : "border-secondary/60"
                    }`}
                    animate={{
                      scale: activeMember === member.id ? 1 : [1, 1.15, 1],
                      opacity: activeMember === member.id ? 1 : [0.7, 0.4, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: activeMember === member.id ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              ))}

            </div>

            {/* Member cards grid — always visible below photo */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
              {boardMembers.map((member) => (
                <a
                  key={member.id}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => handleMouseEnter(member.id)}
                  onMouseLeave={handleMouseLeave}
                  className={`group p-4 rounded-2xl border transition-all duration-300 text-center ${
                    activeMember === member.id
                      ? "border-secondary/50 bg-secondary/5"
                      : "border-gray-200 bg-white hover:border-secondary/30 hover:shadow-md"
                  }`}
                >
                  <p className="font-bold text-dark text-sm leading-tight mb-1 group-hover:text-secondary transition-colors">
                    {member.name}
                  </p>
                  <p className="text-secondary text-xs font-semibold">{member.role}</p>
                  <div className="mt-2 inline-flex items-center gap-1 text-gray-400 group-hover:text-secondary transition-colors text-xs">
                    <LinkedInIcon className="w-3 h-3" />
                    <span>LinkedIn</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
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
              Ready to Join Our <span className="text-gradient-accent">Community</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Become part of Esades&apos;s most innovative student association
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={NextLink}
                href="/join"
                className="h-14 px-10 bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-none transition-all"
                endContent={<ArrowRightIcon className="w-5 h-5" />}
              >
                Join Ennova
              </Button>
              <Button
                as={NextLink}
                href="/events"
                variant="bordered"
                className="h-14 px-10 border-white/20 text-white hover:bg-white/5 font-bold rounded-none"
              >
                Explore Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
