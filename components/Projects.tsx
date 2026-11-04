"use client"

import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { featuredProjects, type FeaturedProject } from "@/lib/data"
import { EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Abstract system preview — canvas, no fabricated screenshots         */
/* ------------------------------------------------------------------ */

function SystemPreview({ variant }: { variant: FeaturedProject["slug"] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const dpr = window.devicePixelRatio || 1
    let width = 0
    let height = 0
    let time = 0

    const nodes = Array.from({ length: 14 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      r: 1 + Math.random() * 2,
    }))

    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 4],
      [7, 8],
      [8, 9],
      [9, 10],
      [10, 11],
      [11, 7],
      [0, 7],
      [3, 10],
    ] as [number, number][]

    function resize() {
      if (!canvas || !ctx) return
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    window.addEventListener("resize", resize)
    resize()

    const accent =
      variant === "tahaddiyat" ? "#2563eb" : variant === "arena" ? "#22d3ee" : "#8b5cf6"

    function draw() {
      if (!ctx) return
      time += 0.016
      ctx.clearRect(0, 0, width, height)

      ctx.lineWidth = 1
      for (const [a, b] of edges) {
        const na = nodes[a]
        const nb = nodes[b]
        const dx = (nb.x - na.x) * width
        const dy = (nb.y - na.y) * height
        const dist = Math.sqrt(dx * dx + dy * dy)
        const alpha = 0.25 + 0.15 * Math.sin(time + dist * 0.002)
        ctx.strokeStyle = `rgba(${hexToRgb(accent)}, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(na.x * width, na.y * height)
        ctx.lineTo(nb.x * width, nb.y * height)
        ctx.stroke()
      }

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > 1) n.vx *= -1
        if (n.y < 0 || n.y > 1) n.vy *= -1

        const pulse = 0.6 + 0.4 * Math.sin(time * 2 + n.r * 10)
        ctx.fillStyle = variant === "tahaddiyat" ? "#2563eb" : variant === "arena" ? "#22d3ee" : "#8b5cf6"
        ctx.globalAlpha = pulse
        ctx.beginPath()
        ctx.arc(n.x * width, n.y * height, n.r * pulse, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Central energy core
      const corePulse = 0.5 + 0.5 * Math.sin(time * 3)
      ctx.fillStyle = accent
      ctx.shadowColor = accent
      ctx.shadowBlur = corePulse * 20
      ctx.globalAlpha = 0.55
      ctx.beginPath()
      ctx.arc(width * 0.5, height * 0.5, 10 + corePulse * 6, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [variant])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/[0.08] bg-elevated shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
    </div>
  )
}

function hexToRgb(hex: string) {
  const c = hex.replace("#", "")
  return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)].join(", ")
}

/* ------------------------------------------------------------------ */
/* Tilt card                                                          */
/* ------------------------------------------------------------------ */

function ProjectCard({
  project,
  index,
}: {
  project: FeaturedProject
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const accent =
    project.slug === "tahaddiyat"
      ? "bg-gradient-to-br from-accent to-cyan-400 text-black"
      : project.slug === "arena"
        ? "bg-gradient-to-br from-cyan-400 to-violet-500 text-black"
        : "bg-gradient-to-br from-violet-500 to-accent text-white"

  const num = String(index + 1).padStart(2, "0")

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 6
    el.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.015)`
  }
  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: EASE, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-elevated shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:[transform:translateY(-4px)]"
    >
      <div className="relative">
        <SystemPreview variant={project.slug} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-7 md:p-10 flex flex-col h-full">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em]">
              <span
                className={cn(
                  accent.includes("text-black") ? "text-black" : "text-cyan-400",
                )}
              >
                {num}
              </span>
              <span className="hidden md:inline text-zinc-600">{project.type}</span>
              <span className="text-zinc-600" aria-hidden>
                ·
              </span>
              <span className="text-zinc-600">{project.year}</span>
            </div>
            <h3 className="mt-2 font-bold uppercase tracking-[-0.03em] text-white text-2xl md:text-3xl">
              {project.name}
            </h3>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
            <ArrowUpRight size={16} />
          </div>
        </div>

        <p className="mt-4 text-sm font-light leading-7 text-zinc-400 md:text-base">
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

        <div className="mt-auto pt-6 flex items-center gap-4 border-t border-white/[0.06]">
          {project.live ? (
            <Link
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:text-accent"
            >
              <ExternalLink size={12} className="text-zinc-500 transition-colors group-hover/link:text-accent" />
              Live Demo
            </Link>
          ) : (
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
              Platform in development
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ------------------------------------------------------------------ */
/* Section                                                            */
/* ------------------------------------------------------------------ */

export default function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-raised py-28 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid-sm mask-radial-center absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          index="02"
          eyebrow="Featured Systems"
          title={
            <>
              Featured
              <br />
              <span className="text-cyan-300">engineering.</span>
            </>
          }
          description="The three core platforms from Omar's CV — presented as interactive experiences rather than static case studies."
        />

        <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
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
