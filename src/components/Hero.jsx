import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

const ROLES = [
  'Backend Developer',
  'Blockchain Enthusiast',
  'Node.js Engineer',
  'Web3 Builder',
]

function useTypewriter(words) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[idx]
    const speed = deleting ? 45 : 110
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 2200)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIdx(i => (i + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, idx, words])

  return text
}

export default function Hero({ cvData }) {
  const typedRole = useTypewriter(ROLES)

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c19] via-[#07101f] to-[#060c19]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060c19] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">

          {/* Photo */}
          <div className="flex-shrink-0 order-1 md:order-2">
            <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div className="absolute -inset-px rounded-full bg-gradient-to-br from-[#2d4a7a] to-[#1a2d4f]" />
              <div className="relative w-full h-full rounded-full border border-white/8 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Muhammed Enes Yıldırım"
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="hidden w-full h-full bg-[#0f1d35] items-center justify-center text-4xl font-bold text-slate-300"
                  style={{ display: 'none' }}
                >
                  MEY
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <p className="text-slate-500 text-xs font-mono tracking-widest uppercase mb-5">
              muhammed enes yıldırım
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight text-white">
              {cvData?.name || 'Muhammed Enes Yıldırım'}
            </h1>

            <div className="h-7 mb-7 flex items-center justify-center md:justify-start">
              <span className="text-base md:text-lg text-slate-400 font-mono">
                {typedRole}
                <span className="text-[#4a7ac8] animate-pulse">|</span>
              </span>
            </div>

            <div className="flex items-center gap-2 mb-9 justify-center md:justify-start text-slate-600 text-xs">
              <MapPin size={12} />
              <span>Ankara, Turkey · Karabük University</span>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://github.com/Enesyldrm00"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d1a2e] hover:bg-[#122040] border border-[#1e2f48] hover:border-[#2a4070] text-slate-300 hover:text-white transition-all duration-200 text-sm font-medium"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muhammed-enes-yıldırım"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d1a2e] hover:bg-[#122040] border border-[#1e2f48] hover:border-[#2a4070] text-slate-300 hover:text-white transition-all duration-200 text-sm font-medium"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href="mailto:enesbb137@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1e3a6e] hover:bg-[#254a8a] border border-[#2d5199] text-white transition-all duration-200 text-sm font-medium"
              >
                <Mail size={15} />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
