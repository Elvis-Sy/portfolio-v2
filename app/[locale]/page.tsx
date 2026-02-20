import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/skills/Skills"
import Projets from "@/components/projets/Projets"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projets />
      <Contact />
      <Footer />
    </div>
  )
}
