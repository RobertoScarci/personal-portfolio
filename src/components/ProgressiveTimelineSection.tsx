'use client';

import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollRevealSection from '@/components/ScrollRevealSection';

interface ProgressiveTimelineSectionProps {
  /** Contenuto di ogni riga (cella destra). Stessa struttura usata in Carriera. */
  children: ReactNode[];
}

const DOT_CENTER_OFFSET = 20;

export default function ProgressiveTimelineSection({ children }: ProgressiveTimelineSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observersRef = useRef<IntersectionObserver[]>([]);
  const [lineHeightPx, setLineHeightPx] = useState(0);
  const [revealedIndex, setRevealedIndex] = useState(0);
  const count = children.length;

  const measureDotPositions = () => {
    const container = containerRef.current;
    if (!container) return;
    const positions: number[] = [];
    rowRefs.current.forEach((row, i) => {
      if (row) positions[i] = row.offsetTop + DOT_CENTER_OFFSET;
    });
    return positions;
  };

  useLayoutEffect(() => {
    const positions = measureDotPositions();
    if (positions?.length) setLineHeightPx(positions[0]);
  }, [count]);

  useEffect(() => {
    const positions = measureDotPositions();
    if (positions?.length && revealedIndex < positions.length) {
      setLineHeightPx(positions[revealedIndex]);
    }
  }, [revealedIndex, count]);

  useEffect(() => {
    const observe = () => {
      observersRef.current.forEach((o) => o.disconnect());
      observersRef.current = [];
      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) setRevealedIndex((prev) => Math.max(prev, index));
            });
          },
          { root: null, rootMargin: '10% 0px -25% 0px', threshold: 0 }
        );
        observer.observe(row);
        observersRef.current.push(observer);
      });
    };
    const t = setTimeout(observe, 150);
    return () => {
      clearTimeout(t);
      observersRef.current.forEach((o) => o.disconnect());
      observersRef.current = [];
    };
  }, [count]);

  useEffect(() => {
    const onResize = () => {
      const positions = measureDotPositions();
      if (positions && revealedIndex < positions.length) setLineHeightPx(positions[revealedIndex]);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [revealedIndex]);

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        className="absolute left-[1.75rem] top-0 w-0.5 -translate-x-1/2 overflow-hidden hidden md:block"
        initial={{ height: 0 }}
        animate={{ height: lineHeightPx }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      >
        <div className="h-full w-full rounded-full bg-gradient-to-b from-accent/90 via-accent/40 to-border" />
      </motion.div>

      <div className="flex flex-col gap-y-24 md:gap-y-28">
        {children.map((child, index) => (
          <div
            key={index}
            ref={(el) => { rowRefs.current[index] = el; }}
            className="grid grid-cols-1 md:grid-cols-[3.5rem_1fr] md:gap-x-6"
          >
            <div className="hidden md:flex md:items-start md:justify-center pt-1.5">
              <motion.div
                className="relative w-5 h-5 flex items-center justify-center flex-shrink-0 z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-foreground/40"
                  initial={{ scale: 0.3, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.15 }}
                />
                <motion.div
                  className="absolute w-3.5 h-3.5 rounded-full border-2 border-background bg-foreground"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.3 }}
                  whileHover={{ scale: 1.25 }}
                />
              </motion.div>
            </div>
            <ScrollRevealSection delay={0.05 + index * 0.06}>
              <div className="min-w-0 pt-0 pb-0">{child}</div>
            </ScrollRevealSection>
          </div>
        ))}
      </div>
    </div>
  );
}
