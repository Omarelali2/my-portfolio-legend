import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import HomeBanner from "@/components/HomeBanner"
import Skills from "@/components/Skills"
import TopProjects from "@/components/TopProjects"
import React from "react"

const page = () => {
  return (
    <div>
      <HomeBanner />
      <About />
      <Skills />
      <Experience />
      <TopProjects />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
