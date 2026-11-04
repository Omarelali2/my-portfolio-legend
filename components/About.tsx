"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Monitor, Code2, Server, Globe } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { EASE } from "@/lib/motion"
import { timeline, education, certifications } from "@/lib/data"

const facts = [
  { label: "Based In", value: "Akkar, Lebanon" },
  { label: "Focus", value: "Full-Stack Engineering" },
  { label: "Stack", value: "Next.js / TypeScript / PostgreSQL" },
  { label: "Interests", value: "Real-time / Systems / Networks" },
]

type TimelineCardProps = {
  index: number
  period: string
  role: string
  company: string
  location: string
  description: string
  stack: string[]
  kind: "degree" | "role"
}

const ICONS: Record<string, React.ElementType> = {
  degree: Monitor,
  role: Code2,
}

function TimelineCard({
  index,
  period,
  role,
  company,
  location,
  description,
  stack,
  kind,
}: TimelineCardProps) {
  const Icon = ICONS[kind]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
      className="relative md:grid md:grid-cols-[150px_1fr] md:gap-10"
    >
      <span className="absolute left-0 top-2 bottom-2 hidden w-px bg-white/[0.08] md:block" />

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 + 0.1 }}
        className="relative z-10 block w-10 h-10 rounded-full border border-white/[0.12] bg-elevated flex items-center justify-center text-accent shadow-[0_0_20px_rgba(37,99,235,0.35)]"
      >
        <Icon size={18} strokeWidth={2} />
      </motion.div>

      <Reveal delay={index * 0.05} className="pl-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 md:pl-0 md:text-right">
        {period}
      </Reveal>

      <Reveal delay={index * 0.05 + 0.04} className="pl-3 md:pl-0">
        <div className="mb-1 flex items-baseline gap-2.5">
          <h3 className="text-xl font-bold tracking-[-0.02em] text-white md:text-2xl">
            {role}
          </h3>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">
            {company}
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
          {location}
        </p>
        <p className="mb-5 max-w-xl text-sm font-light leading-7 text-zinc-400 md:text-base">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </motion.div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-base py-28 md:py-44"
    >
      <div className="pointer-events-none absolute -right-10 top-10 select-none lg:right-6">
        <span className="text-outline text-[16rem] font-black leading-none tracking-[-0.06em] lg:text-[22rem]">
          01
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <Reveal y={16} className="mb-14">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="text-accent">01</span>
            <span className="text-zinc-600">About</span>
            <span className="h-px w-14 bg-white/15" aria-hidden />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Story */}
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white">
              <span className="block">I build systems that run on code, data, and</span>
              <span className="block mt-3 text-cyan-300">networked infrastructure.</span>
            </h2>

            <div className="mt-14 space-y-8 text-base font-light leading-8 text-zinc-400 md:text-lg">
              <Reveal delay={0.1}>
                <p>
                  Computer Science graduate from the Lebanese University, currently
                  engineering full-stack products and backend systems from Akkar,
                  Lebanon. My work spans the complete product lifecycle — database
                  design, REST architecture, authentication, real-time logic, and
                  responsive interfaces.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p>
                  I founded and engineered <span className="font-medium text-white">LebNexis Tahaddiyat</span>,
                  a coding challenge platform with XP progression, leaderboards,
                  submissions, and payment workflows — and <span className="font-medium text-white">LebNexis Arena</span>,
                  a competitive programming platform with real-time matchmaking
                  and multiplayer sessions.
                </p>
              </Reveal>
              <Reveal delay={0.34}>
                <p>
                  Alongside product engineering I have designed network
                  infrastructure for hospitals and multi-branch university
                  architecture — systems that operate below the application
                  layer, where reliability is everything.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="group relative">
                <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border border-cyan-500/20 sm:block" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-elevated">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/Omar.jpeg"
                      alt="Omar El-Ali — Software Engineer"
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/55 p-4 backdrop-blur-md">
                      <div>
                        <p className="text-sm font-bold text-white">Omar El-Ali</p>
                        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">
                          Full-Stack Engineer
                        </p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-[10px] font-black text-black">
                        OE
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  <span>img.001 — portrait</span>
                  <span className="text-accent">2026</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Technical facts */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:mt-32 md:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.06} className="h-full">
              <div className="group flex h-full flex-col justify-between bg-raised p-6 transition-colors duration-300 hover:bg-elevated md:p-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  {fact.label}
                </span>
                <span className="text-sm font-semibold leading-6 text-zinc-200 transition-colors duration-300 group-hover:text-white">
                  {fact.value}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-28 border-t border-white/[0.08] pt-20 md:mt-36">
          <Reveal y={16} className="mb-16">
            <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
              <span className="text-accent">02</span>
              <span className="text-zinc-600">Timeline</span>
              <span className="h-px w-14 bg-white/15" aria-hidden />
            </div>
          </Reveal>

          <h2 className="mb-20 text-[clamp(2rem,4vw,2.75rem)] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-white text-center md:text-left">
            From the classroom to production systems
          </h2>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent" />

            {[
              ...education.map((e) => ({
                ...e,
                kind: "degree" as const,
                period: e.year,
                role: e.degree,
                company: e.institution,
                location: e.location,
                description: `Computer Science — ${e.field}`,
                stack: [],
              })),
              ...timeline.map((t) => ({ ...t, kind: "role" as const })),
            ].sort((a, b) => {
              const ya = parseInt(a.period.match(/\d{4}/)?.[0] ?? "0")
              const yb = parseInt(b.period.match(/\d{4}/)?.[0] ?? "0")
              return yb - ya
            }).map((item, i) => (
              <TimelineCard key={i + item.period} index={i} {...item} />
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
            {certifications.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 0.06} className="h-full">
                <div className="flex h-full items-center justify-between bg-raised p-6 transition-colors hover:bg-elevated">
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
                    <Globe size={16} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
