'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* Classic pointer shape: tip at (0,0), arrow head + stem — recognizable cursor */
const CURSOR_PATH =
  'M 0 0 L 0 16 L 6 15 L 10 20 L 13 19 L 10 13 L 17 11 Z';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointerCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || pointerCoarse) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (el) {
        el.style.left = `${e.clientX}px`;
        el.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      className="fixed pointer-events-none z-[9999] w-0 h-0"
      style={{ left: 0, top: 0 }}
      aria-hidden
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="cursor-pixel cursor-neon absolute top-0 left-0"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          className="cursor-pixel"
        >
          {/* Outer glow — site color (foreground) */}
          <path
            d={CURSOR_PATH}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="2"
            strokeLinejoin="miter"
            strokeLinecap="square"
            opacity={0.85}
          />
          {/* Inner border — site color, pixel edge */}
          <path
            d={CURSOR_PATH}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="1.2"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
          {/* Dark body */}
          <path
            d={CURSOR_PATH}
            fill="var(--background)"
            stroke="var(--foreground)"
            strokeWidth="1"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
          {/* Gloss */}
          <path
            d="M 1 1 L 1 12 L 4 11.5 L 6 16 L 8 15 L 6 10 L 11 8.5 Z"
            fill="rgba(255,255,255,0.06)"
          />
        </svg>
      </motion.div>
    </div>
  );
}
