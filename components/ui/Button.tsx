import { cn } from '@/lib/utils';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-navy text-white hover:bg-brand-dark shadow-sm',
  secondary: 'bg-brand text-white hover:bg-brand-dark shadow-sm',
  outline: 'border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
  ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
