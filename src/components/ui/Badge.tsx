import type { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline';
}

export function Badge({ variant = 'default', className, ...props }: BadgeProps) {
  const base =
    'inline-flex items-center rounded-full px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]';
  const styles =
    variant === 'outline'
      ? 'border border-border/60 text-foreground/70'
      : 'bg-accent/10 border border-accent/40 text-accent/90';

  return <span className={clsx(base, styles, className)} {...props} />;
}

