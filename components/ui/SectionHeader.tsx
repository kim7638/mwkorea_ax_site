import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-700 text-gray-900 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-gray-500 leading-relaxed',
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
