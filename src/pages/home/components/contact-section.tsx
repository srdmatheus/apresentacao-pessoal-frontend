import { Link, RevealAnimation } from "../../../components";

export const ContactSection = () => {
  return (
    <section className="mb-10">
      <RevealAnimation>
        <p>Uau, você chegou até aqui?!</p>
      </RevealAnimation>
      <RevealAnimation>
        <p>
          Sua atenção e interesse significam muito para mim. Se quiser
          acompanhar mais do meu trabalho ou entrar em contato, sinta-se à
          vontade para me adicionar no{" "}
          <Link href="https://linkedin.com/in/srdmatheus">LinkedIn</Link> e
          conferir meus projetos no{" "}
          <Link href="https://github.com/srdmatheus">GitHub</Link>.
        </p>
      </RevealAnimation>
    </section>
  );
};
