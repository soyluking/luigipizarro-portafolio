interface ContainerProps {
  children: React.ReactElement;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-screen-xl mx-auto px-6 w-full">{children}</div>;
}
