import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProjectCard({ project }) {
  const { t } = useTranslation()

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/[0.08]"
    >
      {project.image && (
        <div className="h-44 w-full overflow-hidden">
          <img
            src={project.image}
            alt={t(`projects.${project.id}.title`)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
          {t(`projects.${project.id}.tag`)}
        </span>

        <h3 className="mt-4 text-xl font-bold text-white">
          {t(`projects.${project.id}.title`)}
        </h3>

        <p className="mt-2 text-sm text-slate-300">
          {t(`projects.${project.id}.description`)}
        </p>
      </div>
    </Link>
  )
}