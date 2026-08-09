import React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.07] bg-base">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]">
              <span className="text-sm font-black tracking-tight text-white">
                O<span className="text-accent">E</span>
              </span>
            </span>
            <div className="leading-none">
              <p className="text-sm font-bold tracking-[-0.02em] text-white">
                Omar El-Ali
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-500">
                © {year}
              </p>
            </div>
          </div>

          {/* Roles */}
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
              Software Engineer
            </p>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
              Full-Stack Developer
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com/omarelali", icon: Github },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/omar-elali-28aaa1312/",
                icon: Linkedin,
              },
              { label: "Email", href: "mailto:elaliomar30@gmail.com", icon: Mail },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
              >
                <social.icon
                  size={14}
                  className="transition-colors group-hover:text-accent"
                />
                <span className="hidden lg:inline">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/[0.05] pt-6 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-700">
          <span>Built with Next.js</span>
          <span className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            Status: Open for work
          </span>
        </div>
      </div>
    </footer>
  )
}
