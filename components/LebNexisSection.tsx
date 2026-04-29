"use client"

import React from "react"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "@/lib/motion"
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  Trophy,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  "Real-world frontend & full-stack challenges",
  "Portfolio-ready projects for developers",
  "Structured tracks with skill validation",
  "Community-driven learning and growth",
]

const stats = [
  {
    value: "50+",
    label: "Challenges Planned",
  },
  {
    value: "3",
    label: "Core Tracks",
  },
  {
    value: "2026",
    label: "Platform Launch",
  },
]

export default function LebNexisSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white md:py-44">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.07] [mask-image:radial-gradient(circle_at_center,white,transparent_72%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger(0.12) as any}
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20"
        >
          {/* Content */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <motion.div
              variants={fadeInUp as any}
              className="mb-7 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md"
            >
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
                <Image
                  src="/images/lebnexis-logo.png"
                  alt="LebNexis Logo"
                  fill
                  className="object-contain p-1.5"
                />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  Founder Project
                </p>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white">
                  LebNexis Tahaddiyat
                </p>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp as any}
              className="mb-8 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl"
            >
              Building the
              <br />
              <span className="bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-800 bg-clip-text italic text-transparent">
                developer arena.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeInUp as any}
              className="mb-10 max-w-xl space-y-6 text-lg font-light leading-8 text-zinc-400"
            >
              <p>
                <span className="font-medium text-white">
                  LebNexis Tahaddiyat
                </span>{" "}
                is a developer challenge platform built to help students and
                junior developers move from tutorials into real-world execution.
              </p>

              <p>
                The platform focuses on practical challenges, portfolio-ready
                projects, structured learning tracks, and skill validation for
                frontend and full-stack developers.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp as any}
              className="mb-10 grid gap-3 sm:grid-cols-2"
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-300"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-blue-400" />
                  {feature}
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp as any}
              className="mb-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
            >
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`p-5 text-center ${
                    index !== stats.length - 1 ? "border-r border-white/10" : ""
                  }`}
                >
                  <p className="font-mono text-xl font-black text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp as any}>
              <Link
                href="https://lebnexis.com/tahaddiyat"
                target="_blank"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[-0.03em] text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(255,255,255,0.22)]"
              >
                Explore The Platform
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* Preview */}
          <motion.div
            variants={fadeInUp as any}
            className="order-1 lg:order-2 lg:col-span-6 md:block hidden"
          >
            <div className="group relative">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl">
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                    alt="LebNexis Tahaddiyat platform preview"
                    fill
                    className="object-cover opacity-45 saturate-0 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-75 group-hover:saturate-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                  {/* Top badge */}
                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/55 px-4 py-2 backdrop-blur-xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white">
                      Developer Challenge Platform
                    </p>
                  </div>

                  {/* Main floating card */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/10 bg-black/55 p-6 backdrop-blur-2xl">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-400">
                          Live Ecosystem
                        </p>
                        <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.04em] text-white">
                          Build. Submit. Level Up.
                        </h3>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                        <Trophy size={20} />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <Code2 size={18} className="mb-3 text-white" />
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                          Challenges
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <Layers3 size={18} className="mb-3 text-white" />
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                          Tracks
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <Users size={18} className="mb-3 text-white" />
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                          Community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-blue-600/10 blur-[90px] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}