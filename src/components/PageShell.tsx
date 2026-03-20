import type { ReactNode } from 'react';
import Header from './Header';
import PageWatermark from './PageWatermark';
import ScrollHint from './ScrollHint';

type PageShellProps = {
  watermarkLabel: string;
  watermarkClassName?: string;
  watermarkVertical?: boolean;
  header?: ReactNode;
  headerSpacerClassName?: string;
  topSpacerClassName?: string;
  contentWrapperClassName?: string;
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
  headerSpacerClassName = 'h-14 md:h-24 lg:h-32 flex-shrink-0',
  topSpacerClassName = 'h-10 md:h-12 flex-shrink-0',
  contentWrapperClassName = 'flex-1 w-full flex flex-col items-center justify-start relative z-10 min-h-0 overflow-y-auto',
  contentContainerClassName = 'w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col flex-shrink-0 pt-4 md:pt-6 pb-20 md:pb-28',
  includeScrollHint = false,
  children,
}: PageShellProps) {
  return (
    <>
      <PageWatermark label={watermarkLabel} className={watermarkClassName} vertical={watermarkVertical} />
      <section className="relative w-full min-h-screen flex flex-col">
        <div className={topSpacerClassName} aria-hidden="true" />

        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">{header ?? <Header />}</div>
        </div>

        <div className={headerSpacerClassName} aria-hidden="true" />

        <div className={contentWrapperClassName}>
          <div className={contentContainerClassName}>{children}</div>
        </div>

        {includeScrollHint ? <ScrollHint /> : null}
      </section>
    </>
  );
}

