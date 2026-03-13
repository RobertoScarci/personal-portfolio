import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  ...props
}: SectionHeaderProps) {
  const alignment =
    align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div
      className={clsx('flex flex-col gap-2', alignment, className)}
      {...props}
    >
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/55">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl md:text-2xl font-bold tracking-[0.04em]">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base text-foreground/70 max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}

