import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import LebNexisSection from "@/components/LebNexisSection"
import Contact from "@/components/Contact"
import { Marquee } from "@/components/ui/Marquee"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-base text-white">
      <Hero />
      <About />
      <Projects />
      <Marquee items={["Build", "Ship", "Scale", "Repeat"]} />
      <Skills />
      <Experience />
      <LebNexisSection />
      <Contact />
    </main>
  )
}
