"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import { Briefcase, Code, Folder, Home, User, Menu, X } from "lucide-react"
import { gsap } from "gsap"

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!navRef.current) return

    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
  }, [])

  const navItem =
    "flex items-center gap-2 cursor-pointer text-gray-200 hover:text-indigo-400 transition-all duration-300"

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 cursor-pointer">
            &lt;OE/&gt;
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ScrollLink to="home" smooth duration={500} className={navItem}>
            <Home /> Home
          </ScrollLink>
          <ScrollLink to="exp" offset={-80} smooth duration={500} className={navItem}>
            <Briefcase /> Experience
          </ScrollLink>
          <ScrollLink to="about" offset={-80} smooth duration={500} className={navItem}>
            <User /> About
          </ScrollLink>
          <ScrollLink to="skills" offset={-80} smooth duration={500} className={navItem}>
            <Code /> Skills
          </ScrollLink>
          <ScrollLink to="projects" offset={-80} smooth duration={500} className={navItem}>
            <Folder /> Projects
          </ScrollLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 hover:text-indigo-400 transition"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-4 overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl shadow-xl p-6 space-y-4">
          <ScrollLink onClick={() => setOpen(false)} to="home" smooth className={navItem}>
            <Home /> Home
          </ScrollLink>
          <ScrollLink onClick={() => setOpen(false)} to="about" smooth className={navItem}>
            <User /> About
          </ScrollLink>
          <ScrollLink onClick={() => setOpen(false)} to="exp" smooth className={navItem}>
            <Briefcase /> Experience
          </ScrollLink>
          <ScrollLink onClick={() => setOpen(false)} to="skills" smooth className={navItem}>
            <Code /> Skills
          </ScrollLink>
          <ScrollLink onClick={() => setOpen(false)} to="projects" smooth className={navItem}>
            <Folder /> Projects
          </ScrollLink>
        </div>
      </div>
    </nav>
  )
}
