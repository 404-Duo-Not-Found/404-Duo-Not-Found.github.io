import Team from './Team'
import Contact from './Contact'

export default function TeamContactSection() {
  return (
    <section id='team-contact' className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Team />
        <Contact />
      </div>
    </section>
  )
}