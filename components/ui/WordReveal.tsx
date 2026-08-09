"use client"

import React from "react"
import { motion } from "framer-motion"
import { EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"

type WordRevealProps = {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

const parent = (stagger: number) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
})

const child = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.9, ease: EASE } },
}

/** Editorial line-by-line masked word reveal. */
export function WordReveal({ text, className, delay = 0, stagger = 0.045 }: WordRevealProps) {
  const words = text.split(" ")

  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={parent(stagger)}
      transition={{ delayChildren: delay }}
      className={cn("inline", className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={child} className="inline-block will-change-transform">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
