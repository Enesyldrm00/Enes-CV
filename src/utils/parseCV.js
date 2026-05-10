export async function fetchCV() {
  const res = await fetch('/cv.md')
  if (!res.ok) throw new Error('Failed to fetch cv.md')
  return res.text()
}

export function parseCV(text) {
  const lines = text.split('\n').map(l => l.trim())
  const nonEmpty = lines.filter(Boolean)

  // SUMMARY and EDUCATION are on the same line in this cv.md format
  // e.g. "SUMMARY: I am... EDUCATION: Karabük..."
  const summaryMatch = text.match(/SUMMARY:\s*([\s\S]*?)(?=\s+EDUCATION:)/)
  const summary = summaryMatch ? summaryMatch[1].trim() : ''

  const educationMatch = text.match(/EDUCATION:\s*([\s\S]*?)(?=TECHNICAL SKILLS)/)
  const education = educationMatch ? educationMatch[1].trim() : ''

  const skillsMatch = text.match(/TECHNICAL SKILLS\s*([\s\S]*?)(?=CERTIFICATIONS)/)
  const skills = skillsMatch ? skillsMatch[1].trim() : ''

  const certsMatch = text.match(/CERTIFICATIONS\s*([\s\S]*)$/)
  const certifications = certsMatch ? certsMatch[1].trim() : ''

  return {
    name: nonEmpty[0] || 'Muhammed Enes Yıldırım',
    summary,
    education,
    skills,
    certifications,
  }
}
