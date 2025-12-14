"use client"

import React, { useEffect, useRef } from "react"
import { Github, Instagram, Linkedin, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import Image from "next/image"
import { gsap } from "gsap"

const HomeBanner = () => {
  const profilePic = "/Me.jpg"

  // ✅ Typed refs
  const bannerRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const socialRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      })

      // Banner fade
      tl.from(bannerRef.current, { opacity: 0, duration: 1.5 })

      // Content stagger (clean & TS-safe)
      const q = gsap.utils.selector(contentRef)
      tl.from(
        q("*"),
        {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 1.2,
        },
        0.5
      )

      // Image entrance
      tl.from(
        imageRef.current,
        {
          scale: 0.5,
          opacity: 0,
          rotation: 45,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
        },
        0.8
      )

      // Social icons
      tl.from(
        gsap.utils.selector(socialRef)("a"),
        {
          x: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
        },
        1.2
      )

      // Floating image
      gsap.to(imageRef.current, {
        y: -10,
        rotation: 1,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    }, bannerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={bannerRef}
      className='home relative min-h-screen flex items-center py-20 md:py-24 px-4 text-white overflow-hidden'
    >
      <div className='absolute inset-0 bg-slate-950/95 backdrop-blur-sm'></div>
      <div className='absolute inset-0 bg-dots-pattern opacity-5'></div>

      <div className='relative container mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20'>
        {/* Left */}
        <div ref={contentRef} className='flex-1 text-center md:text-left'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4'>
            Hi, I am{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'>
              Omar El-Ali
            </span>
          </h1>

          <p className='text-xl sm:text-2xl font-light text-gray-300 mb-8 max-w-2xl'>
            I am a passionate <strong>Full-Stack Developer</strong> specializing
            in building modern web applications. I love bringing ideas to life
            through <strong>clean, efficient, and scalable code</strong>.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 mt-10'>
            <Link
              href='/my-projects'
              className='flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-3 rounded-full font-bold'
            >
              <Github size={20} /> View Projects
            </Link>

            <ScrollLink
              to='contact'
              smooth
              offset={-80}
              duration={700}
              className='flex items-center gap-2 bg-slate-700 px-8 py-3 rounded-full cursor-pointer'
            >
              <Send size={20} /> Contact Me
            </ScrollLink>
          </div>

          <div
            ref={socialRef}
            className='flex flex-col gap-6 mt-16 text-gray-400'
          >
            <div className='flex gap-8'>
              <Link href='https://www.instagram.com/omarelali1' target='_blank'>
                <Instagram size={28} />
              </Link>
              <Link
                href='https://www.linkedin.com/in/omar-elali-28aaa1312/'
                target='_blank'
              >
                <Linkedin size={28} />
              </Link>
              <Link href='https://github.com/Omarelali2' target='_blank'>
                <Github size={28} />
              </Link>
            </div>

            <div className='flex items-center gap-2'>
              <MapPin size={22} className='text-red-400' />
              <span>Lebanon - Akkar</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div ref={imageRef} className='flex-1 mt-8 flex justify-center'>
          <div className='w-90 h-90 rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='w-full h-full rounded-full overflow-hidden'>
              <Image
                src={profilePic}
                alt='Omar El-Ali'
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
