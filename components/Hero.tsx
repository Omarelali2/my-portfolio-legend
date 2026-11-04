"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { motion } from "framer-motion"
import { ArrowDownRight, Download } from "lucide-react"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { EASE } from "@/lib/motion"

const SpaceScene = dynamic(() => import("./hero/SpaceScene").then((mod) => mod.SpaceScene), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full flex items-center justify-center">
      <span className="font-mono text-[11px] text-zinc-400">Initializing engine…</span>
    </div>
  ),
})

const TITLE_LINES = ["OMAR", "EL-ALI"]

function supportsWebGL(): boolean {
  if (typeof document === "undefined") return false
  const canvas = document.createElement("canvas")
  try {
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
  } catch {
    return false
  }
}

/* ------------------------------------------------------------------ */
/* Hero section — cinematic opening sequence                          */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const [webgl, setWebgl] = useState<boolean | null>(null)

  useEffect(() => {
    setWebgl(supportsWebGL())
  }, [])

  // Loading state while WebGL is probed
  if (webgl === null) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-base">
        <div className="rounded-full border border-white/10 bg-black/60 px-6 py-3 backdrop-blur-sm">
          <span className="font-mono text-[11px] text-zinc-400">Initializing engine…</span>
        </div>
      </section>
    )
  }

  if (!webgl) {
    return <HeroFallback />
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base"
    >
      {/* 3D scene background */}
      <div className="absolute inset-0 z-0">
        <SpaceScene />
      </div>

      {/* Subtle ambient glow behind content */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: "radial-gradient(600px circle at 20% 20%, rgba(37,99,235,0.08), transparent 40%), radial-gradient(500px circle at 80% 80%, rgba(34,211,238,0.06), transparent 40%)",
      }} />

      {/* Overlay content */}
      <div className="relative z-20 mx-auto w-full px-6 md:px-8 pt-24 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
            {/* Left: Copy (md:col-span-6) */}
            <div className="md:col-span-7 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                className="inline-flex items-center gap-2.5 mb-8 border border-white/10 bg-white/[0.02] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Engineering the Digital Universe
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.4 }}
                className="mb-6 block text-[clamp(3rem,8vw,5.5rem)] font-black uppercase leading-[1.05] tracking-[-0.06em] text-white md:text-[clamp(4rem,10vw,7rem)]"
              >
                {TITLE_LINES.map((line, i) => (
                  <motion.span
                    key={line}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.5 + i * 0.15 }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
                className="mb-6 flex flex-col gap-1.5 text-[clamp(1rem,2vw,1.2rem)] font-medium text-white md:gap-2"
              >
                <span className="text-zinc-400">Software Engineer</span>
                <span className="text-cyan-300">Full-Stack Developer</span>
                <span className="text-zinc-400">| Backend Engineer</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
                className="mb-10 max-w-lg text-base font-light leading-8 text-zinc-300 italic md:text-lg"
              >
                "Building intelligent systems, scalable applications, and meaningful digital experiences."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1.25 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton
                  as="a"
                  href="#work"
                  className="group bg-accent px-10 py-4.5 text-sm font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-accent-deep shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
                >
                  <span className="flex items-center gap-3">
                    Explore My Work
                    <ArrowDownRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="/resume.pdf"
                  className="group border border-white/20 bg-white/[0.02] px-10 py-4.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/40 hover:bg-white/[0.05]"
                >
                  <span className="flex items-center gap-3">
                    <Download size={16} />
                    Download CV
                  </span>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right: Holographic ID card (md:col-span-6) */}
            <div className="md:col-span-5 hidden md:block flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative z-10 rounded-xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-md shadow-2xl">
                  <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Agent Profile
                  </div>
                  <div className="font-mono text-xs text-zinc-400 space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-zinc-500">Designation</span>
                      <span className="text-white">Full-Stack Engineer</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-zinc-500">Location</span>
                      <span className="text-white">Akkar, Lebanon</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-zinc-500">Alma Mater</span>
                      <span className="text-white">Lebanese University</span>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex justify-between items-start">
                      <span className="text-zinc-500">Status</span>
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Online
                      </span>
                    </div>
                  </div>
                </div>
                {/* Bottom glow gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-20"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-zinc-500">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
      </motion.div>
    </section>
  )
}

function HeroFallback() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base">
      <div className="absolute inset-0 opacity-[0.35]" style={{ background: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.12), transparent 60%)" }} />
      <div className="relative z-10 mx-auto w-full px-6 md:px-8 pt-24 text-center">
        <div className="inline-flex items-center gap-2.5 mb-8 border border-white/10 bg-white/[0.02] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Engineering the Digital Universe
        </div>
        <h1 className="mb-6 block text-[clamp(3rem,8vw,5rem)] font-black uppercase leading-[1.05] tracking-[-0.06em] text-white md:text-[clamp(4rem,10vw,6.5rem)]">
          OMAR<br />
          EL-ALI
        </h1>
        <div className="mb-6 flex flex-col gap-1.5 justify-center text-[clamp(1rem,2vw,1.2rem)] font-medium text-white">
          <span className="text-zinc-400">Software Engineer</span>
          <span className="text-cyan-300">Full-Stack Developer</span>
          <span className="text-zinc-400">| Backend Engineer</span>
        </div>
        <p className="mb-10 max-w-lg mx-auto text-base font-light leading-8 text-zinc-300 italic md:text-lg">
          "Building intelligent systems, scalable applications, and meaningful digital experiences."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton as="a" href="#work" className="bg-accent px-10 py-4.5 text-sm font-bold uppercase tracking-[0.18em] text-black hover:bg-accent-deep">
            Explore My Work
          </MagneticButton>
          <MagneticButton as="a" href="/resume.pdf" className="border border-white/20 bg-white/[0.02] px-10 py-4.5 text-sm font-bold uppercase tracking-[0.18em] text-white hover:border-white/40">
            Download CV
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
