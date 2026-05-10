import { useGitHub } from '../hooks/useGitHub'
import { Star, GitFork, ExternalLink, Github } from 'lucide-react'

const FALLBACK_COLORS = {
  JavaScript: '#b8943a',
  TypeScript: '#3a6bbf',
  Python: '#3a6a9e',
  PHP: '#5a4a80',
  HTML: '#8b3a20',
  EJS: '#6b2a3a',
  Makefile: '#3a5e1e',
  Java: '#7a4a10',
  C: '#4a4a4a',
  'C++': '#8a3a5a',
  Go: '#1a6a7a',
  Rust: '#8a5a3a',
  Shell: '#3a6a2a',
}

function SkeletonCard() {
  return (
    <div className="rounded-xl bg-[#0a1525]/60 border border-[#1a2d4a] p-5 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="h-3.5 bg-[#1a2d4a] rounded w-2/3" />
        <div className="h-3.5 w-3.5 bg-[#1a2d4a] rounded" />
      </div>
      <div className="space-y-2 mb-5">
        <div className="h-2.5 bg-[#1a2d4a] rounded w-full" />
        <div className="h-2.5 bg-[#1a2d4a] rounded w-4/5" />
      </div>
      <div className="flex gap-3">
        <div className="h-4 w-14 bg-[#1a2d4a] rounded" />
        <div className="h-4 w-8 bg-[#1a2d4a] rounded" />
      </div>
    </div>
  )
}

function RepoCard({ repo }) {
  const langColor =
    repo.primaryLanguage?.color ||
    FALLBACK_COLORS[repo.primaryLanguage?.name] ||
    '#4a5568'

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl bg-[#0a1525]/60 border border-[#1a2d4a] hover:border-[#2a4060] p-5 transition-colors duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <Github size={13} className="text-[#2d4a6a] flex-shrink-0" />
          <h3 className="text-slate-300 font-semibold text-sm group-hover:text-slate-100 transition-colors truncate">
            {repo.name}
          </h3>
        </div>
        <ExternalLink size={12} className="text-[#2d4a6a] group-hover:text-slate-500 flex-shrink-0 ml-2 mt-0.5 transition-colors" />
      </div>

      <p className="text-slate-600 text-xs leading-relaxed flex-1 mb-5 line-clamp-3">
        {repo.description || 'No description provided.'}
      </p>

      <div className="flex items-center gap-4 text-xs text-slate-700">
        {repo.primaryLanguage && (
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: langColor }} />
            <span className="text-slate-500">{repo.primaryLanguage.name}</span>
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={10} />
          {repo.stargazerCount}
        </span>
        {repo.forkCount > 0 && (
          <span className="flex items-center gap-1">
            <GitFork size={10} />
            {repo.forkCount}
          </span>
        )}
      </div>
    </a>
  )
}

export default function Projects() {
  const { repos, loading, error } = useGitHub()

  return (
    <section id="projects" className="py-20 bg-[#07101f]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-xs text-slate-600 font-mono uppercase tracking-widest">
            — Projects
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mt-2">
            Pinned Repositories
          </h2>
        </div>

        {error && (
          <p className="text-slate-600 text-sm mb-8">
            Could not load pinned repos.{' '}
            <a href="https://github.com/Enesyldrm00" target="_blank" rel="noopener noreferrer" className="text-[#4a7ac8] hover:underline">
              View on GitHub →
            </a>
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : repos.map((repo, i) => <RepoCard key={i} repo={repo} />)}
        </div>
      </div>
    </section>
  )
}
