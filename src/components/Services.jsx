import SectionTitle from './SectionTitle'
import { useTranslation } from 'react-i18next'


export default function Services() {
  const {t} = useTranslation()
  const servicesItems = t('services.items', {returnObjects: true, defaultValue: []})
  const safeServicesItems = Array.isArray(servicesItems) ? servicesItems : []
  return (
    <section id="services" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          description={t("services.description")}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {safeServicesItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}