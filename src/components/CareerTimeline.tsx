'use client';

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

export default function CareerTimeline({ items }: CareerTimelineProps) {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row md:gap-0 gap-6">
        {/* Colonna linea — stessa larghezza di About (w-14), linea animata */}
        <div className="hidden md:flex md:w-14 md:flex-shrink-0 md:justify-center md:relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </div>

        {/* Colonna contenuto — gap come About (gap-24 md:gap-28), titoli distaccati dalla linea */}
        <div className="flex-1 min-w-0 flex flex-col gap-24 md:gap-28">
          {items.map((item, index) => (
            <ScrollRevealSection key={index} delay={0.05 + index * 0.06}>
              <div className="relative flex items-start gap-6">
                {/* Pallino sulla linea — stesso posizionamento di About (-left-7) */}
                <motion.div
                  className={`hidden md:block absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-background -translate-x-1/2 flex-shrink-0 z-10 ${
                    item.type === 'education' ? 'bg-foreground' : 'bg-accent'
                  }`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 28,
                    delay: 0.4 + index * 0.12,
                  }}
                />
                <div className="flex-1 min-w-0 pl-0 md:pl-0">
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
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
    </div>
  );
}
