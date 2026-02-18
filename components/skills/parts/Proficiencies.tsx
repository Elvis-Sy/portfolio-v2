"use client"

import { Layers, Code, Database, Box } from "lucide-react"
import { useTranslations } from "next-intl"
import type { ComponentType } from "react"

type Category = {
  id: string
  title: string
  items: string[]
}

const iconById: Record<string, ComponentType<any>> = {
  languages: Code,
  frameworks: Layers,
  databases: Database,
  tools: Box,
}

const Proficiencies = () => {
  const t = useTranslations("Proficiencies")
  const categories = t.raw("categories") as Category[]

  return (
    <div className="my-12 bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h3 className="text-3xl font-black text-white md:text-5xl">
            {t("sectionTitle")}
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = iconById[cat.id] ?? Code
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
