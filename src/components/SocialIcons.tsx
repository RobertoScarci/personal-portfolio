'use client';

import Link from 'next/link';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram 
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
    <div className="flex items-center gap-6">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.7 + index * 0.1,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-all duration-300 group"
              aria-label={social.name}
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
