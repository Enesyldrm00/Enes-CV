import { useState } from 'react'
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const CONTACT_LINKS = [
  { icon: Mail,     label: 'Email',    value: 'enesbb137@gmail.com',              href: 'mailto:enesbb137@gmail.com' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/Enesyldrm00',           href: 'https://github.com/Enesyldrm00' },
  { icon: Linkedin, label: 'LinkedIn', value: 'muhammed-enes-yıldırım',           href: 'https://www.linkedin.com/in/muhammed-enes-yıldırım' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = field => e => setForm(p => ({ ...p, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:enesbb137@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputCls = 'w-full px-4 py-3 rounded-lg bg-[#0a1525] border border-[#1a2d4a] focus:border-[#2d5080] focus:outline-none text-slate-300 placeholder:text-slate-700 text-sm transition-colors duration-200'

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-xs text-slate-600 font-mono uppercase tracking-widest">
            — Contact
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mt-2">Get in Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#0a1525]/60 border border-[#1a2d4a] hover:border-[#2a4060] transition-colors duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0f1e33] border border-[#1e3050] flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-600 uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">{value}</p>
                </div>
              </a>
            ))}

            <div className="p-4 rounded-lg border border-[#1a2d4a] bg-[#0a1525]/40 mt-2">
              <p className="text-slate-500 text-sm leading-relaxed">
                Currently seeking <span className="text-slate-300">backend</span> and{' '}
                <span className="text-slate-300">blockchain</span> internship opportunities.
                Available for remote or Ankara-based positions.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" placeholder="Your Name" value={form.name} onChange={set('name')} required className={inputCls} />
            <input type="email" placeholder="Your Email" value={form.email} onChange={set('email')} required className={inputCls} />
            <textarea
              placeholder="Your Message..."
              value={form.message}
              onChange={set('message')}
              required
              rows={5}
              className={`${inputCls} resize-none`}
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1e3a6e] hover:bg-[#254a8a] border border-[#2d5199] text-slate-200 hover:text-white font-medium text-sm transition-all duration-200"
            >
              {submitted ? <><CheckCircle size={14} /> Opened!</> : <><Send size={14} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
