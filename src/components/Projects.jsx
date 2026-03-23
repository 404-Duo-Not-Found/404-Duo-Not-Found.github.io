import SectionTitle from './SectionTitle'
import { projects } from '../data/siteData'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Projetos"
        title="Trabalhos em destaque"
        description="Apresenta produtos, plataformas, websites, casos de estudo ou iniciativas internas da organização."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
              {project.tag}
            </span>

            <h3 className="mt-4 text-2xl font-bold">{project.name}</h3>
            <p className="mt-3 text-slate-300">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}