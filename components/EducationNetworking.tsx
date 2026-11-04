"use client"

import React from "react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { education, networkingProjects, certifications } from "@/lib/data"
import { Monitor, Laptop, Server, Wifi, Share2 } from "lucide-react"

const EDU_ICONS: Record<string, React.ElementType> = {
  "Bachelor's Degree": Monitor,
  "Master's Degree": Laptop,
}

const NETWORK_NODES = [
  { id: "bachelor", label: "Bachelor's CS", cx: 120, cy: 110, kind: "edu" },
  { id: "master", label: "Master's CS", cx: 360, cy: 110, kind: "edu" },
  { id: "hospital", label: "Hospital Network", cx: 240, cy: 290, kind: "net" },
  { id: "branch-a", label: "Branch A", cx: 90, cy: 420, kind: "net" },
  { id: "branch-b", label: "Branch B", cx: 240, cy: 420, kind: "net" },
  { id: "branch-c", label: "Branch C", cx: 390, cy: 420, kind: "net" },
] as const

const NETWORK_LINKS = [
  ["bachelor", "master"],
  ["master", "hospital"],
  ["hospital", "branch-a"],
  ["hospital", "branch-b"],
  ["hospital", "branch-c"],
] as const

export default function EducationNetworking() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-raised py-28 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid mask-radial-center absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <Reveal y={16} className="mb-14">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="text-accent">05</span>
            <span className="text-zinc-600">Education & Networks</span>
            <span className="h-px w-14 bg-white/15" aria-hidden />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Left: Education */}
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(2.2rem,4.5vw,3rem)] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-white">
              Computer Science
              <br />
              <span className="text-cyan-300">Lebanese University</span>
            </h2>

            <div className="mt-12 space-y-6">
              {education.map((edu, i) => {
                const Icon = EDU_ICONS[edu.degree]
                return (
                  <Reveal key={edu.degree} delay={i * 0.08} className="h-full">
                    <div
                      className={cn(
                        "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition-colors duration-300 hover:bg-white/[0.04]",
                        i % 2 === 0 ? "border-l-2 border-l-accent" : "border-l-2 border-l-cyan-500",
                      )}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon size={24} className="text-accent" />
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2.5 mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                            <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                            <span>{edu.year}</span>
                          </div>
                          <h3 className="text-xl font-bold tracking-[-0.02em] text-white md:text-2xl">
                            {edu.degree}
                          </h3>
                          <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">
                            {edu.field}
                          </p>
                          <p className="mt-3 text-sm font-light text-zinc-400 leading-6">
                            {edu.institution} &nbsp;·&nbsp; {edu.location}
                          </p>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
                          <Share2 size={16} />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={0.2 + i * 0.06} className="h-full">
                  <div className="flex h-full flex-col justify-between bg-raised p-6 transition-colors hover:bg-elevated">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                        Certification
                      </span>
                      <p className="mt-1 text-sm font-semibold text-zinc-200">{cert.name}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                        {cert.issuer} &nbsp;·&nbsp; {cert.year}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-accent">
                      <Monitor size={16} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Network topology */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="relative aspect-[1/1] min-h-[420px] md:min-h-[520px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 500"
                fill="none"
                className="max-w-full h-auto"
                aria-label="Network topology connecting education and infrastructure projects"
              >
                <defs>
                  <marker
                    id="arrow"
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0,0 L0,6 L8,3 Z" fill="#22d3ee" />
                  </marker>
                </defs>

                {NETWORK_LINKS.map(([from, to], i) => {
                  const a = NETWORK_NODES.find((n) => n.id === from)!
                  const b = NETWORK_NODES.find((n) => n.id === to)!
                  return (
                    <g key={`link-${i}`}>
                      <line
                        x1={a.cx}
                        y1={a.cy}
                        x2={b.cx}
                        y2={b.cy}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1.5"
                      />
                      <line
                        x1={a.cx}
                        y1={a.cy}
                        x2={b.cx}
                        y2={b.cy}
                        stroke="#22d3ee"
                        strokeOpacity="0.5"
                        strokeWidth="1.5"
                        strokeDasharray="6 10"
                        className="animate-dash-flow"
                      />
                    </g>
                  )
                })}

                {NETWORK_NODES.map((node) => (
                  <g key={node.id}>
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={node.kind === "edu" ? 14 : 10}
                      stroke={node.kind === "edu" ? "#2563eb" : "#22d3ee"}
                      strokeWidth="2"
                      fill="#050816"
                      className="transition-all duration-300 hover:r-16 cursor-pointer"
                    />
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={4}
                      fill={node.kind === "edu" ? "#2563eb" : "#22d3ee"}
                      className="animate-pulse-dot"
                    />
                    <text
                      x={node.cx}
                      y={node.cy + (node.kind === "edu" ? 24 : 18)}
                      textAnchor="middle"
                      fill="#94a3b8"
                      fontSize="11"
                      fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                      letterSpacing="1"
                      className="transition-all duration-300 group-hover:text-white"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2 pt-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                  Network Topology — Conceptual
                </span>
                <span className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="h-2 w-2 rounded-full bg-accent" /> Education
                  <span className="h-2 w-2 rounded-full bg-cyan-400" /> Infrastructure
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {networkingProjects.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07}>
                  <div className="rounded-xl border border-white/[0.06] bg-raised p-5 transition-colors hover:bg-elevated">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-accent/[0.1] text-accent mt-0.5">
                        <Server size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="mt-1.5 text-sm font-light text-zinc-400 leading-6">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
