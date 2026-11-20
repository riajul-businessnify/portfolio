// src/components/projects.tsx

import Link from 'next/link'
import { projects } from '@/data/projects'
import { Section } from './section'
import { Tag } from './tag'
import { getMedia, youtubeThumb } from '@/data/media'

interface ICover { 
	slug: string; 
	title: string 
}

const Cover = ({ slug, title }: ICover) => {
  const first = getMedia(slug)[0]
  if (!first) return null

  const src = first.type === 'video' ? youtubeThumb(first.id) : first.src

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-bg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`${title} preview`} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      {first.type === 'video' && (
        <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 font-mono text-xs text-white">▶ Video</span>
      )}
    </div>
  )
}

export function Projects() {
  const [featured, ...rest] = projects
  return (
    <Section id="work" eyebrow="Selected work" title="Systems I have built and run">
      <Link
        href={`/projects/${featured.slug}`}
        className="group block rounded-2xl border border-line bg-surface p-8 transition hover:border-accent sm:p-10"
      >
        <Cover slug={featured.slug} title={featured.title} />
        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">
          Featured · {featured.kicker}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight">{featured.title}</h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{featured.summary}</p>
        <ul className="mt-6 grid gap-2 text-sm ">
          {featured.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-accent">→</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {featured.stack.slice(0, 8).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium group-hover:text-accent">Read the case study →</p>
      </Link>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-accent"
          >
            <Cover slug={p.slug} title={p.title} />
            <p className="mt-5 font-mono text-xs text-muted">{p.kicker}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.slice(0, 4).map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
