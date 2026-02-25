'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function isClickable(el: Element): boolean {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName.toLowerCase();
  if (tag === 'a' || tag === 'button') return true;
  if (el.getAttribute('role') === 'button') return true;
  const tabIndex = el.getAttribute('tabindex');
  if (tabIndex !== null && el.tabIndex >= 0 && !el.hasAttribute('disabled')) return true;
  try {
    if (window.getComputedStyle(el).cursor === 'pointer') return true;
  } catch {
    // ignore
  }
  return false;
}

function findClickableElement(x: number, y: number): HTMLElement | null {
  if (typeof document === 'undefined') return null;
  const elements = document.elementsFromPoint(x, y);
  for (const el of elements) {
    if (el instanceof HTMLElement && isClickable(el)) return el;
  }
  return null;
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastHoverRef = useRef(false);

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
      const clickable = findClickableElement(e.clientX, e.clientY);
      const hovering = clickable !== null;
      if (hovering !== lastHoverRef.current) {
        lastHoverRef.current = hovering;
        setIsHovering(hovering);
      }
    };

    const handleLeave = () => {
      lastHoverRef.current = false;
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      className="fixed pointer-events-none z-[9999] w-0 h-0"
      style={{
        left: 0,
        top: 0,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden
    >
      {/* Dot: visible only when NOT hovering; animated pulse + glow */}
      <AnimatePresence mode="wait">
        {!isHovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="absolute top-0 left-0"
          >
            <div
              className="cursor-dot absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-foreground"
              style={{ boxShadow: '0 0 14px var(--accent), 0 0 6px var(--accent)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Ring: only on hover, empty center (no dot inside) */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-transparent"
            style={{ width: 40, height: 40 }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
