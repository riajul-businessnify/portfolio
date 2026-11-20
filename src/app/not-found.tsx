import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
        <Link href="/" className="mt-6 inline-block text-sm underline">Back home</Link>
      </div>
    </main>
  )
}
