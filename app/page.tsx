"use client"

import React from "react"
import HomeBanner from "@/components/HomeBanner"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import LebNexisSection from "@/components/LebNexisSection"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import TopProjects from "@/components/TopProjects"

const SectionReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-90px" }}
    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
)

const SectionBridge = ({
  label,
  title,
  glowColor = "blue",
}: {
  label: string
  title: string
  glowColor?: "blue" | "purple" | "zinc"
}) => {
  const glowClasses = {
    blue: "bg-blue-600/10",
    purple: "bg-purple-600/10",
    zinc: "bg-white/5",
  }

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-black py-20 text-center md:py-28">
      <div
        className={`pointer-events-none absolute h-[260px] w-[520px] rounded-full blur-[120px] ${glowClasses[glowColor]}`}
      />

      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="mb-10 h-20 w-px origin-top bg-gradient-to-b from-transparent via-white/15 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl px-6"
      >
        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.32em] text-zinc-600">
          {label}
        </p>

        <h3 className="text-xl font-light italic leading-relaxed text-zinc-400 md:text-2xl">
          {title}
        </h3>
      </motion.div>

      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25, ease: "easeInOut" }}
        className="mt-10 h-20 w-px origin-top bg-gradient-to-b from-transparent via-white/15 to-transparent"
      />
    </section>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white selection:bg-blue-500/30">
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10">
        <HomeBanner />

        <SectionBridge
          label="01 // About"
          title="I build products from clean architecture to polished user experience."
          glowColor="blue"
        />

        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionBridge
          label="02 // Selected Work"
          title="A focused collection of full-stack, SaaS, AI, and interface projects."
          glowColor="zinc"
        />

        <SectionReveal>
          <TopProjects />
        </SectionReveal>

        <SectionBridge
          label="03 // Founder Project"
          title="LebNexis Tahaddiyat turns learning into real-world execution."
          glowColor="purple"
        />

        <SectionReveal>
          <LebNexisSection />
        </SectionReveal>

        <SectionBridge
          label="04 // Technical Stack"
          title="The tools and systems behind the products I build."
          glowColor="blue"
        />

        <SectionReveal>
          <Skills />
        </SectionReveal>

      

        <SectionReveal>
          <Contact />
        </SectionReveal>

        <Footer />
      </div>
    </main>
  )
}