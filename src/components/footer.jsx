import { useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  const location = useLocation()
  const navigate = useNavigate()

  const currentRoute = location.pathname

  const isHome = currentRoute === '/'
  const isProjects = currentRoute === '/projects'
  const isProjectDetail = /^\/projects\/[^/]+$/.test(currentRoute)

  const scrollToSection = (sectionId) => {
    const scroll = () => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }

    if (currentRoute !== '/') {
      navigate('/')

      setTimeout(scroll, 100)
      return
    }

    scroll()
  }

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        
        <div>
          <p className="text-base font-semibold text-white">
            404 Team Not Found
          </p>
          <p className="mt-2 max-w-md text-slate-400">
            Building modern digital experiences with clean design, strong performance and practical solutions.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-left md:items-end">
          <div className="flex flex-wrap gap-4 text-slate-300">

            {isHome && (
              <>
                <button onClick={() => scrollToSection('about')} className="transition hover:text-white">
                  About
                </button>

                <button onClick={() => scrollToSection('services')} className="transition hover:text-white">
                  Services
                </button>

                <button onClick={() => scrollToSection('projects')} className="transition hover:text-white">
                  Projects
                </button>

                <button onClick={() => scrollToSection('team-contact')} className="transition hover:text-white">
                  Team
                </button>

                <button onClick={() => scrollToSection('team-contact')} className="transition hover:text-white">
                  Contact
                </button>
              </>
            )}

            {(isProjects || isProjectDetail) && (
              <>
                <a href="/#/" className="transition hover:text-white">
                  Home
                </a>

                <a href="/#/projects" className="transition hover:text-white">
                  Projects
                </a>
              </>
            )}

          </div>

          <p className="text-slate-500">
            © {year} 404 Team Not Found. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}