export interface Project {
  id: string
  title: string
  description: string
  images: string[]
  githubUrl: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration and real-time inventory management.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    githubUrl: "https://github.com",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "AI-powered content generation tool using advanced language models for creative writing.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    githubUrl: "https://github.com",
    technologies: ["Python", "OpenAI", "FastAPI", "React"],
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with forecasts, maps, and historical data visualization.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    githubUrl: "https://github.com",
    technologies: ["Vue.js", "D3.js", "Weather API", "Vercel"],
  },
  {
    id: "5",
    title: "Social Media Analytics",
    description: "Analytics platform for tracking social media metrics and engagement across multiple platforms.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    githubUrl: "https://github.com",
    technologies: ["React", "GraphQL", "MongoDB", "Chart.js"],
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking application with workout plans and progress monitoring.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    githubUrl: "https://github.com",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
  },
]
