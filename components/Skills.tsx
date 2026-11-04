"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import * as THREE from "three"
import { useEffect, useRef, useState } from "react"


import { motion } from "framer-motion"
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Zap,
  Wifi,
  Layout,
  Code,
  Github,
  Cloud,
  Edit3,
  Sliders,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { skillCategories } from "@/lib/data"
import { EASE } from "@/lib/motion"

const LUCIDE: Record<string, React.ElementType> = {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Zap,
  Wifi,
  Layout,
  Code,
  Github,
  Cloud,
  Edit3,
  Sliders,
}

/* ------------------------------------------------------------------ */
/* Icon rendered inside the 3D scene                                  */
/* ------------------------------------------------------------------ */

function TechIcon({
  item,
  active,
  position,
  rotation,
  scale,
}: {
  item: (typeof skillCategories)[number]["items"][number]
  active: boolean
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}) {
  const url = item.icon
    ? `https://cdn.simpleicons.org/${item.icon}${item.iconColor ? "/" + item.iconColor : ""}`
    : undefined
  const Icon = item.lucide ? LUCIDE[item.lucide] : Code2
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <Html
      center
      className={cn(
        "relative cursor-default transition-all duration-500 flex flex-col items-center",
        active
          ? "scale-110 drop-shadow-[0_0_16px_rgba(34,211,238,0.55)]"
          : "opacity-70 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]",
      )}
    >
      <div className="relative group">
        {url && !imgFailed ? (
          <img
            src={url}
            alt={item.name}
            width="34"
            height="34"
            draggable={false}
            className="block drop-shadow-md"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.03]">
            <Icon size={16} className="text-zinc-300" />
          </div>
        )}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none px-2 py-1 rounded bg-black/80 border border-white/10 text-[10px] font-mono text-zinc-100 backdrop-blur-sm z-20">
          {item.name}
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none px-2 py-1 rounded bg-black/80 border border-white/10 text-[9px] font-mono text-zinc-400 backdrop-blur-sm z-20">
          {item.desc}
        </div>
      </div>
    </Html>
  )
}

/* ------------------------------------------------------------------ */
/* One orbital ring with its technology icons                         */
/* ------------------------------------------------------------------ */

function Orbit({
  category,
  index,
  activeCategory,
  setActiveCategory,
}: {
  category: (typeof skillCategories)[number]
  index: number
  activeCategory: string | null
  setActiveCategory: (id: string | null) => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const active = activeCategory === category.title
  const itemCount = category.items.length
  const radius = 2.6 + index * 1.35
  const speed = (0.05 + index * 0.012) * (index % 2 === 0 ? 1 : -1)

  useFrame((state) => {
    const group = groupRef.current
    if (!group) return
    group.rotation.y += state.clock.getDelta() * speed
    // Gentle bobbing
    group.position.y = Math.sin(state.clock.elapsedTime * 1.2 + index) * 0.06
  })

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const maxItems = isMobile ? 3 : category.items.length

  return (
    <group ref={groupRef}>
      {/* Orbit ring */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        geometry={new THREE.RingGeometry(radius - 0.018, radius + 0.018, 64)}
        material={new THREE.MeshBasicMaterial({
          color: active ? 0x22d3ee : 0xffffff,
          transparent: true,
          opacity: active ? 0.18 : 0.05,
          side: THREE.DoubleSide,
        })}
      />
      {category.items.slice(0, maxItems).map((item, i) => {
        const angle = (i / itemCount) * Math.PI * 2
        const x = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius
        return (
          <TechIcon
            key={item.name}
            item={item}
            active={active}
            position={[x, 0, z]}
            rotation={[0, -angle, 0]}
            scale={active ? 1.15 : 1}
          />
        )
      })}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/* 3D constellation scene                                             */
/* ------------------------------------------------------------------ */

function ConstellationScene({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string | null
  setActiveCategory: (id: string | null) => void
}) {
  const { camera } = useThree()
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    if (reduced) return
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      camera.position.x += (nx * 2.5 - camera.position.x) * 0.03
      camera.position.y += (-ny * 1.5 - camera.position.y) * 0.03
      camera.lookAt(0, 0, 0)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [reduced, camera])

  // Slow auto orbit
  useFrame((state) => {
    if (reduced) return
    const t = state.clock.elapsedTime
    camera.position.x += (Math.sin(t * 0.08) * 2.2 - camera.position.x) * 0.02
    camera.lookAt(0, 0, 0)
  })

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      frameloop="always"
      dpr={[1, 1.5]}
      shadows
    >
      <ambientLight intensity={0.6} color={0xffffff} />
      <pointLight position={[6, 6, 6]} intensity={0.8} color={0xffffff} />
      <pointLight
        position={[-6, -2, 6]}
        intensity={0.5}
        color={0x22d3ee}
        distance={30}
      />
      <Constellation
        categories={skillCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </Canvas>
  )
}

function Constellation({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: typeof skillCategories
  activeCategory: string | null
  setActiveCategory: (id: string | null) => void
}) {
  return (
    <group>
      {categories.map((category, i) => (
        <Orbit
          key={category.title}
          category={category}
          index={i}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/* Skills section                                                     */
/* ------------------------------------------------------------------ */

export default function Skills() {
  const [webgl, setWebgl] = useState<boolean | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(
    skillCategories[0].title,
  )
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setWebgl(
      !!(
        typeof document !== "undefined" &&
        document.createElement("canvas").getContext("webgl")
      ),
    )
    setReduced(
      typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    )
  }, [])

  if (webgl === null) {
    return null
  }

  const categoryButtons = skillCategories.map((cat, i) => (
    <button
      key={cat.title}
      onClick={() => setActiveCategory(activeCategory === cat.title ? null : cat.title)}
      className={cn(
        "relative group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
        activeCategory === cat.title
          ? "bg-accent border-accent text-black shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          : "border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white hover:bg-white/[0.05]",
      )}
      aria-pressed={activeCategory === cat.title}
    >
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="absolute inset-0 rounded-full bg-accent/[0.25] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  ))

  const activeCat = skillCategories.find((c) => c.title === activeCategory)

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-base py-28 md:py-44"
    >
      {/* Section number */}
      <div className="pointer-events-none absolute -right-10 top-10 select-none lg:right-6">
        <span className="text-outline text-[16rem] font-black leading-none tracking-[-0.06em] lg:text-[22rem]">
          03
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <RevealSection />

        {/* 3D constellation */}
        <div className="relative h-[560px] lg:h-[700px] flex items-center justify-center mb-16 md:mb-24">
          {webgl ? (
            <ConstellationScene
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ) : (
            <SkillsFallback />
          )}
        </div>

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {categoryButtons}
        </div>

        {/* Active category detail */}
        {activeCat && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8"
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-raised p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {activeCat.title}
              </div>
              <p className="text-sm font-light leading-7 text-zinc-400">
                {activeCat.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {activeCat.items.map((item) => (
                  <span
                    key={item.name}
                    className="border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-raised p-6 md:p-8 shadow-2xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4 text-zinc-600">
                Technologies in this domain
              </div>
              <div className="space-y-3">
                {activeCat.items.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 border-b border-white/[0.04] pb-3 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-zinc-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-sm text-zinc-200">{item.name}</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* No selection hint */}
        {!activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-600"
          >
            Select a category to explore its systems
          </motion.div>
        )}
      </div>
    </section>
  )
}

function RevealSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="mb-14"
    >
      <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
        <span className="text-accent">03</span>
        <span className="text-zinc-600">Technology Constellation</span>
        <span className="h-px w-14 bg-white/15" aria-hidden />
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* CSS fallback — same content, no WebGL                              */
/* ------------------------------------------------------------------ */

function SkillsFallback() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="overflow-hidden rounded-2xl border border-white/[0.06] bg-raised p-6"
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            {category.title}
          </div>
          <div className="space-y-2">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 border-b border-white/[0.04] pb-2 last:border-0"
              >
                <span className="font-mono text-sm text-zinc-200">{item.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
