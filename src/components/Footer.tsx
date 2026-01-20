import Link from 'next/link';

const socialLinks = [
  { name: 'GitHub', href: '#', icon: 'github' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-surface/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Personal Portfolio. Tutti i diritti riservati.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                {/* Placeholder for icons - will be replaced with actual icons */}
                <span className="text-lg font-semibold">{social.name[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
