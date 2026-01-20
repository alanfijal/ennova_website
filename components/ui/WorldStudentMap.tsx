"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Define your countries with real coordinates
const countries = [
  {
    name: "Spain",
    code: "ES",
    students: "150+",
    cities: "Barcelona, Madrid",
    coordinates: [-3, 40] as [number, number], // lon, lat
    color: "#00AEEF",
  },
  {
    name: "United States",
    code: "US",
    students: "40+",
    cities: "NYC, San Francisco",
    coordinates: [-98, 39] as [number, number],
    color: "#00AEEF",
  },
  {
    name: "Germany",
    code: "DE",
    students: "35+",
    cities: "Berlin, Munich",
    coordinates: [10, 51] as [number, number],
    color: "#00AEEF",
  },
  {
    name: "France",
    code: "FR",
    students: "25+",
    cities: "Paris, Lyon",
    coordinates: [2, 46] as [number, number],
    color: "#00AEEF",
  },
  {
    name: "United Kingdom",
    code: "GB",
    students: "30+",
    cities: "London, Manchester",
    coordinates: [-1.5, 54] as [number, number],
    color: "#00AEEF",
  },
  {
    name: "Italy",
    code: "IT",
    students: "20+",
    cities: "Milan, Rome",
    coordinates: [12.5, 42.5] as [number, number],
    color: "#00AEEF",
  },
  {
    name: "Poland",
    code: "PL",
    students: "15+",
    cities: "Warsaw, Krakow",
    coordinates: [19, 52] as [number, number],
    color: "#00AEEF",
  },
  {
    name: "Canada",
    code: "CA",
    students: "22+",
    cities: "Toronto, Vancouver",
    coordinates: [-106, 57] as [number, number],
    color: "#00AEEF",
  },
  {
    name: "Brazil",
    code: "BR",
    students: "18+",
    cities: "São Paulo, Rio",
    coordinates: [-51, -10] as [number, number],
    color: "#00AEEF",
  },
  {
    name: "India",
    code: "IN",
    students: "28+",
    cities: "Mumbai, Bangalore",
    coordinates: [78, 22] as [number, number],
    color: "#00AEEF",
  },
];

export const WorldStudentMap = () => {
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);

  const hoveredCountry = hoveredCode
    ? countries.find((c) => c.code === hoveredCode) ?? null
    : null;

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="container relative mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6"
          >
            <Globe className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-secondary">
              International Community
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-primary tracking-tight mb-4 uppercase italic">
            Global <span className="text-secondary">Network</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            Our members bring diverse perspectives from across the globe, united
            by a shared passion for engineering and innovation.
          </p>
        </div>

        {/* Map Visualization */}
        <div className="relative w-full max-w-6xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg">
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#13182E_1px,transparent_1px)] bg-[size:30px_30px] rounded-3xl" />

          <ComposableMap
            projectionConfig={{ scale: 155 }}
            className="w-full h-auto"
            style={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.05))",
            }}
          >
            {/* Base world */}
            <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#E5E7EB", // slate-200
                        stroke: "#CBD5F5",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#E0F2FE",
                        stroke: "#93C5FD",
                        strokeWidth: 0.7,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#BFDBFE",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Country markers */}
            {countries.map((country) => (
              <Marker
                key={country.code}
                coordinates={country.coordinates}
                onMouseEnter={() => setHoveredCode(country.code)}
                onMouseLeave={() => setHoveredCode(null)}
              >
                <motion.circle
                  r={4}
                  className="cursor-pointer"
                  fill={country.color}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    scale: hoveredCode === country.code ? [1.1, 1.35, 1.1] : [1, 1.2, 1],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Marker>
            ))}
          </ComposableMap>

          {/* Floating info card on hover */}
          <AnimatePresence>
            {hoveredCountry && (
              <motion.div
                key={hoveredCountry.code}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-8 right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 min-w-[250px]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-black uppercase text-primary tracking-wider">
                    {hoveredCountry.name}
                  </span>
                </div>
                <div className="flex items-end justify-between mb-2">
                  <span className="text-3xl font-black text-secondary">
                    {hoveredCountry.students}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Students
                  </span>
                </div>
                <div className="text-xs text-slate-500 pt-2 border-t border-gray-100">
                  {hoveredCountry.cities}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Legend */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-gray-100">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Countries with Ennova Members
            </span>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 flex justify-center gap-16 md:gap-32 text-center border-t border-gray-100 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">
              30+
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Nationalities
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">
              500+
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Active Members
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">
              10+
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Countries
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
