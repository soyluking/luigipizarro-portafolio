interface ContainerProps {
  children: React.ReactElement;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 w-full">
      {children}
    </div>
  );
}
