"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  BriefcaseBusiness,
  Code2,
  Layers3,
} from "lucide-react"

const projects = [
  {
    name: "Samsung Store",
    type: "E-Commerce Platform",
    role: "Full-Stack Engineer",
    description:
      "A production-ready e-commerce experience built with clean product flows, responsive UI, and scalable backend foundations.",
    impact: "Commerce system",
    tags: ["E-Commerce", "Full-Stack", "SaaS"],
    stack: ["Next.js", "TypeScript", "MongoDB", "API"],
    image: "/sumsung.jpeg",
    live: "https://sumsung-store-frontend-i3ov.vercel.app/",
    github: "https://github.com/Omarelali2/sumsung-store-backend",
  },

  {
    name: "LebSpace",
    type: "Social Platform",
    role: "Founder & Full-Stack Developer",
    description:
      "A social platform for Lebanese developers focused on community, projects, and real-world learning.",
    impact: "Developer community",
    tags: ["Social", "Community", "Full-Stack"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    image: "/social.jpeg",
    live: "https://lebspace.vercel.app/",
    github: "https://github.com/AZZAM-K/LebSpace",
  },
  {
    name: "PowerPulse Gym",
    type: "Management SaaS",
    role: "Lead Full-Stack Developer",
    description:
      "A gym management platform focused on memberships, dashboards, user operations, and business workflow automation.",
    impact: "Business dashboard",
    tags: ["Dashboard", "SaaS", "Operations"],
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    image: "/gym.jpeg",
    live: "https://gymleb.vercel.app/",
    github: "https://github.com/Omarelali2/the-big-gym",
  },
  {
    name: "CodeLeb",
    type: "Learning Platform",
    role: "Full-Stack Engineer",
    description:
      "A developer learning platform focused on real-world projects, AI collaboration, and skill validation through production-ready builds.",
    impact: "Developer learning",
    tags: ["Learning", "AI", "Full-Stack"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
    image: "/codleb.jpeg",
    live: "https://codeleb.vercel.app/",
    github: "https://github.com/AZZAM-K/codeleb",
  },
  {
    name: "Buy Products",
    type: "Premium Frontend",
    role: "Interface Engineer",
    description:
      "A premium frontend interface focused on motion, visual hierarchy, responsive layouts, and conversion-focused UI.",
    impact: "Premium UI",
    tags: ["Frontend", "Motion", "UI/UX"],
    stack: ["React", "Framer Motion", "Tailwind", "UX"],
    image: "/forever.jpeg",
    live: "https://buy-products-six.vercel.app/",
    github: "https://github.com/Omarelali2/Buy_products",
  },
  {
    name: "Personal Portfolio",
    type: "Interface & Systems",
    role: "Frontend Developer",
    description:
      "My personal portfolio built with a focus on clean architecture, motion, and a polished product experience.",
    impact: "Personal Branding",
    tags: ["Interface", "Systems", "Full-Stack"],
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    image: "/portofio-example.jpeg",
    live: "https://your-portfolio-link.vercel.app/",
    github: "https://github.com/your-username/your-portfolio",
  },
  {
    name: "Education Platform",
    type: "Landing Page",
    role: "Frontend Developer",
    description:
      "A landing page for an education platform focused on clean design, responsive layouts, and conversion optimization.",
    impact: "Personel Branding",
    tags: ["Landing Page", "Frontend", "UI/UX"],
    stack: ["React", "Tailwind", "Framer Motion"],
    image: "/edu.jpeg",
    live: "https://education-rho-six.vercel.app/",
    github: "https://github.com/Omarelali2/education",
  },
]

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.12,
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-80px" }}
      className='group relative flex h-full flex-col'
    >
      <div className='relative  mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl'>
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-black">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className='object-contain p-4 opacity-100 transition-all duration-1000 group-hover:scale-[1.02]'
          />

          <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/35 to-transparent' />

          <div className='absolute left-5 top-5 flex flex-wrap gap-2'>
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className='rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5'>
            <div>
              <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400'>
                {project.type}
              </p>
              <h3 className='text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-4xl'>
                {project.name}
              </h3>
            </div>

            <div className='hidden rounded-full bg-white p-4 text-black transition-transform group-hover:rotate-45 md:block'>
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

        <div className='grid border-t border-white/10 bg-white/[0.03] md:grid-cols-3'>
          <div className='border-b border-white/10 p-5 md:border-b-0 md:border-r'>
            <p className='mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-600'>
              Role
            </p>
            <p className='text-sm font-semibold text-white'>{project.role}</p>
          </div>

          <div className='border-b border-white/10 p-5 md:border-b-0 md:border-r'>
            <p className='mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-600'>
              Impact
            </p>
            <p className='text-sm font-semibold text-white'>{project.impact}</p>
          </div>

          <div className='p-5'>
            <p className='mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-600'>
              Stack
            </p>
            <p className='text-sm font-semibold text-white'>
              {project.stack.slice(0, 2).join(" / ")}
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-1 flex-col px-1'>
        <p className='mb-7 max-w-xl text-base font-light leading-7 text-zinc-400 md:text-lg'>
          {project.description}
        </p>

        <div className='mb-8 flex flex-wrap gap-2'>
          {project.stack.map((item: string) => (
            <span
              key={item}
              className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400'
            >
              {item}
            </span>
          ))}
        </div>

        <div className='mt-auto flex flex-wrap items-center gap-3 border-t border-white/10 pt-6'>
          <Link
            href={project.live}
            target='_blank'
            className='group/link inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-black transition-all hover:scale-[1.03]'
          >
            Live Demo
            <ExternalLink
              size={14}
              className='transition-transform group-hover/link:translate-x-0.5'
            />
          </Link>

          <Link
            href={project.github}
            target='_blank'
            className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all hover:border-white/25 hover:bg-white/[0.08]'
          >
            Source Code
            <Github size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default function TopProjects() {
  return (
    <section
      id='projects'
      className='relative overflow-hidden bg-black py-32 text-white md:py-44'
    >
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[150px]' />
        <div className='absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[140px]' />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.07] [mask-image:radial-gradient(circle_at_top,white,transparent_70%)]" />
      </div>

      <div className='container relative z-10 mx-auto max-w-7xl px-6 md:px-8'>
        <div className='mb-20 flex flex-col justify-between gap-10 md:mb-24 md:flex-row md:items-end'>
          <div className='max-w-4xl'>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md'
            >
              <span className='h-2 w-2 rounded-full bg-emerald-500' />
              <span className='text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400'>
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className='text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl'
            >
              Products built
              <br />
              <span className='bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-800 bg-clip-text italic text-transparent'>
                with purpose.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='max-w-sm text-sm leading-7 text-zinc-500'
          >
            A focused selection of full-stack, SaaS, AI, and interface projects
            built around clean architecture, user experience, and real product
            value.
          </motion.div>
        </div>

        <div className='mb-14 grid gap-4 md:grid-cols-3'>
          <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md'>
            <BriefcaseBusiness className='mb-5 text-white' size={24} />
            <h4 className='mb-2 text-sm font-black uppercase tracking-[0.18em]'>
              Business Focus
            </h4>
            <p className='text-sm leading-6 text-zinc-500'>
              Projects designed around real workflows, operations, and product
              value.
            </p>
          </div>

          <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md'>
            <Code2 className='mb-5 text-white' size={24} />
            <h4 className='mb-2 text-sm font-black uppercase tracking-[0.18em]'>
              Clean Engineering
            </h4>
            <p className='text-sm leading-6 text-zinc-500'>
              Frontend, backend, APIs, database structure, and scalable app
              foundations.
            </p>
          </div>

          <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md'>
            <Layers3 className='mb-5 text-white' size={24} />
            <h4 className='mb-2 text-sm font-black uppercase tracking-[0.18em]'>
              Product UI
            </h4>
            <p className='text-sm leading-6 text-zinc-500'>
              Interfaces built with visual hierarchy, motion, responsiveness,
              and usability.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2'>
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
