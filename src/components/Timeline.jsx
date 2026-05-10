const TIMELINE = [
  {
    period: '2023 — 2028',
    title: 'Karabük University',
    subtitle: "Bachelor's Degree · Computer Engineering",
    detail: 'GPA: 3.12 · 2nd Year · English B1',
    icon: '🎓',
    dotColor: 'bg-violet-500',
    lineColor: 'border-violet-500/30',
  },
  {
    period: '2026',
    title: 'CODE-2026 Blockchain',
    subtitle: 'Blockchain Development Certificate',
    detail: 'Blockchain development, smart contracts and Web3',
    icon: '⛓️',
    dotColor: 'bg-cyan-500',
    lineColor: 'border-cyan-500/30',
  },
  {
    period: '2025',
    title: 'Scaling Application Continuity',
    subtitle: 'Resilience Engineering Certificate',
    detail: 'Application scaling strategies and resilience patterns',
    icon: '📈',
    dotColor: 'bg-emerald-500',
    lineColor: 'border-emerald-500/30',
  },
  {
    period: '2024',
    title: 'Docker — Udemy',
    subtitle: 'Container Technologies Certificate',
    detail: 'Docker, containerization, image management and orchestration',
    icon: '🐳',
    dotColor: 'bg-sky-500',
    lineColor: 'border-sky-500/30',
  },
  {
    period: '2024',
    title: 'Oracle Certificate',
    subtitle: 'Database Technologies',
    detail: 'Oracle database fundamentals and SQL query optimization',
    icon: '🔴',
    dotColor: 'bg-red-500',
    lineColor: 'border-red-500/30',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-900/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-xs tracking-widest uppercase mb-3">
            My journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education & Certifications
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent" />

          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative flex gap-6 group">
                <div className="relative flex-shrink-0 flex items-start">
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full ${item.dotColor} flex items-center justify-center text-base border-4 border-slate-950 shadow-lg group-hover:scale-110 transition-transform duration-200`}
                  >
                    {item.icon}
                  </div>
                </div>

                <div className="flex-1 pb-6">
                  <div className="rounded-xl bg-slate-800/40 border border-slate-700/40 group-hover:border-slate-600/60 p-5 transition-all duration-200 hover:shadow-lg hover:shadow-black/20">
                    <span className="inline-block text-xs font-mono text-violet-400 mb-2 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
                      {item.period}
                    </span>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{item.subtitle}</p>
                    <p className="text-slate-600 text-xs">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
