"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Skill {
  name: string
  logo: string
}

const skillsData: Skill[] = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 80, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-br from-black via-indigo-950 to-black overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
          Skills & Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {skillsData.map((skill, i) => (
            <div
              key={skill.name}
              ref={el => {
                if (el) cardsRef.current[i] = el
              }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:scale-110"
            >
              {/* Neon glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-xl" />

              <Image
                src={skill.logo}
                alt={skill.name}
                width={64}
                height={64}
                className="relative z-10 w-16 h-16 mb-4 group-hover:rotate-12 transition duration-500"
              />

              <span className="relative z-10 text-gray-200 font-semibold tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
