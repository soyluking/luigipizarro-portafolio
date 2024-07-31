interface BadgeProps {
  label: string;
  background?: string;
  color?: string;
}

export default function Badge({
  label,
  background = 'bg-yellow-400',
  color = 'text-black',
}: BadgeProps) {
  if (!label) return;

  return (
    <div
      className={`${background} ${color} bg-opacity-20 dark:bg-opacity-10 py-1 px-2 text-sm font-medium rounded-lg`}
    >
      <span className="block leading-none">{label}</span>
    </div>
  );
}
