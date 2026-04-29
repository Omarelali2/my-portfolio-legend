"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Code2, Database, Layers3, Server, Sparkles, Workflow } from "lucide-react"

const skills = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Framer Motion", logo: "https://www.framer.com/favicon.ico" },
  { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
]

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    text: "Responsive interfaces, clean components, motion, accessibility, and polished product UX.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    text: "APIs, authentication flows, business logic, validation, integrations, and scalable server patterns.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "Relational models, Prisma schemas, PostgreSQL queries, migrations, and production-ready data layers.",
  },
  {
    icon: Workflow,
    title: "Product Architecture",
    text: "Building full systems around user journeys, admin dashboards, permissions, notifications, and growth.",
  },
]

function SkillPill({ skill }: { skill: { name: string; logo: string } }) {
  return (
    <div className="group flex shrink-0 cursor-default items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]">
      <div className="relative h-6 w-6 grayscale transition-all duration-500 group-hover:grayscale-0">
        <Image
          src={skill.logo}
          alt={skill.name}
          fill
          className="object-contain"
        />
      </div>

      <span className="text-sm font-semibold text-zinc-400 transition-colors group-hover:text-white">
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills() {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [120, -120])
  const xReverse = useTransform(scrollYProgress, [0, 1], [-120, 120])

  return (
    <section
      ref={targetRef}
      id="skills"
      className="relative overflow-hidden border-y border-white/10 bg-black py-32 text-white md:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.06] [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
              Technical Stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl"
          >
            Tools I use to
            <br />
            <span className="bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-800 bg-clip-text italic text-transparent">
              build real products.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg"
          >
            My stack is focused on modern full-stack development: fast
            interfaces, reliable APIs, clean databases, and scalable SaaS
            architecture.
          </motion.p>
        </div>

        <div className="relative mb-16 space-y-5">
          <motion.div style={{ x }} className="flex gap-4">
            {skills.concat(skills).map((skill, index) => (
              <SkillPill key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </motion.div>

          <motion.div style={{ x: xReverse }} className="flex justify-end gap-4">
            {skills.concat(skills).reverse().map((skill, index) => (
              <SkillPill key={`${skill.name}-${index}-reverse`} skill={skill} />
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <Icon size={22} />
                </div>

                <h3 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-zinc-500">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}