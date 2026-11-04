"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Spacecraft } from "./Spacecraft"
import { Starfield } from "./Starfield"
import { EnergyParticles } from "./Starfield"

/**
 * Camera controls — must live inside Canvas so useThree() is valid.
 */
function CameraControls() {
  const { camera } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    if (reduced) return
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [reduced])

  useEffect(() => {
    camera.position.set(0, 0, 7)
    gsap.to(camera.position, {
      z: 5.5,
      y: 0,
      x: 0,
      duration: 2.4,
      ease: "power3.out",
    })
  }, [])

  useFrame((state) => {
    if (reduced) return
    const t = state.clock.elapsedTime
    const targetX = mouseRef.current.x * 1.2
    const targetY = -mouseRef.current.y * 0.8
    const autoX = Math.sin(t * 0.1) * 1.0
    camera.position.x += (targetX + autoX - camera.position.x) * 0.04
    camera.position.y += (targetY - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })

  return null
}

/**
 * Client-only 3D space scene.
 */
export function SpaceScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      frameloop="always"
      dpr={[1, 1.5]}
      shadows
    >
      <CameraControls />
      <ambientLight intensity={0.4} color={0xffffff} />
      <directionalLight
        position={[10, 6, 10]}
        intensity={1.2}
        color={0xffffff}
        castShadow
      />
      <hemisphereLight intensity={0.25} />

      <Spacecraft hoverIntensity={1} />
      <Starfield count={1800} />
      <EnergyParticles count={36} />
    </Canvas>
  )
}
