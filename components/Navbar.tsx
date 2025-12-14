"use client"

// --- DEPENDENCIES ---
import React, { useEffect, useRef, useState, useMemo } from "react"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import { Briefcase, Code, Folder, Home, User, Menu, X, MessageSquare } from "lucide-react" // Added MessageSquare for Contact
import { gsap } from "gsap"

// --- INTERFACES & DATA ---
interface NavItem {
  id: string
  label: string
  icon: React.ElementType // Use React.ElementType for Lucide icons
  offset?: number
}

const navLinks: NavItem[] = [
  { id: "home", label: "Home", icon: Home, offset: -100 },
  { id: "about", label: "About", icon: User, offset: -80 },
  { id: "exp", label: "Experience", icon: Briefcase, offset: -80 },
  { id: "skills", label: "Skills", icon: Code, offset: -80 },
  { id: "projects", label: "Projects", icon: Folder, offset: -80 },
  { id: "contact", label: "Contact", icon: MessageSquare, offset: -80 }, // Added Contact link
]

// --- MAIN COMPONENT ---
export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  
  // Use useMemo to create a stable GSAP animation instance for the mobile menu
  const menuAnimation = useMemo(() => {
    // We use a timeline to control the opening and closing state
    return gsap.timeline({ paused: true, reversed: true })
  }, [])

  // --- 1. GSAP ENTRANCE ANIMATION ---
  useEffect(() => {
    if (navRef.current) {
      // Animate the main navbar container on mount
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      )
    }
    
    // Setup the mobile menu animation timeline
    if (mobileMenuRef.current) {
      // Initial state: scaled down, faded out
      menuAnimation
        .set(mobileMenuRef.current, { display: "block", height: "auto" }) // Set initial display to block
        .to(mobileMenuRef.current, { 
          opacity: 1, 
          duration: 0.3,
          height: "auto", // Animate height for smooth open/close
          ease: "power2.inOut" 
        })
        // Stagger the links inside the menu
        .from(mobileMenuRef.current.children[0].children, {
          y: -10,
          opacity: 0,
          stagger: 0.08,
          duration: 0.2,
          ease: "power2.out",
        }, "<") // Start link stagger with the menu open animation
    }
  }, [menuAnimation])

  // --- 2. MOBILE MENU STATE HANDLER (GSAP Toggle) ---
  useEffect(() => {
    if (open) {
      menuAnimation.play()
    } else {
      // Reverse the timeline when closing
      menuAnimation.reverse().then(() => {
        // Optional: Reset element visibility after animation complete
        gsap.set(mobileMenuRef.current, { display: "none" }) 
      })
    }
  }, [open, menuAnimation])
  
  // Base class for navigation items (Desktop & Mobile)
  const navItemClass = 
    "flex items-center gap-2 cursor-pointer text-gray-300 transition-all duration-300 relative group"
  
  // Function to handle link click on mobile
  const handleMobileClick = (id: string) => {
      setOpen(false) // Close the menu
      // ScrollLink handles the actual scroll logic
  }

  // --- 3. RENDER FUNCTION ---
  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl"
    >
      <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-xl shadow-2xl px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <span className="text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 cursor-pointer transition-transform duration-300 hover:scale-105">
            &lt;OE/&gt;
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => {
            const Icon = item.icon
            return (
              <ScrollLink 
                key={item.id}
                to={item.id} 
                offset={item.offset} 
                smooth 
                duration={700} // Increased duration for a smoother desktop scroll
                className={`${navItemClass} hover:text-indigo-400 font-medium`}
              >
                <Icon size={20} className="text-purple-400 group-hover:text-indigo-400 transition-colors" /> 
                {item.label}
                {/* Active/Hover Indicator */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </ScrollLink>
            )
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={28} className="text-indigo-400" /> : <Menu size={28} className="text-indigo-400" />}
        </button>
      </div>

      {/* Mobile Menu (Hidden by default, controlled by GSAP) */}
      <div
        ref={mobileMenuRef} // Attach ref for GSAP control
        style={{ display: 'none', opacity: 0 }} // Initial state for GSAP
        className={`md:hidden mt-3 backdrop-blur-xl bg-black/80 border border-white/10 rounded-xl shadow-xl p-4`}
      >
        <div className="space-y-4">
          {navLinks.map((item) => {
            const Icon = item.icon
            return (
              <ScrollLink 
                key={item.id}
                to={item.id} 
                offset={item.offset}
                smooth 
                duration={500}
                onClick={() => handleMobileClick(item.id)} // Use specialized click handler
                className={`${navItemClass} text-xl py-2 px-3 hover:bg-white/5 rounded-lg`}
              >
                <Icon size={24} className="text-purple-400" />
                {item.label}
              </ScrollLink>
            )
          })}
        </div>
      </div>
    </nav>
  )
}