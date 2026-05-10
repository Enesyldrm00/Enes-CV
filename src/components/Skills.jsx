const SKILL_GROUPS = [
  {
    title: 'Backend & Infrastructure',
    label: '01',
    accent: 'border-l-[#2d5199]',
    skills: [
      'Node.js', 'Express.js', 'PostgreSQL', 'MySQL',
      'MongoDB', 'Docker', 'REST API', 'OOP',
    ],
  },
  {
    title: 'Blockchain / Web3',
    label: '02',
    accent: 'border-l-[#1e3d5c]',
    skills: [
      'Stellar Blockchain', 'Soroban', 'Smart Contracts', 'Web3', 'DeFi',
    ],
  },
  {
    title: 'Languages & Tools',
    label: '03',
    accent: 'border-l-[#2a3d5c]',
    skills: [
      'JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'Git', 'HTML / CSS',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-xs text-slate-600 font-mono uppercase tracking-widest">
            — Technical Skills
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mt-2">What I Work With</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(group => (
            <div
              key={group.title}
              className={`rounded-xl bg-[#0a1525]/60 border border-[#1a2d4a] border-l-2 ${group.accent} p-6 hover:border-[#243d5c] transition-colors duration-200`}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-slate-200 font-semibold text-sm">{group.title}</h3>
                <span className="text-xs font-mono text-slate-700">{group.label}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#0f1e33] text-slate-400 border border-[#1e3050] hover:text-slate-200 hover:border-[#2a4070] transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
