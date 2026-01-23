import Header from './Header';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Link href="#main-content" className="skip-to-main">
        Salta al contenuto principale
      </Link>
      <main id="main-content" className="flex-1 relative z-10" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
