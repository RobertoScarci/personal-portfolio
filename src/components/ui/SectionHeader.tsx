import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  headingTag?: 'h1' | 'h2' | 'h3';
  titleId?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  headingTag = 'h2',
  titleId,
  titleClassName,
  descriptionClassName,
  className,
  ...props
}: SectionHeaderProps) {
  const alignment =
    align === 'center' ? 'text-center items-center' : 'text-left items-start';

  const TitleTag = headingTag;

  const resolvedTitleClassName = clsx(
    'text-xl md:text-2xl font-bold tracking-[0.04em]',
    titleClassName
  );

  const resolvedDescriptionClassName =
    descriptionClassName ??
    'text-sm md:text-base text-foreground/70 max-w-xl';

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
      <TitleTag id={titleId} className={resolvedTitleClassName}>
        {title}
      </TitleTag>
      {description && (
        <p className={resolvedDescriptionClassName}>
          {description}
        </p>
      )}
    </div>
  );
}

