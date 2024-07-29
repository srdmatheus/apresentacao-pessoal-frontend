import { BrainIllustration, RevealAnimation } from "../../../components";

export const SkillsSection = () => {
  return (
    <section className="grid grid-cols-1 items-center justify-center md:grid-cols-3">
      <div className="col-span-1 w-full space-y-8 leading-relaxed md:col-span-2">
        <RevealAnimation>
          <p className="pb-4">
            Minhas principais habilidades técnicas são <strong>HTML</strong>,
            <strong>CSS</strong>, <strong>Tailwind CSS</strong>,{" "}
            <strong>JavaScript</strong>,<strong>React</strong>,{" "}
            <strong>Next.js</strong>
          </p>
          <p>
            Também tenho estudado e aplicado em meus projetos libs famosas como:{" "}
            <code>
              zustand, zod, react-hook-form, framer-motion, radix-ui, etc...
            </code>
          </p>
        </RevealAnimation>
      </div>
      <div className="col-span-1 flex w-full justify-center md:justify-end">
        <BrainIllustration className="m-8 size-40 lg:size-60" />
      </div>
    </section>
  );
};
