import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ContactSection,
  ProjectsSection
} from "./components"

import { Divider } from "../../components"

export const HomePage = () => {
  return (
    <main className="mx-auto max-w-[1000px] px-4 flex flex-col">
      <HeroSection />

      <AboutSection />
      
      <Divider />

      <SkillsSection />

      <Divider />

      <ProjectsSection />

      <Divider />

      <ContactSection />
    </main>
  )
}