import Header from "./components/Header";
import Container from "./components/Container";
import Skills from "./components/Skills";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="flex items-center md:min-h-screen justify-start py-8 md:py-20">
        <Container>
          <div className="flex flex-col gap-10 md:gap-12 max-w-screen-lg">
            <h1 className="font-semibold text-[2.75rem] leading-tight md:text-[3.25rem] md:leading-tight">
              Transformando ideas en productos digitales de alto impacto
            </h1>

            <div className="dark:text-neutral-400 flex flex-col gap-6 md:text-lg md:leading-relaxed">
              <h2>
                ¡Hola! Soy Luigi Pizarro, líder técnico e ingeniero de software
                con más de{" "}
                <strong className="font-semibold dark:text-white">
                  10 años de experiencia
                </strong>{" "}
                construyendo productos digitales.
              </h2>

              <p>
                Hoy{" "}
                <strong className="font-semibold dark:text-white">
                  lidero un equipo
                </strong>{" "}
                en{" "}
                <a
                  className="hover:text-blue-500 underline"
                  href="https://xepelin.com/"
                  target="_blank"
                  rel="noopener"
                  title="Ir al sitio web de la empresa Xepelin"
                >
                  Xepelin
                </a>
                , fintech de alto crecimiento en LATAM, donde{" "}
                <strong className="font-semibold dark:text-white">
                  integro AI
                </strong>{" "}
                en productos y procesos para elevar la productividad y calidad
                técnica del equipo. También{" "}
                <strong className="font-semibold dark:text-white">
                  mentoreo
                </strong>{" "}
                a ingenieros en su desarrollo, promoviendo buenas prácticas y
                autonomía.
              </p>
              <p>
                Además, soy{" "}
                <strong className="font-semibold dark:text-white">
                  fundador
                </strong>{" "}
                de{" "}
                <a
                  className="hover:text-white underline"
                  href="extasiados.com"
                  target="_blank"
                  rel="noopener"
                  title="Ir a la tienda de Extasiados"
                >
                  Extasiados
                </a>
                , marca de streetwear inspirada en la cultura{" "}
                <strong className="font-semibold dark:text-white">
                  techno
                </strong>
                , un proyecto donde conecto creatividad, diseño y tecnología
                para convertir ideas en productos reales.
              </p>
            </div>

            <Skills className="mt-4 md:mt-8" />
          </div>
        </Container>
      </section>

      <section className="pt-8 pb-12 md:hidden">
        <Container>
          <Menu className="flex flex-col md:items-center gap-4" />
        </Container>
      </section>
    </main>
  );
}
