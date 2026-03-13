'use client';

import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:cursor-not-allowed';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-foreground shadow-[0_0_18px_rgba(236,72,153,0.5)] hover:shadow-[0_0_26px_rgba(236,72,153,0.7)]',
  outline:
    'border border-accent/80 text-foreground hover:bg-accent/10 hover:border-accent',
  ghost: 'text-foreground/80 hover:text-foreground hover:bg-foreground/5',
};

export function Button({ variant = 'primary', className, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

