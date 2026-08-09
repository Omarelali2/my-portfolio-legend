"use client"

import React from "react"
import Image from "next/image"
import { WordReveal } from "@/components/ui/WordReveal"
import { Reveal } from "@/components/ui/Reveal"

const facts = [
  { label: "Based In", value: "Lebanon" },
  { label: "Focus", value: "Full-Stack Engineering" },
  { label: "Stack", value: "React / Next.js / Node.js" },
  { label: "Interests", value: "Realtime / Product Engineering" },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-base py-28 md:py-40"
    >
      {/* Editorial section number */}
      <div className="pointer-events-none absolute -right-10 top-10 select-none lg:right-6">
        <span className="text-outline text-[16rem] font-black leading-none tracking-[-0.06em] lg:text-[22rem]">
          01
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <Reveal y={16} className="mb-16">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="text-accent">01</span>
            <span className="text-zinc-600">About</span>
            <span className="h-px w-14 bg-white/15" aria-hidden />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Editorial statement + story */}
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2.6rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-white">
              <WordReveal text="I'm a software engineer who enjoys turning complex ideas into" />
              <br />
              <WordReveal
                text="reliable digital products."
                delay={0.5}
                className="text-zinc-500"
              />
            </h2>

            <div className="mt-14 space-y-6 text-base font-light leading-8 text-zinc-400 md:text-lg">
              <Reveal delay={0.2}>
                <p>
                  I work across the full product lifecycle — from database
                  design and backend systems to high-performance interfaces —
                  using{" "}
                  <span className="font-medium text-white">
                    Next.js, TypeScript, PostgreSQL, Prisma
                  </span>{" "}
                  and modern SaaS architecture.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  As the founder of{" "}
                  <span className="font-medium text-accent">
                    LebNexis Tahaddiyat
                  </span>
                  , I&apos;m building a developer ecosystem around real-world
                  challenges, skill validation, and community growth.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="group relative">
                {/* Offset accent frame */}
                <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border border-accent/25 sm:block" />

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-elevated">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/Omar.jpeg"
                      alt="Omar El-Ali — Software Engineer"
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Caption card */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/55 p-4 backdrop-blur-md">
                      <div>
                        <p className="text-sm font-bold text-white">
                          Omar El-Ali
                        </p>
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

                {/* Mono caption */}
                <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  <span>img.001 — portrait</span>
                  <span className="text-accent">2026</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Technical facts row */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:mt-32 md:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.06} className="h-full">
              <div className="group flex h-full flex-col justify-between gap-8 bg-raised p-6 transition-colors duration-300 hover:bg-elevated md:p-7">
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
      </div>
    </section>
  )
}
