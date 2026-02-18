'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface HeroTextProps {
  delay?: number;
}

export default function HeroText({ delay = 0.7 }: HeroTextProps) {
  const { animationKey } = useTheme();
  
  // Al cambio tema (animationKey > 0), animazione immediata senza delay
  // Al primo caricamento (animationKey === 0), usa il delay per sequenza gerarchica
  const animationDelay = animationKey === 0 ? delay : 0;

  return (
    <motion.div
      key={animationKey}
      className="flex-shrink-0"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{
        duration: 1.8,
        delay: animationDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="text-sm md:text-base text-foreground/80 text-left font-extralight max-w-5xl mb-2 md:mb-3 leading-[1.75]">
        <p className="mb-3 md:mb-4">
          Web Developer con base a Taranto, costruisco prodotti più veloci con l’aiuto dell’AI.
          Dopo il diploma in Grafica e Comunicazione e il percorso Boolean, lavoro ogni giorno con React, Vue, Laravel e JavaScript per dare forma a{' '}
          <Link
            href="/progetti"
            className="font-semibold text-foreground hover:text-accent transition-colors duration-300 underline-offset-4 hover:underline"
          >
            PROGETTI
          </Link>{' '}
          concreti, da repliche di app famose a layout responsive e API.
        </p>
        <p>
          Appassionato di design e di codice pulito, credo nella semplicità e nella crescita continua.
          Studio Informatica all’UniPegaso e quando non programmo mi trovi a leggere{' '}
          <Link
            href="/about"
            className="font-semibold text-foreground hover:text-accent transition-colors duration-300 underline-offset-4 hover:underline"
          >
            ARTICOLI
          </Link>{' '}
          o in ascolto di musica. Per idee o collaborazioni puoi sempre{' '}
          <Link
            href="/contatti"
            className="font-semibold text-foreground hover:text-accent transition-colors duration-300 underline-offset-4 hover:underline"
          >
            CONTATTARMI
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
}
