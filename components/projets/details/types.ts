export type DetailFeature = {
  title: string
  desc: string
}

export type DetailStat = {
  label: string
  value: string
}

export type ProjectDetailsContent = {
  summary: string
  challenge: string
  challengePoints: string[]
  solution: string
  solutionHighlight: string
  features: DetailFeature[]
  stats: DetailStat[]
  timeline: string
  role: string
  industry: string
}

export type ProjectDetailMeta = {
  id: string
  image: string
  gradient: [string, string]
  liveUrl: string
  sourceUrl: string
  stack: {
    frontend: string[]
    backend: string[]
  }
}
