import SectionTitle from './SectionTitle'
import { aboutItems } from '../data/siteData'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Sobre"
        title="Uma presença digital à altura da tua organização"
        description="Este template foi pensado para organizações que querem uma página clara, elegante e fácil de manter, sem complicações desnecessárias."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {aboutItems.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="mt-3 text-slate-300">
              Edita textos, cores, secções e conteúdos sem desmontar a base do projeto.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}