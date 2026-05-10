import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060c19]/90 backdrop-blur-md border-b border-[#1a2d4a]/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#about" className="text-lg font-bold text-slate-200 tracking-tight">
            MEY
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-500 hover:text-slate-200 transition-colors text-sm font-medium"
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:enesbb137@gmail.com"
              className="px-4 py-1.5 rounded-lg border border-[#1e3050] text-slate-400 hover:text-slate-200 hover:border-[#2a4070] transition-all text-sm font-medium"
            >
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden text-slate-500 hover:text-slate-200 transition-colors"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#060c19]/95 backdrop-blur-md border-b border-[#1a2d4a]/60">
          <div className="px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-400 hover:text-slate-200 transition-colors py-1 text-sm font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
