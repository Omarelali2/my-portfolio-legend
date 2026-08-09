"use client"

import { motion } from "framer-motion"
import { Download, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/ui/Reveal"
import { EASE } from "@/lib/motion"

const experience = [
  {
    company: "Freelance",
    role: "Full-Stack Engineer",
    period: "2023 — Present",
    location: "Remote / Lebanon",
    description:
      "Building and deploying full-stack web applications and SaaS platforms. Working on frontend architecture, backend APIs, database design, and integrations.",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    company: "Techtalk",
    role: "Full-Stack Development Intern",
    period: "2025",
    location: "Beirut, Lebanon (Remote)",
    description:
      "Contributing to full-stack projects, gaining hands-on experience in modern web architecture, and collaborating with a specialized team.",
    skills: ["Next.js", "MERN", "REST APIs"],
  },
  {
    company: "Personal & Open Source",
    role: "Product Developer",
    period: "2022 — Present",
    location: "Independent",
    description:
      "Developing real-world projects and developer tools focused on clean architecture, UI/UX, and scalable systems.",
    skills: ["React", "Node.js", "Tailwind", "API Design"],
  },
]

const stacks = [
  { title: "Frontend", value: "Next.js, React, TypeScript, Tailwind CSS" },
  { title: "Backend", value: "Node.js, API Design, Authentication" },
  { title: "Database", value: "PostgreSQL, MongoDB, Prisma ORM" },
  { title: "Tools", value: "GitHub, Vercel, Docker, CI/CD" },
]

export default function ResumePage() {
  return (
    <main className="relative overflow-hidden bg-base pb-28 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid-sm mask-radial-center absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal y={16}>
              <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
                <span className="text-accent">—</span>
                <span className="text-zinc-600">Resume</span>
                <span className="h-px w-14 bg-white/15" aria-hidden />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white">
                Omar El-Ali
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 font-mono text-sm text-zinc-400">
                Full-Stack Engineer —{" "}
                <span className="text-accent">Next.js / TypeScript / PostgreSQL</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Link
              href="/resume.pdf"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-accent-deep"
            >
              <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-16 md:grid-cols-12">
          {/* Experience */}
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="mb-10 border-b border-white/[0.08] pb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                Experience
              </h2>
            </Reveal>

            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.company + exp.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.7, ease: EASE }}
                >
                  <div className="mb-4 flex flex-wrap justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-right font-mono text-xs text-zinc-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={13} className="text-zinc-600" /> {exp.period}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <MapPin size={13} className="text-zinc-600" /> {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 max-w-xl text-sm font-light leading-7 text-zinc-400">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="mb-10 border-b border-white/[0.08] pb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                Tech Stack
              </h2>
            </Reveal>

            <div className="space-y-8">
              {stacks.map((stack, i) => (
                <Reveal key={stack.title} delay={i * 0.06}>
                  <div className="flex items-baseline gap-4 border-l-2 border-white/[0.08] pl-5 transition-colors duration-300 hover:border-accent">
                    <span className="font-mono text-[10px] text-zinc-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="mb-1.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white">
                        {stack.title}
                      </h4>
                      <p className="text-sm font-light leading-6 text-zinc-500">
                        {stack.value}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
