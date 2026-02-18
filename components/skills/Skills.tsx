"use client"

import Expertises from "./parts/Expertises"
import Proficiencies from "./parts/Proficiencies"
import { useTranslations } from "next-intl"

const Skills = () => {
  const t = useTranslations("Skills")

  return (
    <section className="pt-24" id="skills">
      <h2 className="text-primary text-center mb-6 text-sm font-bold tracking-widest uppercase">
        {t("sectionTitle")}
      </h2>
      <Expertises />
      <Proficiencies />
    </section>
  )
}

export default Skills
