import Badge from './Badge';

interface SkillsProps {
  className?: string;
}

export default function Skills({ className = '' }: SkillsProps) {
  const skills = [
    {
      label: 'JavaScript',
      background: 'bg-yellow-500',
      color: 'text-yellow-600 dark:text-yellow-600',
    },
    {
      label: 'React',
      background: 'bg-cyan-600',
      color: 'text-cyan-500 dark:text-cyan-500',
    },
    {
      label: 'TypeScript',
      background: 'bg-blue-600',
      color: 'text-blue-500 dark:text-blue-500',
    },
    {
      label: 'Next.js',
      background: 'bg-neutral-400',
      color: 'text-neutral-600 dark:text-neutral-400',
    },
    {
      label: 'Node',
      background: 'bg-green-600',
      color: 'text-green-600 dark:text-green-600',
    },
    {
      label: 'React Native',
      background: 'bg-purple-400',
      color: 'text-purple-500 dark:text-purple-400',
    },
    {
      label: 'CSS',
      background: 'bg-rose-400',
      color: 'text-rose-500 dark:text-rose-400',
    },
    {
      label: 'Performance',
      background: 'bg-indigo-500',
      color: 'text-indigo-500 dark:text-indigo-300',
    },
    {
      label: 'WordPress',
      background: 'bg-slate-500',
      color: 'text-slate-500 dark:text-slate-400',
    },
    {
      label: 'Shopify',
      background: 'bg-lime-500',
      color: 'text-lime-600 dark:text-lime-300',
    },
  ];

  return (
    <div className={`${className} flex flex-wrap gap-2`}>
      {skills.map((skill) => (
        <Badge
          key={skill.label}
          label={skill.label}
          background={skill.background}
          color={skill.color}
        />
      ))}
    </div>
  );
}
