"use client"

import React from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { WordReveal } from "@/components/ui/WordReveal"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { Reveal } from "@/components/ui/Reveal"

const links = [
  {
    label: "Email",
    value: "elaliomar30@gmail.com",
    href: "mailto:elaliomar30@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/omar-elali",
    href: "https://www.linkedin.com/in/omar-elali-28aaa1312/",
  },
  {
    label: "GitHub",
    value: "github.com/omarelali",
    href: "https://github.com/omarelali2",
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-base py-32 md:py-44"
    >
      {/* Stronger accent moment */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 100%, rgba(183,255,60,0.09), transparent 70%)",
          }}
        />
        <div className="bg-grid mask-radial-center absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center md:px-8">
        <Reveal y={16} className="mb-12">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="h-px w-10 bg-white/15" aria-hidden />
            <span className="text-accent">06</span>
            <span className="text-zinc-600">Contact</span>
            <span className="h-px w-10 bg-white/15" aria-hidden />
          </div>
        </Reveal>

        <h2 className="text-[clamp(3.2rem,9vw,8.5rem)] font-bold uppercase leading-[0.85] tracking-[-0.05em] text-white">
          <WordReveal text="Let's" />
          <br />
          <WordReveal text="build" delay={0.25} />
          <br />
          <WordReveal text="something." delay={0.5} className="text-accent" />
        </h2>

        <Reveal delay={0.5} className="mt-10 max-w-xl">
          <p className="text-base font-light leading-8 text-zinc-400 md:text-lg">
            Have a product, startup, or engineering challenge? Let&apos;s talk.
          </p>
        </Reveal>

        <Reveal delay={0.6} className="mt-12">
          <MagneticButton
            href="mailto:elaliomar30@gmail.com"
            className="group bg-accent px-10 py-5 text-sm font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-accent-deep"
            strength={0.35}
          >
            <span className="flex items-center gap-3">
              Start A Conversation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.7} className="mt-20 w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 bg-raised p-5 transition-colors duration-300 hover:bg-elevated sm:flex-col sm:items-start sm:gap-6"
              >
                <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                  {link.label === "Email" ? (
                    <Mail size={13} className="text-accent" />
                  ) : link.label === "LinkedIn" ? (
                    <Linkedin size={13} className="text-accent" />
                  ) : (
                    <Github size={13} className="text-accent" />
                  )}
                  {link.label}
                </span>
                <span className="flex items-center gap-2 font-mono text-xs text-zinc-300 transition-colors group-hover:text-white">
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
