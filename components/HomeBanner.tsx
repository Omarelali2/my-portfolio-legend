"use client"
import React from "react"
import { Github, Instagram, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import Image from "next/image"

const HomeBanner = () => {
  const profilePic = "/Me.jpg"

  return (
    <section className='home relative overflow-hidden py-35 md:py-24 px-4 text-white'>
      <div className='absolute inset-0  bg-gradient-to-r from-slate-900 to-indigo-950 opacity-90'></div>

      <div className='relative container mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
        <div className='flex-1 text-center md:text-left'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight'>
            Hi, I am{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              Omar El-Ali
            </span>
          </h1>
          <p className='text-lg sm:text-xl text-gray-300 mb-6 max-w-prose mx-auto md:mx-0'>
            I am a passionate software developer specializing in building modern
            web applications. I love bringing ideas to life through clean,
            efficient, and scalable code. Let&apos;s create something amazing
            together.
          </p>

          <div className='flex justify-center md:justify-start space-x-4 mt-8'>
            <Link
              href={"/my-projects"}
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-300 transform hover:scale-105'
            >
              All Projects
            </Link>
            <ScrollLink
              to='contact'
              smooth={true}
              offset={-80}
              duration={500}
              className='bg-slate-700 hover:bg-slate-600 text-gray-200 font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-300 transform hover:scale-105'
            >
              Contact Me
            </ScrollLink>
          </div>
          <div className='flex flex-col items-center md:items-start justify-start md:justify-start gap-4 mt-12 text-gray-300'>
            <div className='flex gap-6'>
              <Link
                href='https://www.instagram.com/omarelali1'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-pink-500 transition-colors duration-300'
              >
                <Instagram size={24} />
              </Link>
              <Link
                href='https://www.linkedin.com/in/omar-elali-28aaa1312/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-500 transition-colors duration-300'
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href='https://github.com/Omarelali2'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-900 transition-colors duration-300'
              >
                <Github size={24} />
              </Link>
            </div>

            <div className='flex items-center gap-2 hover:text-green-400 duration-500 text-gray-400 text-lg'>
              <MapPin size={20} />
              <span>Lebanon - Akkar</span>
            </div>
          </div>
        </div>

        <div className='flex-1 flex justify-center md:justify-end'>
          <div className='w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(131,58,180,0.7),0_0_60px_rgba(253,29,29,0.5),0_0_90px_rgba(252,176,69,0.4)]'>
            <div className='w-full h-full rounded-full overflow-hidden bg-black'>
              <Image
                width={48}
                height={48}
                unoptimized
                src={profilePic}
                alt='A professional portrait of Omar El-Ali'
                className='w-full h-full object-cover transform transition-transform duration-300 hover:scale-105'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
