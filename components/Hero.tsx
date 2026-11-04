"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { motion } from "framer-motion"
import { ArrowDownRight, Download } from "lucide-react"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { Spacecraft } from "@/components/hero/Spacecraft"
import { Starfield, EnergyParticles } from "@/components/hero/Starfield"
import { EASE } from "@/lib/motion"

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
/* 3D scene                                                           */
/* ------------------------------------------------------------------ */

function SpaceScene() {
  const { camera } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // Mouse drift (only when not reduced motion)
  useEffect(() => {
    if (reduced) return
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [reduced])

  // Camera entrance
  useEffect(() => {
    camera.position.set(0, 1, 9)
    gsap.to(camera.position, {
      z: 4.6,
      y: 0.15,
      x: 0,
      duration: 2.6,
      ease: "power3.out",
    })
  }, [])

  // Idle orbit + pointer drift
  useFrame((state) => {
    if (reduced) return
    const t = state.clock.elapsedTime
    const targetX = mouseRef.current.x * 1.6
    const targetY = -mouseRef.current.y * 1.1
    const autoX = Math.sin(t * 0.12) * 1.2
    camera.position.x += (targetX + autoX - camera.position.x) * 0.04
    camera.position.y += (targetY - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })

  return (
    <Canvas
      camera={{ position: [0, 0.2, 5.5], fov: 45 }}
      frameloop="always"
      dpr={[1, 1.5]}
      shadows
    >
      <ambientLight intensity={0.35} color={0xffffff} />
      <directionalLight
        position={[8, 6, 10]}
        intensity={1.1}
        color={0xffffff}
        castShadow
        shadow-map-size-width={1024}
        shadow-map-size-height={1024}
      />
      <hemisphereLight position={[0, 1, 0]} intensity={0.25} />

      <Spacecraft hoverIntensity={reduced ? 0 : 1} />
      <Starfield count={reduced ? 1200 : 2400} />
      <EnergyParticles count={reduced ? 24 : 44} />
    </Canvas>
  )
}

/* ------------------------------------------------------------------ */
/* Hero section                                                       */
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
      <SpaceScene />

      {/* Overlay content */}
      <div className="relative z-20 mx-auto w-full px-6 md:px-8 pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Copy */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="inline-flex items-center gap-2.5 mb-6 border border-white/10 bg-white/[0.02] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Engineering the Digital Universe
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.4 }}
                className="mb-2 block text-[clamp(3.5rem,10vw,8rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white md:text-[clamp(4rem,11vw,9rem)]"
              >
                {TITLE_LINES.map((line, i) => (
                  <motion.span
                    key={line}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.5 + i * 0.14 }}
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
                className="hero-role mb-8 flex flex-col gap-1.5 text-[clamp(1.1rem,2vw,1.35rem)] font-medium text-white md:gap-2"
              >
                <span>Software Engineer</span>
                <span className="text-cyan-300">
                  Full-Stack Developer &nbsp;|&nbsp; Backend Engineer
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
                className="mb-10 max-w-xl text-base font-light leading-8 text-zinc-300 italic md:text-lg"
              >
                "Building intelligent systems, scalable applications, and meaningful digital experiences."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1.25 }}
                className="hero-cta flex flex-col sm:flex-row gap-4"
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

            {/* Holographic id card */}
            <div className="md:col-span-5 hidden md:block">
              <div className="relative h-[440px] w-full flex items-end justify-center">
                <div className="relative z-10 w-full max-w-sm rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md shadow-2xl">
                  <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Agent Profile
                  </div>
                  <div className="font-mono text-xs text-zinc-400 space-y-2">
                    <div className="flex justify-between">
                      <span>Designation</span>
                      <span className="text-white">Full-Stack Engineer</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location</span>
                      <span className="text-white">Akkar, Lebanon</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Alma Mater</span>
                      <span className="text-white">Lebanese University</span>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex justify-between">
                      <span>Status</span>
                      <span className="flex items-center gap-1 text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Online
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl border border-white/5 bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none" />
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
      <div className="relative z-10 mx-auto w-full px-6 md:px-8 pt-20 text-center">
        <div className="inline-flex items-center gap-2.5 mb-6 border border-white/10 bg-white/[0.02] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Engineering the Digital Universe
        </div>
        <h1 className="mb-6 text-[clamp(3.5rem,10vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
          OMAR<br />
          EL-ALI
        </h1>
        <div className="mb-10 flex flex-col gap-1.5 justify-center text-[clamp(1.1rem,2vw,1.35rem)] font-medium text-white">
          <span>Software Engineer</span>
          <span className="text-cyan-300">Full-Stack Developer &nbsp;|&nbsp; Backend Engineer</span>
        </div>
        <p className="mb-10 max-w-xl mx-auto text-base font-light leading-8 text-zinc-300 italic md:text-lg">
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
