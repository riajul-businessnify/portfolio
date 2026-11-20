import { skills } from '@/data/profile'
import { Section } from './section'
import { Tag } from './tag'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Technology I use in production">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.title} className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="font-semibold">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
