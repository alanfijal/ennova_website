"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, Briefcase, Code, Cpu, Zap, Wrench, Database } from "lucide-react";
import { Button } from "@heroui/button";

const story = {
  founding: {
    year: "2019",
    story: "Ennova was founded by a group of ambitious engineering students at Sheridan College who saw a gap between academic learning and real-world industry experience. What started as informal study groups evolved into a structured organization dedicated to bridging the divide between classroom theory and professional practice."
  },
  mission: "To empower engineering students by providing hands-on experience, industry connections, and entrepreneurial opportunities that prepare them for leadership roles in technology and innovation.",
  vision: "To become Canada's premier student-led engineering innovation hub, recognized for producing industry-ready engineers and successful startups.",
  values: [
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from technical projects to partnerships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new ideas and encourage creative problem-solving in all our initiatives.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together toward common goals.",
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "We measure our success by the tangible difference we make in students' careers and the industry.",
    },
  ],
};

const departments = [
  {
    icon: Code,
    name: "Software Engineering",
    description: "Full-stack development, mobile apps, web applications, and software architecture.",
    members: 120,
    projects: 15,
    color: "from-[#00AEEF] to-[#13182e]",
    focus: "Software",
  },
  {
    icon: Cpu,
    name: "Electrical Engineering",
    description: "Circuit design, embedded systems, PCB development, and hardware integration.",
    members: 85,
    projects: 12,
    color: "from-purple-500 to-[#13182e]",
    focus: "Hardware",
  },
  {
    icon: Wrench,
    name: "Mechanical Engineering",
    description: "CAD design, prototyping, manufacturing, and mechanical systems integration.",
    members: 95,
    projects: 10,
    color: "from-[#FFD700] to-[#00AEEF]",
    focus: "Hardware",
  },
  {
    icon: Database,
    name: "Data Science & AI",
    description: "Machine learning, data analysis, predictive modeling, and AI applications.",
    members: 75,
    projects: 8,
    color: "from-green-500 to-[#00AEEF]",
    focus: "Software",
  },
  {
    icon: Briefcase,
    name: "Consulting",
    description: "Business solutions, technical consulting, and strategic advisory services.",
    members: 45,
    projects: 18,
    color: "from-orange-500 to-purple-500",
    focus: "Business",
  },
  {
    icon: Zap,
    name: "Entrepreneurship",
    description: "Startup incubation, business development, and venture creation support.",
    members: 60,
    projects: 7,
    color: "from-pink-500 to-[#FFD700]",
    focus: "Business",
  },
];

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "15", label: "Departments" },
  { value: "70+", label: "Projects Completed" },
  { value: "30+", label: "Industry Partners" },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Ennova established by engineering students" },
  { year: "2020", title: "First Partnership", description: "Secured first corporate collaboration with local tech firm" },
  { year: "2021", title: "Expansion", description: "Grew to 200+ members across 10 departments" },
  { year: "2022", title: "Innovation Hub", description: "Launched dedicated makerspace and prototyping lab" },
  { year: "2023", title: "Startup Success", description: "First student venture acquired for $2.5M" },
  { year: "2024", title: "National Recognition", description: "Named Top Student Engineering Organization in Canada" },
  { year: "2026", title: "Future", description: "Big Things" },

];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#13182e] text-white">
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00AEEF]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="container relative mx-auto px-4 z-10 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card">
                <Users className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">
                  About Ennova
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight"
            >
              Engineering the{" "}
              <span className="text-gradient-accent">Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {story.mission}
            </motion.p>
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
                <div className="text-4xl md:text-5xl font-extrabold text-[#13182e] mb-2 tracking-tight">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#13182e] tracking-tight text-center">
              Our <span className="text-gradient-accent">Story</span>
            </h2>
            <div className="glass-dark rounded-3xl p-12 text-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl font-extrabold text-[#00AEEF]">{story.founding.year}</div>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#00AEEF] to-transparent" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#13182e] tracking-tight">
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#13182e] mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#13182e]">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#13182e] tracking-tight">
              Our <span className="text-gradient-accent">Departments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized teams working on cutting-edge projects across multiple disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#00AEEF]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.color} group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                        {dept.focus}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-[#13182e] group-hover:text-[#00AEEF] transition-colors duration-300">
                      {dept.name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {dept.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#00AEEF]">{dept.members}</div>
                        <div className="text-xs text-gray-500 uppercase">Members</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#00AEEF]">{dept.projects}</div>
                        <div className="text-xs text-gray-500 uppercase">Projects</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#13182e] tracking-tight">
              Our <span className="text-gradient-accent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00AEEF] to-purple-500" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-[#00AEEF] border-4 border-white shadow-lg" />

                  <div className="glass-card p-6 rounded-2xl">
                    <div className="text-2xl font-bold text-[#00AEEF] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-[#13182e] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#13182e] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00AEEF]/10 blur-[120px] rounded-full" />

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
              Become part of Sheridan's most innovative student engineering organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={NextLink}
                href="/join"
                className="h-14 px-10 bg-white text-[#13182e] hover:bg-[#00AEEF] hover:text-white font-bold rounded-full transition-all"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Join Ennova
              </Button>
              <Button
                as={NextLink}
                href="/events"
                variant="bordered"
                className="h-14 px-10 border-white/20 text-white hover:bg-white/5 font-bold rounded-full"
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