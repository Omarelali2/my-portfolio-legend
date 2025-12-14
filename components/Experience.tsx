"use client"

// --- DEPENDENCIES ---
import Image from "next/image"
import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" // Import ScrollTrigger
import { Calendar, Building, MapPin } from "lucide-react" // Added icons

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

/**
 * @file Experience.tsx
 * @description Renders the professional experience timeline. Implements GSAP with ScrollTrigger
 * for sequential, clean entrance animations of experience items.
 * @component
 */
const Experience: React.FC = () => {
  // --- 1. DOM REFS FOR ANIMATION TARGETING ---
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const itemRef = useRef<HTMLDivElement>(null) // Ref for the single experience item

  // --- 2. GSAP ANIMATION IMPLEMENTATION ---
  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !itemRef.current) return

    // Animation 1: Header entrance
    gsap.from(headingRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Start animation when top of section hits 80% down the viewport
        }
    })

    // Animation 2: Experience Item Slide-In
    gsap.from(itemRef.current, {
        opacity: 0,
        x: -100, // Slide in from the left
        rotation: -5,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: itemRef.current,
            start: "top 80%",
            end: "bottom center",
        }
    })
    
    // Animation 3: Continuous Rotation/Pulse on the Logo Container
    gsap.to(".logo-pulse-ring", {
        rotation: 360,
        duration: 25,
        ease: "none",
        repeat: -1, // Infinite loop
    });


    // Cleanup for GSAP
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.killTweensOf(".logo-pulse-ring")
    }
  }, [])
  
  // Placeholder Data Structure (for a single item)
  const experienceItem = {
    company: "Techtalk",
    role: "Full-Stack Development Intern",
    duration: "1/9/2025 - 1/11/2025",
    description: "Currently contributing to full-stack projects, gaining hands-on experience in modern web architecture, and collaborating with a specialized team to build innovative software solutions using Next.js and the MERN stack.",
    logo: "/tecktalk.jpg",
    location: "Beirut, Lebanon (Remote)",
  }

  // --- 3. RENDER FUNCTION ---
  return (
    <section 
        ref={sectionRef} // Attach ref for ScrollTrigger
        id="experience"
        className='exp bg-slate-950 text-white py-16 px-4 md:py-28 font-inter relative overflow-hidden'
    >
      <div className='container mx-auto max-w-7xl'>
        
        {/* Title Block */}
        <h2 
            ref={headingRef} 
            className='text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-tight'
        >
          <span className='pb-3 border-b-4 border-pink-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
            Professional Experience
          </span>
        </h2>
        
        {/* Experience Item Container (Timeline-Style) */}
        <div className='relative flex flex-col items-center w-full'>
          
          {/* Timeline Vertical Line (for visual separation, placed slightly off-center) */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-600/50 hidden md:block z-0'></div>

          {/* Single Experience Item - Enhanced Card Design */}
          <div 
            ref={itemRef} // Attach ref for GSAP slide-in animation
            className='relative z-10 w-full md:w-[75%] lg:w-[60%] flex flex-col md:flex-row items-center justify-start space-y-8 md:space-y-0 md:space-x-12 p-8 md:p-10 rounded-2xl bg-slate-800 border-l-4 border-teal-400 shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] group'
          >
            
            {/* Logo Section (Left) */}
            <div className='relative flex-shrink-0'>
              {/* Outer Glowing Ring (Animated) */}
              <div className='w-40 h-40 md:w-48 md:h-48 rounded-full p-2 bg-gradient-to-r from-teal-400 to-purple-500 shadow-lg logo-pulse-ring'>
                {/* Inner Image Container */}
                <div className='w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900'>
                  <Image
                    src={experienceItem.logo}
                    alt={`${experienceItem.company} Logo`}
                    width={192} // Max width/height for image source size
                    height={192}
                    unoptimized
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
              </div>
              {/* Timeline Indicator Dot */}
              <div className='absolute top-1/2 -left-14 transform -translate-y-1/2 w-6 h-6 bg-teal-400 rounded-full border-4 border-slate-950 shadow-md hidden md:block'></div>
            </div>
            
            {/* Content Section (Right) */}
            <div className='text-center md:text-left flex-1'>
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-2">
                <h3 className='text-3xl font-extrabold text-teal-400 transition-colors duration-300'>
                  {experienceItem.company}
                </h3>
                <p className='text-xl font-medium text-purple-400 mt-1 md:mt-0'>
                  {experienceItem.role}
                </p>
              </div>

              {/* Metadata Block */}
              <div className='space-y-1 mt-3 text-gray-400 text-md'>
                <p className='flex items-center justify-center md:justify-start gap-2'>
                  <Calendar size={18} className='text-indigo-400' />
                  <span className='font-mono'>{experienceItem.duration}</span>
                </p>
                <p className='flex items-center justify-center md:justify-start gap-2'>
                  <MapPin size={18} className='text-indigo-400' />
                  <span>{experienceItem.location}</span>
                </p>
              </div>
              
              {/* Description */}
              <p className='mt-6 text-gray-300 max-w-xl leading-relaxed text-lg'>
                {experienceItem.description}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience