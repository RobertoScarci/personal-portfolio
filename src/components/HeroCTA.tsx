'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.5,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <Link
        href="/carriera"
        className="group inline-flex items-center gap-3 text-foreground/80 hover:text-foreground transition-all duration-500 font-medium text-base"
      >
        <span className="relative pb-1">
          Scopri la mia storia
          <motion.span
            className="absolute -bottom-1 left-0 h-[2px] bg-accent"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </span>
        <motion.span
          className="inline-block text-accent"
          initial={{ x: 0, opacity: 0.7 }}
          whileHover={{ x: 6, opacity: 1 }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 25,
            duration: 0.3
          }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  );
}
