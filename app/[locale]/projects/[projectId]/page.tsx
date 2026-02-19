import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"
import Footer from "@/components/Footer"
import ProjectDetailsHeader from "@/components/projets/details/ProjectDetailsHeader"
import ProjectHero from "@/components/projets/details/ProjectHero"
import ProjectOverview from "@/components/projets/details/ProjectOverview"
import ProjectSidebar from "@/components/projets/details/ProjectSidebar"
import {
  PROJECT_DETAIL_META,
  getNextProjectId,
  getProjectStackPreview,
} from "@/components/projets/details/projectDetails.data"
import type { ProjectDetailsContent } from "@/components/projets/details/types"

type Props = {
  params: Promise<{ locale: string; projectId: string }>
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { locale, projectId } = await params

  const projectMeta = PROJECT_DETAIL_META[projectId]
  if (!projectMeta) {
    notFound()
  }

  const tProjects = await getTranslations({ locale, namespace: "Projets" })
  const t = await getTranslations({ locale, namespace: "ProjectDetails" })

  const title = tProjects(`projects.${projectId}.title`)
  const content = t.raw(`projects.${projectId}`) as ProjectDetailsContent
  const tags = getProjectStackPreview(projectId)

  const nextProjectId = getNextProjectId(projectId)
  const nextTitle = tProjects(`projects.${nextProjectId}.title`)

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <ProjectDetailsHeader
        backHref={`/${locale}#projects`}
        backLabel={t("common.backToPortfolio")}
      />

      <main className="pt-16 pb-24">
        <ProjectHero
          badgeLabel={t("common.badge")}
          title={title}
          summary={content.summary}
          tags={tags}
          image={projectMeta.image}
          gradient={projectMeta.gradient}
          liveUrl={projectMeta.liveUrl}
          sourceUrl={projectMeta.sourceUrl}
          liveLabel={t("common.liveDemo")}
          sourceLabel={t("common.sourceCode")}
          techLabel={t("common.techUsed")}
        />

        <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProjectOverview
              content={content}
              stats={content.stats}
              overviewLabel={t("common.overviewLabel")}
              challengeTitle={t("common.challengeTitle")}
              solutionLabel={t("common.solutionLabel")}
              solutionTitle={t("common.solutionTitle")}
              statsSectionLabel={t("common.statsSectionLabel")}
              statsTitle={t("common.statsTitle")}
              featuresSectionLabel={t("common.featuresSectionLabel")}
              featuresTitle={t("common.featuresTitle")}
            />
          </div>

          <ProjectSidebar
            meta={projectMeta}
            content={content}
            timelineLabel={t("common.timelineLabel")}
            roleLabel={t("common.roleLabel")}
            industryLabel={t("common.industryLabel")}
            ctaLabel={t("common.ctaLabel")}
            ctaHref={`/${locale}#contact`}
          />
        </section>

        <section className="mx-auto mt-8 max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-foreground-light dark:text-foreground-dark text-sm font-bold tracking-widest uppercase">
                {t("common.nextProjectLabel")}
              </h2>
              <Link
                href={`/${locale}/projects/${nextProjectId}`}
                className="group mt-6 inline-flex items-center gap-3"
              >
                <span className="text-foreground-light dark:text-foreground-dark group-hover:text-primary text-3xl font-black transition-colors md:text-4xl">
                  {nextTitle}
                </span>
                <ArrowRight className="text-primary transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-foreground-light dark:text-foreground-dark text-sm font-bold tracking-widest uppercase">
                {t("common.backToPortfolio")}
              </h2>
              <Link
                href={`/${locale}#projects`}
                className="bg-primary mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110"
              >
                {t("common.backToPortfolio")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
