"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Spacecraft } from "./Spacecraft"
import { Starfield, EnergyParticles } from "./Starfield"

/**
 * Client-only 3D space scene. Rendered via next/dynamic (ssr: false)
 * to avoid Next.js App Router hydration mismatches with WebGL canvas.
 */
export function SpaceScene() {
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
