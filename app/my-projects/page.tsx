"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  name: string
  description: string
  stack: string[]
  image: string
  live: string
  github: string
}

const projects: Project[] = [
  {
    name: "Samsung Clone",
    description: "Full‑stack Samsung store (demo project – desktop only).",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Stripe",
      "TailwindCSS",
    ],
    image: "/phone.webp",
    live: "https://sumsung-store-frontend-i3ov.vercel.app/",
    github: "https://github.com/Omarelali2/sumsung-store-backend",
  },
  {
    name: "Gym System",
    description:
      "Power Fit platform with clean UI, payments and media handling.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "TailwindCSS"],
    image: "/OIP.webp",
    live: "https://gymleb.vercel.app/",
    github: "https://github.com/Omarelali2/the-big-gym",
  },
  {
    name: "Clothing Store",
    description: "Minimal e‑commerce UI for clothing products.",
    stack: ["React", "TailwindCSS", "React Router"],
    image: "/OIP (1).webp",
    live: "https://buy-products-six.vercel.app/",
    github: "https://github.com/Omarelali2/Buy_products",
  },
  {
    name: "CodeLeb",
    description:
      "Community platform for developers in Lebanon. we built with my friends in team during internship with TechTacks.",
    stack: ["Next.js", "PostgreSQL", "TailwindCSS"],
    image: "/OIP3.jpg",
    live: "https://codeleb.vercel.app/",
    github: "https://github.com/AZZAM-K/codeleb",
  },
  {
    name: "University Education",
    description: "Simple educational website with responsive layout.",
    stack: ["React", "CSS"],
    image: "/education.avif",
    live: "https://education-rho-six.vercel.app/",
    github: "https://github.com/Omarelali2/education",
  },
]

export default function Projects() {
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      )
    })
  }, [])

  return (
    <section className='bg-gradient-to-br from-slate-950 via-indigo-950 to-black py-24 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-center text-5xl font-extrabold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mt-10'>
          All Projects
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={el => {
                if (el) cardsRef.current[index] = el
              }}
              className='group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl transition'
            >
              {/* Image */}
              <div className='relative h-72 overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
              </div>

              {/* Content */}
              <div className='p-8'>
                <h3 className='text-3xl font-bold text-white mb-3'>
                  {project.name}
                </h3>

                <p className='text-gray-300 leading-relaxed mb-6'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-8'>
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className='text-sm px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/10'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-4'>
                  <Link
                    href={project.live}
                    target='_blank'
                    className='flex-1 text-center rounded-xl py-3 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition'
                  >
                    Live Demo
                  </Link>

                  <Link
                    href={project.github}
                    target='_blank'
                    className='flex-1 text-center rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition'
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
