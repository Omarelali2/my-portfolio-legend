export type Project = {
  name: string
  slug: string
  type: string
  role: string
  year: string
  description: string
  impact: string
  stack: string[]
  image: string
  live: string
  github: string
}

export const projects: Project[] = [
  {
    name: "Samsung Store",
    slug: "sumsung-store.vercel.app",
    type: "E-Commerce Platform",
    role: "Full-Stack Engineer",
    year: "2025",
    description:
      "A production-ready e-commerce experience built with clean product flows, responsive UI, and a scalable backend foundation.",
    impact: "Commerce system",
    stack: ["Next.js", "TypeScript", "MongoDB", "REST API"],
    image: "/sumsung.jpeg",
    live: "https://sumsung-store-frontend-i3ov.vercel.app/",
    github: "https://github.com/Omarelali2/sumsung-store-backend",
  },
  {
    name: "PowerPulse Gym",
    slug: "powerpulse.app",
    type: "Management SaaS",
    role: "Lead Full-Stack Developer",
    year: "2025",
    description:
      "A gym management platform focused on memberships, dashboards, user operations, and business workflow automation.",
    impact: "Business dashboard",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    image: "/gym.jpeg",
    live: "https://gymleb.vercel.app/",
    github: "https://github.com/Omarelali2/the-big-gym",
  },
  {
    name: "CodeLeb",
    slug: "codeleb.vercel.app",
    type: "Learning Platform",
    role: "Full-Stack Engineer",
    year: "2025",
    description:
      "A developer learning platform focused on real-world projects, AI collaboration, and skill validation through production-ready builds.",
    impact: "Developer learning",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
    image: "/codleb.jpeg",
    live: "https://codeleb.vercel.app/",
    github: "https://github.com/AZZAM-K/codeleb",
  },
  {
    name: "Buy Products",
    slug: "buy-products.vercel.app",
    type: "Premium Frontend",
    role: "Interface Engineer",
    year: "2025",
    description:
      "A premium frontend interface focused on motion, visual hierarchy, responsive layouts, and conversion-focused UI.",
    impact: "Premium UI",
    stack: ["React", "Framer Motion", "Tailwind", "UX"],
    image: "/forever.jpeg",
    live: "https://buy-products-six.vercel.app/",
    github: "https://github.com/Omarelali2/Buy_products",
  },
  {
    name: "LebSpace",
    slug: "lebspace.vercel.app",
    type: "Social Platform",
    role: "Founder & Full-Stack Developer",
    year: "2025",
    description:
      "A social platform for Lebanese developers focused on community, projects, and real-world learning.",
    impact: "Developer community",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    image: "/social.jpeg",
    live: "https://lebspace.vercel.app/",
    github: "https://github.com/AZZAM-K/LebSpace",
  },
  {
    name: "Education Platform",
    slug: "education-rho-six.vercel.app",
    type: "Landing Page",
    role: "Frontend Developer",
    year: "2025",
    description:
      "A landing page for an education platform focused on clean design, responsive layouts, and conversion optimization.",
    impact: "Conversion UI",
    stack: ["React", "Tailwind", "Framer Motion"],
    image: "/edu.jpeg",
    live: "https://education-rho-six.vercel.app/",
    github: "https://github.com/Omarelali2/education",
  },
]

export const featuredProjects = projects.slice(0, 4)

export type SkillCategory = {
  title: string
  items: { name: string; desc: string }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", desc: "UI Library" },
      { name: "Next.js", desc: "App Router / SSR" },
      { name: "React Native", desc: "Mobile" },
      { name: "Tailwind CSS", desc: "Styling System" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", desc: "Runtime" },
      { name: "Express", desc: "REST APIs" },
      { name: "NestJS", desc: "Backend Framework" },
      { name: "Auth / Security", desc: "Sessions & JWT" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", desc: "Relational" },
      { name: "MongoDB", desc: "Document" },
      { name: "Supabase", desc: "Backend-as-a-Service" },
      { name: "Prisma", desc: "ORM" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", desc: "Version Control" },
      { name: "GitHub", desc: "Source Hosting" },
      { name: "Docker", desc: "Containerization" },
      { name: "VS Code", desc: "Editor" },
    ],
  },
]

export const focusAreas = [
  { title: "Frontend Engineering", text: "Interfaces, motion, accessibility, and product UX." },
  { title: "Backend Systems", text: "APIs, auth, business logic, and server patterns." },
  { title: "Database Design", text: "Relational models, migrations, and data layers." },
  { title: "Product Architecture", text: "Full systems around user journeys and growth." },
]

export type TimelineItem = {
  period: string
  role: string
  company: string
  location: string
  description: string
  stack: string[]
}

export const timeline: TimelineItem[] = [
  {
    period: "2025 — NOW",
    role: "Software Engineer",
    company: "Freelance / Independent",
    location: "Remote — Lebanon",
    description:
      "Designing and shipping full-stack SaaS platforms end-to-end — from database schema and APIs to high-performance interfaces and deployment.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    period: "2025",
    role: "Full-Stack Development Intern",
    company: "Techtalk",
    location: "Beirut, Lebanon — Remote",
    description:
      "Contributed to production full-stack projects, gaining hands-on experience in modern web architecture and collaborating with a specialized product team.",
    stack: ["Next.js", "MERN", "REST APIs"],
  },
  {
    period: "2023 — 2024",
    role: "Product Developer",
    company: "Personal & Open Source",
    location: "Independent",
    description:
      "Built real-world products and developer tools focused on clean architecture, interface quality, and scalable systems.",
    stack: ["React", "Node.js", "Tailwind", "API Design"],
  },
]

export const lebnexisProducts = [
  { name: "LebNexis Academy", desc: "Structured learning tracks" },
  { name: "LebNexis Arena", desc: "Real-world developer challenges" },
  { name: "Learning Platform", desc: "Skill validation & progress" },
  { name: "Developer Challenges", desc: "Portfolio-ready builds" },
]

export const lebnexisMetrics = [
  { value: "04", label: "Products" },
  { value: "50+", label: "Challenges" },
  { value: "03", label: "Core Tracks" },
  { value: "2026", label: "Launch" },
]
