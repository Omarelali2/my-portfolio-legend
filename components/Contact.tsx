"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Send } from "lucide-react"
import { WordReveal } from "@/components/ui/WordReveal"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { Reveal } from "@/components/ui/Reveal"
import { EASE } from "@/lib/motion"

const links = [
  {
    label: "Email",
    value: "elaliomar30@gmail.com",
    href: "mailto:elaliomar30@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/omar-elali",
    href: "https://www.linkedin.com/in/omar-elali-28aaa1312/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Omarelali2",
    href: "https://github.com/Omarelali2",
    icon: Github,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-base py-24 md:py-32"
    >
      {/* Glowing portal effect */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[120px] animate-[pulse_6s_infinite] opacity-0 md:opacity-100"
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[90px]" />
        <div className="bg-grid mask-radial-center absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center md:px-8">
        <Reveal y={16} className="mb-12">
          <div className="flex items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="h-px w-10 bg-white/15" aria-hidden />
            <span className="text-accent">06</span>
            <span className="text-zinc-600">Contact</span>
            <span className="h-px w-10 bg-white/15" aria-hidden />
          </div>
        </Reveal>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-[clamp(2.4rem,8vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-[clamp(3rem,10vw,5rem)]"
        >
          <WordReveal text="Have an idea?" />
          <br />
          <WordReveal text="Let's" delay={0.2} />
          <WordReveal text="engineer" delay={0.4} className="text-accent" />
          <WordReveal text="something extraordinary." delay={0.65} />
        </motion.h2>

        <Reveal delay={0.55} className="mt-10 max-w-xl">
          <p className="text-base font-light leading-8 text-zinc-400 md:text-lg">
            Open to engineering challenges, full-stack product work, and
            infrastructure conversations.
          </p>
        </Reveal>

        <Reveal delay={0.7} className="mt-14">
          <MagneticButton
            as="a"
            href="mailto:elaliomar30@gmail.com"
            className="group bg-accent px-11 py-5 text-sm font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-accent-deep shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.8)]"
            strength={0.35}
          >
            <span className="flex items-center gap-3">
              Start A Conversation
              <Send size={17} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.85} className="mt-20 w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 bg-white/[0.02] p-5 sm:p-6 transition-colors duration-300 hover:bg-white/[0.05] hover:border-accent/30 sm:flex-col sm:items-start sm:gap-6"
              >
                <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600 group-hover:text-accent transition-colors">
                  <link.icon size={13} className="text-accent/60 group-hover:text-accent transition-colors" />
                  {link.label}
                </span>
                <span className="flex items-center gap-2 font-mono text-xs text-zinc-400 transition-colors group-hover:text-white">
                  {link.value}
                  <ArrowRight
                    size={12}
                    className="text-zinc-600 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
