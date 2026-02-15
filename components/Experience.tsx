import React from "react"

type ExperienceItem = {
  id: string
  title: string
  company: string
  date: string
  bullets: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: "student",
    title: "Étudiant en Master",
    company: "École Nationale d'Informatique",
    date: "2025 - Présent",
    bullets: [
      "Approfondissement des architectures logicielles avancées et des systèmes distribués.",
      "Réalisation de projets académiques orientés performance et conception d'applications évolutives.",
    ],
  },
  {
    id: "bachelor",
    title: "Licence en Informatique",
    company: "École Nationale d'Informatique",
    date: "2025",
    bullets: [
      "Obtention d’une Licence en Informatique dans le parcours \"Génie logiciel et Bases de données\".",
      "Acquisition de solides bases en algorithmique, structures de données et génie logiciel.",
    ],
  },
  {
    id: "stage1",
    title: "Stagiaire Développeur web",
    company: "Société du Port à gestion Autonome de Toamasina (SPAT)",
    date: "Sept - Dec 2024",
    bullets: [
      "Développement d'une plateforme de gestion des congés permettant la demande, l’approbation et le suivi des congés avec Next.js, NestJS et MySQL.",
      "Modélisation d’une base de données relationnelle (employés, demandes, approbations).",
      "Implémentation d'API REST avec authentification basée sur un RBAC et JWT.",
    ],
  },
  {
    id: "stage2",
    title: "Stagiaire Développeur web",
    company: "Société de Manutention de Marchandises Conventionnelles (SMMC)",
    date: "Août - Nov 2023",
    bullets: [
      "Conception et développement d’une application web de suivi des entrées et sorties des visiteurs avec HTML, CSS et JSP.",
      "Mise en place d’un tableau de bord administratif pour visualiser et gérer les flux de visiteurs, permettant une réduction des erreurs d’enregistrement.",
    ],
  },
]

const Experience = () => {
  return (
    <section
      className="pattern-section relative overflow-hidden py-24"
      id="experience"
    >
      <div className="from-background-light dark:from-background-dark absolute top-0 right-0 left-0 z-10 h-32 bg-linear-to-b to-transparent"></div>
      <div className="relative z-20 mx-auto max-w-4xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
            02. Parcours
          </h2>
          <h3 className="text-foreground-light/90 dark:text-foreground-dark/90 text-3xl font-black md:text-5xl">
            Études & Expérience
          </h3>
        </div>

        <div className="before:via-primary relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent before:to-transparent md:before:mx-auto md:before:translate-x-0">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
            >
              <div className="border-primary/40 bg-charcoal text-primary z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="bg-primary/60 size-3 rounded-full"></span>
              </div>
              <div className="group-hover:border-primary/50 w-[calc(100%-4rem)] rounded-2xl border border-slate-700/50 bg-slate-900/80 p-6 shadow-xl backdrop-blur-md transition-colors md:w-[45.3%]">
                <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                  <time className="text-primary bg-primary/10 rounded px-2 py-1 text-xs font-bold tracking-wider uppercase">
                    {exp.date}
                  </time>
                </div>
                <p className="mb-4 text-sm font-semibold text-emerald-400">
                  {exp.company}
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="from-background-light dark:from-background-dark absolute right-0 bottom-0 left-0 z-10 h-32 bg-linear-to-t to-transparent"></div>
    </section>
  )
}

export default Experience
