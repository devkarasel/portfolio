'use client'

import { useInView } from 'react-intersection-observer'

const CERTS = [
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    version: 'v8',
    url: 'https://www.freecodecamp.org/certification/dev-khorshed-alam-rasel/javascript-algorithms-and-data-structures-v8',
    icon: '⚡',
    color: '#F7DF1E',
    skills: ['JavaScript', 'Algorithms', 'Data Structures', 'OOP', 'Functional Programming'],
    year: '2024',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    version: 'v1',
    url: 'https://www.freecodecamp.org/certification/dev-khorshed-alam-rasel/responsive-web-design',
    icon: '🎨',
    color: '#00E5FF',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Accessibility'],
    year: '2024',
  },
]

function CertCard({ cert, index }: { cert: typeof CERTS[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <a
      ref={ref}
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-surface border border-border p-6 flex flex-col gap-5 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/40 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 20% 20%, ${cert.color}08 0%, transparent 60%)` }}
      />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/20 group-hover:border-accent/60 transition-colors duration-300" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0 border border-border"
            style={{ background: `${cert.color}10` }}
          >
            {cert.icon}
          </div>
          <div>
            <div className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: cert.color }}>
              {cert.issuer}
            </div>
            <div className="font-mono text-xs text-muted">{cert.year}</div>
          </div>
        </div>
        <svg
          className="text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1"
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-3xl text-text leading-tight group-hover:text-accent transition-colors duration-300">
        {cert.title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {cert.skills.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border font-mono text-xs text-muted group-hover:text-accent transition-colors">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Verify Certificate
      </div>
    </a>
  )
}

export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certificates" className="relative py-28">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="section-label mb-3">05 — Certifications</p>
          <h2 className="font-display text-5xl md:text-7xl text-text leading-none">
            VERIFIED<br />
            <span className="text-accent">SKILLS</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {CERTS.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
