"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { projects, type Project } from "@/lib/data"
import { BrowserMockup } from "@/components/ui/BrowserMockup"
import { Reveal } from "@/components/ui/Reveal"
import { EASE } from "@/lib/motion"

function Card({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  const num = String(index + 1).padStart(2, "0")

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="group relative flex flex-col"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), rgba(183,255,60,0.06), transparent 65%)",
        }}
      />

      <div className="relative z-10">
        <BrowserMockup src={project.image} alt={`${project.name} preview`} url={project.slug} />
        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
              <span className="text-accent">{num}</span>
              <span>{project.type}</span>
              <span aria-hidden>·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-[-0.03em] text-white md:text-3xl">
              {project.name}
            </h2>
            <span className="mt-3 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-16" />
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
            <ArrowUpRight size={16} />
          </div>
        </div>

        <p className="mt-4 text-sm font-light leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 border-t border-white/[0.07] pt-5">
          <Link
            href={project.live}
            target="_blank"
            className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:text-accent"
          >
            <ExternalLink size={12} className="text-zinc-500 transition-colors group-hover/link:text-accent" />
            Live Demo
          </Link>
          <Link
            href={project.github}
            target="_blank"
            className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
          >
            <Github size={12} className="transition-colors group-hover/link:text-accent" />
            Source
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden bg-base pb-28 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid mask-radial-center absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <Reveal y={16} className="mb-16">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="text-accent">—</span>
            <span className="text-zinc-600">All Work</span>
            <span className="h-px w-14 bg-white/15" aria-hidden />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-white">
            Products
            <br />
            <span className="text-zinc-500">in production.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mb-20 mt-8 max-w-xl md:mb-24">
          <p className="text-base font-light leading-8 text-zinc-400 md:text-lg">
            Full-stack platforms, SaaS products, and interfaces — designed,
            engineered, and deployed end-to-end.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
