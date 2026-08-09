"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  PlayCircle,
  Trophy,
  Users,
} from "lucide-react"
import Link from "next/link"
import { lebnexisProducts, lebnexisMetrics } from "@/lib/data"
import { Reveal } from "@/components/ui/Reveal"
import { EASE } from "@/lib/motion"

const challenges = [
  { name: "E-Commerce API", status: "shipped", progress: 100, color: "bg-accent" },
  { name: "Realtime Chat", status: "in review", progress: 82, color: "bg-accent" },
  { name: "SaaS Landing", status: "building", progress: 46, color: "bg-zinc-600" },
]

const sidebarItems = [
  { label: "Academy", active: false },
  { label: "Arena", active: true },
  { label: "Tracks", active: false },
  { label: "Community", active: false },
]

function DashboardMockup() {
  return (
    <div className="group/dash relative overflow-hidden rounded-2xl border border-white/[0.09] bg-raised shadow-[0_40px_100px_-50px_rgba(0,0,0,1)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:[transform:perspective(1400px)_rotateX(2deg)_rotateY(-2deg)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-surface/70 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a40]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a52]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5a5a64]" />
        <span className="ml-3 font-mono text-[10px] tracking-[0.2em] text-zinc-500">
          lebnexis.com — developer console
        </span>
      </div>

      <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[150px_1fr]">
        {/* Sidebar */}
        <div className="border-r border-white/[0.07] bg-black/30 p-3 sm:p-4">
          <div className="mb-6 hidden items-center gap-2 sm:flex">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent font-mono text-[10px] font-black text-black">
              LN
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">
              LebNexis
            </span>
          </div>

          <div className="space-y-1 sm:space-y-2">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-mono text-[10px] sm:text-[11px] ${
                  item.active
                    ? "bg-accent/10 text-accent"
                    : "text-zinc-500"
                }`}
              >
                <span className="h-1 w-1 rounded-full bg-current" />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.label.charAt(0)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Arena / Challenges
              </p>
              <h4 className="mt-1 text-sm font-bold tracking-tight text-white sm:text-base">
                Real-world builds
              </h4>
            </div>
            <span className="hidden items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              Live
            </span>
          </div>

          <div className="space-y-2.5">
            {challenges.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-white/[0.06] bg-black/30 p-3"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-zinc-300">
                    {c.name}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                    {c.status}
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
                    className={`h-full rounded-full ${c.color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {[
              { icon: Code2, label: "Challenges", value: "50+" },
              { icon: Trophy, label: "Ranks", value: "Solo" },
              { icon: Users, label: "Members", value: "200+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/[0.06] bg-black/30 p-2.5 text-center sm:p-3"
              >
                <stat.icon size={13} className="mx-auto mb-1.5 text-accent" />
                <p className="font-mono text-sm font-bold text-white">{stat.value}</p>
                <p className="hidden font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-600 sm:block">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between border-t border-white/[0.07] bg-black/30 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={10} className="text-accent" /> Skill validation on
        </span>
        <span>v0.2 — ALPHA</span>
      </div>
    </div>
  )
}

export default function LebNexisSection() {
  return (
    <section
      id="lebnexis"
      className="relative overflow-hidden bg-base py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 12% 30%, rgba(183,255,60,0.05), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <Reveal y={16} className="mb-14">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="text-accent">05</span>
            <span className="text-zinc-600">Founder Project</span>
            <span className="h-px w-14 bg-white/15" aria-hidden />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(3.2rem,7vw,6.5rem)] font-black uppercase leading-[0.85] tracking-[-0.05em] text-white">
              LEB
              <br />
              <span className="text-outline-accent">NEXIS</span>
            </h2>

            <Reveal delay={0.1} className="mt-8 max-w-lg">
              <p className="text-lg font-light leading-8 text-zinc-400">
                Building a technology ecosystem designed around{" "}
                <span className="font-medium text-white">learning</span>,{" "}
                <span className="font-medium text-white">challenges</span>, and{" "}
                <span className="font-medium text-white">developer growth</span>.
              </p>
            </Reveal>

            <div className="mt-10 space-y-1">
              {lebnexisProducts.map((product, i) => (
                <Reveal key={product.name} delay={0.15 + i * 0.06}>
                  <div className="group flex items-center justify-between border-b border-white/[0.07] py-3.5">
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-[10px] text-zinc-700 transition-colors group-hover:text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-sm text-zinc-200 transition-colors group-hover:text-white">
                        {product.name}
                      </span>
                    </div>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600 sm:block">
                      {product.desc}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="mt-10">
              <Link
                href="https://lebnexis.com/tahaddiyat"
                target="_blank"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-accent-deep"
              >
                Explore The Platform
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>

          {/* Dashboard mockup */}
          <Reveal delay={0.15} className="lg:col-span-6">
            <DashboardMockup />
          </Reveal>
        </div>

        {/* Metrics */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
          {lebnexisMetrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col justify-between gap-8 bg-raised p-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  {metric.label}
                </span>
                <span className="text-4xl font-black tracking-[-0.03em] text-white">
                  {metric.value}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          <PlayCircle size={12} className="text-accent" />
          Founder project — in active development
        </Reveal>
      </div>
    </section>
  )
}
