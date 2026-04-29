"use client"

import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">
            &copy; {currentYear} Omar El-Ali &mdash; All Rights Reserved
          </div>
          
          <div className="flex items-center gap-12 font-mono text-[10px] uppercase tracking-[0.3em]">
            <span className="text-zinc-700">Status: <span className="text-emerald-500">Available for Collaborate</span></span>
            <span className="text-zinc-700">Location: <span className="text-white">Earth, 01</span></span>
          </div>

          <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">
            Build v2.0.4 <span className="text-zinc-800 ml-4 font-sans tracking-normal font-bold">ALPHA-MOD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}


