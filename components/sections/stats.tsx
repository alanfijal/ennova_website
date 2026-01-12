"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Award, TrendingUp } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Active Members",
    description: "Engineering students collaborating",
  },
  {
    icon: Briefcase,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Innovative solutions delivered",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Departments",
    description: "Specialized technical teams",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Project completion rate",
  },
];

export function Stats() {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full z-0" />

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Our Impact in <span className="italic text-gradient-accent">Numbers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Quantifying the engineering excellence we bring to the Sheridan ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative glass-dark p-8 rounded-3xl transition-all duration-500 hover:border-secondary/40 hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle Card Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-500">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  
                  <div className="text-5xl font-extrabold mb-3 text-white tracking-tighter">
                    <NumberTicker value={stat.value} className="text-white" />
                    <span className="text-secondary">{stat.suffix}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-white/90">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}