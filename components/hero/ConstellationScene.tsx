"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { skillCategories } from "@/lib/data"
import { EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Clean, organized technology constellation — CSS-based (no WebGL)    */
/* Replaces the cluttered overlapping 3D spheres with a premium grid   */
/* ------------------------------------------------------------------ */

export function ConstellationScene({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string | null
  setActiveCategory: (id: string | null) => void
}) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full">
      {/* Decorative orbital rings in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
            style={{
              width: 280 + i * 220,
              height: 280 + i * 220,
              opacity: 0.5,
              animation: `rotate${i} ${20 + i * 10}s linear infinite`,
            }}
          />
        ))}
        <style>{`
          @keyframes rotate1 { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
          @keyframes rotate2 { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(-360deg); } }
          @keyframes rotate3 { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        `}</style>
      </div>

      {/* Category grid */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, ci) => {
            const isActive = activeCategory === category.title
            const isHovered = hoveredCategory === category.title

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: ci * 0.06 }}
                whileHover={{ y: -4 }}
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border p-7 md:p-8 transition-all duration-300",
                  isActive
                    ? "border-accent bg-accent/[0.08] shadow-[0_0_30px_rgba(37,99,235,0.25)]"
                    : isHovered
                      ? "border-white/20 bg-white/[0.02]"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.03]",
                )}
              >
                {/* Category header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.03]">
                    <span className={cn(
                      isActive ? "text-black" : "text-accent",
                      "font-mono text-xs font-bold",
                    )}>
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

                {/* Technology icons — organized, well-spaced */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4">
                  {category.items.map((item, ti) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.2 + ti * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group flex flex-col items-center gap-2"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.05] group-hover:shadow-[0_0_12px_rgba(255,255,255,0.05)]">
                        <span className="font-mono text-[11px] font-bold">
                          {item.name.length <= 4 ? item.name : item.name.slice(0, 3) + "·"}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300 transition-colors leading-tight">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Active badge */}
                {isActive && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent/30 bg-accent/10">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[9px] font-bold text-accent uppercase tracking-[0.2em]">
                      Active
                    </span>
                  </div>
                )}
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
            className="relative z-10 mx-auto max-w-2xl mt-8 md:mt-10"
          >
            <div className="rounded-2xl border border-accent/20 bg-accent/[0.05] p-7 md:p-10 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
              <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {activeCategory} — Technology Systems
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillCategories.find((c) => c.title === activeCategory)?.items.map(
                  (item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.06] bg-white/[0.02] transition-colors hover:bg-white/[0.04]"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.03]">
                        <span className={cn(
                          item.icon ? "text-cyan-400" : "text-zinc-400",
                          "font-mono text-[10px]",
                        )}>
                          {item.icon ? "●" : "◇"}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-xs font-medium text-zinc-300 block">
                          {item.name}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
