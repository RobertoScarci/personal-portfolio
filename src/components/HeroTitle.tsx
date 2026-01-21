'use client';

import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold mb-14 leading-[0.95] tracking-[-0.04em]">
      <motion.span
        className="block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        SONO
      </motion.span>
      <motion.span
        className="block text-accent"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        ROBERTO
      </motion.span>
      <motion.span
        className="block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        SCARCI
      </motion.span>
    </h1>
  );
}

