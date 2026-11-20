// src/components/section.tsx

interface ISection {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
}
export const Section = ({ id, eyebrow, title, children, }: ISection) => {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>

      <div className="mt-10">{children}</div>
    </section>
  )
}
