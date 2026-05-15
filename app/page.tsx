import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import HomeLab from '@/components/HomeLab'
import Certifications from '@/components/Certifications'
import Experience from '@/components/Experience'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <HomeLab />
      <Certifications />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
