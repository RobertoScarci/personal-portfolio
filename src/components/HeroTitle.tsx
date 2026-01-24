'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const title = "SONO ROBERTO SCARCI";
const words = title.split(' ');

export default function HeroTitle() {
  const { animationKey } = useTheme();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(animationKey);
  }, [animationKey]);

  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-[0.04em] glitch-text pr-4">
      {words.map((word, wordIndex) => {
        const isAccent = word === 'ROBERTO';
        const isLastName = word === 'SCARCI';
        const marginRight = isLastName
          ? 'mr-0'
          : isAccent
            ? 'mr-10 md:mr-14 lg:mr-18'
            : 'mr-10 md:mr-14 lg:mr-18';
        return (
          <motion.span
            key={`word-${wordIndex}-${key}`}
            className={`inline-block ${marginRight} ${isAccent ? 'text-accent glitch-text-accent' : ''}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: wordIndex * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {wordIndex < words.length - 1 && ' '}
          </motion.span>
        );
      })}
    </h1>
  );
}
