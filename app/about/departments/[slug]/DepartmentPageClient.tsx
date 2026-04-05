"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, EnvelopeIcon, ArrowSquareOutIcon } from "@phosphor-icons/react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Chip } from "@heroui/chip";
import type { DepartmentDetail } from "@/data/types";

// LinkedIn Icon Component (same as navbar)
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export function DepartmentPageClient({ department }: { department: DepartmentDetail }) {
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
              startContent={<ArrowLeftIcon className="w-4 h-4" />}
              className="text-white mb-8"
            >
              Back to About
            </Button>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              {/* Left: text content */}
              <div className="flex-1">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                  {department.name}
                </h1>

                <p className="text-xl text-gray-300 max-w-3xl mb-12">
                  {department.description}
                </p>

                {/* Stats */}
                {department.stats && (department.stats.members || department.stats.projects) && (
                  <div className="flex flex-wrap gap-8">
                    {!!department.stats.members && (
                      <div>
                        <div className="text-4xl font-bold text-secondary mb-1">
                          {department.stats.members}
                        </div>
                        <div className="text-sm text-gray-400">Members</div>
                      </div>
                    )}
                    {!!department.stats.projects && (
                      <div>
                        <div className="text-4xl font-bold text-secondary mb-1">
                          {department.stats.projects}
                        </div>
                        <div className="text-sm text-gray-400">Active Events</div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right: department logo */}
              {department.logoUrl && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="flex-shrink-0 flex items-center justify-center lg:justify-end"
                >
                  <div className="w-28 h-28 md:w-64 md:h-64 flex items-center justify-center">
                    <img
                      src={department.logoUrl}
                      alt={`${department.name} logo`}
                      className="w-full h-full object-contain opacity-90"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      {department.whatWeDo && department.whatWeDo.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
                What We <span className="text-gradient-accent">Do</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our core activities and responsibilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {department.whatWeDo.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{activity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools We Use Section */}
      {department.tools && department.tools.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
                Tools We <span className="text-gradient-accent">Use</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Technologies and platforms that power our work
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {department.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Chip
                    variant="flat"
                    color="primary"
                    size="lg"
                    classNames={{
                      base: "bg-white border border-gray-200 hover:border-secondary/50 transition-colors",
                      content: "text-gray-700 font-semibold",
                    }}
                  >
                    {tool}
                  </Chip>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team Photo Section */}
      {department.teamPhoto && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
                Our <span className="text-gradient-accent">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the people behind {department.name}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={department.teamPhoto}
                  alt={`${department.name} Team`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-2xl font-bold mb-2">{department.name} Team</p>
                    {department.stats && (
                      <p className="text-gray-200">{department.stats.members} Members</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Team Members */}
      {department.members && department.members.length > 0 && (
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
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-secondary font-semibold mb-1">
                          {member.role}
                        </p>
                        {member.position && (
                          <p className="text-xs text-gray-600 dark:text-gray-400">{member.position}</p>
                        )}
                      </div>

                      {/* Bio */}
                      {member.bio && (
                        <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                          {member.bio}
                        </p>
                      )}

                      {/* Contact Links */}
                      {(member.linkedin || member.email) && (
                        <div className="flex gap-2 pt-4 border-t border-gray-100">
                          {member.linkedin && (
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
                          )}
                          {member.email && (
                            <Button
                              as={Link}
                              href={`mailto:${member.email}`}
                              size="sm"
                              variant="bordered"
                              startContent={<EnvelopeIcon className="w-4 h-4" />}
                              className="flex-1"
                            >
                              Email
                            </Button>
                          )}
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              We&apos;re always looking for passionate individuals to join our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/join"
                size="lg"
                className="bg-white text-dark hover:bg-secondary hover:text-white font-bold rounded-none"
                endContent={<ArrowSquareOutIcon className="w-5 h-5" />}
              >
                Apply Now
              </Button>
              <Button
                as={Link}
                href="/about#departments"
                size="lg"
                variant="bordered"
                className="border-white/20 text-white hover:bg-white/5 rounded-none"
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
