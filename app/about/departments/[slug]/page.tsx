"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Chip } from "@heroui/chip";

// LinkedIn Icon Component (same as navbar)
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Mock department data - Replace with Sanity CMS data
const departmentData = {
  "software-engineering": {
    name: "Software Engineering",
    description: "Our software engineering team builds cutting-edge web and mobile applications, develops robust backend systems, and creates innovative software solutions for clients and internal projects.",
    color: "from-secondary to-gradient",
    stats: {
      members: 120,
      projects: 15,
      technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript"],
    },
    members: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Head of Software Engineering",
        position: "Lead Developer",
        image: "/images/team/placeholder.jpg",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        email: "sarah@ennova.org",
        bio: "Full-stack developer with 3 years of experience in building scalable web applications. Passionate about clean code and mentoring junior developers.",
        skills: ["React", "Node.js", "TypeScript", "AWS"],
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Backend Developer",
        position: "Senior Developer",
        image: "/images/team/placeholder.jpg",
        linkedin: "https://linkedin.com/in/michaelchen",
        email: "michael@ennova.org",
        bio: "Specialized in building high-performance APIs and microservices architecture. Love working with databases and optimization.",
        skills: ["Python", "PostgreSQL", "Docker", "Redis"],
      },
      {
        id: 3,
        name: "Emma Rodriguez",
        role: "Frontend Developer",
        position: "UI/UX Developer",
        image: "/images/team/placeholder.jpg",
        linkedin: "https://linkedin.com/in/emmarodriguez",
        email: "emma@ennova.org",
        bio: "Creating beautiful and accessible user interfaces. Strong focus on performance and user experience.",
        skills: ["React", "Tailwind CSS", "Figma", "Animation"],
      },
      {
        id: 4,
        name: "James Anderson",
        role: "Mobile Developer",
        position: "iOS/Android Developer",
        image: "/images/team/placeholder.jpg",
        linkedin: "https://linkedin.com/in/jamesanderson",
        email: "james@ennova.org",
        bio: "Building cross-platform mobile applications with React Native. Focused on delivering smooth user experiences.",
        skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      },
    ],
  },
  "consulting": {
    name: "Consulting",
    description: "Our consulting team provides strategic advisory services to businesses, helping them solve complex challenges and drive growth through data-driven insights and innovative solutions.",
    color: "from-orange-500 to-purple-500",
    stats: {
      members: 45,
      projects: 18,
      technologies: ["Strategy", "Analytics", "Project Management", "Business Analysis"],
    },
    members: [
      {
        id: 1,
        name: "David Williams",
        role: "Head of Consulting",
        position: "Lead Consultant",
        image: "/images/team/placeholder.jpg",
        linkedin: "https://linkedin.com/in/davidwilliams",
        email: "david@ennova.org",
        bio: "Strategic consultant with experience in digital transformation and operational excellence. Delivered 20+ successful projects.",
        skills: ["Strategy", "Business Analysis", "Change Management", "Stakeholder Management"],
      },
      {
        id: 2,
        name: "Sophie Martin",
        role: "Business Analyst",
        position: "Senior Analyst",
        image: "/images/team/placeholder.jpg",
        linkedin: "https://linkedin.com/in/sophiemartin",
        email: "sophie@ennova.org",
        bio: "Data-driven analyst specializing in market research and competitive analysis. Passionate about turning insights into action.",
        skills: ["Data Analysis", "Market Research", "SQL", "Tableau"],
      },
    ],
  },
  "entrepreneurship": {
    name: "Entrepreneurship",
    description: "Our entrepreneurship team supports aspiring founders in building and scaling their startups, providing mentorship, resources, and connections to bring innovative ideas to life.",
    color: "from-pink-500 to-[#FFD700]",
    stats: {
      members: 60,
      projects: 7,
      technologies: ["Business Development", "Pitch Design", "Fundraising", "Go-to-Market"],
    },
    members: [
      {
        id: 1,
        name: "Alex Thompson",
        role: "Head of Entrepreneurship",
        position: "Venture Lead",
        image: "/images/team/placeholder.jpg",
        linkedin: "https://linkedin.com/in/alexthompson",
        email: "alex@ennova.org",
        bio: "Serial entrepreneur with 2 successful exits. Passionate about helping students build their dream companies.",
        skills: ["Business Strategy", "Fundraising", "Pitch Design", "Network Building"],
      },
      {
        id: 2,
        name: "Lisa Park",
        role: "Venture Developer",
        position: "Growth Specialist",
        image: "/images/team/placeholder.jpg",
        linkedin: "https://linkedin.com/in/lisapark",
        email: "lisa@ennova.org",
        bio: "Helping startups find product-market fit and scale efficiently. Background in growth marketing and operations.",
        skills: ["Growth Marketing", "Product Management", "Analytics", "User Research"],
      },
    ],
  },
};

export default function DepartmentPage() {
  const params = useParams();
  const slug = params.slug as string;
  const department = departmentData[slug as keyof typeof departmentData];

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Department Not Found</h1>
          <Button as={Link} href="/about" color="primary">
            Back to About
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-secondary blur-[120px] rounded-full" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              as={Link}
              href="/about"
              variant="light"
              startContent={<ArrowLeft className="w-4 h-4" />}
              className="text-white mb-8"
            >
              Back to About
            </Button>

            <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${department.color} mb-6`}>
              <span className="text-white font-semibold">Department</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {department.name}
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-12">
              {department.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-secondary mb-1">
                  {department.stats.members}
                </div>
                <div className="text-sm text-gray-400">Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-1">
                  {department.stats.projects}
                </div>
                <div className="text-sm text-gray-400">Active Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies/Skills */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {department.stats.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Chip
                  variant="flat"
                  color="primary"
                  size="lg"
                  classNames={{
                    base: "bg-secondary/10",
                    content: "text-secondary font-semibold",
                  }}
                >
                  {tech}
                </Chip>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
              Meet the <span className="text-gradient-accent">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              Talented individuals driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {department.members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-secondary/30">
                  <CardBody className="p-6">
                    {/* Avatar and Basic Info */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative mb-4">
                        <Avatar
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 text-large"
                          fallback={
                            <div className="w-full h-full bg-gradient-to-br from-secondary to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                              {member.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                          }
                        />
                        {/* Role Badge */}
                        <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br ${department.color} flex items-center justify-center border-4 border-white`}>
                          <span className="text-white text-xs font-bold">
                            {member.role.split(" ")[0][0]}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-secondary font-semibold mb-1">
                        {member.role}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{member.position}</p>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.slice(0, 3).map((skill, idx) => (
                        <Chip
                          key={idx}
                          size="sm"
                          variant="flat"
                          classNames={{
                            base: "bg-gray-100",
                            content: "text-gray-700 text-xs",
                          }}
                        >
                          {skill}
                        </Chip>
                      ))}
                      {member.skills.length > 3 && (
                        <Chip
                          size="sm"
                          variant="flat"
                          classNames={{
                            base: "bg-gray-100",
                            content: "text-gray-700 text-xs",
                          }}
                        >
                          +{member.skills.length - 3}
                        </Chip>
                      )}
                    </div>

                    {/* Contact Links */}
                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                      <Button
                        as={Link}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        variant="flat"
                        color="primary"
                        startContent={<LinkedInIcon className="w-4 h-4" />}
                        className="flex-1"
                      >
                        LinkedIn
                      </Button>
                      <Button
                        as={Link}
                        href={`mailto:${member.email}`}
                        size="sm"
                        variant="bordered"
                        startContent={<Mail className="w-4 h-4" />}
                        className="flex-1"
                      >
                        Email
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Want to Join <span className="text-gradient-accent">{department.name}</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/join"
                size="lg"
                className="bg-white text-dark hover:bg-secondary hover:text-white font-bold"
                endContent={<ExternalLink className="w-5 h-5" />}
              >
                Apply Now
              </Button>
              <Button
                as={Link}
                href="/about"
                size="lg"
                variant="bordered"
                className="border-white/20 text-white hover:bg-white/5"
              >
                Explore Other Departments
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
