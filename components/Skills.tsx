'use client'

import { useInView } from 'react-intersection-observer'

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js / React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'Prisma / ORM', level: 80 },
    ],
  },
  {
    title: 'Database & Infra',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'cPanel / VPS', level: 75 },
      { name: 'Git / GitHub', level: 90 },
    ],
  },
]

const TOOLS = [
  'VS Code', 'Figma', 'Postman', 'Docker', 'Vercel', 'cPanel',
  'Stripe', 'Cloudinary', 'SendGrid', 'GitHub Actions',
]

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className={`transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs text-text tracking-wide">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="h-1 bg-border overflow-hidden">
        <div
          className="h-full bg-accent skill-bar-fill"
          style={{
            width: `${level}%`,
            animationPlayState: inView ? 'running' : 'paused',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="relative py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={ref} className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">03 — Skills</p>
          <h2 className="font-display text-5xl md:text-7xl text-text leading-none">
            TECH<br />
            <span className="text-accent">ARSENAL</span>
          </h2>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="space-y-5">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-cyan-400 mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-cyan-400" />
                {group.title}
              </h3>
              {group.skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="pt-10 border-t border-border">
          <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-5">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="font-mono text-xs text-text border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
