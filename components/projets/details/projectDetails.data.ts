import type { ProjectDetailMeta } from "./types"

export const PROJECT_ORDER = ["flotmax", "moodspace", "portfolio-2", "portfolio"] as const

export const PROJECT_DETAIL_META: Record<string, ProjectDetailMeta> = {
  flotmax: {
    id: "flotmax",
    image: "/projects/flotmax.png",
    gradient: ["#1e3a8a", "#3b0764"],
    liveUrl: "https://flot-maximal.vercel.app",
    sourceUrl: "https://github.com/Elvis-Sy/FlotMaximal",
    stack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
    },
  },
  moodspace: {
    id: "moodspace",
    image: "/projects/moodspace.png",
    gradient: ["#f97316", "#fb923c"],
    liveUrl: "https://moodsspace.vercel.app",
    sourceUrl: "https://github.com/Elvis-Sy/MoodSpace",
    stack: {
      frontend: ["React", "TypeScript", "Tailwind CSS, Framer Motion"],
    },
  },
  "portfolio-2": {
    id: "portfolio-2",
    image: "/projects/portfolio-2.png",
    gradient: ["#a7f3d0", "#f0fdf4"],
    liveUrl: "#",
    sourceUrl: "https://github.com/Elvis-Sy/portfolio-v2",
    stack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
  },
  portfolio: {
    id: "portfolio",
    image: "/projects/portfolio.png",
    gradient: ["#2f4f4f", "#556b2f"],
    liveUrl: "#",
    sourceUrl: "https://github.com/Elvis-Sy/ES-portfolio",
    stack: {
      frontend: ["Next.js", "JavaScript", "Tailwind CSS"],
    },
  },
}

export const STACK_PREVIEW_LIMIT = 6

export const getProjectStackAll = (projectId: string) => {
  const meta = PROJECT_DETAIL_META[projectId]
  if (!meta) {
    return []
  }

  const frontend = meta.stack.frontend ?? []
  const backend = meta.stack.backend ?? []

  return [...new Set([...frontend, ...backend])]
}

export const getProjectStackPreview = (
  projectId: string,
  limit: number = STACK_PREVIEW_LIMIT
) => {
  return getProjectStackAll(projectId).slice(0, limit)
}

export const getNextProjectId = (projectId: string) => {
  const currentIndex = PROJECT_ORDER.indexOf(projectId as (typeof PROJECT_ORDER)[number])

  if (currentIndex === -1) {
    return PROJECT_ORDER[0]
  }

  return PROJECT_ORDER[(currentIndex + 1) % PROJECT_ORDER.length]
}
