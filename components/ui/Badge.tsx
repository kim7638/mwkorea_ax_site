import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'subtle';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variant === 'default' && 'bg-gray-100 text-gray-700',
        variant === 'brand' && 'bg-brand-light text-brand',
        variant === 'subtle' && 'bg-surface text-gray-500 border border-border',
        className
      )}
    >
      {children}
    </span>
  );
}
