// src/data/projects.ts

export type ProjectShot = {
  file: string
  caption?: string
}

export type ProjectMedia = {
  folder: string
  shots: ProjectShot[]
}

export type Project = {
  slug: string
  title: string
  kicker: string
  summary: string
  highlights: string[]
  stack: string[]
  links: { label: string; href: string }[]
  media: ProjectMedia
  featured?: boolean
  live?: boolean
}

export const projects: Project[] = [
  {
    slug: 'businessnify',
    title: 'Businessnify',
    kicker: 'Multi-tenant SaaS platform',
    summary:
      'A platform where anyone can launch a branded online business in minutes. Each business gets its own storefront, dashboard, isolated database and custom domain with free automatic SSL. E-commerce is live; Restaurant, Medicine and Vehicle types share the same foundation.',
    highlights: [
      'One isolated database per tenant, with per-tenant backup and restore',
      'Automatic provisioning: database, roles, admin user, branch, warehouse and settings',
      'Subdomain and custom-domain routing with verification and dynamic SSL',
      'Subscriptions: tiers, proration, coupons, per-country price books, renewals',
      'RBAC with custom roles, 200+ permissions and wildcard permissions',
      'Payments: Cash on Delivery, Stripe, SSLCommerz with webhook validation',
      'Real-time notifications over Socket.IO',
      'Email, SMS gateway and WhatsApp Cloud API with credential fallback',
    ],
    stack: [
      'TypeScript', 'Node.js', 'Express', 'Mongoose', 'Zod', 'React', 'Next.js',
      'RTK Query', 'Socket.IO', 'MongoDB', 'Redis', 'Docker', 'Caddy', 'GitHub Actions',
    ],
    links: [
      { label: 'SaaS Platform', href: 'https://businessnify.com' },
      { label: 'Tenant (shop)', href: 'https://shop.businessnify.com' },
      { label: 'SaaS demo video', href: 'https://youtu.be/ldFj1BocOQc' },
      { label: 'Store demo video', href: 'https://youtu.be/hjB5YeucsHo' },
      { label: 'GitHub (Details)', href: 'https://github.com/riajul-businessnify/businessnify' },
    ],
    media: {
      folder: 'businessnify',
      shots: [
        // SaaS platform
        { file: 'saas/landing.png', caption: 'SaaS landing page' },
        { file: 'saas/business-types.png', caption: 'Choose a business type' },
        { file: 'saas/pricing.png', caption: 'Subscription pricing' },
        { file: 'saas/pricing-and-checkout.png', caption: 'Pricing and checkout' },
        // Tenant (e-commerce) store
        { file: 'ecommerce/landing-page.png', caption: 'Tenant store: landing page' },
        { file: 'ecommerce/shop-products.png', caption: 'Tenant store: products' },
        { file: 'ecommerce/checkout.png', caption: 'Tenant store: checkout' },
        { file: 'ecommerce/credentials.png', caption: 'Demo store credentials' },
        { file: 'ecommerce/dashboard.png', caption: 'Tenant admin dashboard' },
        { file: 'ecommerce/inventory.png', caption: 'Inventory management' },
      ],
    },
    featured: true,
    live: true,
  },
  {
    slug: 'bizlyne',
    title: 'Bizlyne ERP',
    kicker: 'Multi-tenant ERP',
    summary:
      'A complete ERP ecosystem serving HRM, CRM, POS, medicine shops, general stores and multi-category e-commerce, with dynamic subdomains per shop.',
    highlights: [
      'Auto-generated subdomains for each shop',
      'HRM, CRM and inventory modules with enterprise data models',
      'Granular RBAC for multi-tenant user groups',
      'Docker Compose and Nginx reverse proxy on VPS',
    ],
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'React', 'Tailwind CSS', 'Docker', 'Kubernetes'],
    links: [
      { label: 'Website', href: 'https://bizlyne.com/' },
      { label: 'Source', href: 'https://github.com/JavaScriptForEverything/bizlyne-9am' },
    ],
    media: {
      folder: 'bizlyne',
      shots: ['page-1.png', 'page-2.png', 'page-3.png', 'page-4.png', 'page-5.png'].map((file) => ({
        file,
      })),
    },
  },
  {
    slug: 'readyhow',
    title: 'ReadyHow',
    kicker: 'B2B multi-vendor marketplace',
    summary:
      'A marketplace with vendor onboarding, commission calculation, approval workflows and real-time chat between vendors and buyers.',
    highlights: [
      'Role-based panels for vendors, admins and customers',
      'Automated commission calculation',
      'Multi-level admin approval workflows',
      'SSLCommerz and Cash on Delivery checkout',
    ],
    stack: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Socket.IO', 'Docker'],
    links: [
      { label: 'Website', href: 'https://readyhow.com/' },
      { label: 'Source', href: 'https://github.com/JavaScriptForEverything/ready-how' },
    ],
    media: {
      folder: 'readyHow',
      shots: ['home.png', '2.png', '3.png', '4.png'].map((file) => ({ file })),
    },
  },
  {
    slug: 'emart',
    title: 'E-mart',
    kicker: 'E-commerce platform',
    summary:
      'A full retail platform with multi-provider login, real-time inventory, Stripe and SSLCommerz payments, and automated backup and restore.',
    highlights: [
      'Google, Facebook and email authentication',
      'Advanced search by price, rating and date',
      'Large file handling with streaming',
      'Automated database backup and restore',
    ],
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'Next.js', 'Docker'],
    links: [{ label: 'Source', href: 'https://github.com/JavaScriptForEverything/nmart/' }],
    media: {
      folder: 'nmart',
      shots: ['home.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'].map((file) => ({
        file,
      })),
    },
  },
  {
    slug: 'connectme',
    title: 'ConnectMe',
    kicker: 'Real-time communication',
    summary:
      'Messaging and calling app with text, image and audio messages, plus peer-to-peer file sharing up to 2 GB over WebRTC data channels.',
    highlights: [
      'Audio and video calling',
      'Peer-to-peer large file transfer with progress',
      'Image crop and resize before upload',
      'Search across friends, users and messages',
    ],
    stack: ['Node.js', 'WebRTC', 'Socket.IO', 'MongoDB', 'Service Worker'],
    links: [
      { label: 'Live', href: 'https://messenger-1-73xb.onrender.com/' },
      { label: 'Video', href: 'https://youtu.be/uQtPaz1XYVE' },
    ],
    media: {
      folder: 'messenger',
      shots: [
        'home-page.png',
        'active-users.png',
        'home-page-drag-and-drop-and-emoji-message-dialog.png',
        'home-page-search-firends.png',
        'home-page-search-message.png',
        'home-page-search-people.png',
        'image-upload.png',
        'image-upload-crop-and-image-slide.png',
        'start-larg-file-sharing.png',
        'file-upload-progress-bar.png',
        'complete-large-file-shared.png',
        'caller-side-outgoing-call.png',
        'callee-side-incomming-call.png',
        'incomming-outgoing-dialog.png',
        'call-busy-dialog-on-engaged-user.png',
        'called-engaged.png',
        'caller-or-callee-side-error-call.png',
        'profile-page.png',
      ].map((file) => ({ file })),
    },
  },
  {
    slug: 'webrtc-video-call',
    title: 'WebRTC Video Call',
    kicker: 'Peer-to-peer video',
    summary:
      'Browser-to-browser video calling with messaging, screen sharing and recording, using WebRTC with Socket.IO for signalling.',
    highlights: ['Screen sharing and recording', 'Data-channel messaging', 'Mobile and desktop layouts'],
    stack: ['WebRTC', 'Socket.IO', 'Express', 'Tailwind CSS'],
    links: [
      { label: 'Live', href: 'https://webrtc-video-call-yt6x.onrender.com/' },
      { label: 'Source', href: 'https://github.com/JavaScriptForEverything/webrtc' },
      { label: 'Video', href: 'https://youtu.be/67tf9qnA1Bg' },
    ],
    media: {
      folder: 'webrtc',
      shots: [
        '01_home-page-desktop-view.png',
        '02_home-page-mobile-view-with-panel.png',
        '03_home-page-mobile-view-hide-panel.png.png',
        '04_caller-side-desktop-view.png',
        '05_callee-side-mobile-view.png',
        '06_reject-view.png',
        '07_reject-view.png',
        '08_accept-view.png',
        '09_accept-view.png',
        '10_typing_message.png',
        '11_messaging view.png',
        '12_screen-sharing.png',
        '13_screen-sharing.png',
        '14_recording.png',
        '15_play_recording_video.png',
        '16_error-handling-view.png',
      ].map((file) => ({ file })),
    },
  },
  {
    slug: 'react-native-app',
    title: 'Shopping Showroom Mobile App',
    kicker: 'Cross-platform mobile app',
    summary:
      'React Native mobile app built on top of the shopping showroom backend API, featuring Stripe QR payment flows and mobile-friendly commerce views.',
    highlights: [
      'Cross-platform mobile UI for Android and iOS',
      'Shared backend API with the web showroom',
      'Stripe QR code payment flow',
      'Image cropping and search features',
    ],
    stack: ['React Native', 'Node.js', 'Socket.IO', 'Tailwind CSS'],
    links: [
      { label: 'Source', href: 'https://github.com/JavaScriptForEverything/react-native' },
    ],
    media: {
      folder: 'react-native',
      shots: [
        'cover-photo.png',
        'images-1.png',
        'images-2.png',
        'images-3.png',
        'images-4.png',
        'images-5.png',
        'images-6.png',
        'images-7.png',
      ].map((file) => ({ file })),
    },
  },

	// {
  //   slug: 'twitter-clone',
  //   title: 'Twitter Clone',
  //   kicker: 'Social feed & real-time chat',
  //   summary:
  //     'Full-stack social media application with tweets, comments, likes, follow/unfollow, notifications, and private plus group chat over Socket.IO.',
  //   highlights: [
  //     'Tweets, replies, likes, unlikes and self-comment deletion',
  //     'Private and group chat with real-time notifications',
  //     'Image cropping and resizing before upload',
  //     'Search across friends, users, tweets and messages',
  //   ],
  //   stack: ['Node.js', 'Socket.IO', 'MongoDB', 'Tailwind CSS', 'Pug'],
  //   links: [
  //     { label: 'Live', href: 'https://twitter-clone-06nd.onrender.com/' },
  //     { label: 'Video', href: 'https://youtu.be/pSLaFQgS7qQ' },
  //   ],
  //   media: {
  //     folder: 'twitter-clone',
  //     shots: [
  //       { file: 'cover-photo.png', caption: 'Cover overview' },
  //       { file: 'home_page.png', caption: 'Home feed' },
  //       { file: 'tweet-details-page.png', caption: 'Tweet details and replies' },
  //       { file: 'reply-tweet.png', caption: 'Reply modal' },
  //       { file: 'chat-page.png', caption: 'Chat inbox' },
  //       { file: 'sing-chat.png', caption: 'Direct message view' },
  //       { file: 'group-chat-1.png', caption: 'Group chat room' },
  //       { file: 'group-chat-reply.png', caption: 'Group chat thread' },
  //       { file: 'notification-page.png', caption: 'Notifications' },
  //       { file: 'search-page.png', caption: 'Search' },
  //       { file: 'search-tweets.png', caption: 'Tweet search' },
  //       { file: 'searching-result.png', caption: 'Search results' },
  //       { file: 'emoji.png', caption: 'Emoji picker' },
  //       { file: 'muli-user.png', caption: 'Multi-user activity' },
  //     ],
  //   },
  // },
  // {
  //   slug: 'dream-touch',
  //   title: 'Dream Touch Interior Design',
  //   kicker: 'Interior design portfolio',
  //   summary:
  //     'Portfolio platform for an interior design studio featuring project galleries, room visualization concepts, and client collaboration tools.',
  //   highlights: [
  //     'Project galleries and room visualization concepts',
  //     'Client mood board and collaboration workflows',
  //     'Design blog and lead generation sections',
  //     'Containerized deployment stack',
  //   ],
  //   stack: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'React', 'Tailwind CSS', 'Docker'],
  //   links: [
  //     { label: 'Live', href: 'http://157.173.218.4:3000/' },
  //     { label: 'Source', href: 'https://github.com/JavaScriptForEverything/dream-touch-portfolio' },
  //   ],
  //   media: {
  //     folder: 'dream-touch',
  //     shots: [
  //       'page-1.png',
  //       'page-2.png',
  //       'page-3.png',
  //       'page-4.png',
  //       'page-5.png',
  //     ].map((file) => ({ file })),
  //   },
  // },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)