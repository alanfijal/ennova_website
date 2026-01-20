"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TechnicalGrid } from "./TechnicalGrid";
import { Crosshair } from "lucide-react";

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  type: "core" | "academic" | "industrial" | "corporate";
  meta: string;
}

const nodes: Node[] = [
  { id: "ennova", x: 50, y: 35, label: "ENNOVA_CENTRAL", type: "core", meta: "LAT: 41.3851 // HUB_01" },
  { id: "esade", x: 45, y: 55, label: "ESADE_ACADEMIC", type: "academic", meta: "STRAT_PARTNER // V_ACAD" },
  { id: "districte22", x: 75, y: 45, label: "BCN_22@_DISTRICT", type: "industrial", meta: "TECH_CLUSTER // IND_NODE" },
  { id: "global_corps", x: 25, y: 45, label: "GLOBAL_CORPORATE", type: "corporate", meta: "DELOITTE // PARTNER_NODES" },
  { id: "finance", x: 30, y: 70, label: "FINANCIAL_DISTRICT", type: "corporate", meta: "EQUITY // SECTOR_G" },
];

const connections = [
  { from: "ennova", to: "esade" },
  { from: "ennova", to: "districte22" },
  { from: "ennova", to: "global_corps" },
  { from: "ennova", to: "finance" },
  { from: "esade", to: "global_corps" },
];

export function BarcelonaConnectivityMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getNode = (id: string) => nodes.find((n) => n.id === id);

  return (
    <div className="relative w-full aspect-[16/10] bg-primary border border-white/5 overflow-hidden group">
      {/* 1. Tactical Backdrop */}
      <TechnicalGrid />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.05)_0%,transparent_70%)]" />

      {/* 2. UI Frame Overlays (1X Style) */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-gray-600 tracking-[0.3em] uppercase">
        System_Map // Deployment_2026
      </div>
      <div className="absolute top-4 right-4 flex gap-4 text-gray-600">
         <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-secondary animate-pulse" />
            <span className="font-mono text-[8px]">LIVE_FEED</span>
         </div>
      </div>

      {/* 3. The SVG Map */}
      <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full p-12">
        <defs>
          <filter id="mapGlow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Connections as Data Packets */}
        <g className="connections">
          {connections.map((conn) => {
            const from = getNode(conn.from);
            const to = getNode(conn.to);
            if (!from || !to) return null;
            const isActive = hoveredNode === from.id || hoveredNode === to.id;

            return (
              <g key={`${conn.from}-${conn.to}`}>
                <motion.line
                  x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                  stroke={isActive ? "rgba(0,174,239,0.4)" : "rgba(255,255,255,0.05)"}
                  strokeWidth={isActive ? "0.4" : "0.2"}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  className="transition-all duration-500"
                />
                {isActive && (
                  <motion.circle r="0.4" fill="#00AEEF">
                    <animateMotion dur="1.5s" repeatCount="indefinite" path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`} />
                  </motion.circle>
                )}
              </g>
            );
          })}
        </g>

        {/* Nodes as Technical Brackets */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const isCore = node.type === "core";

          return (
            <g
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-crosshair"
            >
              {/* Node Center */}
              <motion.circle
                cx={node.x} cy={node.y} r={isCore ? 0.8 : 0.5}
                fill={isHovered ? "#00AEEF" : isCore ? "#00AEEF" : "white"}
                className="transition-colors duration-300"
              />

              {/* Technical Brackets */}
              <motion.g
                animate={{ rotate: isHovered ? 90 : 0, scale: isHovered ? 1.5 : 1 }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              >
                <path d={`M ${node.x-2} ${node.y-1} L ${node.x-2} ${node.y-2} L ${node.x-1} ${node.y-2}`} fill="none" stroke={isHovered ? "#00AEEF" : "white"} strokeWidth="0.2" opacity="0.4" />
                <path d={`M ${node.x+1} ${node.y-2} L ${node.x+2} ${node.y-2} L ${node.x+2} ${node.y-1}`} fill="none" stroke={isHovered ? "#00AEEF" : "white"} strokeWidth="0.2" opacity="0.4" />
                <path d={`M ${node.x+2} ${node.y+1} L ${node.x+2} ${node.y+2} L ${node.x+1} ${node.y+2}`} fill="none" stroke={isHovered ? "#00AEEF" : "white"} strokeWidth="0.2" opacity="0.4" />
                <path d={`M ${node.x-1} ${node.y+2} L ${node.x-2} ${node.y+2} L ${node.x-2} ${node.y+1}`} fill="none" stroke={isHovered ? "#00AEEF" : "white"} strokeWidth="0.2" opacity="0.4" />
              </motion.g>

              {/* Labels (Industrial Style) */}
              <text
                x={node.x + 4} y={node.y + 0.5}
                className="font-mono text-[1.5px] fill-gray-500 uppercase tracking-[0.2em] pointer-events-none"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* 4. The Live Data Tooltip (1X Playbook) */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-8 right-8 w-64 glass-dark border-l-2 border-secondary p-6 z-30"
          >
            <div className="flex items-center gap-2 mb-4">
               <Crosshair className="text-secondary w-4 h-4" />
               <span className="font-mono text-[10px] text-white tracking-widest uppercase">Target_Data</span>
            </div>
            <h4 className="font-heading text-xl text-white mb-2 uppercase">
              {getNode(hoveredNode)?.label.replace(/_/g, ' ')}
            </h4>
            <p className="font-mono text-[9px] text-gray-500 leading-relaxed uppercase tracking-tighter">
              {getNode(hoveredNode)?.meta}
            </p>
            <div className="mt-4 pt-4 border-t border-white/5">
               <div className="flex justify-between items-center text-[8px] font-mono text-gray-600">
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

      {/* 5. Minimal Legend */}
      <div className="absolute bottom-4 left-4 flex gap-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-secondary" />
          <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">Ennova_Central</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-white opacity-40" />
          <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">External_Node</span>
        </div>
      </div>
    </div>
  );
}
