'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const SOCIALS = [
  {
    label: 'Email',
    href: 'mailto:contact@devkarasel.com',
    display: 'contact@devkarasel.com',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/devkarasel',
    display: 'github.com/devkarasel',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/devkarasel',
    display: 'linkedin.com/in/devkarasel',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/devkarasel',
    display: 'x.com/devkarasel',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/devkarasel',
    display: 'facebook.com/devkarasel',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-32 grid-bg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[25vw] text-white/[0.02] leading-none">CONTACT</span>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className={`transition-all duration-700 mb-16 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">06 — Contact</p>
          <h2 className="font-display text-5xl md:text-7xl text-text leading-none">
            LET&apos;S<br /><span className="text-accent">WORK</span><br />TOGETHER
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — socials */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-muted leading-relaxed mb-8">
              Have a project in mind? Looking for a developer to bring your idea to life?
              Drop me a message or reach out on any platform below.
            </p>
            <div className="space-y-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 border border-border hover:border-accent/40 transition-all duration-200 bg-surface/50">
                  <div className="w-9 h-9 border border-border flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent transition-all duration-200 flex-shrink-0">
                    {s.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] tracking-widest text-muted uppercase mb-0.5">{s.label}</div>
                    <div className="font-mono text-xs text-text group-hover:text-accent transition-colors truncate">{s.display}</div>
                  </div>
                  <svg className="ml-auto text-muted group-hover:text-accent transition-colors flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>
          </div>
          {/* Right — Form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-muted tracking-widest uppercase mb-2 block">Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className="form-input" />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted tracking-widest uppercase mb-2 block">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className="form-input" />
                </div>
              </div>
              <div>
                <label className="font-mono text-xs text-muted tracking-widest uppercase mb-2 block">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry..." className="form-input" />
              </div>
              <div>
                <label className="font-mono text-xs text-muted tracking-widest uppercase mb-2 block">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} className="form-input resize-none" />
              </div>
              <button onClick={handleSubmit} disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-50">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                {status === 'idle' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
              </button>
              {status === 'success' && <p className="font-mono text-xs text-green-400 text-center pt-2">✓ Message sent! I&apos;ll get back to you soon.</p>}
              {status === 'error' && <p className="font-mono text-xs text-red-400 text-center pt-2">✗ Something went wrong. Please try again or email directly.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
