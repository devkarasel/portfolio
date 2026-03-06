'use client'

import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Accent blob */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,77,0,0.06) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — visual block */}
          <div
            className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Code block decoration */}
            <div className="relative bg-surface border border-border p-8 font-mono text-sm leading-relaxed">
              {/* Window dots */}
              <div className="flex gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-auto text-xs text-muted">about.ts</span>
              </div>
              <pre className="text-xs md:text-sm overflow-auto">
                <span className="text-cyan-400">const</span>{' '}
                <span className="text-text">developer</span>{' '}
                <span className="text-accent">=</span>{' '}
                <span className="text-text">{'{'}</span>
                {'\n'}
                {'  '}<span className="text-cyan-300">name</span>
                <span className="text-accent">:</span>{' '}
                <span className="text-green-400">"devkarasel"</span>
                {',\n'}
                {'  '}<span className="text-cyan-300">role</span>
                <span className="text-accent">:</span>{' '}
                <span className="text-green-400">"Full Stack Developer"</span>
                {',\n'}
                {'  '}<span className="text-cyan-300">location</span>
                <span className="text-accent">:</span>{' '}
                <span className="text-green-400">"Remote 🌍"</span>
                {',\n'}
                {'  '}<span className="text-cyan-300">stack</span>
                <span className="text-accent">:</span>{' '}
                <span className="text-text">[</span>
                {'\n'}
                {'    '}<span className="text-green-400">"Next.js"</span>
                {', '}
                <span className="text-green-400">"React"</span>
                {',\n'}
                {'    '}<span className="text-green-400">"Node.js"</span>
                {', '}
                <span className="text-green-400">"TypeScript"</span>
                {',\n'}
                {'  '}<span className="text-text">],</span>
                {'\n'}
                {'  '}<span className="text-cyan-300">openToWork</span>
                <span className="text-accent">:</span>{' '}
                <span className="text-orange-400">true</span>
                {',\n'}
                <span className="text-text">{'}'}</span>
              </pre>

              {/* Orange accent corner */}
              <div className="absolute -bottom-0.5 -right-0.5 w-8 h-8 border-b-2 border-r-2 border-accent" />
              <div className="absolute -top-0.5 -left-0.5 w-8 h-8 border-t-2 border-l-2 border-accent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-accent text-bg font-mono text-xs px-4 py-2 tracking-widest uppercase">
              Open to Work
            </div>
          </div>

          {/* Right — text */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <p className="section-label mb-4">01 — About Me</p>
            <h2 className="font-display text-5xl md:text-6xl text-text mb-6 leading-none">
              CRAFTING<br />
              <span className="text-accent">DIGITAL</span><br />
              SOLUTIONS
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m a passionate full-stack developer with a love for building products that make an impact.
              From architecting robust APIs to crafting silky-smooth user interfaces, I bridge the gap between design and engineering.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              My current stack revolves around the JavaScript ecosystem — Next.js on the frontend,
              Node.js on the backend, with databases ranging from PostgreSQL to MongoDB depending on the project needs.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'GraphQL', 'Prisma', 'Tailwind CSS', 'MongoDB'].map(
                (tech) => (
                  <span key={tech} className="tag-accent">{tech}</span>
                )
              )}
            </div>

            <a
              href="https://github.com/devkarasel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub Profile
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
