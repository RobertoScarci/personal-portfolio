'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroCTA() {
  return (
    <div>
      <Link
        href="/carriera"
        className="group inline-flex items-center gap-3 py-3 pr-1 text-foreground/75 hover:text-foreground transition-all duration-300 font-medium text-base md:text-lg"
      >
        <motion.span 
          className="relative pb-1"
          whileHover="hover"
          initial="initial"
        >
          Scopri la mia storia
          <motion.span
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1.5px] bg-accent origin-center"
            style={{
              width: '100%',
            }}
            variants={{
              initial: {
                scaleX: 0,
              },
              hover: {
                scaleX: 1,
              },
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </motion.span>
        <motion.span
          className="inline-block text-accent opacity-85 group-hover:opacity-100"
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          whileHover={{ x: 6, transition: { type: 'spring', stiffness: 420, damping: 28 } }}
        >
          →
        </motion.span>
      </Link>
    </div>
  );
}
