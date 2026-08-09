import React from "react"
import { cn } from "@/lib/utils"

type MarqueeProps = {
  items: string[]
  className?: string
}

export function Marquee({ items, className }: MarqueeProps) {
  const row = (keyPrefix: string, ariaHidden = false) => (
    <div
      key={keyPrefix}
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden}
    >
      {items.map((item, i) => (
        <div key={`${keyPrefix}-${i}`} className="flex shrink-0 items-center">
          <span className="px-8 font-mono text-xs font-medium uppercase tracking-[0.35em] text-zinc-500 md:px-12 md:text-sm">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent/60" aria-hidden />
        </div>
      ))}
    </div>
  )

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-line bg-raised py-6",
        className,
      )}
    >
      <div className="flex w-max animate-marquee will-change-transform">
        {row("a")}
        {row("b", true)}
      </div>
    </div>
  )
}
