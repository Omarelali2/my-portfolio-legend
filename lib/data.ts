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

/* ------------------------------------------------------------------ */
/* Featured projects — the three platforms from Omar's CV             */
/* Only links that exist in the current codebase are included.        */
/* ------------------------------------------------------------------ */

export type FeaturedProject = {
  name: string
  slug: string
  type: string
  role: string
  year: string
  description: string
  stack: string[]
  vision: string
  live?: string
  github?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "LebNexis Tahaddiyat",
    slug: "tahaddiyat",
    type: "Coding Challenge Platform",
    role: "Founder & Lead Engineer",
    year: "2025 — 2026",
    description:
      "A full-stack coding challenge platform engineered end-to-end, featuring XP progression, leaderboards, code submissions, admin review workflows, and payment processing.",
    stack: ["Next.js", "PostgreSQL", "Prisma ORM"],
    vision:
      "A glowing challenge interface built around database architecture, XP progression, and live leaderboard dynamics.",
    live: "https://lebnexis.com/tahaddiyat",
  },
  {
    name: "LebNexis Arena",
    slug: "arena",
    type: "Competitive Programming Arena",
    role: "Founder & Lead Engineer",
    year: "2025 — 2026",
    description:
      "A competitive programming platform featuring 1v1 and multiplayer challenges, matchmaking, player sessions, scoring, and real-time gameplay progression.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "React Native", "Expo"],
    vision:
      "A futuristic arena of connected nodes and live sessions — two competitors linked through real-time matchmaking logic.",
    live: undefined,
  },
  {
    name: "Fitness Platform",
    slug: "fitness",
    type: "Full-Stack Fitness Application",
    role: "Full-Stack Developer",
    year: "2025",
    description:
      "A full-stack fitness application with JWT authentication, PostgreSQL-backed workout tracking, and server-side rendering.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "JWT"],
    vision:
      "An elegant training dashboard with workout statistics, session tracking, and clean server-rendered interfaces.",
    live: undefined,
  },
]

export type SkillItem = {
  name: string
  desc: string
  icon?: string /* Simple Icons slug */
  iconColor?: string
  lucide?: keyof typeof import("lucide-react") /* fallback icon */
}

export type SkillCategory = {
  title: string
  desc: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    desc: "Type-safe, object-oriented, and scripting languages powering the stack.",
    items: [
      { name: "TypeScript", desc: "Type-safe application logic", icon: "typescript", iconColor: "3178c6" },
      { name: "JavaScript", desc: "Runtime language of the web", icon: "javascript", iconColor: "f7df1e" },
      { name: "Java", desc: "Object-oriented backend services", lucide: "Code2" },
      { name: "C#", desc: "Managed runtime development", lucide: "Code2" },
      { name: "PHP", desc: "Server-side scripting", icon: "php", iconColor: "777bb4" },
    ],
  },
  {
    title: "Frontend",
    desc: "Responsive interfaces and modern application UIs.",
    items: [
      { name: "React.js", desc: "Component-based UI", icon: "react", iconColor: "61dafb" },
      { name: "Next.js", desc: "App Router, SSR, and ISR", icon: "nextdotjs" },
      { name: "Tailwind CSS", desc: "Utility-first styling", icon: "tailwindcss", iconColor: "06b6d4" },
      { name: "HTML5", desc: "Semantic markup", lucide: "Code" },
      { name: "CSS3", desc: "Styling and animation", lucide: "Layout" },
    ],
  },
  {
    title: "Backend",
    desc: "REST architecture, authentication, and server logic.",
    items: [
      { name: "Node.js", desc: "JavaScript runtime", icon: "nodejs" },
      { name: "Express.js", desc: "REST API framework", icon: "express" },
      { name: "NestJS", desc: "Backend application framework", icon: "nestjs" },
      { name: "Authentication", desc: "JWT & OAuth flows", lucide: "ShieldCheck" },
      { name: "Real-time", desc: "Sockets and live session logic", lucide: "Zap" },
    ],
  },
  {
    title: "Databases",
    desc: "Relational and document data modeling at scale.",
    items: [
      { name: "PostgreSQL", desc: "Relational database", icon: "postgresql", iconColor: "4169e1" },
      { name: "MongoDB", desc: "Document store", icon: "mongodb" },
      { name: "Oracle", desc: "Enterprise relational DB", icon: "oracle", iconColor: "f80000" },
      { name: "Prisma ORM", desc: "Type-safe data layer", lucide: "Database" },
      { name: "Mongoose", desc: "ODM for MongoDB", lucide: "Database" },
    ],
  },
  {
    title: "Mobile Development",
    desc: "Cross-platform native applications.",
    items: [
      { name: "React Native", desc: "Native mobile UI", icon: "reactnative" },
      { name: "Expo", desc: "Unified development platform", icon: "expo" },
      { name: "Expo Router", desc: "File-based mobile navigation", lucide: "Router" },
    ],
  },
  {
    title: "Cloud & DevOps",
    desc: "Infrastructure, deployment, and containerization.",
    items: [
      { name: "AWS", desc: "Cloud infrastructure", icon: "amazonwebservices", iconColor: "ff9900" },
      { name: "Docker", desc: "Containerization", icon: "docker", iconColor: "2496ed" },
      { name: "Vercel", desc: "Frontend deployment platform", lucide: "Cloud" },
      { name: "Git", desc: "Version control", icon: "git", iconColor: "f05032" },
      { name: "GitHub", desc: "Source hosting", lucide: "Github" },
    ],
  },
  {
    title: "Networking",
    desc: "Infrastructure architecture across physical and logical layers.",
    items: [
      { name: "Network Design", desc: "Topology and addressing", lucide: "Share2" },
      { name: "Infrastructure", desc: "Branch-to-branch connectivity", lucide: "Server" },
      { name: "Protocols", desc: "LAN, WAN, and routing logic", lucide: "Wifi" },
    ],
  },
  {
    title: "Development Tools",
    desc: "Daily engineering toolchain.",
    items: [
      { name: "Postman", desc: "API testing and debugging", icon: "postman", iconColor: "ff6c37" },
      { name: "VS Code", desc: "Editor and debugging environment", lucide: "Edit3" },
      { name: "Prisma", desc: "Database workflow tooling", lucide: "Sliders" },
    ],
  },
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
    period: "Sep 2025 — Nov 2025",
    role: "Full-Stack Intern",
    company: "TechTalks",
    location: "Akkar, Lebanon — Remote",
    description:
      "Worked on a language-learning platform using Next.js, PostgreSQL, and Tailwind CSS. Implemented authentication using Clerk and contributed to frontend/backend integration and production deployment.",
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Clerk"],
  },
  {
    period: "Dec 2025 — Mar 2026",
    role: "Frontend Developer Intern",
    company: "SRIYOG Consulting",
    location: "Akkar, Lebanon — Remote",
    description:
      "Built responsive applications using Next.js and React, integrated REST APIs, developed reusable components, and participated in code reviews and debugging.",
    stack: ["Next.js", "React", "REST APIs"],
  },
]

export type EducationItem = {
  degree: string
  field: string
  institution: string
  year: string
  location: string
}

export const education: EducationItem[] = [
  {
    degree: "Master's Degree",
    field: "Computer Science",
    institution: "Lebanese University",
    year: "2026",
    location: "Lebanon",
  },
  {
    degree: "Bachelor's Degree",
    field: "Computer Science",
    institution: "Lebanese University",
    year: "2025",
    location: "Lebanon",
  },
]

export type CertificationItem = {
  name: string
  issuer: string
  year: string
}

export const certifications: CertificationItem[] = [
  { name: "AWS Cloud Practitioner Workshop", issuer: "AWS", year: "2026" },
  { name: "Docker & Containerization", issuer: "Workshop", year: "2026" },
]

export type NetworkingItem = {
  title: string
  desc: string
}

export const networkingProjects: NetworkingItem[] = [
  {
    title: "Hospital Network Infrastructure Design",
    desc: "End-to-end network topology for a healthcare facility — addressing, segmentation, and device planning across departments.",
  },
  {
    title: "University Network Architecture",
    desc: "Multi-branch network design connecting Lebanese University campuses, with routing and centralized infrastructure logic.",
  },
]

export type LanguageItem = {
  name: string
  level: string
}

export const languages: LanguageItem[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Intermediate" },
  { name: "French", level: "Intermediate" },
]

export const focusAreas = [
  { title: "Frontend Engineering", text: "Interfaces, motion, accessibility, and product UX." },
  { title: "Backend Systems", text: "APIs, auth, business logic, and server patterns." },
  { title: "Database Design", text: "Relational models, migrations, and data layers." },
  { title: "Product Architecture", text: "Full systems around user journeys and growth." },
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
