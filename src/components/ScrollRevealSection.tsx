'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Quanto dell'elemento deve essere visibile per attivare l'animazione (0-1). Default 0.12 */
  amount?: number;
}

export default function ScrollRevealSection({
  children,
  delay = 0,
  className = '',
  amount = 0.12,
}: ScrollRevealSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
