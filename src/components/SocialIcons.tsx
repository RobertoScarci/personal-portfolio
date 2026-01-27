'use client';

import Link from 'next/link';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/roberto-scarci-0625ab2a6/', icon: FaLinkedin },
  { name: 'GitHub', href: 'https://github.com/RobertoScarci', icon: FaGithub },
  { name: 'Instagram', href: 'https://www.instagram.com/robertoscarci_/', icon: FaInstagram },
  { name: 'Facebook', href: 'https://www.facebook.com/roberto.scarci', icon: FaFacebook },
  { name: 'TikTok', href: 'https://www.tiktok.com/@robertoscarci?lang=en', icon: FaTiktok },
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
              delay: 1.3 + index * 0.06,
              duration: 0.5,
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
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
