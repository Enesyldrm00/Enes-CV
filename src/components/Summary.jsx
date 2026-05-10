import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const STATS = [
  { label: 'GPA', value: '3.12' },
  { label: 'Year', value: '2nd Year' },
  { label: 'Language', value: 'English B1' },
]

export default function Summary({ cvData }) {
  if (!cvData?.summary) return null

  return (
    <section id="summary" className="py-20 bg-[#07101f]/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="text-xs text-slate-600 font-mono uppercase tracking-widest">
            — Summary
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mt-2">About Me</h2>
        </div>

        <div className="rounded-xl border border-[#1a2d4a] bg-[#0a1525]/60 p-7 md:p-10">
          <div className="text-slate-400 text-[15px] leading-[1.85] prose prose-invert max-w-none
            [&_p]:text-slate-400 [&_p]:leading-[1.85]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {cvData.summary}
            </ReactMarkdown>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1a2d4a] grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-[11px] text-slate-600 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-semibold text-slate-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
