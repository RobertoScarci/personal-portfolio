'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const title = "SONO ROBERTO SCARCI";
const words = title.split(' ');

// Custom easing for premium feel
const premiumEase = [0.16, 1, 0.3, 1];

export default function HeroTitle() {
  const { animationKey } = useTheme();
  const [key, setKey] = useState(0);

  // Re-trigger animation when theme changes
  useEffect(() => {
    setKey(animationKey);
  }, [animationKey]);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-[-0.02em] md:tracking-[-0.01em] glitch-text">
      {words.map((word, wordIndex) => {
        const isAccent = word === 'ROBERTO';
        
        return (
          <motion.span
            key={`word-${wordIndex}-${key}`}
            className={`inline-block mr-6 md:mr-8 lg:mr-10 ${isAccent ? 'text-accent glitch-text-accent' : ''}`}
            initial={{ 
              opacity: 0, 
              y: 24, 
              filter: 'blur(8px)',
              scale: 0.85
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              filter: 'blur(0px)',
              scale: 1
            }}
            transition={{ 
              duration: 0.9,
              delay: wordIndex * 0.1,
              ease: [0.16, 1, 0.3, 1]
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

