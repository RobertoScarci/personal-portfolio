import Link from 'next/link';
import { 
  FaTwitter, 
  FaFacebook, 
  FaLinkedin, 
  FaGithub, 
  FaDribbble, 
  FaInstagram 
} from 'react-icons/fa';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'Facebook', href: '#', icon: FaFacebook },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'GitHub', href: '#', icon: FaGithub },
  { name: 'Dribbble', href: '#', icon: FaDribbble },
  { name: 'Instagram', href: '#', icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
