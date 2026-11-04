"use client"

import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useRef } from "react"

type SpacecraftProps = {
  hoverIntensity?: number
}

/**
 * Procedurally built futuristic spacecraft / orbital engineering object.
 * Larger, more detailed centerpiece for the hero section.
 */
export function Spacecraft({ hoverIntensity = 1 }: SpacecraftProps) {
  const groupRef = useRef<THREE.Group>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const group = groupRef.current
    if (!group) return

    // Slow cinematic hover + drift
    group.position.y = Math.sin(t * 0.6 * hoverIntensity) * 0.08
    group.position.x = Math.cos(t * 0.4 * hoverIntensity) * 0.05
    group.rotation.z = Math.sin(t * 0.3 * hoverIntensity) * 0.02
    group.rotation.x = Math.cos(t * 0.35 * hoverIntensity) * 0.015
    group.rotation.y += 0.003 * hoverIntensity // slow continuous rotation

    // Engine pulse
    const pulse = 1 + Math.sin(t * 12 * hoverIntensity) * 0.15
    const glow = glowRef.current
    if (glow) {
      glow.scale.set(pulse, pulse, pulse)
      ;(glow.material as THREE.MeshStandardMaterial).emissiveIntensity =
        1 + Math.sin(t * 8) * 0.4
    }
    const light = lightRef.current
    if (light) {
      light.intensity = 3 + Math.sin(t * 14) * 1
    }
  })

  const hullMat = new THREE.MeshStandardMaterial({
    color: 0x0b1228,
    metalness: 0.95,
    roughness: 0.15,
  })

  const accentMat = new THREE.MeshStandardMaterial({
    color: 0x2563eb,
    emissive: 0x2563eb,
    emissiveIntensity: 0.7,
    metalness: 0.85,
    roughness: 0.1,
  })

  const cockpitMat = new THREE.MeshStandardMaterial({
    color: 0x22d3ee,
    metalness: 0.25,
    roughness: 0.05,
    transparent: true,
    opacity: 0.9,
  })

  const detailMat = new THREE.MeshStandardMaterial({
    color: 0x17234a,
    metalness: 1,
    roughness: 0.08,
  })

  return (
    <group ref={groupRef} castShadow receiveShadow scale={2.2}>
      {/* ---- Main Fuselage ---- */}
      <mesh
        castShadow
        receiveShadow
        geometry={new THREE.CylinderGeometry(0.14, 0.09, 1.5, 32)}
        material={hullMat}
      />

      {/* ---- Nose Cone ---- */}
      <mesh
        castShadow
        position={[0, 1.05, 0]}
        geometry={new THREE.ConeGeometry(0.14, 0.6, 32)}
        material={accentMat}
      />

      {/* ---- Cockpit Pod ---- */}
      <mesh
        castShadow
        position={[0, 0.3, 0.42]}
        scale={[1.1, 0.8, 1.3]}
        geometry={new THREE.SphereGeometry(0.18, 32, 32)}
        material={cockpitMat}
      />

      {/* ---- Wings (orbital arrays) ---- */}
      {[-1, 1].map((side) => (
        <mesh
          key={side}
          castShadow
          position={[side * 0.85, -0.08, -0.1]}
          rotation={[0, 0, side * 0.22]}
          geometry={new THREE.BoxGeometry(0.06, 0.65, 2.1)}
          material={hullMat}
        />
      ))}
      {/* Wing tip glows */}
      {[-1, 1].map((side) => (
        <mesh
          key={`tip-${side}`}
          castShadow
          position={[side * 0.85, -0.08, 0.95]}
          geometry={new THREE.SphereGeometry(0.06, 20, 20)}
          material={new THREE.MeshStandardMaterial({
            color: 0x2563eb,
            emissive: 0x2563eb,
            emissiveIntensity: 1.2,
          })}
        />
      ))}

      {/* ---- Engine Section ---- */}
      {/* Engine block */}
      <mesh
        castShadow
        position={[0, -1.0, 0]}
        geometry={new THREE.CylinderGeometry(0.12, 0.16, 0.45, 32)}
        material={detailMat}
      />
      {/* Engine nozzle */}
      <mesh
        position={[0, -1.22, 0]}
        rotation={[Math.PI, 0, 0]}
        geometry={new THREE.CylinderGeometry(0.08, 0.03, 0.3, 32)}
        material={new THREE.MeshStandardMaterial({ color: 0x101933 })}
      />
      {/* Pulsing engine glow */}
      <mesh
        ref={glowRef}
        position={[0, -1.0, 0]}
        scale={[1.6, 1.6, 1.6]}
        geometry={new THREE.IcosahedronGeometry(0.2, 2)}
        material={new THREE.MeshStandardMaterial({
          color: 0x22d3ee,
          emissive: 0x22d3ee,
          emissiveIntensity: 1.4,
          transparent: true,
          opacity: 0.85,
        })}
      />
      {/* Engine illumination light */}
      <pointLight ref={lightRef} position={[0, -1.0, 0]} color={0x22d3ee} intensity={3} distance={8} decay={2} />
      {/* Engine beam behind the ship */}
      <mesh
        position={[0, -2.1, 0]}
        rotation={[Math.PI, 0, 0]}
        geometry={new THREE.ConeGeometry(0.5, 1.6, 32)}
        material={new THREE.MeshStandardMaterial({
          color: 0x22d3ee,
          emissive: 0x22d3ee,
          emissiveIntensity: 0.6,
          transparent: true,
          opacity: 0.2,
          side: THREE.DoubleSide,
        })}
      />

      {/* ---- Hull Module Panels ---- */}
      {[-0.35, 0, 0.35].map((y) => (
        <mesh
          key={`panel-${y}`}
          position={[0, y, 0.02]}
          scale={[1.2, 0.6, 1]}
          geometry={new THREE.BoxGeometry(0.08, 0.09, 0.4)}
          material={new THREE.MeshStandardMaterial({
            color: 0x2563eb,
            emissive: 0x2563eb,
            emissiveIntensity: 0.5,
          })}
        />
      ))}

      {/* ---- Antenna Array ---- */}
      <mesh
        position={[0, 1.35, -0.2]}
        rotation={[0.5, 0, 0]}
        geometry={new THREE.CylinderGeometry(0.015, 0.015, 0.4, 10)}
        material={detailMat}
      />
      {[-0.1, 0.1].map((x) => (
        <mesh
          key={`dish-${x}`}
          position={[x, 1.5, -0.4]}
          rotation={[0.6, 0, 0]}
          geometry={new THREE.CylinderGeometry(0.045, 0.015, 0.16, 16)}
          material={detailMat}
        />
      ))}

      {/* ---- Rear Thruster Fins ---- */}
      {[-1, 1].map((side) => (
        <mesh
          key={`fin-${side}`}
          castShadow
          position={[side * 0.25, -1.15, -0.25]}
          rotation={[0, 0, side * 0.4]}
          geometry={new THREE.BoxGeometry(0.05, 0.3, 0.5)}
          material={hullMat}
        />
      ))}
    </group>
  )
}
