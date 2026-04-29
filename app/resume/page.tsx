"use client"

import { motion } from "framer-motion"
import {
  Download,
  Calendar,
  MapPin,
} from "lucide-react"
import Link from "next/link"

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
    company: "Personal & Open Source",
    role: "Product Developer",
    period: "2022 — Present",
    location: "Independent",
    description:
      "Developing real-world projects and developer tools focused on clean architecture, UI/UX, and scalable systems.",
    skills: ["React", "Node.js", "Tailwind", "API Design"],
  },
]

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      <div className="container mx-auto max-w-8xl px-6 md:px-8">
        
        {/* HEADER */}
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              Resume
            </p>

            <h1 className="text-5xl font-black uppercase tracking-[-0.04em] md:text-7xl">
              Omar El-Ali
            </h1>

            <p className="mt-4 text-zinc-400 text-base md:text-lg">
              Full-Stack Engineer — Next.js, TypeScript, PostgreSQL
            </p>
          </div>

          <Link
            href="/resume.pdf"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
          >
            <Download size={16} />
            Download CV
          </Link>
        </div>

        <div className="grid gap-16 md:grid-cols-12">
          
          {/* EXPERIENCE */}
          <div className="md:col-span-8 space-y-16">
            <div>
              <h2 className="mb-10 border-b border-white/10 pb-4 text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                Experience
              </h2>

              <div className="space-y-12">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-4 flex flex-wrap justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-blue-400">{exp.company}</p>
                      </div>

                      <div className="text-right text-xs text-zinc-500 font-mono">
                        <div className="flex items-center gap-2 justify-end">
                          <Calendar size={14} /> {exp.period}
                        </div>
                        <div className="flex items-center gap-2 justify-end mt-1">
                          <MapPin size={14} /> {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 max-w-xl text-sm text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-zinc-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="md:col-span-4 space-y-10">
            <div>
              <h2 className="mb-6 border-b border-white/10 pb-4 text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                Tech Stack
              </h2>

              <div className="space-y-6 text-sm text-zinc-400">
                <div>
                  <h4 className="mb-2 text-white font-bold uppercase text-xs">
                    Frontend
                  </h4>
                  <p>Next.js, React, TypeScript, Tailwind CSS</p>
                </div>

                <div>
                  <h4 className="mb-2 text-white font-bold uppercase text-xs">
                    Backend
                  </h4>
                  <p>Node.js, API Design, Authentication</p>
                </div>

                <div>
                  <h4 className="mb-2 text-white font-bold uppercase text-xs">
                    Database
                  </h4>
                  <p>PostgreSQL, Prisma ORM</p>
                </div>

                <div>
                  <h4 className="mb-2 text-white font-bold uppercase text-xs">
                    Tools
                  </h4>
                  <p>GitHub, Vercel, CI/CD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}