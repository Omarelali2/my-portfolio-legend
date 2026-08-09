"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"

const nodes = [
  { id: "CLIENT", x: 70, y: 230, accent: false },
  { id: "API", x: 230, y: 230, accent: true },
  { id: "DATABASE", x: 390, y: 150, accent: false },
  { id: "REALTIME", x: 390, y: 310, accent: false },
  { id: "CLOUD", x: 230, y: 60, accent: false },
]

const links = [
  ["CLIENT", "API"],
  ["API", "DATABASE"],
  ["API", "REALTIME"],
  ["API", "CLOUD"],
] as const

function pos(id: string) {
  return nodes.find((n) => n.id === id)!
}

export function SystemDiagram() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
    stiffness: 90,
    damping: 18,
  })
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 90,
    damping: 18,
  })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ y: scrollY, scale: scrollScale, rotateX, rotateY }}
      className="pointer-events-auto hidden [perspective:1200px] lg:block"
    >
      <svg
        width="460"
        height="400"
        viewBox="0 0 460 400"
        fill="none"
        className="overflow-visible"
        aria-label="System architecture diagram: client, API, database, realtime and cloud nodes"
      >
        {/* Links with data-flow dashes */}
        {links.map(([from, to]) => {
          const a = pos(from)
          const b = pos(to)
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
            />
          )
        })}

        {links.map(([from, to]) => {
          const a = pos(from)
          const b = pos(to)
          return (
            <line
              key={`${from}-${to}-flow`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#B7FF3C"
              strokeOpacity="0.55"
              strokeWidth="1"
              strokeDasharray="3 9"
              className="animate-dash-flow"
            />
          )
        })}

        {/* Node rings */}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="22" stroke={n.accent ? "rgba(183,255,60,0.4)" : "rgba(255,255,255,0.12)"} strokeWidth="1" />
            <circle
              cx={n.x}
              cy={n.y}
              r="5"
              fill={n.accent ? "#B7FF3C" : "#3f3f46"}
              className="animate-pulse-dot"
            />
            <text
              x={n.x}
              y={n.y + 42}
              textAnchor="middle"
              fill={n.accent ? "#B7FF3C" : "rgba(255,255,255,0.45)"}
              fontSize="10"
              fontFamily="var(--font-geist-mono), ui-monospace, monospace"
              letterSpacing="2"
            >
              {n.id}
            </text>
          </g>
        ))}
      </svg>
    </motion.div>
  )
}
