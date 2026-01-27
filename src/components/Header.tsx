'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/progetti' },
  { name: 'Contact', href: '/contatti' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filtra i link per escludere quello della pagina corrente (ma mostra tutti se siamo in home)
  const visibleNavigation = pathname === '/' 
    ? navigation 
    : navigation.filter((item) => pathname !== item.href);

  return (
    <header className="relative z-50 w-full flex-shrink-0 h-16 flex items-center">
      <nav className="w-full flex items-center justify-between py-0">
        <Link
          href="/"
          className="relative inline-block"
          aria-label="Home"
        >
          <motion.div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-transparent relative"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25, duration: 0.3 }}
          >
            <img
              src="/images/profile.jpg"
              alt="Roberto Scarci"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent/0"
              whileHover={{
                borderColor: 'rgba(236, 72, 153, 0.8)',
                boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 30px rgba(236, 72, 153, 0.3), inset 0 0 20px rgba(236, 72, 153, 0.2)',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {visibleNavigation.map((item, index) => {
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="relative"
                  whileHover="hover"
                  initial="initial"
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-all duration-300 relative text-foreground/70 hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                  <motion.span
                    layoutId={`activeTab-${item.name}`}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1.5px] bg-accent origin-center"
                    style={{
                      width: '100%',
                    }}
                    variants={{
                      initial: {
                        scaleX: 0,
                      },
                      hover: {
                        scaleX: 1,
                      },
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border"
          >
            <nav className="py-4 flex flex-col gap-4">
              {(pathname === '/' ? navigation : visibleNavigation).map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium transition-colors py-2 text-foreground/70 hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
