import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import TeamContactSection from '../components/TeamContactSection'

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TeamContactSection />
      </main>
    </div>
  )
}