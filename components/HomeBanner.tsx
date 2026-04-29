"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Code2, Sparkles, MapPin } from "lucide-react"
import Link from "next/link"
import { fadeInUp, stagger } from "@/lib/motion"

const HomeBanner = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 180])
  const opacity = useTransform(scrollY, [0, 320], [1, 0])

  return (
    <section
      id="home"
      className="relative min-h-screen  flex items-center justify-center overflow-hidden bg-black px-6 py-32 text-white"
    >
      {/* Background */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.12] [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]" />
      </motion.div>

      {/* Floating icons */}
      <motion.div
        style={{ y: y1 }}
        className="absolute right-[12%] top-28 hidden text-blue-500/20 lg:block"
      >
        <Code2 size={56} />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-36 left-[10%] hidden text-purple-500/20 lg:block"
      >
        <Sparkles size={52} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger(0.18) as any}
        >
          {/* Top badge */}
          <motion.div
            variants={fadeInUp as any}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
              Available for Gulf opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp as any}
            className="mx-auto mb-8 max-w-6xl text-[3.7rem] font-black uppercase leading-[0.86] tracking-[-0.08em] text-white sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            I Build Systems
            <br />
            <span className="bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-800 bg-clip-text italic text-transparent">
              That Scale.
            </span>
          </motion.h1>

          {/* Main subtitle */}
          <motion.p
            variants={fadeInUp as any}
            className="mx-auto mb-6 max-w-3xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg md:text-xl"
          >
            Full-Stack Engineer specialized in{" "}
            <span className="font-medium text-white">Next.js</span>,{" "}
            <span className="font-medium text-white">TypeScript</span>,{" "}
            <span className="font-medium text-white">PostgreSQL</span>, and
            production-ready SaaS platforms.
          </motion.p>

          {/* Strong paragraph */}
          <motion.p
            variants={fadeInUp as any}
            className="mx-auto mb-12 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base"
          >
            I’m <span className="font-medium text-white">Omar El-Ali</span> —
            founder of{" "}
            <span className="font-medium text-white underline decoration-white/20 underline-offset-4">
              LebNexis Tahaddiyat
            </span>
            . I design and build scalable products from backend architecture to
            high-performance frontends, focused on clean engineering, business
            value, and real-world impact.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeInUp as any}
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-3 rounded-full bg-white px-9 py-5 text-sm font-black uppercase tracking-[-0.03em] text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(255,255,255,0.25)]"
            >
              Explore Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/10 bg-white/[0.03] px-9 py-5 text-sm font-black uppercase tracking-[-0.03em] text-white backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.08]"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Info line */}
          <motion.div
            variants={fadeInUp as any}
            className="mb-12 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-600"
          >
            <MapPin size={14} />
            Lebanon based — open to Gulf market roles
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp as any}
            className="mx-auto hidden max-w-4xl grid-cols-3 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md md:grid"
          >
            <div className="p-7 text-center">
              <div className="mb-2 font-mono text-2xl font-black text-white">
                08+
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Production Systems
              </div>
            </div>

            <div className="border-x border-white/10 p-7 text-center">
              <div className="mb-2 font-mono text-2xl font-black text-white">
                50+
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Challenges Designed
              </div>
            </div>

            <div className="p-7 text-center">
              <div className="mb-2 font-mono text-2xl font-black text-white">
                SaaS
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Product Mindset
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20"
      >
        <div className="h-12 w-px bg-white" />
      </motion.div>
    </section>
  )
}

export default HomeBanner