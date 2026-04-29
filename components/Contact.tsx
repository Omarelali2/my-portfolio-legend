"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32 text-white md:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[440px] w-[440px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.06] [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]" />
      </div>

      <div className="container relative z-10 mx-auto w-full md:px-6 ">
        <div className="group relative">
          <div className="absolute -inset-px bg-gradient-to-r from-blue-600/30 via-white/10 to-purple-600/30 opacity-40 blur-xl transition-opacity duration-700 group-hover:opacity-70" />

          <div className="relative overflow-hidden md:rounded-2xl border border-white/10 bg-zinc-950/90 px-6 py-16 text-center backdrop-blur-xl md:px-16 md:py-24">
            <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-4xl"
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                  Open to Gulf opportunities
                </span>
              </div>

              <h2 className="mx-auto mb-8 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
                Let&apos;s build
                <br />
                <span className="bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-800 bg-clip-text italic text-transparent">
                  something real.
                </span>
              </h2>

              <p className="mx-auto mb-12 max-w-2xl text-base leading-7 text-zinc-400 md:text-xl md:leading-8">
                Looking for full-stack, Next.js, or SaaS opportunities where I
                can build reliable products, clean systems, and business-focused
                user experiences.
              </p>

              <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:elaliomar30@gmail.com"
                  className="group/link inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-9 py-5 text-sm font-black uppercase tracking-[-0.03em] text-black transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.22)] sm:w-auto"
                >
                  Contact Me
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </motion.a>

                <Link
                  href="/projects"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-9 py-5 text-sm font-black uppercase tracking-[-0.03em] text-white backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.08] sm:w-auto"
                >
                  View Projects
                </Link>
              </div>

              <div className="mx-auto mb-12 flex max-w-2xl flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.22em] text-zinc-600">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  Lebanon based
                </div>
                <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
                <span>Remote / Relocation ready</span>
              </div>

              <div className="grid gap-3 border-t border-white/10 pt-10 sm:grid-cols-3">
                <Link
                  href="https://github.com/omarelali"
                  target="_blank"
                  className="group/social flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <Github
                    size={19}
                    className="opacity-60 transition-opacity group-hover/social:opacity-100"
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    GitHub
                  </span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/omar-elali-28aaa1312/"
                  target="_blank"
                  className="group/social flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <Linkedin
                    size={19}
                    className="opacity-60 transition-opacity group-hover/social:opacity-100"
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    LinkedIn
                  </span>
                </Link>

                <Link
                  href="mailto:elaliomar30@gmail.com"
                  className="group/social flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-zinc-500 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <Mail
                    size={19}
                    className="opacity-60 transition-opacity group-hover/social:opacity-100"
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    Email
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}