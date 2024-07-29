import { RevealAnimation, RocketIllustration } from "../../../components";

export const AboutSection = () => {
  return (
    <section className="grid grid-cols-1 items-center justify-center md:grid-cols-3">
      <div className="col-span-1 flex justify-center md:justify-start ">
        <RocketIllustration className="size-40 lg:size-60" />
      </div>

      <div className="col-span-1 md:col-span-2 space-y-8">
        <RevealAnimation>
          <p>
            Sou um desenvolvedor <strong>Front-end</strong> em constante
            evolução. Adoro desafios de programação e estou me especializando em{" "}
            <strong>React (Next.js)</strong> e <strong>TypeScript</strong>.
          </p>
        </RevealAnimation>
        <RevealAnimation>
          <p>
            Meu objetivo?{" "}
            <strong className="text-accent">**Dominar o mundo**</strong> (do
            desenvolvimento web, é claro{" "}
            <span className="text-foreground/100">😅</span>) e criar interfaces
            que deixem os usuários maravilhados.
          </p>
        </RevealAnimation>
        <RevealAnimation>
          <p>
            Quando não estou com a cara topada no vscode... provavelmente
            estou aprendendo sobre o <strong className="text-accent">cérebro humano</strong>, tenho
            gostado muito desse tema ultimamente.
          </p>
        </RevealAnimation>
      </div>
    </section>
  );
};