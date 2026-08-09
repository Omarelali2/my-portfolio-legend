"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight, Github, Linkedin, MapPin } from "lucide-react"
import { EASE } from "@/lib/motion"

const inputClass =
  "w-full border-b border-white/10 bg-transparent py-4 text-xl font-light text-white outline-none transition-colors duration-300 focus:border-accent placeholder:text-zinc-600"

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-base pb-28 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(183,255,60,0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="text-accent">—</span>
            <span className="text-zinc-600">Connect</span>
            <span className="h-px w-14 bg-white/15" aria-hidden />
          </div>

          <h1 className="mb-10 text-[clamp(3rem,7vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-white">
            Let&apos;s
            <br />
            <span className="text-accent">sync.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-white/[0.08] bg-raised p-8 md:p-10"
            >
              <h2 className="mb-10 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                Transmission
              </h2>

              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                      Entity Name
                    </label>
                    <input type="text" className={inputClass} placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                      Digital Address
                    </label>
                    <input type="email" className={inputClass} placeholder="hello@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Protocol / Project Details
                  </label>
                  <textarea
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Brief system overview..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-5 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-accent-deep"
                >
                  Initialize Connection
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Aside */}
          <div className="space-y-8 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="rounded-2xl border border-white/[0.08] bg-raised p-8"
            >
              <h3 className="mb-8 border-b border-white/[0.07] pb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Social Nodes
              </h3>
              <div className="space-y-6">
                {[
                  { label: "LinkedIn", sub: "Professional Matrix", href: "https://www.linkedin.com/in/omar-elali-28aaa1312/", icon: Linkedin },
                  { label: "GitHub", sub: "Source Control", href: "https://github.com/omarelali", icon: Github },
                  { label: "Email", sub: "Direct Line", href: "mailto:elaliomar30@gmail.com", icon: Mail },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-black/40 transition-colors duration-300 group-hover:border-accent/40">
                        <item.icon size={16} className="text-zinc-400 transition-colors group-hover:text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-200 transition-colors group-hover:text-white">
                          {item.label}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-8"
            >
              <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                Status: Online
              </h3>
              <p className="mb-6 text-sm font-light leading-7 text-zinc-400">
                Currently accepting{" "}
                <span className="font-medium text-white">high-impact</span>{" "}
                projects for Q3–Q4 2026. Specialized in SaaS platforms and
                full-stack systems.
              </p>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                <MapPin size={12} className="text-accent" /> Lebanon — GMT+2
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
