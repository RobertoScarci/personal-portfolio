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

/* Classic pointer shape: tip at (0,0), readable arrow + stem */
const CURSOR_PATH =
  'M 0 0 L 0 16 L 6 15 L 10 20 L 13 19 L 10 13 L 17 11 Z';

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
      style={{ left: 0, top: 0 }}
      aria-hidden
    >
      {/* Cursor: classic arrow — dark body + pink/purple layered outline (pixel-art style) */}
      <AnimatePresence mode="wait">
        {!isHovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              {/* Outer glow — accent */}
              <path
                d={CURSOR_PATH}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinejoin="miter"
                strokeLinecap="butt"
                opacity={0.7}
              />
              {/* Inner outline — accent, tighter */}
              <path
                d={CURSOR_PATH}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.2"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              />
              {/* Dark body */}
              <path
                d={CURSOR_PATH}
                fill="var(--background)"
                stroke="var(--foreground)"
                strokeWidth="1"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              />
              {/* Gloss */}
              <path
                d="M 1 1 L 1 12 L 4 11.5 L 6 16 L 8 15 L 6 10 L 11 8.5 Z"
                fill="rgba(255,255,255,0.07)"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ring on hover over clickable */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
              className="cursor-ring-neon absolute top-0 left-0 rounded-full border-2 border-accent bg-transparent"
              style={{
              width: 40,
              height: 40,
              transform: 'translate(-50%, -50%)',
            }}
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
