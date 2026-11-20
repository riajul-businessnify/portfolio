// src/components/header.tsx

import Link from 'next/link'
import { profile } from '@/data/profile'
import { ThemeToggle } from './theme-toggle'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-muted sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
