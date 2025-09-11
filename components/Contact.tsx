import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import React from "react"

const Contact = () => {
  return (
    <section
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      className='contact py-16 px-6 bg-slate-900 text-white '
    >
      <div className='flex items-center justify-center mb-12'>
        <h1 className='text-3xl font-bold md:w-48 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          # Contact
        </h1>
      </div>

      <div className='flex flex-col md:flex-row justify-between gap-10'>
        <div className='md:w-1/2'>
          <p className='text-lg leading-relaxed font-semibold'>
            I am currently seeking internship or job opportunities where I can
            grow as a developer and contribute to meaningful projects. I am
            always eager to learn, collaborate, and take on new challenges.{" "}
            <br />
            <br />
            However, if you have any other requests, questions, or even just
            want to connect and share ideas, feel free to reach out — I&apos;d be
            more than happy to chat and build connections!
          </p>
        </div>

        <div className='md:w-1/2 border-2 border-black rounded-xl p-6 flex flex-col gap-6'>
          <h2 className='text-xl font-bold mb-2 border-b border-black pb-2'>
            Message Me Here
          </h2>

          <Link
            href='mailto:elaliomar30@gmail.com'
            className='flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer'
          >
            <Mail className='text-3xl' />
            <span className='text-md font-medium hover:underline'>
              elaliomar30@gmail.com
            </span>
          </Link>

          <Link
            href='tel:+96170259020'
            className='flex items-center gap-4 hover:text-red-500 transition duration-300 cursor-pointer'
          >
            <Phone className='text-2xl' />
            <span className='text-md font-medium hover:underline'>
              70-25-90-20
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact
