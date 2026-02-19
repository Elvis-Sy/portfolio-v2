import type { ProjectDetailMeta } from "./types"

export const PROJECT_ORDER = ["flotmax", "moodspace", "portfolio-2", "portfolio"] as const

export const PROJECT_DETAIL_META: Record<string, ProjectDetailMeta> = {
  flotmax: {
    id: "flotmax",
    image: "/projects/flotmax.png",
    gradient: ["#10b981", "#34d399"],
    liveUrl: "#",
    sourceUrl: "#",
    stack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
    },
  },
  moodspace: {
    id: "moodspace",
    image: "/projects/moodspace.png",
    gradient: ["#f97316", "#fb923c"],
    liveUrl: "#",
    sourceUrl: "#",
    stack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["NestJS", "PostgreSQL", "Redis"],
    },
  },
  "portfolio-2": {
    id: "portfolio-2",
    image: "/projects/portfolio-2.png",
    gradient: ["#10b981", "#2dd4bf"],
    liveUrl: "#",
    sourceUrl: "#",
    stack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Vercel", "AWS"],
    },
  },
  portfolio: {
    id: "portfolio",
    image: "/projects/portfolio.png",
    gradient: ["#64748b", "#334155"],
    liveUrl: "#",
    sourceUrl: "#",
    stack: {
      frontend: ["Next.js", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js", "Supabase", "Docker"],
    },
  },
}

export const getNextProjectId = (projectId: string) => {
  const currentIndex = PROJECT_ORDER.indexOf(projectId as (typeof PROJECT_ORDER)[number])

  if (currentIndex === -1) {
    return PROJECT_ORDER[0]
  }

  return PROJECT_ORDER[(currentIndex + 1) % PROJECT_ORDER.length]
}
