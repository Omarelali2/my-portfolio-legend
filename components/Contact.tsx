"use client"

import React, { useRef, useEffect } from "react"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      )
    }

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 85%" },
        }
      )
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id='contact'
      className='relative py-28 px-6 bg-gradient-to-br from-black via-indigo-950 to-black text-white overflow-hidden'
    >
      <div className='relative max-w-7xl mx-auto text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500'>
          # Contact
        </h1>
      </div>

      <div className='relative max-w-7xl mx-auto flex flex-col md:flex-row gap-12'>
        <div className='md:w-1/2 text-lg font-semibold leading-relaxed'>
          I am currently seeking internship or job opportunities where I can
          grow as a developer and contribute to meaningful projects. I am always
          eager to learn, collaborate, and take on new challenges.
          <br />
          <br />
          However, if you have any other requests, questions, or even just want
          to connect and share ideas, feel free to reach out — I&apos;d be more
          than happy to chat and build connections!
        </div>

        <div className='md:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-3xl'>
          <h2 className='text-xl font-bold mb-2 border-b border-black pb-2'>
            Message Me Here
          </h2>

          <Link
            href='mailto:elaliomar30@gmail.com'
            className='flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer'
          >
            <Mail className='text-3xl' />
            <span className='text-md font-medium hover:underline'>
              elaliomar30@gmail.com
            </span>
          </Link>

          <Link
            href='tel:+96170259020'
            className='flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer'
          >
            <Phone className='text-2xl' />
            <span className='text-md font-medium hover:underline'>
              70-25-90-20
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
