"use client"

import React from "react"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "@/lib/motion"
import { Mail, ArrowRight, Github, Linkedin, Twitter, Globe, Server, Cpu } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-8 max-w-7xl">
        <motion.div initial="initial" animate="animate" variants={stagger()}>
           <motion.p className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">
              / Connect System
           </motion.p>
           <motion.h1  className="text-6xl md:text-8xl font-black tracking-tighter mb-20 leading-[0.85]">
              LET&apos;S <span className="text-zinc-800">SYNC.</span>
           </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
           <div className="lg:col-span-7 space-y-12">
              <div className="p-12 rounded-[3rem] bg-zinc-950 border border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full group-hover:bg-blue-600/10 transition-all duration-1000" />
                 
                 <h2 className="text-3xl font-bold mb-8 uppercase tracking-tighter">Transmission</h2>
                 
                 <form className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Entity Name</label>
                          <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blue-500 outline-none transition-colors text-xl font-light" placeholder="John Doe" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Digital Address</label>
                          <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blue-500 outline-none transition-colors text-xl font-light" placeholder="hello@company.com" />
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Protocol / Project Details</label>
                       <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blue-500 outline-none transition-colors text-xl font-light resize-none" placeholder="Brief system overview..." />
                    </div>

                    <button className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all">
                       Initialize Connection
                    </button>
                 </form>
              </div>
           </div>

           <div className="lg:col-span-5 space-y-8">
              <div className="p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5">
                 <h3 className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4">Social Nodes</h3>
                 <div className="space-y-6">
                    <a href="#" className="flex items-center justify-between group">
                       <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-zinc-900 group-hover:bg-blue-600 transition-colors">
                             <Linkedin size={20} />
                          </div>
                          <span className="text-zinc-400 group-hover:text-white transition-colors">Professional Matrix</span>
                       </div>
                       <ArrowRight size={16} className="text-zinc-800 group-hover:text-white transition-all group-hover:translate-x-1" />
                    </a>
                    <a href="#" className="flex items-center justify-between group">
                       <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-zinc-900 group-hover:bg-blue-600 transition-colors">
                             <Github size={20} />
                          </div>
                          <span className="text-zinc-400 group-hover:text-white transition-colors">Source Control</span>
                       </div>
                       <ArrowRight size={16} className="text-zinc-800 group-hover:text-white transition-all group-hover:translate-x-1" />
                    </a>
                 </div>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-blue-600/5 border border-blue-500/10">
                 <h3 className="text-blue-400 text-[10px] font-mono uppercase tracking-[0.3em] mb-6">Status: Online</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Currently accepting <span className="text-white">High-Impact</span> projects for Q3-Q4 2026. Specialized in SaaS migration and AI orchestration.
                 </p>
                 <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-mono">
                    <MapPin size={12} /> GLOBAL NODE 01 — GMT+2
                 </div>
              </div>
           </div>
        </div>
      </div>
    </main>
  )
}

function MapPin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
