"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  type: "esade" | "ennova" | "tech-hub" | "corporate";
  color: string;
}

const nodes: Node[] = [
  { id: "esade", x: 50, y: 50, label: "Esade", type: "esade", color: "#FF6F00" },
  { id: "ennova", x: 50, y: 30, label: "Ennova", type: "ennova", color: "#22D3EE" },
  { id: "22@", x: 70, y: 40, label: "22@ District", type: "tech-hub", color: "#8B5CF6" },
  { id: "tech-park", x: 65, y: 60, label: "Tech Parks", type: "tech-hub", color: "#8B5CF6" },
  { id: "corporate-1", x: 30, y: 40, label: "Global Corps", type: "corporate", color: "#10B981" },
  { id: "corporate-2", x: 85, y: 30, label: "Startups", type: "corporate", color: "#10B981" },
  { id: "corporate-3", x: 35, y: 65, label: "Finance", type: "corporate", color: "#10B981" },
];

const connections = [
  { from: "ennova", to: "esade" },
  { from: "ennova", to: "22@" },
  { from: "ennova", to: "tech-park" },
  { from: "ennova", to: "corporate-1" },
  { from: "ennova", to: "corporate-2" },
  { from: "ennova", to: "corporate-3" },
  { from: "esade", to: "corporate-1" },
  { from: "22@", to: "corporate-2" },
  { from: "tech-park", to: "corporate-3" },
];

export function BarcelonaConnectivityMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getNode = (id: string) => nodes.find((n) => n.id === id);

  const isConnectionActive = (from: string, to: string) => {
    if (!hoveredNode) return true;
    return hoveredNode === from || hoveredNode === to;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <svg
        viewBox="0 0 100 80"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 0 20px rgba(255, 111, 0, 0.3))" }}
      >
        <defs>
          {/* Gradient Definitions */}
          <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6F00" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFA500" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="greenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        <g className="connections">
          {connections.map((conn, index) => {
            const fromNode = getNode(conn.from);
            const toNode = getNode(conn.to);
            if (!fromNode || !toNode) return null;

            const isActive = isConnectionActive(conn.from, conn.to);

            return (
              <motion.line
                key={`${conn.from}-${conn.to}`}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isActive ? "#FF6F00" : "#4B5563"}
                strokeWidth={isActive ? "0.3" : "0.15"}
                strokeOpacity={isActive ? 0.6 : 0.2}
                strokeDasharray="1 1"
                filter={isActive ? "url(#glow)" : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </g>

        {/* Animated Particles on Connections */}
        {hoveredNode && connections.map((conn, index) => {
          if (!isConnectionActive(conn.from, conn.to)) return null;

          const fromNode = getNode(conn.from);
          const toNode = getNode(conn.to);
          if (!fromNode || !toNode) return null;

          return (
            <motion.circle
              key={`particle-${conn.from}-${conn.to}`}
              r="0.4"
              fill="#FF6F00"
              filter="url(#strongGlow)"
              initial={{ cx: fromNode.x, cy: fromNode.y, opacity: 0 }}
              animate={{
                cx: [fromNode.x, toNode.x],
                cy: [fromNode.y, toNode.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Nodes */}
        <g className="nodes">
          {nodes.map((node, index) => {
            const isHovered = hoveredNode === node.id;
            const isConnected = hoveredNode
              ? connections.some(
                  (c) =>
                    (c.from === hoveredNode && c.to === node.id) ||
                    (c.to === hoveredNode && c.from === node.id)
                )
              : false;

            const shouldHighlight = !hoveredNode || isHovered || isConnected;

            let gradientId = "orangeGlow";
            if (node.type === "ennova") gradientId = "cyanGlow";
            else if (node.type === "tech-hub") gradientId = "purpleGlow";
            else if (node.type === "corporate") gradientId = "greenGlow";

            return (
              <g key={node.id}>
                {/* Outer Pulse Ring */}
                {(isHovered || node.id === "ennova") && (
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={node.id === "ennova" ? 3.5 : 2.5}
                    fill="none"
                    stroke={node.color}
                    strokeWidth="0.2"
                    opacity={0.4}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}

                {/* Main Node Circle */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.id === "ennova" ? 2.5 : 1.5}
                  fill={`url(#${gradientId})`}
                  filter="url(#strongGlow)"
                  opacity={shouldHighlight ? 1 : 0.3}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: shouldHighlight ? 1 : 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.3 }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                />

                {/* Inner Core */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.id === "ennova" ? 1.2 : 0.8}
                  fill="white"
                  opacity={shouldHighlight ? 0.9 : 0.3}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + 0.2,
                  }}
                  className="pointer-events-none"
                />

                {/* Label */}
                <motion.text
                  x={node.x}
                  y={node.y + (node.id === "ennova" ? 4.5 : 3.5)}
                  textAnchor="middle"
                  fill="white"
                  fontSize={node.id === "ennova" ? "2" : "1.6"}
                  fontWeight={node.id === "ennova" ? "bold" : "600"}
                  opacity={shouldHighlight ? 1 : 0.4}
                  initial={{ opacity: 0, y: node.y + 5 }}
                  animate={{
                    opacity: shouldHighlight ? 1 : 0.4,
                    y: node.y + (node.id === "ennova" ? 4.5 : 3.5),
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + 0.3,
                  }}
                  className="pointer-events-none select-none"
                  style={{ filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.8))" }}
                >
                  {node.label}
                </motion.text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-wrap justify-center gap-6 mt-8"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#06B6D4] shadow-lg shadow-cyan-500/50" />
          <span className="text-sm text-gray-300 font-medium">Ennova Hub</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#FF6F00] to-[#FFA500] shadow-lg shadow-orange-500/50" />
          <span className="text-sm text-gray-300 font-medium">Academic Partner</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] shadow-lg shadow-purple-500/50" />
          <span className="text-sm text-gray-300 font-medium">Tech Ecosystem</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] shadow-lg shadow-green-500/50" />
          <span className="text-sm text-gray-300 font-medium">Corporate Partners</span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center text-gray-400 text-sm mt-6 italic"
      >
        Hover over nodes to see connections • Live network visualization
      </motion.p>
    </div>
  );
}
