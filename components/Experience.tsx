"use client"

import React from "react"
import { motion } from "framer-motion"
import { timeline } from "@/lib/data"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Reveal } from "@/components/ui/Reveal"
import { EASE } from "@/lib/motion"

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-raised py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid-sm mask-radial-top absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          index="04"
          eyebrow="Experience"
          title={
            <>
              Professional
              <br />
              <span className="text-zinc-500">trajectory.</span>
            </>
          }
          description="A record of building products, shipping features, and growing from intern to full-stack engineer."
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-[5px] top-1 bottom-1 w-px bg-white/[0.08]"
              aria-hidden
            />

            <div className="space-y-16">
              {timeline.map((item) => (
                <div
                  key={item.period + item.role}
                  className="relative md:grid md:grid-cols-[200px_1fr] md:gap-10"
                >
                  {/* Node */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute left-0 top-2 block"
                  >
                    <span className="absolute -inset-2 rounded-full bg-accent/15 blur-[6px] opacity-0 transition-opacity duration-500 [.group\/item:hover_&]:opacity-100" />
                    <span className="relative block h-[11px] w-[11px] rounded-full border-2 border-accent bg-base shadow-[0_0_12px_rgba(183,255,60,0.6)]" />
                  </motion.span>

                  {/* Period */}
                  <Reveal
                    delay={0.05}
                    className="pl-12 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 md:pl-0 md:pt-1 md:text-right"
                  >
                    {item.period}
                  </Reveal>

                  {/* Content */}
                  <Reveal delay={0.12} className="pl-12 md:pl-0">
                    <h3 className="text-2xl font-bold tracking-[-0.02em] text-white md:text-3xl">
                      {item.role}
                    </h3>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                      {item.company} <span className="text-zinc-600">· {item.location}</span>
                    </p>
                    <p className="mt-4 max-w-xl text-sm font-light leading-7 text-zinc-400 md:text-base">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
