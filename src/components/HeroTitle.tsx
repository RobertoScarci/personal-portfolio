'use client';

import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-[-0.03em] glitch-text whitespace-nowrap">
      <motion.span
        className="inline"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        SONO{' '}
      </motion.span>
      <motion.span
        className="inline text-accent glitch-text-accent"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        ROBERTO{' '}
      </motion.span>
      <motion.span
        className="inline"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        SCARCI
      </motion.span>
    </h1>
  );
}

