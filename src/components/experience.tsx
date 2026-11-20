import { experience } from '@/data/profile'
import { Section } from './section'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I have done the work">
      <ol className="divide-y divide-line border-y border-line">
        {experience.map((e) => (
          <li key={e.company} className="grid gap-4 py-8 md:grid-cols-[220px_1fr]">
            <div>
              <h3 className="font-semibold">{e.company}</h3>
              <p className="mt-1 text-sm text-muted">{e.role}</p>
              <p className="mt-1 font-mono text-xs text-muted">{e.period}</p>
            </div>
            <div>
              <p className="leading-relaxed text-muted">{e.summary}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
