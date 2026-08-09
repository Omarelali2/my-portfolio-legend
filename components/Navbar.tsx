"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { id: "about", name: "About", href: "/#about" },
  { id: "work", name: "Work", href: "/#work" },
  { id: "skills", name: "Skills", href: "/#skills" },
  { id: "experience", name: "Experience", href: "/#experience" },
  { id: "contact", name: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setHidden(latest > previous && latest > 240)
    setScrolled(latest > 24)
  })

  // Scroll-spy for section indicators on the home page
  useEffect(() => {
    if (pathname !== "/") {
      setActive(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -52% 0px" },
    )

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-130%" } }}
        animate={hidden && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div
            className={cn(
              "flex items-center justify-between rounded-full border border-white/[0.08] transition-all duration-500",
              scrolled
                ? "bg-[#0b0b0c]/85 px-3 py-2 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                : "bg-[#0b0b0c]/40 px-3 py-2.5 backdrop-blur-md",
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]">
                <span className="text-sm font-black tracking-tight text-white">
                  O
                  <span className="text-accent">E</span>
                </span>
              </div>
              <div className="hidden leading-none lg:block">
                <p className="text-xs font-bold tracking-[-0.02em] text-white">
                  Omar El-Ali
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-500">
                  Software Engineer
                </p>
              </div>
            </Link>

            {/* Desktop links */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors duration-300",
                    active === link.id
                      ? "text-white"
                      : "text-zinc-500 hover:text-white",
                  )}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.06] ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {active === link.id && (
                      <span className="mr-1.5 text-accent">•</span>
                    )}
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-accent-deep md:inline-flex"
              >
                Let&apos;s Talk
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] md:hidden"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-base px-6 pb-8 pt-28 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between border-b border-white/[0.07] py-5"
                  >
                    <span className="text-3xl font-bold uppercase tracking-[-0.03em] text-white">
                      {link.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black"
              >
                Let&apos;s Talk
                <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
