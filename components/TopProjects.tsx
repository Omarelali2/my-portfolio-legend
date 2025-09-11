import React from "react"
import Image, { StaticImageData } from "next/image"

import samsung from "../public/sumsung.jpg"
import Gym from "../public/gym.jpg"
import education from "../public/education.jpg"
import forever from "../public/store.jpg"
import Link from "next/link"

interface Project {
  name: string
  description: string
  stack: string[]
  image: StaticImageData
  live: string
  github: string
}

const projects: Project[] = [
  {
    name: "Samsung Clone",
    description:
      "Full-stack Samsung store (attention: not official and is opened in desktop mode only)",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Stripe",
      "TailwindCSS",
      "React Router",
    ],
    image: samsung,
    live: "https://sumsung-store-frontend-i3ov.vercel.app/",
    github: "https://github.com/Omarelali2/sumsung-store-backend",
  },
  {
    name: "Gym System",
    description:
      "Full-stack Power Fit : Clean design, easy to use, perfect for anyone motivated at the gym.",
    stack: [
      "Next.js",
      "Prisma PostgreSQL",
      "Cloudinary",
      "Stripe",
      "TailwindCSS",
    ],
    image: Gym,
    live: "https://gymleb.vercel.app/",
    github: "https://github.com/Omarelali2/the-big-gym",
  },
  {
    name: "University Education",
    description: "A simple education website",
    stack: ["React", "CSS"],
    image: education,
    live: "https://education-rho-six.vercel.app/",
    github: "https://github.com/Omarelali2/education",
  },
  {
    name: "Clothing Store",
    description: "A simple clothing store",
    stack: ["React", "CSS", "TailwindCSS", "React Router"],
    image: forever,
    live: "https://buy-products-six.vercel.app/",
    github: "https://github.com/Omarelali2/Buy_products",
  },
]

const Projects: React.FC = () => {
  return (
    <section className='projects bg-gradient-to-r from-slate-900 to-indigo-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-12'>
          My Projects
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-15 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
          {projects.map(project => (
            <div
              key={project.name}
              className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
            >
              <div className='relative w-full h-64 overflow-hidden'>
                <Image
                  
                  src={project.image}
                  alt={project.name}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <div className='p-6 text-left'>
                <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-600'>
                  {project.name}
                </h3>
                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full transition-colors duration-300 hover:bg-blue-100 dark:hover:bg-blue-700'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <Link
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-700 transform hover:scale-105'
                  >
                    Live
                  </Link>
                  <Link
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-700 transform hover:scale-105'
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

export default Projects
