import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1a2d4a]/60 py-7 bg-[#060c19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#about" className="text-base font-bold text-slate-300">
            MEY
          </a>

          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} Muhammed Enes Yıldırım
          </p>

          <div className="flex items-center gap-5">
            <a href="https://github.com/Enesyldrm00" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-400 transition-colors" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/muhammed-enes-yıldırım" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="mailto:enesbb137@gmail.com" className="text-slate-700 hover:text-slate-400 transition-colors" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
