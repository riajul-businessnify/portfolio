# Riajul Islam - Portfolio

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4. Dark and light theme, static pages, Docker ready.

## Run

    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Edit your content

- `src/data/profile.ts` - name, intro, stats, skills, experience, email, social links
- `src/data/projects.ts` - projects (each gets its own page at /projects/<slug>)
- `public/files/` - put your CV here as `Riajul_Islam_Software_Engineer_CV.pdf`

## Docker

    docker build -t portfolio .
    docker run -p 3000:3000 portfolio
