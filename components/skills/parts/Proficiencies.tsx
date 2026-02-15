import React from "react"
import { Layers, Code, Database, Box } from "lucide-react"

type Category = {
  id: string
  title: string
  icon: React.ComponentType<any>
  items: string[]
}

const categories: Category[] = [
  {
    id: "languages",
    title: "Languages",
    icon: Code,
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5/CSS3"],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: Layers,
    items: ["React / Next.js", "Node.js", "Express.js", "NestJS", "Django", "FastAPI", "Tailwind CSS / DaisyUI"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Box,
    items: ["Git / GitHub", "Docker", "AWS (S3, EC2)", "Figma"],
  },
]

const Proficiencies = () => {
  return (
    <div className="my-12 bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h3 className="text-3xl font-black text-white md:text-5xl">
            Maîtrises Techniques
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div key={cat.id} className="space-y-6">
                <div className="flex items-center gap-3">
                  <Icon className="text-primary" />
                  <h5 className="text-lg font-bold tracking-wider text-slate-300 uppercase">
                    {cat.title}
                  </h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <span
                      key={it}
                      className="border-primary/30 bg-primary/5 flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium text-slate-300"
                    >
                      <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Proficiencies
