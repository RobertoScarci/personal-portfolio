import type { ReactNode } from 'react';
import Header from './Header';
import PageWatermark from './PageWatermark';
import ScrollHint from './ScrollHint';
import AnimatedSection from './AnimatedSection';

type PageShellProps = {
  watermarkLabel: string;
  watermarkClassName?: string;
  watermarkVertical?: boolean;
  header?: ReactNode;
  background?: ReactNode;
  headerReveal?: boolean;
  headerRevealDelay?: number;
  headerSpacerClassName?: string;
  topSpacerClassName?: string;
  contentWrapperClassName?: string;
  /**
   * Standardizza la larghezza massima del contenuto.
   * Se `contentContainerClassName` è fornito, ha priorità.
   */
  contentWidth?: 'narrow' | 'standard' | 'wide';
  contentContainerClassName?: string;
  includeScrollHint?: boolean;
  children: ReactNode;
};

/**
 * Shared outer layout for most pages:
 * watermark + fixed header area + scroll wrapper + consistent paddings.
 */
export default function PageShell({
  watermarkLabel,
  watermarkClassName,
  watermarkVertical = false,
  header,
  background,
  headerReveal = false,
  headerRevealDelay = 0,
  headerSpacerClassName = 'h-14 md:h-24 lg:h-32 flex-shrink-0',
  topSpacerClassName = 'h-10 md:h-12 flex-shrink-0',
  contentWrapperClassName = 'flex-1 w-full flex flex-col items-center justify-start relative z-10 min-h-0 overflow-y-auto',
  contentWidth = 'wide',
  contentContainerClassName,
  includeScrollHint = false,
  children,
}: PageShellProps) {
  const widthClass =
    contentWidth === 'narrow'
      ? 'max-w-3xl'
      : contentWidth === 'standard'
        ? 'max-w-4xl'
        : 'max-w-5xl';

  const resolvedContentContainerClassName =
    contentContainerClassName ??
    `w-full ${widthClass} mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28`;

  return (
    <>
      <PageWatermark label={watermarkLabel} className={watermarkClassName} vertical={watermarkVertical} />
      <section className="relative w-full min-h-screen flex flex-col">
        {background ? (
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">{background}</div>
        ) : null}
        <div className={topSpacerClassName} aria-hidden="true" />

        {headerReveal ? (
          <AnimatedSection
            delay={headerRevealDelay}
            className="w-full flex-shrink-0 flex flex-col items-center relative z-10"
          >
            <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">{header ?? <Header />}</div>
          </AnimatedSection>
        ) : (
          <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">{header ?? <Header />}</div>
          </div>
        )}

        <div className={headerSpacerClassName} aria-hidden="true" />

        <div className={contentWrapperClassName}>
          <div className={resolvedContentContainerClassName}>{children}</div>
        </div>

        {includeScrollHint ? <ScrollHint /> : null}
      </section>
    </>
  );
}

