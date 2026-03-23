import SectionTitle from './SectionTitle'
import {useTranslation} from 'react-i18next'

export default function Projects() {
  const {t} = useTranslation()
  const projectItems = t('projetos.items', {returnObjects: true, defaultValue: []})
  const safeProjectItems = Array.isArray(projectItems) ? projectItems : []

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow={t('projetos.eyebrow')}
        title={t('projetos.title')}
        description={t('projetos.description')}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {safeProjectItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
              {item.tag}
            </span>
            <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}