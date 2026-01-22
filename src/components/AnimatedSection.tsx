'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const { animationKey } = useTheme();
  const [key, setKey] = useState(0);

  // Re-trigger animation when theme changes
  useEffect(() => {
    setKey(animationKey);
  }, [animationKey]);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 15, filter: 'blur(3px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
