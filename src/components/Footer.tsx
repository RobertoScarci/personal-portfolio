import Link from 'next/link';
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa';
import { siteConfig } from '@/app/metadata';

const socialItems = [
  { name: 'Twitter', key: 'twitter' as const, icon: FaTwitter },
  { name: 'Facebook', key: 'facebook' as const, icon: FaFacebook },
  { name: 'LinkedIn', key: 'linkedin' as const, icon: FaLinkedin },
  { name: 'GitHub', key: 'github' as const, icon: FaGithub },
  { name: 'Dribbble', key: 'dribbble' as const, icon: FaDribbble },
  { name: 'Instagram', key: 'instagram' as const, icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40">
      <div className="container mx-auto px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 justify-start">
            {socialItems.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={siteConfig.links[social.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
