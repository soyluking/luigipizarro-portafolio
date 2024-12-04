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
              Transformando ideas en productos digitales
            </h1>

            <div className="dark:text-neutral-400 flex flex-col gap-6 md:text-lg md:leading-relaxed">
              <h2>
                ¡Hola! Soy Luigi Pizarro, líder técnico e ingeniero de software
                con más de{' '}
                <strong className="font-semibold dark:text-white">
                  10 años de experiencia
                </strong>{' '}
                en el desarrollo de productos digitales enfocados en
                funcionalidad y diseño.
              </h2>

              <p>
                Actualmente, soy{' '}
                <strong className="font-semibold dark:text-white">
                  Líder Técnico
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
                , una fintech chilena, donde impulso soluciones clave para el
                negocio y optimizo procesos críticos. Además, me apasiona{' '}
                <strong className="font-semibold dark:text-white">
                  emprender
                </strong>{' '}
                proyectos personales donde exploro nuevas tecnologías y
                metodologías. Como{' '}
                <strong className="font-semibold dark:text-white">
                  mentor
                </strong>
                , guío a ingenieros en su desarrollo profesional,{' '}
                <strong className="font-semibold dark:text-white">
                  compartiendo
                </strong>{' '}
                conocimientos y promoviendo buenas prácticas.
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
