interface MenuProps {
  className?: string;
}

export default function Menu({ className = '' }: MenuProps) {
  return (
    <ul className={className}>
      <li className="text-sm">
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:underline transition-colors"
          href="https://www.linkedin.com/in/luigipizarro/"
          target="_blank"
          rel="noopener"
          title="Ir a la cuenta Linkedin de Luigi Pizarro"
        >
          /in/luigipizarro
        </a>
      </li>
      <li className="text-sm">
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:underline transition-colors"
          href="https://github.com/soyluking/"
          target="_blank"
          rel="noopener"
          title="Ir a la cuenta Github de Luigi Pizarro"
        >
          github.com/soyluking
        </a>
      </li>
      <li className="text-sm">
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:underline transition-colors"
          href="https://drive.google.com/uc?export=download&id=1VpDKsE6qJxI4V5A5R93dlvCr6qSU3qPm"
          target="_blank"
          rel="noopener"
          title="Descargar curriculum de Luigi Pizarro"
        >
          Descargar CV
        </a>
      </li>
      <li className="text-sm">
        <span className="text-neutral-600 dark:text-neutral-400">
          Santiago, Chile 🇨🇱
        </span>
      </li>
    </ul>
  );
}
