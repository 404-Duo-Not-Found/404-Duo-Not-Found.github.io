import SectionTitle from './SectionTitle'
import { team } from '../data/siteData'

export default function Team() {
  return (
    <section id="team" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Equipa"
          title="As pessoas por trás da organização"
          description="Uma secção simples para dar rosto à equipa e transmitir mais confiança a quem visita o site."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-6"
            >
              <div className="mb-5 h-14 w-14 rounded-2xl bg-white/10" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mt-2 text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}