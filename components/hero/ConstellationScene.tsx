"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
import { skillCategories } from "@/lib/data"

/* ------------------------------------------------------------------ */
/* Simple Icons map (official slugs)                                   */
/* ------------------------------------------------------------------ */

const SIMPLE_ICONS: Record<string, string> = {
  typescript: "typescript",
  javascript: "javascript",
  java: "java",
  csharp: "csharp",
  php: "php",
  react: "react",
  nextdotjs: "nextdotjs",
  tailwindcss: "tailwindcss",
  nodejs: "nodejs",
  express: "express",
  nestjs: "nestjs",
  postgresql: "postgresql",
  mongodb: "mongodb",
  oracle: "oracle",
  amazonwebservices: "amazonwebservices",
  docker: "docker",
  git: "git",
  postman: "postman",
  reactnative: "reactnative",
  expo: "expo",
}

const SIMPLE_ICON_COLORS: Record<string, string> = {
  typescript: "3178c6",
  javascript: "f7df1e",
  java: "007396",
  csharp: "68217a",
  php: "777bb4",
  react: "61dafb",
  nextdotjs: "000000",
  tailwindcss: "06b6d4",
  nodejs: "339933",
  express: "000000",
  nestjs: "ea2845",
  postgresql: "4169e1",
  mongodb: "47a248",
  oracle: "f80000",
  amazonwebservices: "ff9900",
  docker: "2496ed",
  git: "f05032",
  postman: "ff6c37",
  reactnative: "61dafb",
  expo: "000020",
}

const LUCIDE_FALLBACKS: Record<string, { letter: string; color: string }> = {
  Code2: { letter: "</>", color: "#61dafb" },
  Server: { letter: "SV", color: "#f59e0b" },
  Database: { letter: "DB", color: "#3b82f6" },
  ShieldCheck: { letter: "✓", color: "#22d3ee" },
  Zap: { letter: "⚡", color: "#fbbf24" },
  Wifi: { letter: "📶", color: "#8b5cf6" },
  Layout: { letter: "📐", color: "#a855f7" },
  Code: { letter: "{}", color: "#61dafb" },
  Github: { letter: "🐙", color: "#f05032" },
  Cloud: { letter: "☁", color: "#3b82f6" },
  Edit3: { letter: "✎", color: "#10b981" },
  Sliders: { letter: "≡", color: "#8b5cf6" },
  Router: { letter: "🔀", color: "#61dafb" },
  Share2: { letter: "🔗", color: "#22d3ee" },
}

/* ------------------------------------------------------------------ */
/* Texture cache (Simple Icons CDN via canvas)                        */
/* ------------------------------------------------------------------ */

const textureCache = new Map<string, THREE.Texture>()

function createTechTexture(
  name: string,
  simpleIcon?: string,
  color?: string,
): THREE.Texture {
  const cacheKey = `${name}:${simpleIcon ?? ""}`
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey)!
  }

  const canvas = document.createElement("canvas")
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext("2d")!
  const r = 42

  const hex = color ? "#" + color : "#ffffff"
  // Outer glow
  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  grad.addColorStop(0, hex + "60")
  grad.addColorStop(1, "transparent")
  ctx.fillStyle = grad
  ctx.beginPath()
  ctx.arc(64, 64, r * 1.9, 0, Math.PI * 2)
  ctx.fill()

  // Icon circle
  ctx.fillStyle = "#0b1228"
  ctx.beginPath()
  ctx.arc(64, 64, r, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = "rgba(255,255,255,0.15)"
  ctx.lineWidth = 2
  ctx.stroke()

  // Real logo from Simple Icons CDN (with graceful fallback)
  if (simpleIcon) {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = `https://cdn.simpleicons.org/${simpleIcon}${
      color ? "/" + color : ""
    }`
    img.onload = () => {
      try {
        ctx.drawImage(img, 64 - r * 0.75, 64 - r * 0.75, r * 1.5, r * 1.5)
        ;(texture as any).needsUpdate = true
      } catch {
        // Canvas tainted or decode failed — fall back to letter
        drawFallbackLetter(ctx, name, r)
        ;(texture as any).needsUpdate = true
      }
    }
    img.onerror = () => {
      drawFallbackLetter(ctx, name, r)
      ;(texture as any).needsUpdate = true
    }
  } else {
    drawFallbackLetter(ctx, name, r)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  textureCache.set(cacheKey, texture)
  return texture
}

/**
 * Fallback: draw the lucide letter when the Simple Icons image fails to load.
 */
function drawFallbackLetter(
  ctx: CanvasRenderingContext2D,
  name: string,
  r: number,
) {
  const fb = LUCIDE_FALLBACKS[name]
  if (fb) {
    ctx.fillStyle = fb.color
    ctx.font = "bold 26px 'Segoe UI', system-ui, sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(fb.letter, 64, 67)
  }
}

/* ------------------------------------------------------------------ */
/* Icon rendered as a Three.js Sprite (no DOM, no unmount issues)      */
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
  const spriteRef = useRef<THREE.Sprite>(null)
  const [isHovered, setIsHovered] = useState(false)

  const simpleIcon = item.icon ?? undefined
  const color = item.iconColor ?? undefined
  const texture = createTechTexture(item.name, simpleIcon, color)

  useFrame(() => {
    const sprite = spriteRef.current
    if (!sprite) return
    const targetScale = (active || isHovered) ? 1.35 : 1.0
    sprite.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), 0.15)
  })

  return (
    <sprite
      ref={spriteRef}
      position={position ?? [0, 0, 0]}
      rotation={rotation ?? [0, 0, 0]}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <spriteMaterial map={texture} transparent depthWrite={false} />
    </sprite>
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
/* Tooltip overlay — HTML positioned over canvas                      */
/* ------------------------------------------------------------------ */

function TooltipOverlay({
  activeCategory,
}: {
  activeCategory: string | null
}) {
  const activeCat = skillCategories.find((c) => c.title === activeCategory)

  if (!activeCat) return null

  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
      style={{ transform: `translate(-50%, -50%) scale(${activeCat ? 1 : 0})` }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {activeCat.title}
          </div>
          <p className="text-sm font-light leading-7 text-zinc-400">
            {activeCat.desc}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {activeCat.items.map((item) => (
              <span
                key={item.name}
                className="border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-b-white/10" />
      </div>
    </div>
  )
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
    <div className="relative w-full h-full">
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
      <TooltipOverlay activeCategory={activeCategory} />
    </div>
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
