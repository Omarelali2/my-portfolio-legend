"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { featuredProjects, type Project } from "@/lib/data"
import { BrowserMockup } from "@/components/ui/BrowserMockup"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Reveal } from "@/components/ui/Reveal"
import { EASE } from "@/lib/motion"

function CursorGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), rgba(183,255,60,0.07), transparent 65%)",
      }}
    />
  )
}

function ProjectMeta({
  project,
  index,
  featured = false,
}: {
  project: Project
  index: number
  featured?: boolean
}) {
  const num = String(index + 1).padStart(2, "0")

  return (
    <>
      <div className="relative z-10 mt-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
            <span className="text-accent">{num}</span>
            <span>{project.type}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>

          <h3
            className={`font-bold uppercase tracking-[-0.03em] text-white ${
              featured ? "text-3xl md:text-4xl" : "text-2xl"
            }`}
          >
            {project.name}
          </h3>

          <span className="mt-3 block h-px w-0 bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16" />
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <p
        className={`relative z-10 mt-4 max-w-xl text-sm font-light leading-7 text-zinc-400 ${
          featured ? "md:text-base" : ""
        }`}
      >
        {project.description}
      </p>

      <div className="relative z-10 mt-5 flex flex-wrap items-center gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500"
          >
            {item}
          </span>
        ))}
      </div>
    </>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="relative z-10 mt-6 flex items-center gap-5">
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
  )
}

function ProjectCard({
  project,
  index,
  variant,
}: {
  project: Project
  index: number
  variant: "featured" | "standard" | "wide"
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: EASE }}
      className={`group relative flex flex-col ${
        variant === "featured" ? "lg:col-span-2" : ""
      }`}
    >
      <CursorGlow />
      <BrowserMockup
        src={project.image}
        alt={`${project.name} preview`}
        url={project.slug}
        priority={index === 0}
        aspect={
          variant === "featured"
            ? "aspect-[16/10]"
            : variant === "wide"
              ? "aspect-[16/7]"
              : "aspect-[16/10]"
        }
      />
      <ProjectMeta project={project} index={index} featured={variant === "featured"} />
      <ProjectLinks project={project} />
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-raised py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid-sm mask-radial-center absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          index="02"
          eyebrow="Selected Work"
          title={
            <>
              Systems shipped
              <br />
              <span className="text-zinc-500">with intent.</span>
            </>
          }
          description="A focused selection of full-stack, SaaS, AI, and interface projects built around clean architecture and real product value."
        />

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-3">
          <ProjectCard project={featuredProjects[0]} index={0} variant="featured" />
          <ProjectCard project={featuredProjects[1]} index={1} variant="standard" />
          <ProjectCard project={featuredProjects[2]} index={2} variant="standard" />
          <ProjectCard project={featuredProjects[3]} index={3} variant="wide" />
        </div>

        <Reveal className="mt-20 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 border border-white/15 bg-white/[0.02] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-accent/50 hover:text-accent"
          >
            View All Projects
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
