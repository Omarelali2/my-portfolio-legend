"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * About Section – Professional Portfolio Version
 * - Scroll-triggered cinematic entrance
 * - Subtle continuous image glow
 * - Clean typography hierarchy
 */
export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        defaults: { ease: "power3.out" },
      })

      tl.from(headingRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.9,
      })
        .from(
          imageWrapRef.current,
          {
            x: -120,
            opacity: 0,
            scale: 0.85,
            duration: 1.2,
          },
          "-=0.3"
        )
        .from(
          textRef.current?.children || [],
          {
            x: 120,
            opacity: 0,
            stagger: 0.25,
            duration: 1,
          },
          "-=0.9"
        )

      
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-black py-24 px-6"
    >
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.06)_1px,transparent_0)] [background-size:40px_40px] opacity-10" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-20">
        {/* Title */}
        <h2
          ref={headingRef}
          className="text-center text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-500"
        >
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16 w-full">
          {/* Image */}
            <div className="rounded-2xl w-[50%] bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-transform duration-500 hover:scale-[1.03]">
              <Image
                src="/logo.jpg"
                alt="Omar El-Ali logo"
                width={600}
                height={420}
                className="object-contain w-full h-auto rounded-2xl shadow-lg"
                priority
              />
            </div>

          {/* Text */}
          <div
            ref={textRef}
            className="flex-1 space-y-8 text-center md:text-left"
          >
            <p className="text-xl leading-relaxed text-gray-300 border-l-4 border-teal-400 pl-6">
              Hello, I am <span className="text-teal-400 font-semibold">Omar El‑Ali</span>,
              a Computer Science graduate currently pursuing a <strong>Master’s in
              Software Engineering</strong> at the Lebanese University. I specialize
              in transforming complex ideas into scalable, production‑ready
              software solutions.
            </p>

            <p className="text-xl leading-relaxed text-gray-300">
              As a Junior Full‑Stack Developer, my work focuses on the modern
              JavaScript ecosystem, with strong experience in MERN and
              performance‑oriented Next.js applications.
            </p>

            <div className="pt-2">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Technical Focus
              </h3>
              <ul className="space-y-3 text-lg text-gray-300">
                <li>
                  <span className="text-teal-400 font-medium">Frontend:</span>{" "}
                  React.js & Next.js for fast, maintainable interfaces
                </li>
                <li>
                  <span className="text-teal-400 font-medium">Backend:</span>{" "}
                  Node.js & Next.js API routes with clean architecture
                </li>
                <li>
                  <span className="text-teal-400 font-medium">Principles:</span>{" "}
                  Clean code, modular design, and scalable systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
