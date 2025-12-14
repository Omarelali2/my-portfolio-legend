"use client"

import React, { useRef, useEffect } from "react"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: footerRef.current, start: "top 90%" } }
      )
    }
  }, [])

  return (
    <footer ref={footerRef} className="relative w-full bg-gradient-to-r from-slate-900 via-indigo-950 to-black bg-opacity-80 py-12 px-6 md:px-20 text-white overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold">
            <span className="text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">&lt;OE/&gt;</span>
          </h2>
          <h3 className="text-xl md:text-2xl mt-5 font-medium text-gray-200">Full-stack developer based in Akkar, Lebanon</h3>
        </div>

        <div className="text-center md:text-right">
          <h1 className="text-2xl font-bold mb-4 md:mr-6">Media</h1>
          <div className="flex gap-4 justify-center md:justify-end">
            <Link href="https://github.com/Omarelali2" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-xl hover:bg-white/10 transition w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-2xl">
              <Github size={24} color="white" />
            </Link>
            <Link href="https://www.linkedin.com/in/omar-elali-28aaa1312/" target="_blank" rel="noopener noreferrer" className="bg-blue-700/20 backdrop-blur-xl hover:bg-blue-600/40 transition w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-2xl">
              <Linkedin size={24} color="white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">© 2025. Made by O-Elali</div>

      <div className="absolute inset-0 opacity-0 pointer-events-none bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-2xl"></div>
    </footer>
  )
}
