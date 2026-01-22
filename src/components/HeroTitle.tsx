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
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-[1.1] tracking-[0.01em] glitch-text">
      {words.map((word, wordIndex) => {
        const isAccent = word === 'ROBERTO';
        const letters = word.split('');
        const shouldAnimate = word === 'SONO';
        
        return (
          <span key={`word-${wordIndex}-${key}`} className="inline-block mr-3">
            {letters.map((letter, letterIndex) => {
              const totalIndex = wordIndex * 100 + letterIndex;
              const delay = totalIndex * 0.05;
              
              if (shouldAnimate) {
                return (
                  <motion.span
                    key={`letter-${totalIndex}-${key}`}
                    className="inline-block"
                    initial={{ 
                      opacity: 0, 
                      y: 20, 
                      filter: 'blur(6px)',
                      scale: 0.8
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      filter: 'blur(0px)',
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: delay,
                      ease: premiumEase
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                );
              } else {
                return (
                  <span
                    key={`letter-${totalIndex}-${key}`}
                    className={`inline-block ${isAccent ? 'text-accent glitch-text-accent' : ''}`}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                );
              }
            })}
          </span>
        );
      })}
    </h1>
  );
}

