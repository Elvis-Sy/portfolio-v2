import React from "react"
import { Terminal, Database, Cloud, PencilRulerIcon } from "lucide-react"

type Expertise = {
  id: string
  title: string
  desc: string
  Icon: React.ComponentType<any>
}

const expertises: Expertise[] = [
  {
    id: "frontend",
    title: "Frontend",
    desc: "React, Vue, Tailwind CSS, TypeScript",
    Icon: Terminal,
  },
  {
    id: "backend",
    title: "Backend",
    desc: "Node.js, Python, PostgreSQL, MongoDB",
    Icon: Database,
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    desc: "AWS, Docker, CI/CD, Kubernetes",
    Icon: Cloud,
  },
  {
    id: "design",
    title: "Design UI/UX",
    desc: "Figma, Adobe XD, Prototyping",
    Icon: PencilRulerIcon,
  },
]

const Skills = () => {
  return (
    <div
      className="bg-background-light dark:bg-background-dark"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 space-y-4 text-center">
          <h3 className="text-foreground-light/90 dark:text-foreground-dark text-3xl font-black md:text-5xl">
            Expertise in Modern Tech
          </h3>
          <p className="text-foreground-light/80 dark:text-foreground-dark/80 mx-auto max-w-2xl text-lg leading-relaxed">
            I continuously evolve my tech stack to stay ahead in the rapidly
            changing digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {expertises.map((e) => {
            const Icon = e.Icon
            return (
              <div
                key={e.id}
                className="group hover:border-primary hover:shadow-primary/10 rounded-2xl border shadow-sm border-slate-300 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="group-hover:bg-primary mx-auto mb-6 flex size-16 items-center justify-center rounded-xl bg-slate-800 transition-colors text-white">
                  <Icon />
                </div>
                <h4 className="mb-2 text-lg font-bold text-foreground-light/90 dark:text-foreground-dark/90">{e.title}</h4>
                <p className="text-sm text-foreground-light/80 dark:text-foreground-dark/80">{e.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
