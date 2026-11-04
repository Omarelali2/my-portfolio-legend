import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import EducationNetworking from "@/components/EducationNetworking"
import LebNexisSection from "@/components/LebNexisSection"
import { Marquee } from "@/components/ui/Marquee"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-base text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <EducationNetworking />
      <LebNexisSection />
      <Marquee items={["Engineer", "Deploy", "Scale", "Iterate"]} />
      <Contact />
    </main>
  )
}
