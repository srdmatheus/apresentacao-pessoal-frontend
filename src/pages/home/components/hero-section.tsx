import { Link, RevealAnimation } from '../../../components'

export const HeroSection = () => {
  return (
    <section className="grid min-h-dvh grid-cols-1 items-center justify-center md:grid-cols-2">
      <div className="flex grid-cols-1 items-center justify-center">
        <RevealAnimation>
          <img
            src="https://github.com/srdmatheus.png"
            className="rounded-xl w-96"
            alt="Eu sorrindo segurando um meu cachorro filhote chamado Scott em um ambiente ao ar livre."
          />
        </RevealAnimation>
      </div>
      <div className="space-y-8 leading-relaxed">
        <RevealAnimation>
          <p>
            Olá, me chamo{" "}
            <strong className="text-foreground">Matheus Ribeiro</strong>, tenho
            27 anos{" "}
            <span className="text-foreground/40">
              (com a energia de quem acabou de descobrir a cafeína)
            </span>{" "}
            e estou muito contente em te ver por aqui!
          </p>
        </RevealAnimation>
        <RevealAnimation>
          <p>
            Essa página foi criada com o intuito de me apresentar para o{" "}
            <Link href="https://www.linkedin.com/company/projeto-frontend-fusion/">
            Projeto Frontend Fusion
            </Link>
            .
          </p>
        </RevealAnimation>
        <RevealAnimation>
          <p>
            Dê uma <i>scrollada</i> para me conhecer ^^
          </p>
        </RevealAnimation>
      </div>
    </section>
  );
};