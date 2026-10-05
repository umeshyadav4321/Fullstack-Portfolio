export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Web Apps" | "Mobile / UI";
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; level?: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Alex Chen",
    title: "Full-Stack Software Engineer & UI/UX Specialist",
    bio: "Passionate engineer building high-performance, accessible, and visually stunning web applications with modern technologies like Next.js, React, Node.js, and TypeScript.",
    status: "Available for full-time roles & high-impact contracts",
    location: "San Francisco, CA (Open to Remote)",
    email: "alex.dev@example.com",
    phone: "+1 (555) 234-5678",
    avatar: "/profile.jpg",
    resumeUrl: "/resume.pdf",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "mailto:alex.dev@example.com",
    },
  },

  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "35+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Code Commits", value: "2.4k+" },
  ],

  skillCategories: [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "Next.js", level: "Expert" },
        { name: "React 19", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Framer Motion", level: "Advanced" },
        { name: "Redux / Zustand", level: "Advanced" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Express / NestJS", level: "Advanced" },
        { name: "GraphQL & REST", level: "Expert" },
        { name: "PostgreSQL / Prisma", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Redis", level: "Intermediate" },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Vercel", level: "Expert" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS S3 / Cloudflare", level: "Intermediate" },
        { name: "Git / CI/CD", level: "Advanced" },
        { name: "Jest / Cypress", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "quantum-chat",
      title: "Quantum AI Workspace",
      category: "Full Stack",
      description: "Real-time AI collaboration platform with streaming markdown code blocks, multi-agent assistant workflows, and responsive glass design.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "WebSockets"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "ether-flow",
      title: "EtherFlow Analytics Dashboard",
      category: "Web Apps",
      description: "High-throughput financial analytics engine with real-time interactive charts, customizable widgets, and sleek dark/light cyber aesthetic.",
      tags: ["React", "Chart.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "nexus-ui-kit",
      title: "Nexus UI Design System",
      category: "Mobile / UI",
      description: "Comprehensive React component library with accessible glassmorphism primitives, micro-animations, and automatic dark theme support.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "cloud-pulse",
      title: "CloudPulse Server Monitor",
      category: "Full Stack",
      description: "Automated container & server health monitor with real-time alerting, webhook integrations, and historical latency graphs.",
      tags: ["Next.js", "Node.js", "Docker", "Tailwind CSS", "Redis"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ] as Project[],

  experiences: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Apex Tech Labs",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description: [
        "Architected and delivered next-gen cloud dashboard serving over 100k active users using Next.js App Router.",
        "Reduced page load time by 45% through aggressive bundle optimization and dynamic server components.",
        "Mentored team of 6 engineers on frontend best practices and TypeScript design patterns.",
      ],
      skills: ["Next.js", "TypeScript", "React", "Node.js", "Vercel"],
    },
    {
      role: "Frontend Engineer",
      company: "Velocity Digital",
      period: "2021 - 2023",
      location: "Remote",
      description: [
        "Built responsive web applications and interactive component libraries for high-growth SaaS clients.",
        "Integrated dark/light theme systems, real-time WebSocket notifications, and multi-language support.",
        "Collaborated directly with UI/UX designers to translate Figma designs into pixel-perfect code.",
      ],
      skills: ["React", "Tailwind CSS", "GraphQL", "Jest", "Framer Motion"],
    },
  ] as Experience[],
};
