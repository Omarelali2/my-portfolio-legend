"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type MagneticButtonProps = {
  children: React.ReactNode
  className?: string
  strength?: number
  as?: "a" | "button"
  href?: string
  onClick?: () => void
  target?: string
  rel?: string
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  as = "a",
  href,
  onClick,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setOffset({ x, y })
  }

  const reset = () => setOffset({ x: 0, y: 0 })

  const inner = (
    <motion.span
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.6 }}
      className="block"
    >
      {children}
    </motion.span>
  )

  const shared = cn(
    "inline-flex cursor-pointer select-none items-center justify-center rounded-full",
    className,
  )

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} className="inline-block">
      {as === "a" ? (
        <a href={href} target={target} rel={rel} onClick={onClick} className={shared}>
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={shared}>
          {inner}
        </button>
      )}
    </div>
  )
}
