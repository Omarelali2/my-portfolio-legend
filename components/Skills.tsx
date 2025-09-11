import Image from "next/image"
import React from "react"

interface Skill {
  name: string
  logo: string
}

const skillsData: Skill[] = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
]

const Skills: React.FC = () => {
  return (
    <section className='skills bg-gradient-to-r from-slate-900 to-indigo-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mb-10'>
          My Skills
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8'>
          {skillsData.map(skill => (
            <div
              key={skill.name}
              className='flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md 
                         transform transition duration-500 hover:scale-110 hover:rotate-3 hover:shadow-xl'
            >
              <Image
                width={48}
                height={48}
                src={skill.logo}
                alt={skill.name}
                className='w-16 h-16 mb-3'
              />
              <span className='text-gray-800 dark:text-gray-200 font-medium'>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
