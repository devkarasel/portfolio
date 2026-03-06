'use client'

import { useEffect, useRef } from 'react'

const TICKER_ITEMS = [
  'NEXT.JS', 'REACT', 'NODE.JS', 'TYPESCRIPT', 'GRAPHQL', 'TAILWIND', 'PRISMA', 'MONGODB',
  'NEXT.JS', 'REACT', 'NODE.JS', 'TYPESCRIPT', 'GRAPHQL', 'TAILWIND', 'PRISMA', 'MONGODB',
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let frame = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 77, 0, ${p.alpha})`
        ctx.fill()
      })

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255, 77, 0, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg scanlines">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Diagonal accent bar */}
      <div
        className="absolute right-0 top-0 h-full w-1/3 opacity-5 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, #FF4D00 100%)',
        }}
      />

      {/* Orange vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent opacity-40 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <p
          className="section-label mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Available for work
        </p>

        <h1
          className="font-display leading-none mb-4 animate-fade-up"
          style={{ fontSize: 'clamp(72px, 14vw, 180px)', animationDelay: '0.2s', opacity: 0 }}
        >
          <span
            className="glitch text-text block"
            data-text="FULL"
          >
            FULL
          </span>
          <span
            className="block text-accent"
          >
            STACK
          </span>
          <span
            className="block text-text"
          >
            DEV
          </span>
        </h1>

        <p
          className="font-body text-muted text-lg max-w-md mt-6 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          I build fast, modern web applications — from pixel-perfect UIs to scalable backend systems.
        </p>

        <div
          className="flex flex-wrap gap-4 mt-10 animate-fade-up"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-border animate-fade-up"
          style={{ animationDelay: '0.65s', opacity: 0 }}
        >
          {[
            { num: '4+', label: 'Projects Shipped' },
            { num: '3+', label: 'Years Coding' },
            { num: '∞', label: 'Coffee Consumed' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl text-accent">{s.num}</div>
              <div className="font-mono text-xs text-muted tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker tape */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-border/50 bg-surface/50 backdrop-blur-sm h-10 flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="font-mono text-xs text-muted mx-6 tracking-widest">
              <span className="text-accent mr-2">◆</span>{item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
