import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ContactSection,
  ProjectsSection
} from "./components";

import { Divider } from "../../components";

export const HomePage = () => {
  return (
    <main className="mx-auto flex max-w-[1000px] flex-col px-4">
      <HeroSection />

      <AboutSection />

      <Divider />

      <SkillsSection />

      <Divider />

      <ProjectsSection />

      <Divider />

      <ContactSection />
    </main>
  );
};
