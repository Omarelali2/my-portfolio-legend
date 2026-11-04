"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { skillCategories } from "@/lib/data"
import { EASE } from "@/lib/motion"

const ConstellationScene = dynamic(
  () => import("./hero/ConstellationScene").then((mod) => mod.ConstellationScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-[560px] lg:h-[700px] flex items-center justify-center">
        <span className="font-mono text-[11px] text-zinc-400">Initializing constellation…</span>
      </div>
    ),
  },
)

export default function Skills() {
  const [webgl, setWebgl] = useState<boolean | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(
    skillCategories[0].title,
  )

  useEffect(() => {
    setWebgl(
      !!(
        typeof document !== "undefined" &&
        document.createElement("canvas").getContext("webgl")
      ),
    )
  }, [])

  if (webgl === null) {
    return null
  }

  const categoryButtons = skillCategories.map((cat, i) => (
    <button
      key={cat.title}
      onClick={() => setActiveCategory(activeCategory === cat.title ? null : cat.title)}
      className={cn(
        "relative group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
        activeCategory === cat.title
          ? "bg-accent border-accent text-black shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          : "border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white hover:bg-white/[0.05]",
      )}
      aria-pressed={activeCategory === cat.title}
    >
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="absolute inset-0 rounded-full bg-accent/[0.25] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  ))

  const activeCat = skillCategories.find((c) => c.title === activeCategory)

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-base py-28 md:py-44"
    >
      <div className="pointer-events-none absolute -right-10 top-10 select-none lg:right-6">
        <span className="text-outline text-[16rem] font-black leading-none tracking-[-0.06em] lg:text-[22rem]">
          03
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="text-accent">03</span>
            <span className="text-zinc-600">Technology Constellation</span>
            <span className="h-px w-14 bg-white/15" aria-hidden />
          </div>
        </motion.div>

        {/* 3D constellation */}
        <div className="relative h-[560px] lg:h-[700px] flex items-center justify-center mb-16 md:mb-24">
          {webgl ? (
            <ConstellationScene
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ) : (
            <SkillsFallback />
          )}
        </div>

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {categoryButtons}
        </div>

        {/* Active category detail */}
        {activeCat && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10"
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-raised p-7 md:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {activeCat.title}
              </div>
              <p className="text-sm font-light leading-7 text-zinc-400">
                {activeCat.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {activeCat.items.map((item) => (
                  <span
                    key={item.name}
                    className="border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-raised p-7 md:p-10 shadow-2xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-5 text-zinc-600">
                Technologies in this domain
              </div>
              <div className="space-y-3">
                {activeCat.items.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 border-b border-white/[0.04] pb-3 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-zinc-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-sm text-zinc-200">{item.name}</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* No selection hint */}
        {!activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-600"
          >
            Select a category to explore its systems
          </motion.div>
        )}
      </div>
    </section>
  )
}

function SkillsFallback() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="overflow-hidden rounded-2xl border border-white/[0.06] bg-raised p-6"
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            {category.title}
          </div>
          <div className="space-y-2">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 border-b border-white/[0.04] pb-2 last:border-0"
              >
                <span className="font-mono text-sm text-zinc-200">{item.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
