"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Top Projects", href: "/#projects" },
  { name: "LebNexis", href: "/#lebnexis" },
  { name: "Skills", href: "/#skills" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", latest => {
    const previous = scrollY.getPrevious() ?? 0

    setHidden(latest > previous && latest > 180)
    setScrolled(latest > 24)
  })

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-120%" },
        }}
        animate={hidden && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-4" : "py-6",
        )}
      >
        <div className='container mx-auto max-w-7xl px-6 md:px-8'>
          <div
            className={cn(
              "flex items-center justify-between rounded-full border transition-all duration-500",
              scrolled
                ? "border-white/10 bg-black/65 px-4 py-3 shadow-2xl backdrop-blur-xl"
                : "border-transparent bg-transparent px-0 py-0",
            )}
          >
            <Link
              href='/'
              onClick={closeMenu}
              className='group flex items-center gap-3'
            >
              <div className='relative h-10 w-10 border-2 px-6 py-6 md:px-5 md:py-5 border-white/10 rounded-full flex items-center justify-center bg-zinc-900 group-hover:bg-white/10 transition-colors'>
                <h1 className='absolute inset-0 flex items-center justify-center text-2xl md:text-xl font-black text-white'>
                  O
                  <span className='text-blue-500'>
                    E
                  </span>
                </h1>
              </div>

              <div className='hidden leading-none sm:block'>
                <p className='text-sm font-black uppercase tracking-[-0.03em] text-white'>
                  Omar El-Ali
                </p>
                <p className='mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-zinc-500'>
                  Full-Stack Engineer
                </p>
              </div>
            </Link>

            <div className='hidden items-center gap-8 md:flex'>
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500 transition-colors hover:text-white'
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className='hidden items-center gap-3 md:flex'>
              <Link
                href='/resume'
                className='rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all hover:border-white/25 hover:bg-white/[0.08]'
              >
                Resume
              </Link>

              <Link
                href='/projects'
                className='group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]'
              >
                All Projects
                <ArrowUpRight
                  size={14}
                  className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </Link>
            </div>

            <button
              type='button'
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all hover:bg-white/[0.08] md:hidden'
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-40 bg-black/95 px-6 pt-28 text-white backdrop-blur-xl md:hidden'
          >
            <div className='pointer-events-none absolute inset-0'>
              <div className='absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]' />
            </div>

            <div className='relative z-10 flex h-full flex-col justify-between pb-10'>
              <div className='space-y-4'>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className='flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 text-3xl font-black uppercase tracking-[-0.05em] text-white'
                    >
                      {link.name}
                      <ArrowUpRight size={20} className='text-zinc-500' />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className='grid gap-3'>
                <Link
                  href='/resume'
                  onClick={closeMenu}
                  className='rounded-full border border-white/10 bg-white/[0.03] px-7 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-white'
                >
                  Resume
                </Link>

                <Link
                  href='/projects'
                  onClick={closeMenu}
                  className='rounded-full bg-white px-7 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-black'
                >
                  All Projects
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
