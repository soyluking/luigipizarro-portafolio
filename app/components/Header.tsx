import Container from "./Container";
import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <div className="h-1 bg-neutral-900 dark:bg-white md:absolute top-0 w-full" />

      <div className="md:absolute left-0 top-0 py-8 w-full">
        <Container>
          <div className="flex items-baseline gap-12">
            <div>
              <a
                className="font-semibold text-xl md:text-xl"
                href="/"
                title="Luigi Pizarro | Líder Técnico e Ingeniero de Software"
              >
                Luigi
              </a>
            </div>

            <nav className="hidden md:block">
              <Menu className="flex gap-8" />
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
