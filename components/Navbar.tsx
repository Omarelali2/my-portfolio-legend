"use client"
import React, { useState } from "react"
import NextLink from "next/link"
import { Link as ScrollLink } from "react-scroll"
import { Briefcase, Code, ExpandIcon, Folder, Home, User } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='bg-slate-800 p-4 shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-3'>
          <NextLink href='/'>
            <span className='text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'>
              &lt;OE/&gt;
            </span>
          </NextLink>
        </div>

        <div className='hidden text-white md:flex space-x-8 text-lg cursor-pointer font-medium'>
          <ScrollLink
            to='home'
            smooth={true}
            offset={0}
            duration={500}
            className='hover:text-blue-400 transition-colors flex gap-2 duration-200'
          >
            <Home className='text-2xl' />
            Home
          </ScrollLink>
          <ScrollLink
            to='exp'
            smooth={true}
            offset={-50}
            duration={500}
            className='hover:text-blue-400 transition-colors flex gap-2 duration-200'
          >
            <Briefcase />
            Experience
          </ScrollLink>

          <ScrollLink
            to='about'
            smooth={true}
            offset={-80}
            duration={500}
            className='hover:text-blue-400 transition-colors flex gap-2 duration-200 cursor-pointer'
          >
            <User />
            About Us
          </ScrollLink>
          <ScrollLink
            to='skills'
            smooth={true}
            offset={-80}
            duration={500}
            className='hover:text-blue-400 transition-colors flex gap-2 duration-200 cursor-pointer'
          >
            <Code />
            Skills
          </ScrollLink>
          <ScrollLink
            to='projects'
            smooth={true}
            offset={-50}
            duration={500}
            className='hover:text-blue-400 flex gap-2 transition-colors duration-200'
          >
            <Folder />
            Top Projects
          </ScrollLink>
        </div>

        <div className='md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md'
          >
            <svg
              className='w-6 h-6 transition-transform duration-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              style={{
                transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0)",
              }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className='p-4 space-y-4 text-white bg-slate-700 rounded-lg shadow-inner justify-start flex flex-col'>
          <ScrollLink
            to='home'
            smooth={true}
            offset={0}
            duration={500}
            className='hover:text-blue-400 transition-colors flex gap-2 duration-200'
          >
            <Home className='text-2xl' />
            Home
          </ScrollLink>

          <ScrollLink
            to='about'
            smooth={true}
            offset={-80}
            duration={500}
            className='hover:text-blue-400 transition-colors flex gap-2 duration-200 cursor-pointer'
          >
            <User />
            About Us
          </ScrollLink>
          <ScrollLink
            to='exp'
            smooth={true}
            offset={-50}
            duration={500}
            className='hover:text-blue-400 transition-colors flex gap-2 duration-200'
          >
            <Briefcase />
            Experience
          </ScrollLink>
          <ScrollLink
            to='projects'
            smooth={true}
            offset={-50}
            duration={500}
            className='hover:text-blue-400 flex gap-2 transition-colors duration-200'
          >
            <Folder />
            Top Projects
          </ScrollLink>
          <ScrollLink
            to='skills'
            smooth={true}
            offset={-80}
            duration={500}
            className='hover:text-blue-400 transition-colors flex gap-2 duration-200 cursor-pointer'
          >
            <Code />
            Skills
          </ScrollLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
