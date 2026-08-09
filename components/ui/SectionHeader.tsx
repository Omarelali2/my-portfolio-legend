import React from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
  titleClassName?: string
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 flex flex-col gap-10 border-t border-line pt-8 md:mb-20 md:pt-10",
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-4xl", align === "center" && "flex flex-col items-center")}>
        <Reveal y={16} className="mb-7">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="text-accent">{index}</span>
            <span className="text-zinc-600">{eyebrow}</span>
            <span className="h-px w-14 bg-white/15" aria-hidden />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={cn(
              "text-[clamp(2.5rem,5.5vw,5rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-white",
              titleClassName,
            )}
          >
            {title}
          </h2>
        </Reveal>
      </div>

      {description ? (
        <Reveal delay={0.12} className="md:max-w-xs md:pb-2">
          <div className="text-sm leading-7 text-zinc-500">{description}</div>
        </Reveal>
      ) : null}
    </div>
  )
}
