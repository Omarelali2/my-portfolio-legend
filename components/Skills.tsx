"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { skillCategories } from "@/lib/data"
import { EASE } from "@/lib/motion"
import { ConstellationScene } from "@/components/hero/ConstellationScene"

/* ------------------------------------------------------------------ */
/* Skills section — clean technology constellation                     */
/* ------------------------------------------------------------------ */

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    skillCategories[0].title,
  )

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-base py-28 md:py-44"
    >
      {/* Section header */}
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

        {/* Constellation scene (contains category selector + grid + detail panel) */}
        <div className="relative">
          <ConstellationScene
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </div>
    </section>
  )
}
