import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen antialiased bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <section id="home" className="pt-24">
          <Hero />
        </section>

        <section id="about" className="pt-20">
          <About />
        </section>

        <section id="skills" className="pt-20">
          <Skills />
        </section>

        <section id="projects" className="pt-20">
          <Projects />
        </section>

        <section id="contact" className="pt-20 pb-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
