"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import { TechnicalGrid } from "./TechnicalGrid";
import { CrosshairIcon, BuildingsIcon, GraduationCapIcon, UsersThreeIcon } from "@phosphor-icons/react";
import { corporatePartners, esadePartners, studentAssociations } from "@/data/partners";

type CategoryKey = "corporate" | "esade" | "student";

interface CategoryConfig {
  key: CategoryKey;
  label: string;
  tag: string;
  icon: React.ElementType;
  color: string;
  meta: string;
}

const categories: CategoryConfig[] = [
  { key: "corporate", label: "Corporate", tag: "CORP_NET", icon: BuildingsIcon, color: "#00AEEF", meta: "CORP_PARTNER // ECOSYSTEM" },
  { key: "esade", label: "ESADE", tag: "ESADE_SYS", icon: GraduationCapIcon, color: "#00AEEF", meta: "ESADE_ECOSYSTEM // ACADEMIC" },
  { key: "student", label: "Associations", tag: "ASSOC_HUB", icon: UsersThreeIcon, color: "#00AEEF", meta: "STUDENT_ASSOC // EXTERNAL" },
];

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  logo?: string;
  colorLogo?: boolean;
  type: "core" | CategoryKey;
  meta: string;
}

function distributeCircle(
  count: number,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const startAngle = -Math.PI / 2;
  for (let i = 0; i < count; i++) {
    const angle = startAngle + (2 * Math.PI * i) / count;
    points.push({
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle),
    });
  }
  return points;
}

function toId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function toLabel(name: string) {
  return name.toUpperCase().replace(/\s+/g, "_");
}

function buildCategoryNodes(category: CategoryKey): Node[] {
  const coreNode: Node = { id: "ennova", x: 50, y: 42, label: "ENNOVA", type: "core", meta: "LAT: 41.3851 // HUB_01" };

  const sourceMap = {
    corporate: corporatePartners,
    esade: esadePartners,
    student: studentAssociations,
  };

  const metaMap = {
    corporate: "CORP_PARTNER // ECOSYSTEM",
    esade: "ESADE_ECOSYSTEM // ACADEMIC",
    student: "STUDENT_ASSOC // EXTERNAL",
  };

  const partners = sourceMap[category];
  const positions = distributeCircle(partners.length, 50, 42, 34, 26);

  const partnerNodes: Node[] = partners.map((p, i) => ({
    id: toId(p.name),
    x: positions[i].x,
    y: positions[i].y,
    label: toLabel(p.name),
    logo: p.logo,
    colorLogo: p.colorLogo,
    type: category,
    meta: metaMap[category],
  }));

  return [coreNode, ...partnerNodes];
}

export function BarcelonaConnectivityMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("corporate");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // IntersectionObserver to trigger animation on scroll
  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const nodes = useMemo(() => buildCategoryNodes(activeCategory), [activeCategory]);
  const connections = useMemo(
    () => nodes.filter((n) => n.id !== "ennova").map((n) => ({ from: "ennova", to: n.id })),
    [nodes],
  );

  const getNode = (id: string) => nodes.find((n) => n.id === id);
  const activeCfg = categories.find((c) => c.key === activeCategory)!;

  return (
    <div ref={containerRef} className="relative w-full aspect-[16/10] bg-primary border border-white/5 overflow-hidden">
      {/* Tactical Backdrop */}
      <TechnicalGrid />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.05)_0%,transparent_70%)]" />

      {/* UI Frame */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-gray-600 tracking-[0.3em] uppercase">
        System_Map // Ennova_2026
      </div>
      <div className="absolute top-4 right-4 flex gap-4 text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-secondary animate-pulse" />
          <span className="font-mono text-[8px]">LIVE_FEED</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 flex gap-1">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key); setHoveredNode(null); }}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] transition-all duration-300 border ${
                isActive
                  ? "bg-secondary/10 text-secondary border-secondary/40"
                  : "bg-white/[0.02] text-gray-600 border-white/5 hover:text-gray-400 hover:border-white/10"
              }`}
            >
              <Icon className="w-3 h-3" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* SVG Map */}
      <svg viewBox="0 0 100 84" className="absolute inset-0 w-full h-full px-8 pt-16 pb-8">
        <defs>
          <filter id="mapGlow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <AnimatePresence mode="wait">
          <motion.g
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasAnimated ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Connections */}
            {connections.map((conn, ci) => {
              const from = getNode(conn.from);
              const to = getNode(conn.to);
              if (!from || !to) return null;
              const isActive = hoveredNode === from.id || hoveredNode === to.id;

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  {/* Use <path> instead of <line> so pathLength works */}
                  <motion.path
                    d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                    stroke={isActive ? "rgba(0,174,239,0.4)" : "rgba(255,255,255,0.06)"}
                    strokeWidth={isActive ? "0.3" : "0.15"}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={hasAnimated ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + ci * 0.04, ease: "easeOut" }}
                    className="transition-colors duration-500"
                  />
                  {isActive && (
                    <motion.circle r="0.35" fill="#00AEEF">
                      <animateMotion dur="1.5s" repeatCount="indefinite" path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`} />
                    </motion.circle>
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node, i) => {
              const isHovered = hoveredNode === node.id;
              const isCore = node.type === "core";
              const showLogo = !isCore && node.logo && activeCategory === "corporate";
              const restFilter = node.colorLogo
                ? "grayscale(0.3) opacity(0.6)"
                : "brightness(0) invert(1) opacity(0.45)";
              // Logo floats above the dot; lw×lh in SVG units
              const lw = 10, lh = 5;

              return (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: isCore ? 0.1 : 0.3 + 0.05 * i }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-crosshair"
                >
                  {showLogo ? (
                    <>
                      {/* Logo floats above the dot — bottom of logo = dot y - 1 gap */}
                      <foreignObject
                        x={node.x - lw / 2}
                        y={node.y - lh - 1.5}
                        width={lw}
                        height={lh}
                        style={{ overflow: "visible" }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={node.logo}
                            alt={node.label}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                              filter: isHovered
                                ? "brightness(1) grayscale(0) opacity(1)"
                                : restFilter,
                              transition: "filter 0.3s",
                            }}
                          />
                        </div>
                      </foreignObject>
                      {/* Connection anchor dot */}
                      <motion.circle
                        cx={node.x} cy={node.y}
                        r={0.5}
                        fill={isHovered ? "#00AEEF" : "white"}
                        opacity={isHovered ? 1 : 0.5}
                        initial={{ r: 0 }}
                        animate={hasAnimated ? { r: 0.5 } : { r: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + 0.05 * i, type: "spring", stiffness: 200 }}
                        className="transition-colors duration-300"
                      />
                      {/* Hover ring around dot */}
                      {isHovered && (
                        <motion.circle
                          cx={node.x} cy={node.y} r="2"
                          fill="none" stroke="#00AEEF" strokeWidth="0.15"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.4 }}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {/* Node Dot */}
                      <motion.circle
                        cx={node.x} cy={node.y}
                        r={isCore ? 1 : 0.6}
                        fill={isHovered || isCore ? "#00AEEF" : "white"}
                        opacity={isHovered || isCore ? 1 : 0.6}
                        initial={{ r: 0 }}
                        animate={hasAnimated ? { r: isCore ? 1 : 0.6 } : { r: 0 }}
                        transition={{ duration: 0.4, delay: isCore ? 0.1 : 0.4 + 0.05 * i, type: "spring", stiffness: 200 }}
                        className="transition-colors duration-300"
                      />

                      {/* Hover ring */}
                      {isHovered && !isCore && (
                        <motion.circle
                          cx={node.x} cy={node.y} r="2"
                          fill="none" stroke="#00AEEF" strokeWidth="0.15"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.4 }}
                        />
                      )}

                      {/* Core brackets */}
                      {isCore && (
                        <motion.g
                          opacity="0.3"
                          initial={{ opacity: 0 }}
                          animate={hasAnimated ? { opacity: 0.3 } : { opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          <path d={`M ${node.x-3} ${node.y-1.5} L ${node.x-3} ${node.y-3} L ${node.x-1.5} ${node.y-3}`} fill="none" stroke="#00AEEF" strokeWidth="0.2" />
                          <path d={`M ${node.x+1.5} ${node.y-3} L ${node.x+3} ${node.y-3} L ${node.x+3} ${node.y-1.5}`} fill="none" stroke="#00AEEF" strokeWidth="0.2" />
                          <path d={`M ${node.x+3} ${node.y+1.5} L ${node.x+3} ${node.y+3} L ${node.x+1.5} ${node.y+3}`} fill="none" stroke="#00AEEF" strokeWidth="0.2" />
                          <path d={`M ${node.x-1.5} ${node.y+3} L ${node.x-3} ${node.y+3} L ${node.x-3} ${node.y+1.5}`} fill="none" stroke="#00AEEF" strokeWidth="0.2" />
                        </motion.g>
                      )}

                      {/* Labels */}
                      <text
                        x={node.x} y={node.y + (isCore ? 5 : 3.5)}
                        textAnchor="middle"
                        className={`font-mono pointer-events-none uppercase ${
                          isCore
                            ? "text-[2px] fill-secondary tracking-[0.3em] font-bold"
                            : "text-[1.4px] fill-gray-500 tracking-[0.15em]"
                        }`}
                        style={{ opacity: isHovered || isCore ? 1 : 0.6 }}
                      >
                        {node.label}
                      </text>
                    </>
                  )}
                </motion.g>
              );
            })}
          </motion.g>
        </AnimatePresence>
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode && hoveredNode !== "ennova" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-8 right-8 w-56 glass-dark border-l-2 border-secondary p-5 z-30"
          >
            <div className="flex items-center gap-2 mb-3">
              <CrosshairIcon className="text-secondary w-3.5 h-3.5" />
              <span className="font-mono text-[9px] text-white tracking-widest uppercase">Target_Data</span>
            </div>
            <h4 className="font-heading text-lg text-white mb-1.5 uppercase">
              {getNode(hoveredNode)?.label.replace(/_/g, " ")}
            </h4>
            <p className="font-mono text-[8px] text-gray-500 leading-relaxed uppercase tracking-tighter">
              {getNode(hoveredNode)?.meta}
            </p>
            <div className="mt-3 pt-3 border-t border-white/5">
              <div className="flex justify-between items-center text-[7px] font-mono text-gray-600">
                <span>SIGNAL_STRENGTH</span>
                <span className="text-secondary">98.2%</span>
              </div>
              <div className="w-full h-[1px] bg-white/5 mt-1">
                <motion.div initial={{ width: 0 }} animate={{ width: "98%" }} className="h-full bg-secondary" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Info + Count */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-secondary" />
          <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">Ennova_Hub</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-white opacity-60" />
          <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">
            {activeCfg.tag} [{nodes.length - 1}]
          </span>
        </div>
      </div>
    </div>
  );
}
