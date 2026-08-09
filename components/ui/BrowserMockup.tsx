import React from "react"
import Image from "next/image"
import { Lock } from "lucide-react"
import { cn } from "@/lib/utils"

type BrowserMockupProps = {
  src: string
  alt: string
  url: string
  className?: string
  imageClassName?: string
  aspect?: string
  priority?: boolean
}

/** Framed browser-style preview with traffic lights, URL bar, and subtle hover tilt. */
export function BrowserMockup({
  src,
  alt,
  url,
  className,
  imageClassName,
  aspect = "aspect-[16/10]",
  priority,
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "group/browser relative overflow-hidden rounded-xl border border-white/10 bg-raised shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]",
        "transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "[transform-style:preserve-3d] hover:[transform:rotateX(2.5deg)_rotateY(-2deg)] hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,1)]",
        className,
      )}
    >
      {/* Title bar */}
      <div className="relative z-10 flex items-center gap-2 border-b border-white/[0.07] bg-surface/70 px-4 py-3 backdrop-blur-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a40]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a52]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5a5a64]" />

        <div className="ml-4 flex flex-1 items-center gap-2 truncate rounded-md border border-white/[0.06] bg-black/50 px-3 py-1.5">
          <Lock size={9} className="shrink-0 text-zinc-600" />
          <span className="truncate font-mono text-[10px] tracking-wide text-zinc-500">
            {url}
          </span>
        </div>
      </div>

      {/* Viewport */}
      <div className={cn("relative overflow-hidden bg-elevated", aspect)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            "object-contain p-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/browser:scale-[1.03]",
            imageClassName,
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
      </div>
    </div>
  )
}
