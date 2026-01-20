'use client';

import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
      <motion.span
        className="block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        SONO UN
      </motion.span>
      <motion.span
        className="block text-accent"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        SVILUPPATORE
      </motion.span>
      <motion.span
        className="block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        FULL-STACK
      </motion.span>
    </h1>
  );
}

