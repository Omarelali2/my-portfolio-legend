"use client"

// --- DEPENDENCIES ---
import Image from "next/image"
import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

/**
 * @file About.tsx
 * @description Renders the 'About Me' section of the portfolio. Implements GSAP for sophisticated
 * scroll-based entrance and continuous image animation effects.
 * @component
 */
const About: React.FC = () => {
  // --- 1. DOM REFS FOR ANIMATION TARGETING ---
  // Using explicit typing for the HTML elements targeted by GSAP.
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  // --- 2. GSAP ANIMATION IMPLEMENTATION ---
  useEffect(() => {
    // Ensure all target elements are mounted before running animations.
    if (!headingRef.current || !imageRef.current || !textRef.current) return

    // Initialize the GSAP Timeline for sequenced entrance effects.
    const tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "power3.out",
      },
    })

    // Sequence 1: Main Header Entrance
    tl.from(
      headingRef.current,
      {
        y: -30,
        opacity: 0,
        duration: 0.8,
      },
      0
    ) // Starts immediately

    // Sequence 2: Image and Text Block Slide-In (Parallel start)
    tl.from(
      imageRef.current,
      {
        x: -100, // Image slides from the left
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power2.out",
      },
      0.3
    ) // Starts 0.3s after the header

    // Sequence 3: Staggered Paragraph Entrance
    tl.from(
      textRef.current.children,
      {
        x: 100, // Text slides from the right
        opacity: 0,
        stagger: 0.3, // Key for professional staggered readability
        duration: 1.2,
        ease: "power2.out",
      },
      0.3
    ) // Starts concurrently with the image

    // Continuous Animation: Subtle Breathing Glow Effect on Image Border
    // This runs independently of the entrance timeline.
    gsap.to(imageRef.current, {
      boxShadow:
        "0 0 40px rgba(74, 222, 128, 0.5), 0 0 80px rgba(99, 102, 241, 0.4)",
      yoyo: true,
      repeat: -1, // Infinite loop
      duration: 4,
      ease: "sine.inOut", // Smooth, cyclical easing
    })

    // Return a cleanup function for React component unmounting.
    return () => {
      tl.kill()
      gsap.killTweensOf(imageRef.current) // Ensure continuous loop is terminated
    }
  }, [])

  return (
    <section
      id='about'
      className='about bg-slate-900 text-white py-16 px-4 md:py-28 scroll-mt-20 overflow-hidden relative'
    >
      {/* Subtle Background Pattern for Visual Depth */}
      <div className='absolute inset-0 bg-dots-pattern opacity-5'></div>

      <div
        ref={contentRef}
        className='container mx-auto max-w-7xl flex flex-col items-center gap-16 md:gap-20'
      >
        {/* Component Title */}
        <h2
          ref={headingRef}
          className='text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-tighter'
        >
          <span className='pb-4 border-b-4 border-purple-500 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500'>
            About Me
            
          </span>
        </h2>

        {/* Content Layout: Image and Text */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-12 w-full'>
          {/* Image/Logo Section (Left) */}
          <div
            ref={imageRef}
            className='flex-1 flex justify-center md:justify-start'
          >
            <div className='w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-full  transition-all duration-500  hover:scale-[1.02]'>
              <div className='w-full h-full overflow-hidden  flex items-center justify-center'>
                <Image
                  width={500}
                  height={500}
                  unoptimized
                  src='/logo.jpg'
                  alt="Omar's Logo representing his software development focus."
                  className='w-full h-full object-contain p-8 transform transition-transform duration-500 hover:rotate-3'
                />
              </div>
            </div>
          </div>

          <div
            ref={textRef}
            className='flex-1 text-center md:text-left space-y-8 pt-4'
          >
            <p className='text-lg sm:text-xl text-gray-300 max-w-prose mx-auto md:mx-0 leading-relaxed font-medium border-l-4 border-teal-400 pl-4'>
              Hello. I am{" "}
              <span className='text-teal-400 font-bold'>Omar El-Ali</span>, a
              Computer Science graduate progressing through my **Masters in
              Software Engineering** at the Lebanese University. My professional
              foundation is built on transforming complex requirements into
              functional, scalable software solutions.
            </p>

            <p className='text-lg sm:text-xl text-gray-300 max-w-prose mx-auto md:mx-0 leading-relaxed'>
              As a Junior Full-Stack Developer, my expertise centers on the
              modern MERN stack ecosystem and specialized Next.js applications,
              encompassing both client-side interactivity and robust server-side
              architecture.
            </p>

            <div className='pt-2'>
              <h3 className='text-2xl font-semibold text-purple-400 mb-4'>
                Technical Stack Focus:
              </h3>
              <ul className='list-disc list-inside space-y-2 text-left mx-auto md:mx-0 max-w-prose text-lg text-gray-300 pl-6'>
                <li className='pl-2'>
                  <span className='text-teal-400 font-medium'>
                    Frontend Development:
                  </span>{" "}
                  Leveraging **React.js** and **Next.js** for high-performance,
                  maintainable user interfaces.
                </li>
                <li className='pl-2'>
                  <span className='text-teal-400 font-medium'>
                    Backend/API Design:
                  </span>{" "}
                  Utilizing **Node.js** and **Next.js API Routes** to build
                  secure and efficient data services.
                </li>
                <li className='pl-2'>
                  <span className='text-teal-400 font-medium'>
                    Core Philosophy:
                  </span>{" "}
                  Committing to clean code, modular design, and iterative
                  development processes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
