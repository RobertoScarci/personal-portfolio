'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroCTA() {
  return (
    <div>
      <Link
        href="/carriera"
        className="group inline-flex items-center gap-3 py-3 pr-1 text-foreground/95 hover:text-foreground transition-all duration-300 font-medium text-base md:text-lg"
      >
        <span className="relative pb-1">
          Scopri la mia storia
          <motion.span
            className="absolute -bottom-1 left-0 h-[1.5px] bg-accent"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </span>
        <motion.span
          className="inline-block text-accent opacity-85 group-hover:opacity-100"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          whileHover={{ x: 8, transition: { type: 'spring', stiffness: 400, damping: 28 } }}
        >
          →
        </motion.span>
      </Link>
    </div>
  );
}
