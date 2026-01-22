'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroCTA() {
  return (
    <div className="text-left mt-12 md:mt-16">
      <Link
        href="/carriera"
        className="group inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-all duration-300 font-medium"
      >
        <span className="relative">
          Scopri la mia storia
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300"></span>
        </span>
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          →
        </motion.span>
      </Link>
    </div>
  );
}
