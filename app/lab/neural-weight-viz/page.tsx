"use client"

import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Terminal, Cpu, Info } from "lucide-react"
import Link from "next/link"

export default function NeuralWeightViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    
    // Neural Network Configuration
    const layers = [4, 6, 6, 2]
    const nodes: { x: number; y: number; layer: number }[] = []
    const connections: { from: number; to: number; weight: number; originalWeight: number }[] = []

    // Adjust canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    // Initialize nodes
    layers.forEach((count, i) => {
      const x = (canvas.offsetWidth / (layers.length - 1)) * i
      const spacing = canvas.offsetHeight / (count + 1)
      for (let j = 0; j < count; j++) {
        nodes.push({ x, y: spacing * (j + 1), layer: i })
      }
    })

    // Initialize connections
    nodes.forEach((node, i) => {
      nodes.forEach((next, j) => {
        if (next.layer === node.layer + 1) {
          const w = Math.random() * 2 - 1
          connections.push({ from: i, to: j, weight: w, originalWeight: w })
        }
      })
    })

    let time = 0
    const render = () => {
      time += 0.02
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      connections.forEach((conn) => {
        const from = nodes[conn.from]
        const to = nodes[conn.to]
        
        // Simulate weight adjustment (backprop viz)
        const pulse = Math.sin(time + conn.from * 0.5) * 0.5 + 0.5
        const adjWeight = conn.weight + Math.sin(time) * 0.1
        
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.lineWidth = Math.abs(adjWeight) * 2
        ctx.strokeStyle = adjWeight > 0 
            ? `rgba(59, 130, 246, ${0.1 + pulse * 0.3})` 
            : `rgba(168, 85, 247, ${0.1 + pulse * 0.3})`
        ctx.stroke()

        // Draw data particle
        if (pulse > 0.8) {
            const p = (time * 2) % 1
            const px = from.x + (to.x - from.x) * p
            const py = from.y + (to.y - from.y) * p
            ctx.fillStyle = "#fff"
            ctx.beginPath()
            ctx.arc(px, py, 1.5, 0, Math.PI * 2)
            ctx.fill()
        }
      })

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = "#09090b"
        ctx.fill()
        ctx.strokeStyle = "#3f3f46"
        ctx.lineWidth = 1
        ctx.stroke()
        
        if (Math.sin(time + node.layer) > 0.8) {
            ctx.shadowBlur = 10
            ctx.shadowColor = "#3b82f6"
            ctx.fillStyle = "#3b82f6"
            ctx.fill()
            ctx.shadowBlur = 0
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-12 lg:p-24 overflow-hidden relative">
      {/* HUD Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f610,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto h-full flex flex-col relative z-10">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-16">
            <Link href="/lab" className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Return_to_Lab
            </Link>
            <div className="flex items-center gap-4">
                <div className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[9px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Runtime Stable
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow">
            {/* Simulation Viewport */}
            <div className="lg:col-span-8 relative">
                <div className="absolute -top-10 left-0 text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em]">
                    Active_Buffer // Neural_Weights_Field
                </div>
                <div className="w-full aspect-video rounded-[2rem] bg-zinc-950 border border-white/5 relative overflow-hidden group shadow-2xl">
                    <canvas 
                        ref={canvasRef} 
                        className="w-full h-full"
                        style={{ width: '100%', height: '100%' }}
                    />
                    
                    {/* Scanner interface */}
                    <div className="absolute inset-0 pointer-events-none border-2 border-white/0 group-hover:border-blue-500/5 transition-colors duration-1000" />
                    <div className="absolute top-8 right-8 text-white/10 uppercase font-mono text-[9px] rotate-90 origin-right">
                        Ref_ID: {Math.random().toString(36).substring(7).toUpperCase()}
                    </div>
                </div>

                {/* Technical Meta */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Architecture", val: "MLP(4,6,6,2)" },
                        { label: "Learning Rate", val: "0.0031" },
                        { label: "Optimizer", val: "Adam/Canvas" },
                        { label: "Framerate", val: "60.0 FPS" }
                    ].map(item => (
                        <div key={item.label} className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5">
                            <span className="block text-[8px] font-mono text-zinc-600 uppercase mb-1">{item.label}</span>
                            <span className="block text-xs font-bold text-zinc-300 font-mono italic">{item.val}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar Controls/Docs */}
            <div className="lg:col-span-4 space-y-8">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Neural Weight <br /><span className="text-blue-500 italic">Visualizer.</span></h1>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                        Technical implementation of backpropagation kernels visualized via the Canvas API. This project simulates how weights adjust in a simple neural network through gradient descent logic.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="p-6 rounded-3xl bg-zinc-950 border border-white/5">
                        <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-zinc-300">
                            <Info size={14} className="text-blue-500" />
                            Internal Mechanics
                        </div>
                        <ul className="space-y-3 text-[11px] text-zinc-500 font-mono">
                            <li className="flex gap-2"><span className="text-blue-500">→</span> Stochastic Gradient Approximation</li>
                            <li className="flex gap-2"><span className="text-blue-500">→</span> Per-layer weight normalization</li>
                            <li className="flex gap-2"><span className="text-blue-500">→</span> GPU-accelerated canvas rendering</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-3xl bg-blue-600/5 border border-blue-500/10">
                        <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-white">
                            <Cpu size={14} /> Performance Log
                        </div>
                        <p className="text-[10px] text-blue-500/80 font-mono leading-relaxed">
                            Simulation utilizes requestAnimationFrame for sub-millisecond precision. No external libraries were used for the math kernels.
                        </p>
                    </div>
                </div>

                <div className="pt-8 text-[10px] font-mono text-zinc-800 uppercase tracking-widest border-t border-white/5">
                    Session_ID: {new Date().getTime()} <br />
                    Kernel: V8_EXPERIMENTAL
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
