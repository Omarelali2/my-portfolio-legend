import React from "react"
import { cn } from "@/lib/utils"

type TechItemProps = {
  index: number
  name: string
  desc?: string
  className?: string
}

/** Compact technical list row used inside the terminal-style skills grid. */
export function TechItem({ index, name, desc, className }: TechItemProps) {
  const num = String(index + 1).padStart(2, "0")

  return (
    <div
      className={cn(
        "group flex cursor-default items-center justify-between gap-4 border-b border-white/[0.06] px-4 py-3.5 transition-colors duration-300 hover:bg-white/[0.02]",
        className,
      )}
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[10px] text-zinc-700 transition-colors duration-300 group-hover:text-accent">
          {num}
        </span>
        <span className="font-mono text-sm tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-white">
          {name}
        </span>
      </div>

      <div className="flex items-center gap-5">
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600 sm:block">
          {desc}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  )
}
