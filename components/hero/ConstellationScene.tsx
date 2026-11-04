"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
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
/* Camera controls — must live inside Canvas so useThree() is valid   */
/* ------------------------------------------------------------------ */

function ConstellationCameraControls() {
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

  useFrame((state) => {
    if (reduced) return
    const t = state.clock.elapsedTime
    camera.position.x += (Math.sin(t * 0.08) * 2.2 - camera.position.x) * 0.02
    camera.lookAt(0, 0, 0)
  })

  return null
}

/* ------------------------------------------------------------------ */
/* 3D constellation scene                                             */
/* ------------------------------------------------------------------ */

export function ConstellationScene({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string | null
  setActiveCategory: (id: string | null) => void
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      frameloop="always"
      dpr={[1, 1.5]}
      shadows
    >
      <ConstellationCameraControls />
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
