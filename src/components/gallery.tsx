'use client'

import { useCallback, useEffect, useState } from 'react'
import type { MediaItem } from '@/data/media'

const thumbOf = (m: MediaItem) => (m.type === 'video' ? `https://i.ytimg.com/vi/${m.id}/hqdefault.jpg` : m.src)
const labelOf = (m: MediaItem) => (m.type === 'video' ? m.title : m.caption)

function Play() {
  return (
    <span className="absolute inset-0 grid place-items-center">
      <span className="grid size-16 place-items-center rounded-full bg-black/70 text-white ring-1 ring-white/30">
        <svg viewBox="0 0 24 24" className="size-6 fill-current"><path d="M8 5v14l11-7z" /></svg>
      </span>
    </span>
  )
}

function Slide({ item, playing }: { item: MediaItem; playing: boolean }) {
  if (item.type === 'video' && playing) {
    return (
      <iframe
        className="size-full"
        src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0`}
        title={item.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={thumbOf(item)}
      alt={item.type === 'image' ? item.alt : item.title}
      className="size-full bg-zinc-900 object-cover"
      loading="lazy"
    />
  )
}

function Arrow({ dir, onClick, className = '' }: { dir: 'prev' | 'next'; onClick: () => void; className?: string }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick() }}
      aria-label={dir === 'prev' ? 'Previous' : 'Next'}
      className={`absolute top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 ${dir === 'prev' ? 'left-3' : 'right-3'} ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="2">
        <path d={dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  )
}

export function Gallery({ items }: { items: MediaItem[] }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [open, setOpen] = useState(false)
  const count = items.length

  const go = useCallback(
    (step: number) => {
      setPlaying(false)
      setIndex((i) => (i + step + count) % count)
    },
    [count],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Escape') setOpen(false)
    }
    if (!open) return
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, go])

  if (!count) return null
  const item = items[index]

  const onStageClick = () => {
    if (item.type === 'video' && !playing) setPlaying(true)
    else if (item.type === 'image') setOpen(true)
  }

  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
        <div
          onClick={onStageClick}
          className={`relative size-full ${item.type === 'image' || !playing ? 'cursor-pointer' : ''}`}
        >
          <Slide item={item} playing={playing} />
          {item.type === 'video' && !playing && <Play />}
        </div>
        {count > 1 && (
          <>
            <Arrow dir="prev" onClick={() => go(-1)} />
            <Arrow dir="next" onClick={() => go(1)} />
          </>
        )}
        <button
          onClick={() => { setPlaying(false); setOpen(true) }}
          aria-label="Open full screen"
          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
        >
          <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="2">
            <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
          </svg>
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 text-sm text-muted">
        <p className="truncate">{labelOf(item)}</p>
        <p className="shrink-0 font-mono text-xs">{index + 1} / {count}</p>
      </div>

      {count > 1 && (
        <ul className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {items.map((m, i) => (
            <li key={i} className="shrink-0">
              <button
                onClick={() => { setPlaying(false); setIndex(i) }}
                aria-label={`Show item ${i + 1}`}
                className={`relative block aspect-video w-28 overflow-hidden rounded-lg border transition ${i === index ? 'border-accent' : 'border-line opacity-60 hover:opacity-100'}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumbOf(m)} alt="" className="size-full bg-zinc-900 object-cover" loading="lazy" />
                {m.type === 'video' && (
                  <span className="absolute inset-0 grid place-items-center bg-black/30 text-white">
                    <svg viewBox="0 0 24 24" className="size-5 fill-current"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex flex-col bg-black/[.98] p-4 sm:p-8"
        >
          <div className="flex items-center justify-between text-white/80">
            <p className="font-mono text-xs">{index + 1} / {count}</p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
            <div onClick={(e) => e.stopPropagation()} className="aspect-video max-h-full w-full max-w-6xl overflow-hidden rounded-xl bg-black">
              <div
                className="relative size-full"
                onClick={() => item.type === 'video' && !playing && setPlaying(true)}
              >
                <Slide item={item} playing={playing} />
                {item.type === 'video' && !playing && <Play />}
              </div>
            </div>
            {count > 1 && (
              <>
                <Arrow dir="prev" onClick={() => go(-1)} />
                <Arrow dir="next" onClick={() => go(1)} />
              </>
            )}
          </div>
          <p className="text-center text-sm text-white/80">{labelOf(item)}</p>
        </div>
      )}
    </div>
  )
}
