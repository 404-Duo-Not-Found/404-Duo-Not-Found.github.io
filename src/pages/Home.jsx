import Header from '../components/Header'
import Footer from '../components/footer'

import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Contact from '../components/Contact'

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
    </div>
  )
}