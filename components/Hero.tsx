"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import { SystemDiagram } from "@/components/SystemDiagram"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { EASE } from "@/lib/motion"

const lines = [
  { text: "BUILDING", className: "" },
  { text: "DIGITAL", className: "text-accent" },
  { text: "SYSTEMS", className: "" },
  { text: "THAT MATTER.", className: "text-zinc-500" },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 700], [0, 120])
  const y2 = useTransform(scrollY, [0, 700], [0, 220])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.35])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-base pt-28 md:pt-32"
    >
      {/* Background — subtle radial light + engineering grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(183,255,60,0.06), transparent 70%)",
          }}
        />
        <div className="bg-grid mask-radial-center absolute inset-0 opacity-60" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 md:px-8 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-10 inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Software Engineer / Full-Stack Developer
          </motion.div>

          <motion.h1
            className="text-[clamp(3.4rem,8vw,8rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em]"
            style={{ opacity }}
          >
            <motion.div style={{ y: y2 }}>
              {lines.map((line, i) => (
                <motion.span
                  key={line.text}
                  initial={{ opacity: 0, y: 44 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: EASE,
                    delay: 0.15 + i * 0.09,
                  }}
                  className={`block will-change-transform ${line.className}`}
                >
                  {line.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
            className="mt-10 max-w-xl text-base font-light leading-8 text-zinc-400 md:text-lg"
          >
            Full-stack software engineer focused on scalable web applications,
            real-time systems, and product engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.72 }}
            className="mt-10 flex flex-col mb-20 items-start gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="#work"
              className="group bg-accent px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-accent-deep"
            >
              <span className="flex items-center gap-2.5">
                View Selected Work
                <ArrowDownRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </span>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="border border-white/15 bg-white/[0.02] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/30 hover:bg-white/[0.05]"
            >
              Let&apos;s Connect
            </MagneticButton>
          </motion.div>
        </div>

        {/* Network diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="relative hidden justify-center lg:col-span-4 lg:flex"
        >
          <SystemDiagram />
        </motion.div>
      </div>

      {/* Technical status strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.07] bg-black/40 backdrop-blur-md"
      >
        <motion.div
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:px-8"
          style={{ y: y1 }}
        >
          <span>BEIRUT, LB</span>
          <span className="hidden sm:inline">GMT +2</span>
          <span className="hidden md:inline">FULL-STACK / SAAS / AI</span>
          <span className="flex items-center gap-2 text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            AVAILABLE FOR SELECT PROJECTS
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px origin-top bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
