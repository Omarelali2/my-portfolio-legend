import Image from "next/image"
import React from "react"

const Experience = () => {
  return (
    <section className='exp bg-slate-900 text-white py-16 px-4 md:py-24 font-inter'>
      <div className='container mx-auto max-w-7xl'>
        <h2 className='text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-center mb-12'>
          My Experience
        </h2>
        <div className='relative md:ml-50 w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 p-8 rounded-2xl bg-slate-800 shadow-2xl transition-all md:w-[66%] duration-500 hover:scale-103 group'>
          <div className='relative flex-shrink-0'>
            <div className='w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden p-1 bg-gradient-to-r from-teal-400 to-purple-500 animate-pulse-slow'>
              <Image
                src='/tecktalk.jpg'
                alt='Techtalk Logo'
                width={128}
                unoptimized
                height={128}
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </div>
          <div className='text-center md:text-left'>
            <h3 className='text-3xl font-bold text-teal-400 group-hover:text-purple-400 transition-colors duration-300'>
              Techtalk
            </h3>
            <p className='text-xl text-gray-300 mt-2'>Internship</p>
            <p className='text-lg text-gray-400 mt-1'>1/9/2025 - 1/11/2025</p>
            <p className='mt-4 text-gray-300 max-w-xl leading-relaxed'>
              I am currently working as an intern at Techtalk, gaining hands-on
              experience in full-stack development and collaborating with a team
              to build innovative software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
