"use client"

import React from "react"
import { motion } from "framer-motion"
import { timeline } from "@/lib/data"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Reveal } from "@/components/ui/Reveal"
import { EASE } from "@/lib/motion"
import { Briefcase, Globe, Code2 } from "lucide-react"

const ROLE_ICONS: Record<string, React.ElementType> = {
  "Full-Stack Intern": Briefcase,
  "Frontend Developer Intern": Code2,
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-base py-28 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid-sm mask-radial-top absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          index="04"
          eyebrow="Professional Experience"
          title={
            <>
              Engineered
              <br />
              <span className="text-zinc-500">in the field.</span>
            </>
          }
          description="The professional chapters of Omar's journey — from language-learning platforms to responsive product engineering."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Spine */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent" />

          {timeline.map((item, index) => {
            const RoleIcon = ROLE_ICONS[item.role]
            return (
              <div
                key={item.period}
                className="relative md:grid md:grid-cols-[180px_1fr] md:gap-12"
              >
              {/* Marker */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.5, ease: EASE, delay: index * 0.1 }}
                className="relative z-10 block w-11 h-11 rounded-full border border-white/[0.14] bg-elevated flex items-center justify-center shadow-[0_0_24px_rgba(37,99,235,0.35)]"
              >
                <span className="absolute -inset-1 rounded-full bg-accent/[0.2] blur-md" />
                <RoleIcon size={20} strokeWidth={2} className="text-accent" />
              </motion.div>

              {/* Period */}
              <Reveal
                delay={index * 0.06}
                className="pl-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 md:pl-0 md:text-right"
              >
                {item.period}
              </Reveal>

              {/* Content */}
              <Reveal delay={index * 0.06 + 0.05} className="pl-6 md:pl-0">
                <div className="mb-2 flex items-baseline gap-3">
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-white md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">
                    {item.company}
                  </p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-4">
                  {item.location}
                </p>
                <p className="mb-6 max-w-xl text-sm font-light leading-7 text-zinc-400 md:text-base">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          )
        })}
        </div>

        <Reveal
          className="mt-16 flex items-center justify-between gap-4 px-6 py-8 rounded-2xl border border-white/[0.06] bg-raised"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
              Available for
            </span>
            <h4 className="mt-1 text-sm font-semibold text-white">Select engineering engagements</h4>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            <Globe size={14} className="text-accent" /> Akkar, Lebanon — GMT+2
          </div>
        </Reveal>
      </div>
    </section>
  )
}
