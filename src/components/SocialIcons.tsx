'use client';

import Link from 'next/link';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'GitHub', href: '#', icon: FaGithub },
  { name: 'Instagram', href: '#', icon: FaInstagram },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-8 md:gap-10">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35 + index * 0.06,
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/55 hover:text-foreground transition-all duration-300 group"
              aria-label={social.name}
            >
              <motion.div
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 450, damping: 28, duration: 0.28 }}
              >
                <Icon className="w-5 h-5 md:w-[1.35rem] md:h-[1.35rem]" />
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
