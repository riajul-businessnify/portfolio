import { profile } from '@/data/profile'
import { Section } from './section'

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let us build something solid">
      <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
        <p className="max-w-2xl leading-relaxed text-muted">
          I am open to senior engineering roles, contract work, and conversations about licensing
          Businessnify. The fastest way to reach me is email.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block text-2xl font-semibold tracking-tight hover:text-accent"
        >
          {profile.email}
        </a>
        <ul className="mt-8 flex flex-wrap gap-3">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-4 py-2 text-sm transition hover:bg-bg"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
