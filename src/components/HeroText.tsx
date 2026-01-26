'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroTextProps {
  delay?: number;
}

export default function HeroText({ delay = 0.7 }: HeroTextProps) {
  return (
    <motion.div
      className="flex-shrink-0"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="text-sm md:text-base text-foreground/80 text-left font-extralight max-w-5xl mb-14 md:mb-20 leading-[2.25]">
        <p className="mb-12 md:mb-16">
          Il tuo sviluppatore full-stack di fiducia, architetto UX e ingegnere JavaScript.
          Passo le mie giornate (e spesso le notti) dipingendo la tela di Internet con{' '}
          <Link
            href="/progetti"
            className="font-semibold text-foreground hover:text-accent transition-colors duration-300 underline-offset-4 hover:underline"
          >
            PROGETTI
          </Link>{' '}
          e righe di codice, trasformando zeri e uno in esperienze immersive e interattive.
        </p>
        <p className="pt-2 md:pt-3">
          Appassionato di fotografia e design minimale, trovo bellezza nella semplicità e nell'ordine.
          Quando non sto creando esperienze web curate, puoi trovarmi a leggere{' '}
          <Link
            href="#"
            className="font-semibold text-foreground hover:text-accent transition-colors duration-300 underline-offset-4 hover:underline"
          >
            ARTICOLI
          </Link>{' '}
          o ad ascoltare musica, perdendomi nel flusso delle melodie. In ogni caso puoi sempre{' '}
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
