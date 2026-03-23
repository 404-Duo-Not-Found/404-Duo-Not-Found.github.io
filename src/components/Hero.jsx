export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_left,rgba(168,85,247,0.14),transparent_30%)]" />
      
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
            Site institucional para GitHub Pages
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Mostra a tua organização com um site moderno, rápido e profissional.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Template em React + Vite + Tailwind preparado para apresentar a missão, serviços, projetos e equipa da tua organização.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:opacity-90"
            >
              Ver projetos
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Falar connosco
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm text-slate-400">Projetos lançados</p>
              <p className="mt-2 text-3xl font-bold">12+</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm text-slate-400">Clientes ativos</p>
              <p className="mt-2 text-3xl font-bold">30+</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm text-slate-400">Foco</p>
              <p className="mt-2 text-lg font-semibold">Produto, design e performance</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm text-slate-400">Deploy</p>
              <p className="mt-2 text-lg font-semibold">Pronto para GitHub Pages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}