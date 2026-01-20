'use client';

import { motion } from 'framer-motion';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  const words = children.split(' ');

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 1 }}
          whileHover={{
            opacity: [1, 0.8, 1],
            x: [0, -2, 2, 0],
            color: ['currentColor', '#ec4899', 'currentColor'],
          }}
          transition={{
            duration: 0.3,
            times: [0, 0.5, 1],
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </span>
  );
}
