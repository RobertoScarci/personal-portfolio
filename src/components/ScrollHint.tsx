'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = setTimeout(() => setVisible(false), 8000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none fixed inset-x-0 bottom-6 flex justify-center z-40"
          aria-hidden
        >
          <div className="inline-flex flex-col items-center gap-1 text-[11px] text-foreground/60">
            <span className="uppercase tracking-[0.16em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

