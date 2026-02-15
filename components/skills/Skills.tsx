import React from "react"
import Expertises from "./parts/Expertises"
import Proficiencies from "./parts/Proficiencies"

const Skills = () => {
  return (
    <section
      className="pt-24"
      id="skills"
    >
      <h2 className="text-primary text-center mb-6 text-sm font-bold tracking-widest uppercase">
        03. Compétences Techniques
      </h2>
      <Expertises />
      <Proficiencies />
    </section>
  )
}

export default Skills
