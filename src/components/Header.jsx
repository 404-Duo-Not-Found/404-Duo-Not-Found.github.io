import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useStore from '../store'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const language = useStore((state) => state.language)
  const setLanguage = useStore((state) => state.setLanguage)

  const location = useLocation()
  const navigate = useNavigate()

  const currentRoute = location.pathname

  const { t } = useTranslation()

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    setOpen(false)
  }

  const scrollToSection = (sectionId) => {
    setOpen(false)

    if (currentRoute !== '/') {
      navigate('/')

      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)

      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const isHome = currentRoute === '/'
  const isProjects = currentRoute === '/projects'
  const isProjectDetail = /^\/projects\/[^/]+$/.test(currentRoute)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold tracking-wide">
          {t('org_name')}
        </a>

        {isHome && (
          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <button type="button" onClick={() => scrollToSection('about')} className="hover:text-white">
              {t('header.about')}
            </button>
            <button type="button" onClick={() => scrollToSection('services')} className="hover:text-white">
              {t('header.services')}
            </button>
            <button type="button" onClick={() => scrollToSection('projects')} className="hover:text-white">
              {t('header.projects')}
            </button>
            <button type="button" onClick={() => scrollToSection('team-contact')} className="hover:text-white">
              {t('header.team')}
            </button>
            <button type="button" onClick={() => scrollToSection('team-contact')} className="hover:text-white">
              {t('header.contact')}
            </button>
          </nav>
        )}

        {(isProjects || isProjectDetail) && (
          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="/#/" className="hover:text-white">
              {t('header.home')}
            </a>
            <a href="/#/projects" className="hover:text-white">
              {t('header.projects')}
            </a>
          </nav>
        )}

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => changeLanguage('pt')}
            className={`rounded-md border px-2 py-1 text-xs ${language === 'pt' ? 'border-white text-white' : 'border-white/20 text-slate-300 hover:text-white'}`}
            aria-label="Mudar para Portugues"
          >
            PT
          </button>
          <button
            type="button"
            onClick={() => changeLanguage('en')}
            className={`rounded-md border px-2 py-1 text-xs ${language === 'en' ? 'border-white text-white' : 'border-white/20 text-slate-300 hover:text-white'}`}
            aria-label="Change language to English"
          >
            EN
          </button>
        </div>

        <button
          className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t('header.close_menu') : t('header.open_menu')}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-300">
            {isHome && (
              <>
                <button type="button" onClick={() => scrollToSection('about')} className="text-left">
                  {t('header.about')}
                </button>
                <button type="button" onClick={() => scrollToSection('services')} className="text-left">
                  {t('header.services')}
                </button>
                <button type="button" onClick={() => scrollToSection('projects')} className="text-left">
                  {t('header.projects')}
                </button>
                <button type="button" onClick={() => scrollToSection('team-contact')} className="text-left">
                  {t('header.team')}
                </button>
                <button type="button" onClick={() => scrollToSection('team-contact')} className="text-left">
                  {t('header.contact')}
                </button>
              </>
            )}

            {(isProjects || isProjectDetail) && (
              <>
                <a href="/#/" onClick={() => setOpen(false)}>
                  {t('header.home')}
                </a>
                <a href="/#/projects" onClick={() => setOpen(false)}>
                  {t('header.projects')}
                </a>
              </>
            )}

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => changeLanguage('pt')}
                className={`rounded-md border px-2 py-1 text-xs ${language === 'pt' ? 'border-white text-white' : 'border-white/20 text-slate-300 hover:text-white'}`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => changeLanguage('en')}
                className={`rounded-md border px-2 py-1 text-xs ${language === 'en' ? 'border-white text-white' : 'border-white/20 text-slate-300 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}