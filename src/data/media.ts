// src/data/media.ts

import { getProject } from './projects'

export type MediaItem =
  | { type: 'video'; id: string; title: string }
  | { type: 'image'; src: string; alt: string; caption: string }

const youtubeId = (url: string) => url.match(/(?:youtu\.be\/|v=)([\w-]{11})/)?.[1]

/** "01_home-page.png" -> "Home page" */
const captionFromFile = (file: string) => {
  const name = (file.split('/').pop() ?? file)
    .replace(/(\.[a-z0-9]+)+$/i, '')
    .replace(/^\d+[_-]?/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Screenshot'
}

/** Videos first, then screenshots sourced directly from the Project record. */
export function getMedia(slug: string): MediaItem[] {
  const project = getProject(slug)
  if (!project) return []

  const videos: MediaItem[] = project.links.flatMap((l) => {
    const id = youtubeId(l.href)
    return id
      ? [
          {
            type: 'video' as const,
            id,
            title: `${project.title}: ${l.label}`,
          },
        ]
      : []
  })

  const folder = project.media.folder
  const shots = project.media.shots ?? []

  if (!folder || shots.length === 0) return videos

  const images: MediaItem[] = shots.map((shot) => {
    const caption = shot.caption ?? captionFromFile(shot.file)
    return {
      type: 'image' as const,
      src: encodeURI(`/projects/${folder}/${shot.file}`),
      alt: `${project.title}: ${caption}`,
      caption,
    }
  })

  return [...videos, ...images]
}

export const youtubeThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`