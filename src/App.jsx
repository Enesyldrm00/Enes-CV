import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { fetchCV, parseCV } from './utils/parseCV'

const FALLBACK_CV = {
  name: 'Muhammed Enes Yıldırım',
  summary:
    'Computer Engineering student at Karabük University focused on backend architectures using Node.js, Express.js, and PostgreSQL/MongoDB, with deep interest in blockchain and Web3 systems.',
  education: '',
  skills: '',
  certifications: '',
}

export default function App() {
  const [cvData, setCvData] = useState(null)

  useEffect(() => {
    fetchCV()
      .then(text => setCvData(parseCV(text)))
      .catch(() => setCvData(FALLBACK_CV))
  }, [])

  if (!cvData) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
          <p className="text-slate-600 text-sm font-mono">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero cvData={cvData} />
        <Summary cvData={cvData} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
