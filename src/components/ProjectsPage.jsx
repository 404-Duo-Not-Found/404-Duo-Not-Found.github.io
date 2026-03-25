import { useTranslation } from 'react-i18next'
import projects from '../data/projects'
import ProjectCard from '../pages/ProjectCard'

export default function ProjectPage() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold text-white">
          {t('projectsPage.title')}
        </h1>
        <p className="mt-4 text-slate-300">
          {t('projectsPage.description')}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}