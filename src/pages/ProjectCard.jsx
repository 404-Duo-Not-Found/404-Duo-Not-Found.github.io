import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProjectCard({ project }) {
  const { t } = useTranslation()

  const progressValue =
    project?.progress && typeof project.progress.value === 'number'
      ? Math.max(0, Math.min(100, project.progress.value))
      : null

  const getProgressStyles = (value) => {
    if (value < 25) {
      return {
        bar: 'bg-red-500',
        text: 'text-red-400',
        glow: 'shadow-[0_0_12px_rgba(239,68,68,0.45)]',
        label: 'Starting',
      }
    }

    if (value < 50) {
      return {
        bar: 'bg-orange-400',
        text: 'text-orange-300',
        glow: 'shadow-[0_0_12px_rgba(251,146,60,0.45)]',
        label: 'In Progress',
      }
    }

    if (value < 75) {
      return {
        bar: 'bg-yellow-400',
        text: 'text-yellow-300',
        glow: 'shadow-[0_0_12px_rgba(250,204,21,0.4)]',
        label: 'Advancing',
      }
    }

    if (value < 100) {
      return {
        bar: 'bg-emerald-400',
        text: 'text-emerald-300',
        glow: 'shadow-[0_0_12px_rgba(52,211,153,0.4)]',
        label: 'Almost Done',
      }
    }

    return {
      bar: 'bg-emerald-500',
      text: 'text-emerald-400',
      glow: 'shadow-[0_0_14px_rgba(16,185,129,0.5)]',
      label: 'Completed',
    }
  }

  const progressStyles =
    progressValue !== null ? getProgressStyles(progressValue) : null

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

        {progressValue !== null && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>Progress</span>
              <div className="flex items-center gap-2">
                <span className={`font-medium ${progressStyles.text}`}>
                  {progressStyles.label}
                </span>
                <span>{progressValue}%</span>
              </div>
            </div>

            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${progressStyles.bar} ${progressStyles.glow}`}
                style={{ width: `${progressValue}%` }}
              />
            </div>
          </div>
        )}

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