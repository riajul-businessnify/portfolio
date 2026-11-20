// src/data/profile.ts

export const profile = {
  name: 'Riajul Islam',
  role: 'Senior Full-Stack Engineer & Systems Architect',
  location: 'Dhaka, Bangladesh',
  siteUrl: 'https://javascriptforeverything.vercel.app',
  headline: 'I design and ship multi-tenant platforms that run in production.',
  intro: 'Full-stack engineer with 5+ years building scalable web systems end to end: TypeScript APIs, React and Next.js frontends, MongoDB and Redis data layers, and container-based deployment. Founder of Businessnify, a live multi-tenant SaaS platform.',
  email: 'riajul@businessnify.com',
  availability: 'Open to senior engineering roles, contracts and licensing conversations',
  resumeUrl: '/files/Riajul_Islam_Software_Engineer_CV.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/riajul-businessnify' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/riajul-businessnify' },
    { label: 'YouTube', href: 'https://youtube.com/@riajul-businessnify' },
    { label: 'X', href: 'https://x.com/businessnify' },
  ],
  stats: [
    { value: '5+', label: 'Years building production systems' },
    { value: '400+', label: 'RBAC permissions in one platform' },
    { value: '150s', label: 'Full build and deploy on a 2 vCPU VPS' },
    { value: '209 MB', label: 'Production Docker image size' },
  ],
}

export const skills = [
  {
    title: 'Backend',
    items: ['TypeScript', 'Node.js', 'Express', 'Mongoose', 'Zod', 'Socket.IO', 'REST', 'RBAC'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'RTK Query', 'React Hook Form', 'Tailwind CSS', 'Material UI'],
  },
  {
    title: 'Data',
    items: ['MongoDB', 'Redis', 'Multi-tenant design', 'Backups and restore', 'Caching'],
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Caddy', 'Nginx', 'GitHub Actions', 'Linux VPS', 'Kubernetes (planned)'],
  },
  {
    title: 'Payments and messaging',
    items: ['Stripe', 'SSLCommerz', 'SMTP', 'WhatsApp Cloud API', 'SMS gateway'],
  },
  {
    title: 'Real-time and P2P',
    items: ['WebSocket', 'WebRTC', 'Video calling', 'Large file transfer'],
  },
]


export const experience = [
  {
    company: 'Businessnify',
    role: 'Founder & Lead System Architect',
    period: 'Jan 2026 – Present',
    summary:
      'Solo architect and operator of a live multi-tenant SaaS platform—owning database isolation, automated provisioning, custom-domain SSL, RBAC, billing, inventory, backups, and CI/CD across a shared four-business foundation.',
    points: [
      'Routed subdomain and custom-domain traffic through one API to isolated per-tenant databases with LRU connection pooling and tenant-scoped Redis keys.',
      'Built idempotent post-checkout provisioning (DB, roles, admin, branch, warehouse, settings) so retries never leave half-built accounts.',
      'Automated zero-touch custom-domain TLS via Caddy on-demand issuance gated by a tenant-verification endpoint.',
      'Built AES-256 encrypted per-tenant gateway credentials (Stripe, SSLCommerz, SMTP, S3, SMS, WhatsApp, Telegram) with fallback chains and zero-downtime updates.',
      'Implemented granular RBAC (400+ permissions and wildcards) with UI/API action gating so unauthorized actions stay hidden rather than failing.',
      'Engineered subscription billing (proration, scheduled downgrades, wallet refunds, multi-currency pricing, idempotent webhooks) and atomic warehouse stock allocation.',
      'Added Redis rate limiting, cache invalidation, worker-isolated SHA-256 verified backups/restores, and a GitHub Actions → Docker Compose + Caddy pipeline (~209 MB images, ~150s deploy on a 2 vCPU / 3 GB VPS).',
    ],
  },
  {
    company: '9AM Solution',
    role: 'Senior Software Engineer',
    period: 'Previous',
    summary:
      'Led engineering on Bizlyne ERP—a multi-tenant platform for HRM, CRM, POS, and commerce with dynamic per-shop subdomains.',
    points: [
      'Built host-based multi-tenant routing with auto-generated subdomains per shop over a shared Express, TypeScript, and MongoDB stack.',
      'Delivered core HRM, CRM, and inventory modules with business-rule workflows, RBAC, OTP/Google OAuth, and Stripe/SSLCommerz payments.',
      'Set up Docker, Kubernetes, and Jenkins CI/CD pipelines with production deployments behind Nginx on VPS.',
    ],
  },
  {
    company: 'NGen IT',
    role: 'Full-Stack Web Developer',
    period: 'Previous',
    summary:
      'Built Nmart, a single-vendor e-commerce platform with dedicated storefront and admin subdomains.',
    points: [
      'Implemented email, OTP, and Google OAuth authentication alongside Stripe and SSLCommerz checkout.',
      'Built reusable query/filter/pagination API utilities, large-file streaming, and automated database backups.',
      'Deployed containerized services to VPS using Docker and Kubernetes.',
    ],
  }
]

