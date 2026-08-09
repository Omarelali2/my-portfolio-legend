"use client"

import React from "react"
import { motion } from "framer-motion"
import { ChevronRight, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { EASE } from "@/lib/motion"

const experiments = [
  {
    id: "neural-weight-viz",
    title: "Neural Weight Visualizer",
    category: "Machine Learning",
    description:
      "A visualization of weight updates in a simple neural network. It simulates how connections between neurons strengthen or weaken during training.",
    features: [
      "Implements stochastic gradient descent logic",
      "Real-time weight adjustment visualization",
      "Uses Canvas API for high-performance rendering",
    ],
    tech: ["Canvas API", "JavaScript", "Matrix Math"],
    status: "Prototype",
    preview:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    difficulty: "Advanced",
  },
  {
    id: "fluid-dynamic-shaders",
    title: "Fluid Dynamics Solver",
    category: "Graphics",
    description:
      "A grid-based fluid simulation that solves Navier-Stokes equations for incompressible flow using fragment shaders.",
    features: [
      "Pressure projection and advection steps",
      "GPU-accelerated vector field calculation",
      "Real-time interactive boundary handling",
    ],
    tech: ["WebGL 2.0", "GLSL", "Three.js"],
    status: "Experimental",
    preview:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    difficulty: "Advanced",
  },
  {
    id: "distributed-state-sync",
    title: "Conflict-Free State Sync",
    category: "Systems",
    description:
      "An implementation of CRDTs (Conflict-free Replicated Data Types) to manage state synchronization in distributed environments.",
    features: [
      "Implements LWW-Element-Set primitives",
      "Simulates high-latency network partitions",
      "Local-first state resolution logic",
    ],
    tech: ["TypeScript", "WebRTC", "Data Structures"],
    status: "In Progress",
    preview:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
    difficulty: "Intermediate",
  },
]

export default function LabPage() {
  return (
    <main className="relative overflow-hidden bg-base pb-28 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid mask-radial-center absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]"
          >
            <Terminal size={12} className="text-accent" />
            <span className="text-zinc-600">Engineering Lab // Systems Playground</span>
          </motion.div>

          <h1 className="mb-10 text-[clamp(3rem,7vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-white">
            Systems
            <br />
            <span className="text-accent">Lab.</span>
          </h1>

          <p className="max-w-2xl text-base font-light leading-8 text-zinc-400 md:text-lg">
            A space for hands-on experiments in systems architecture, graphics,
            and distributed logic. Each project explores a specific technical
            concept through functional implementation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiments.map((lab, index) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: EASE }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-raised transition-colors duration-500 hover:border-accent/25"
            >
              <div className="relative aspect-video overflow-hidden border-b border-white/[0.06] bg-elevated">
                <Image
                  src={lab.preview}
                  alt={lab.title}
                  fill
                  className="object-cover opacity-60 saturate-0 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-raised to-transparent" />

                <span className="absolute left-4 top-4 border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-accent backdrop-blur-md">
                  {lab.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600">
                    {lab.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                    {lab.difficulty}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold uppercase tracking-[-0.02em] text-white transition-colors group-hover:text-accent">
                  {lab.title}
                </h3>

                <p className="mb-5 text-sm font-light leading-6 text-zinc-500">
                  {lab.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {lab.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-white/[0.07] bg-white/[0.02] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto border-t border-white/[0.06] pt-4">
                  <Link
                    href={`/lab/${lab.id}`}
                    className="group/link flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:text-accent"
                  >
                    View Experiment
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
