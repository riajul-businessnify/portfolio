// src/app/projects/[slug]/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, projects } from '@/data/projects'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Tag } from '@/components/tag'
import { Gallery } from '@/components/gallery'
import { getMedia } from '@/data/media'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  return project ? { title: project.title, description: project.summary } : {}
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  // Videos are shown in the gallery. Website links appear only when the site is live.
  const links = project.links.filter((l) => {
    if (/youtu\.?be/.test(l.href)) return false
    if (l.href.includes('github.com')) return true
    return project.live === true
  })

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/#work" className="text-sm text-muted hover:text-fg">
          ← All projects
        </Link>
        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">{project.kicker}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-10">
          <Gallery items={getMedia(project.slug)} />
        </div>

        <h2 className="mt-12 text-xl font-semibold">What it does</h2>
        <ul className="mt-4 space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 leading-relaxed">
              <span className="text-accent">→</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl font-semibold">Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        {links.length > 0 && (
          <>
        <h2 className="mt-12 text-xl font-semibold">Links</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-4 py-2 text-sm transition hover:bg-surface"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
