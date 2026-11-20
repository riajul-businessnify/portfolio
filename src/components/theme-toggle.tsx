// src/components/theme-toggle.tsx
'use client'

export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
  }
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:text-fg"
    >
      <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.8">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  )
}
