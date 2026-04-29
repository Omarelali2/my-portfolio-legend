"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Brain, Code, Cpu, ChevronRight, Binary, Layers, Zap, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const experiments = [
  {
    id: "neural-weight-viz",
    title: "Neural Weight Visualizer",
    category: "Machine Learning",
    description: "A visualization of weight updates in a simple neural network. It simulates how connections between neurons strengthen or weaken during training.",
    features: [
      "Implements stochastic gradient descent logic",
      "Real-time weight adjustment visualization",
      "Uses Canvas API for high-performance rendering"
    ],
    tech: ["Canvas API", "JavaScript", "Matrix Math"],
    status: "Prototype",
    preview: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    difficulty: "Advanced"
  },
  {
    id: "fluid-dynamic-shaders",
    title: "Fluid Dynamics Solver",
    category: "Graphics",
    description: "A grid-based fluid simulation that solves Navier-Stokes equations for incompressible flow using fragment shaders.",
    features: [
      "Pressure projection and advection steps",
      "GPU-accelerated vector field calculation",
      "Real-time interactive boundary handling"
    ],
    tech: ["WebGL 2.0", "GLSL", "Three.js"],
    status: "Experimental",
    preview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    difficulty: "Advanced"
  },
  {
    id: "distributed-state-sync",
    title: "Conflict-Free State Sync",
    category: "Systems",
    description: "An implementation of CRDTs (Conflict-free Replicated Data Types) to manage state synchronization in distributed environments.",
    features: [
      "Implements LWW-Element-Set primitives",
      "Simulates high-latency network partitions",
      "Local-first state resolution logic"
    ],
    tech: ["TypeScript", "WebRTC", "Data Structures"],
    status: "In Progress",
    preview: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
    difficulty: "Intermediate"
  }
]

export default function LabPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6"
          >
            <Terminal size={14} />
            Engineering Lab // Systems Playground
          </motion.div>
          <h1 className="text-6xl md:text-[5rem] font-black tracking-tighter mb-10 leading-[0.8] uppercase">
            Systems <span className="text-zinc-800 italic">Lab.</span>
          </h1>
          <p className="max-w-2xl text-zinc-500 text-xl font-light leading-relaxed">
            A space for hands-on experiments in systems architecture, graphics, and distributed logic. Each project explores a specific technical concept through functional implementation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((lab, index) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col h-full rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-blue-500/30 transition-all duration-700 overflow-hidden relative"
            >
                {/* Status Badge */}
                <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[9px] font-mono text-blue-400 uppercase tracking-widest">
                    {lab.status}
                </div>

                {/* Preview Area */}
                <div className="relative aspect-video overflow-hidden bg-zinc-900 border-b border-white/5">
                    <Image 
                        src={lab.preview}
                        alt={lab.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 saturate-0 group-hover:saturate-100"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent" />
                </div>
              
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold tracking-tight uppercase group-hover:text-blue-400 transition-colors">
                    {lab.title}
                  </h3>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {lab.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8 flex-grow">
                    {lab.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-zinc-500">
                            <span className="text-blue-500 mt-1">▹</span>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {lab.tech.map((t) => (
                        <span key={t} className="text-[9px] font-mono text-zinc-600 border border-white/5 px-2 py-0.5 rounded-md uppercase">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <Link 
                        href={`/lab/${lab.id}`}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-blue-400 transition-colors"
                    >
                        View Experiment <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">{lab.difficulty}</span>
                </div>
              </div>

              {/* Card Background Glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Footer R&D Note */}
        <div className="mt-32 p-16 rounded-[4rem] bg-zinc-950 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full group-hover:bg-blue-600/10 transition-all duration-1000" />
            
            <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-6">
                    <Zap size={12} /> External Resources
                </div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight uppercase text-white">Advanced System Architecture?</h2>
                <p className="text-zinc-500 text-lg font-light leading-relaxed mb-10">
                    I document the internal mechanics of these experiments—from memory management in WebGL to state propagation in distributed systems.
                </p>
                <div className="flex gap-4">
                    <Link href="/" className="px-10 py-4 bg-white text-black rounded-full font-bold uppercase tracking-tighter text-sm hover:scale-105 transition-all">
                        Core Terminal
                    </Link>
                    <Link href="/contact" className="px-10 py-4 bg-transparent text-white border border-white/10 rounded-full font-bold uppercase tracking-tighter text-sm hover:bg-white/5 transition-all">
                        System Collaboration
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
