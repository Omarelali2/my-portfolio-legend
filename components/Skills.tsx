"use client"

import React from "react"
import { skillCategories, focusAreas } from "@/lib/data"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { TechItem } from "@/components/ui/TechItem"
import { Reveal } from "@/components/ui/Reveal"

const terminalLines = [
  { prompt: "$", cmd: "whoami", out: "omar — full-stack software engineer" },
  { prompt: "$", cmd: "cat stack.json", out: "{ react, next.js, node, postgres, prisma }" },
  { prompt: "$", cmd: "echo $STATUS", out: "ONLINE" },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-base py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 85% 20%, rgba(183,255,60,0.05), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          index="03"
          eyebrow="Stack // Tooling"
          title={
            <>
              Engineering
              <br />
              <span className="text-accent">toolchain.</span>
            </>
          }
          description="A stack focused on modern full-stack development — fast interfaces, reliable APIs, clean data layers, and scalable architecture."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Terminal */}
          <Reveal className="lg:col-span-4">
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-raised shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] lg:sticky lg:top-28">
              <div className="flex items-center gap-2 border-b border-white/[0.07] bg-surface/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a40]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a52]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#5a5a64]" />
                <span className="ml-3 font-mono text-[10px] tracking-widest text-zinc-600">
                  omar@portfolio: ~
                </span>
              </div>

              <div className="space-y-4 p-5 font-mono text-[12px] leading-6 md:p-6">
                {terminalLines.map((line, i) => (
                  <div key={i}>
                    <p className="text-zinc-500">
                      <span className="text-accent">{line.prompt}</span>{" "}
                      {line.cmd}
                    </p>
                    <p className="pl-4 text-zinc-300">&gt; {line.out}</p>
                  </div>
                ))}

                <div className="mt-4 border-t border-white/[0.06] pt-4">
                  <p className="text-zinc-600">
                    <span className="text-accent">$</span>{" "}
                    <span className="animate-pulse-dot">▌</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Categories */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {skillCategories.map((category, ci) => (
              <Reveal key={category.title} delay={ci * 0.06}>
                <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em]">
                  <span className="text-accent">{String(ci + 1).padStart(2, "0")}</span>
                  <span className="text-zinc-400">{"// "}{category.title}</span>
                  <span className="h-px flex-1 bg-white/[0.07]" />
                </div>

                <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-raised">
                  {category.items.map((item, i) => (
                    <TechItem
                      key={item.name}
                      index={i}
                      name={item.name}
                      desc={item.desc}
                    />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Focus areas */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-5 bg-raised p-6 transition-colors duration-300 hover:bg-elevated">
                <span className="font-mono text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  {area.title}
                </h4>
                <p className="text-sm font-light leading-6 text-zinc-500">
                  {area.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
