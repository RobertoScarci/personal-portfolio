'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollRevealSection from '@/components/ScrollRevealSection';

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
}

interface CareerTimelineProps {
  items: TimelineItem[];
}

/** Offset dal top della riga al centro del pallino (pt-1.5 = 6px + metà dot 7px ≈ 13px) */
const DOT_CENTER_OFFSET = 20;

export default function CareerTimeline({ items }: CareerTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observersRef = useRef<IntersectionObserver[]>([]);
  const [lineHeightPx, setLineHeightPx] = useState(0);
  const [revealedIndex, setRevealedIndex] = useState(0);

  // Misura la Y del centro di ogni pallino rispetto al container
  const measureDotPositions = () => {
    const container = containerRef.current;
    if (!container) return;
    const positions: number[] = [];
    rowRefs.current.forEach((row, i) => {
      if (row) {
        const top = row.offsetTop;
        positions[i] = top + DOT_CENTER_OFFSET;
      }
    });
    return positions;
  };

  // Misura posizioni dei pallini dopo il layout
  useLayoutEffect(() => {
    const positions = measureDotPositions();
    if (positions && positions.length > 0) {
      setLineHeightPx(positions[0]);
    }
  }, [items.length]);

  // Aggiorna l'altezza della linea quando cambia revealedIndex
  useEffect(() => {
    const positions = measureDotPositions();
    if (positions && positions.length > 0 && revealedIndex < positions.length) {
      setLineHeightPx(positions[revealedIndex]);
    }
  }, [revealedIndex, items.length]);

  // Intersection Observer: quando una riga entra in view, estendi la linea fino a quel pallino (effetto loading bar)
  useEffect(() => {
    const observe = () => {
      observersRef.current.forEach((o) => o.disconnect());
      observersRef.current = [];
      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setRevealedIndex((prev) => Math.max(prev, index));
              }
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
  }, [items.length]);

  // Misura di nuovo su resize
  useEffect(() => {
    const onResize = () => {
      const positions = measureDotPositions();
      if (positions && revealedIndex < positions.length) {
        setLineHeightPx(positions[revealedIndex]);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [revealedIndex]);

  return (
    <div ref={containerRef} className="relative">
      {/* Linea unica: si rivela progressivamente dall’alto fino al pallino “raggiunto” (effetto loading bar) */}
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
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => { rowRefs.current[index] = el; }}
            className="grid grid-cols-1 md:grid-cols-[3.5rem_1fr] md:gap-x-6"
          >
            {/* Cella pallino: centrato sulla linea (la linea passa dal centro) */}
            <div className="hidden md:flex md:items-start md:justify-center pt-1.5">
              <motion.div
                className="relative w-5 h-5 flex items-center justify-center flex-shrink-0 z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <motion.span
                  className={`absolute inset-0 rounded-full border-2 ${
                    item.type === 'education' ? 'border-foreground/40' : 'border-accent/50'
                  }`}
                  initial={{ scale: 0.3, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.15 }}
                />
                <motion.div
                  className={`absolute w-3.5 h-3.5 rounded-full border-2 border-background ${
                    item.type === 'education' ? 'bg-foreground' : 'bg-accent'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                    delay: 0.3,
                  }}
                  whileHover={{ scale: 1.25 }}
                />
              </motion.div>
            </div>

            <ScrollRevealSection delay={0.05 + index * 0.06}>
              <div className="min-w-0 pt-0 pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'education'
                        ? 'bg-foreground/10 text-foreground/90'
                        : 'bg-accent/20 text-accent'
                    }`}
                  >
                    {item.type === 'education' ? 'Formazione' : 'Esperienza'}
                  </span>
                  <span className="text-sm font-semibold text-foreground/70">{item.year}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-accent font-medium text-sm mb-2">{item.organization}</p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollRevealSection>
          </div>
        ))}
      </div>
    </div>
  );
}
