"use client"

import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useRef } from "react"

type SpacecraftProps = {
  hoverIntensity?: number
}

/**
 * Procedurally built futuristic spacecraft / orbital engineering object.
 * No external model files — everything is constructed from Three.js primitives
 * so the bundle stays small and there are no broken asset links.
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
    group.position.y = Math.sin(t * 0.7 * hoverIntensity) * 0.05
    group.position.x = Math.cos(t * 0.5 * hoverIntensity) * 0.03
    group.rotation.z = Math.sin(t * 0.35 * hoverIntensity) * 0.015
    group.rotation.x = Math.cos(t * 0.4 * hoverIntensity) * 0.01

    // Engine pulse
    const pulse = 1 + Math.sin(t * 14 * hoverIntensity) * 0.12
    const glow = glowRef.current
    if (glow) {
      glow.scale.set(pulse, pulse, pulse)
      ;(glow.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.8 + Math.sin(t * 10) * 0.4
    }
    const light = lightRef.current
    if (light) {
      light.intensity = 2.5 + Math.sin(t * 16) * 0.9
    }
  })

  return (
    <group ref={groupRef} castShadow receiveShadow>
      {/* Fuselage */}
      <mesh
        castShadow
        receiveShadow
        geometry={new THREE.CylinderGeometry(0.11, 0.07, 1.1, 24)}
        material={new THREE.MeshStandardMaterial({
          color: 0x0b1228,
          metalness: 0.95,
          roughness: 0.2,
        })}
      />
      {/* Nose cone */}
      <mesh
        castShadow
        position={[0, 0.78, 0]}
        geometry={new THREE.ConeGeometry(0.11, 0.45, 24)}
        material={new THREE.MeshStandardMaterial({
          color: 0x2563eb,
          emissive: 0x2563eb,
          emissiveIntensity: 0.6,
          metalness: 0.8,
          roughness: 0.15,
        })}
      />
      {/* Cockpit pod */}
      <mesh
        castShadow
        position={[0, 0.22, 0.32]}
        scale={[1, 0.7, 1.1]}
        geometry={new THREE.SphereGeometry(0.15, 24, 24)}
        material={new THREE.MeshStandardMaterial({
          color: 0x22d3ee,
          metalness: 0.3,
          roughness: 0.1,
          transparent: true,
          opacity: 0.92,
        })}
      />
      {/* Wings */}
      {[-1, 1].map((side) => (
        <mesh
          key={side}
          castShadow
          position={[side * 0.62, -0.05, -0.1]}
          rotation={[0, 0, side * 0.18]}
          geometry={new THREE.BoxGeometry(0.05, 0.5, 1.6)}
          material={new THREE.MeshStandardMaterial({
            color: 0x0b1228,
            metalness: 0.95,
            roughness: 0.2,
          })}
        />
      ))}
      {/* Wing tip glows */}
      {[-1, 1].map((side) => (
        <mesh
          key={`tip-${side}`}
          castShadow
          position={[side * 0.62, -0.05, 0.68]}
          geometry={new THREE.SphereGeometry(0.045, 16, 16)}
          material={new THREE.MeshStandardMaterial({
            color: 0x2563eb,
            emissive: 0x2563eb,
            emissiveIntensity: 1,
          })}
        />
      ))}
      {/* Engine block */}
      <mesh
        castShadow
        position={[0, -0.72, 0]}
        geometry={new THREE.CylinderGeometry(0.09, 0.13, 0.35, 24)}
        material={new THREE.MeshStandardMaterial({
          color: 0x101933,
          metalness: 1,
          roughness: 0.1,
        })}
      />
      {/* Engine nozzle */}
      <mesh
        position={[0, -0.9, 0]}
        rotation={[Math.PI, 0, 0]}
        geometry={new THREE.CylinderGeometry(0.06, 0.02, 0.22, 24)}
        material={new THREE.MeshStandardMaterial({ color: 0x101933 })}
      />
      {/* Pulsing engine glow */}
      <mesh
        ref={glowRef}
        position={[0, -0.72, 0]}
        scale={[1.4, 1.4, 1.4]}
        geometry={new THREE.IcosahedronGeometry(0.16, 2)}
        material={new THREE.MeshStandardMaterial({
          color: 0x22d3ee,
          emissive: 0x22d3ee,
          emissiveIntensity: 1.2,
          transparent: true,
          opacity: 0.85,
        })}
      />
      {/* Engine illumination light */}
      <pointLight ref={lightRef} position={[0, -0.72, 0]} color={0x22d3ee} intensity={3} distance={6} decay={2} />
      {/* Engine beam behind the ship */}
      <mesh
        position={[0, -1.55, 0]}
        rotation={[Math.PI, 0, 0]}
        geometry={new THREE.ConeGeometry(0.35, 1.2, 24)}
        material={new THREE.MeshStandardMaterial({
          color: 0x22d3ee,
          emissive: 0x22d3ee,
          emissiveIntensity: 0.5,
          transparent: true,
          opacity: 0.18,
          side: THREE.DoubleSide,
        })}
      />
      {/* Hull module panels */}
      {[-0.25, 0, 0.25].map((y) => (
        <mesh
          key={`panel-${y}`}
          position={[0, y, 0.01]}
          scale={[1, 0.5, 1]}
          geometry={new THREE.BoxGeometry(0.06, 0.07, 0.28)}
          material={new THREE.MeshStandardMaterial({
            color: 0x2563eb,
            emissive: 0x2563eb,
            emissiveIntensity: 0.4,
          })}
        />
      ))}
      {/* Antenna array */}
      <mesh
        position={[0, 0.98, -0.15]}
        rotation={[0.4, 0, 0]}
        geometry={new THREE.CylinderGeometry(0.012, 0.012, 0.3, 8)}
        material={new THREE.MeshStandardMaterial({
          color: 0x17234a,
          metalness: 1,
          roughness: 0.1,
        })}
      />
      {[-0.08, 0.08].map((x) => (
        <mesh
          key={`dish-${x}`}
          position={[x, 1.08, -0.28]}
          rotation={[0.5, 0, 0]}
          geometry={new THREE.CylinderGeometry(0.035, 0.01, 0.12, 12)}
          material={new THREE.MeshStandardMaterial({
            color: 0x17234a,
            metalness: 1,
            roughness: 0.1,
          })}
        />
      ))}
    </group>
  )
}
