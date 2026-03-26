import SectionTitle from './SectionTitle'
import { useTranslation } from 'react-i18next'
import { UserRound } from 'lucide-react'

export default function Team() {
  const { t } = useTranslation()
  const team = t('team.team_members', { returnObjects: true, defaultValue: [] })
  const safeTeam = Array.isArray(team) ? team : []

  return (
    <div>
      <SectionTitle
        eyebrow={t('team.eyebrow')}
        title={t('team.title')}
        description={t('team.description')}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {safeTeam.map((member) => (
          <div
            key={member.name}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 hover:shadow-glow"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <UserRound size={30} />
            </div>

            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="mt-2 text-slate-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}