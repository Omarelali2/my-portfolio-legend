"use client"

import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useRef } from "react"

type StarfieldProps = {
  count?: number
  depth?: number
  speed?: number
}

/**
 * Deep-space starfield with three parallax layers and subtle twinkling.
 */
export function Starfield({ count = 2400, depth = 130, speed = 1 }: StarfieldProps) {
  const ref = useRef<THREE.Points>(null)

  const palette = [0xffffff, 0xe8f5ff, 0x22d3ee, 0x8b5cf6, 0x2563eb]
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const layers = new Float32Array(count) // 0 = near, 1 = far (parallax weight)
  const twinkleOffset = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * depth
    positions[i * 3 + 1] = (Math.random() - 0.5) * depth * 0.7
    positions[i * 3 + 2] = (Math.random() - 0.5) * depth

    const c = new THREE.Color(palette[Math.floor(Math.random() * palette.length)])
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b

    sizes[i] = Math.random() * 1.1 + 0.3
    layers[i] = Math.random()
    twinkleOffset[i] = Math.random() * Math.PI * 2
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))
  geometry.setAttribute("layer", new THREE.BufferAttribute(layers, 1))
  geometry.setAttribute("twinkleOffset", new THREE.BufferAttribute(twinkleOffset, 1))

  const material = new THREE.PointsMaterial({
    size: 0.55,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true,
  })

  const points = new THREE.Points(geometry, material)
  ref.current = points

  useFrame((state) => {
    const obj = ref.current
    if (!obj) return
    const t = state.clock.elapsedTime * speed
    obj.rotation.y = t * 0.01
    obj.rotation.x = t * 0.005
  })

  return <primitive object={points} />
}

/**
 * Floating energy particles — glowing motes that rise and drift around the ship.
 */
export function EnergyParticles({ count = 44 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const positions = new Float32Array(count * 3)
  const velocities = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const lifeOffset = new Float32Array(count)

  const palette = [0x22d3ee, 0x8b5cf6, 0x2563eb]

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12
    positions[i * 3 + 1] = Math.random() * 8 - 4
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12

    velocities[i * 3] = (Math.random() - 0.5) * 0.015
    velocities[i * 3 + 1] = 0.012 + Math.random() * 0.018
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015

    const c = new THREE.Color(palette[Math.floor(Math.random() * palette.length)])
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b

    sizes[i] = Math.random() * 0.4 + 0.15
    lifeOffset[i] = Math.random() * Math.PI * 2
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    sizeAttenuation: true,
  })

  const points = new THREE.Points(geometry, material)
  ref.current = points

  useFrame((state) => {
    const obj = ref.current
    if (!obj) return
    const t = state.clock.elapsedTime
    const pos = geometry.attributes.position as THREE.BufferAttribute
    const array = pos.array as Float32Array
    let needsUpdate = false

    for (let i = 0; i < count; i++) {
      array[i * 3] += velocities[i * 3] + Math.sin(t + lifeOffset[i]) * 0.004
      array[i * 3 + 1] += velocities[i * 3 + 1]
      array[i * 3 + 2] += velocities[i * 3 + 2] + Math.cos(t * 0.7 + lifeOffset[i]) * 0.004

      if (array[i * 3 + 1] > 5) {
        array[i * 3 + 1] = -5
        array[i * 3] = (Math.random() - 0.5) * 12
        array[i * 3 + 2] = (Math.random() - 0.5) * 12
        needsUpdate = true
      }
    }

    if (needsUpdate) pos.needsUpdate = true

    // Gentle shimmer on opacity
    const shimmer = 0.55 + Math.sin(t * 2) * 0.25
    material.opacity = shimmer

    obj.rotation.y = t * 0.005
  })

  return <primitive object={points} />
}
