import SectionTitle from './SectionTitle'
import { services } from '../data/siteData'

export default function Services() {
  return (
    <section id="services" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Serviços"
          title="O que a tua organização pode destacar"
          description="Usa esta secção para mostrar competências, áreas de atuação ou propostas de valor principais."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-6"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}