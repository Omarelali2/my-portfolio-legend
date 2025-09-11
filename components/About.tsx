import Image from "next/image"
import React from "react"

const About = () => {
  return (
    <section
      id='about'
      className='about bg-slate-900 text-white py-16 px-4 md:py-24 scroll-mt-20'
    >
      <div className='container mx-auto max-w-7xl flex flex-col items-center gap-12'>
        <h2 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl px-3 py-3 sm:text-3xl font-extrabold mb-12 text-center'>
          About Me
        </h2>

        <div className='flex flex-col md:flex-row items-center md:items-start gap-12 w-full'>
          <div className='flex-1 flex justify-center  md:justify-start'>
            <div className='w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 p-1 bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-500 shadow-2xl transition-transform duration-300 hover:scale-105 '>
              <div className='w-full h-full overflow-hidden bg-black '>
                <Image
                  width={48}
                  height={48}
                  unoptimized
                  src='/logo.jpg'
                  alt="Omar's Logo"
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
          <div className='flex-1 text-center md:text-left'>
            <p className='text-lg sm:text-xl text-gray-300 mb-6 max-w-prose mx-auto md:mx-0 leading-relaxed'>
              Hi! I am{" "}
              <span className='text-teal-400 font-semibold'>Omar El-Ali</span>,
              a Computer Science graduate currently pursuing my Master s in
              Software Engineering at the Lebanese University (LU). As a Junior
              Web Developer, I specialize in building dynamic and responsive web
              applications using React.js for the frontend, Node.js for the
              backend, and Next.js for both frontend & backend. I enjoy solving
              problems, turning ideas into real projects, and constantly
              learning new technologies to grow as a professional.
            </p>
            <p className='text-lg sm:text-xl text-gray-400 max-w-prose mx-auto md:mx-0 leading-relaxed'>
              When I am not coding, I enjoy learning new technologies,
              contributing to open-source projects, and staying up-to-date with
              the latest industry trends. I am always open to new challenges and
              collaborative opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
