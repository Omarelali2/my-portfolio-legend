"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { skillCategories } from "@/lib/data"
import { EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Clean, organized technology constellation — CSS-based               */
/* ------------------------------------------------------------------ */

export function ConstellationScene({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string | null
  setActiveCategory: (id: string | null) => void
}) {
  return (
    <div className="relative w-full h-full">
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="relative h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Category selector row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
          {skillCategories.map((category, ci) => {
            const isActive = activeCategory === category.title
            return (
              <button
                key={category.title}
                onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                className={cn(
                  "relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300",
                  isActive
                    ? "bg-accent border-accent text-black shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                    : "border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white hover:bg-white/[0.04]",
                )}
                aria-pressed={activeCategory === category.title}
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                  {String(ci + 1).padStart(2, "0")}
                </span>
              </button>
            )
          })}
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, ci) => {
            const isActive = activeCategory === category.title

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: ci * 0.06 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border p-7 md:p-8 transition-all duration-300",
                  isActive
                    ? "border-accent bg-accent/[0.08] shadow-[0_0_30px_rgba(37,99,235,0.25)]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.03]",
                )}
              >
                {/* Category header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.03]">
                      <span className={cn(isActive ? "text-black" : "text-accent", "font-mono text-xs font-bold")}>
                        {String(ci + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                        {category.items.length} technologies
                      </p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent/30 bg-accent/10">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      <span className="font-mono text-[9px] font-bold text-accent uppercase tracking-[0.2em]">
                        Active
                      </span>
                    </div>
                  )}
                </div>

                {/* Technology icons — clean, full names, well-spaced */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group flex flex-col items-center gap-2"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.05] group-hover:shadow-[0_0_12px_rgba(255,255,255,0.05)]">
                        <span className="font-mono text-[10px] font-bold leading-none">
                          {item.name.length <= 6 ? item.name : item.name.slice(0, 5) + "…"}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500 group-hover:text-zinc-300 transition-colors leading-tight text-center">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Active category detail panel */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative z-10 mx-auto max-w-2xl mt-10 md:mt-12"
          >
            <div className="rounded-2xl border border-accent/20 bg-accent/[0.05] p-8 md:p-10 shadow-[0_0_50px_rgba(37,99,235,0.15)]">
              <div className="flex items-center gap-3 mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {activeCategory} — Technology Systems
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillCategories.find((c) => c.title === activeCategory)?.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl border border-white/[0.06] bg-white/[0.02] transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.03]">
                      <span className={cn(item.icon ? "text-cyan-400" : "text-zinc-400", "font-mono text-[10px]")}>
                        {item.icon ? "●" : "◇"}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-xs font-medium text-zinc-300 block truncate">
                        {item.name}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-500 truncate">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
