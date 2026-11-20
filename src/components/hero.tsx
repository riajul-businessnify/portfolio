// src/components/hero.tsx

import { profile } from '@/data/profile'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          {profile.availability}
        </p>
        <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.intro}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/projects/businessnify"
            className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-85"
          >
            View Businessnify case study
          </a>
          <a
            href={profile.resumeUrl}
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition hover:bg-surface"
          >
            Download CV
          </a>
        </div>
        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="bg-surface p-6">
              <dt className="text-3xl font-semibold tracking-tight">{s.value}</dt>
              <dd className="mt-2 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
