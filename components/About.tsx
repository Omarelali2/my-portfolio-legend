"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Code2, Layers3, Rocket } from "lucide-react"

export default function About() {
  const containerRef = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -80])
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 6])

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative overflow-hidden bg-black py-32 text-white md:py-44"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.08] [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20 max-w-6xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
              About Omar
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            Building products
            <br />
            <span className="bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-800 bg-clip-text italic text-transparent">
              through scalable systems.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Image */}
          <div className="relative lg:col-span-5">
            <motion.div
              style={{ rotate, y }}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl md:rounded-[2.5rem]"
            >
              <Image
                src="/Omar.jpeg"
                alt="Omar El-Ali"
                fill
                priority
                className="object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white">Omar El-Ali</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                      Full-Stack Engineer
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -z-10 left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px]" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="mb-10 space-y-7 text-lg font-light leading-8 text-zinc-400 md:text-xl md:leading-9">
              <p>
                I’m a{" "}
                <span className="font-medium text-white">
                  Full-Stack Engineer & Product Builder
                </span>{" "}
                focused on building production-ready platforms with clean
                architecture, strong user experience, and real business value.
              </p>

              <p>
                I work across the full product lifecycle — from database design
                and backend systems to high-performance interfaces using{" "}
                <span className="font-medium text-white">
                  Next.js, TypeScript, PostgreSQL, Prisma, and modern SaaS
                  architecture.
                </span>
              </p>

              <p>
                As the founder of{" "}
                <span className="font-medium text-white underline decoration-white/20 underline-offset-4">
                  LebNexis Tahaddiyat
                </span>
                , I’m building a developer ecosystem focused on real-world
                challenges, skill validation, learning tracks, and community
                growth.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:bg-white/[0.06]">
                <Code2 className="mb-5 text-white" size={24} />
                <h4 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white">
                  Engineering
                </h4>
                <p className="text-sm leading-6 text-zinc-500">
                  Scalable APIs, clean data models, secure logic, and reliable
                  product foundations.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:bg-white/[0.06]">
                <Layers3 className="mb-5 text-white" size={24} />
                <h4 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white">
                  Product
                </h4>
                <p className="text-sm leading-6 text-zinc-500">
                  I think beyond features — focusing on UX, growth, business
                  value, and long-term scalability.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:bg-white/[0.06]">
                <Rocket className="mb-5 text-white" size={24} />
                <h4 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white">
                  Vision
                </h4>
                <p className="text-sm leading-6 text-zinc-500">
                  Building systems that are not only functional, but polished,
                  resilient, and ready for real users.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}