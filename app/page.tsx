import Header from './components/Header';
import Container from './components/Container';
import Skills from './components/Skills';
import Menu from './components/Menu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="flex items-center md:min-h-screen justify-start py-8 md:py-20">
        <Container>
          <div className="flex flex-col gap-10 md:gap-12 max-w-screen-lg">
            <h1 className="font-semibold text-[2.75rem] leading-tight md:text-6xl md:leading-tight">
              Creando productos digitales de alto impacto
            </h1>

            <div className="dark:text-neutral-400 flex flex-col gap-6 md:text-lg md:leading-relaxed">
              <h2>
                ¡Hola! Soy Luigi Pizarro, ingeniero de software con más de 10
                años de experiencia en el desarrollo de productos digitales que
                destacan por su funcionalidad y diseño atractivo.
              </h2>

              <p>
                Actualmente, trabajo como{' '}
                <strong className="font-semibold dark:text-white">
                  Software Engineer
                </strong>{' '}
                en{' '}
                <a
                  className="hover:text-blue-500 underline"
                  href="https://xepelin.com/"
                  target="_blank"
                  rel="noopener"
                  title="Ir al sitio web de la empresa Xepelin"
                >
                  Xepelin
                </a>
                , una fintech chilena y{' '}
                <strong className="font-semibold dark:text-white">
                  emprendo
                </strong>{' '}
                en proyectos personales. Anteriormente,{' '}
                <strong className="font-semibold dark:text-white">
                  lideré
                </strong>{' '}
                el equipo de desarrollo frontend en{' '}
                <a
                  className="hover:text-yellow-500 underline"
                  href="https://www.meatcode.cl/"
                  target="_blank"
                  rel="noopener"
                  title="Ir al sitio web de la empresa MEAT Code"
                >
                  MEAT Code
                </a>
                , y{' '}
                <strong className="font-semibold dark:text-white">
                  compartí
                </strong>{' '}
                mis conocimientos como educador web.
              </p>
            </div>

            <Skills className="mt-4 md:mt-10" />
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
