import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <div className='relative w-full bg-gradient-to-r text-white from-slate-900 to-indigo-950  bg-opacity-80 py-10 px-6 md:px-20'>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
        <div className='mb-8 md:mb-0 text-center md:text-left'>
          <h2 className='text-3xl font-bold'>
            <span className='text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              &lt;OE/&gt;
            </span>
          </h2>
          <h3 className='text-xl md:text-2xl mt-5 font-medium'>
            Full-stack developer based in Akkar, Lebanon
          </h3>
        </div>

        <div className='text-center md:text-right'>
          <h1 className='text-2xl font-bold mb-4 md:mr-6'>Media</h1>
          <div className='flex gap-4 justify-center md:justify-end'>
            <Link
              href='https://github.com/Omarelali2'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-900 hover:bg-gray-700 transition w-12 h-12 flex items-center justify-center rounded-md'
            >
              <Github size={24} color='white' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/omar-elali-28aaa1312/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-700 hover:bg-blue-600 transition flex items-center justify-center w-12 h-12 rounded-md'
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-10 text-center text-sm '>© 2025. Made by O-Elali</div>
    </div>
  )
}

export default Footer
