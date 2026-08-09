"use client"

import React from "react"
import { motion } from "framer-motion"
import { EASE } from "@/lib/motion"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.8,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
