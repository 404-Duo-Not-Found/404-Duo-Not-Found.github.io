import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          SUA ORG
        </a>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">Sobre</a>
          <a href="#services" className="hover:text-white">Serviços</a>
          <a href="#projects" className="hover:text-white">Projetos</a>
          <a href="#team" className="hover:text-white">Equipa</a>
          <a href="#contact" className="hover:text-white">Contacto</a>
        </nav>

        <button
          className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-300">
            <a href="#about" onClick={() => setOpen(false)}>Sobre</a>
            <a href="#services" onClick={() => setOpen(false)}>Serviços</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projetos</a>
            <a href="#team" onClick={() => setOpen(false)}>Equipa</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </header>
  )
}