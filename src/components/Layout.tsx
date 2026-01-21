import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Link href="#main-content" className="skip-to-main">
        Salta al contenuto principale
      </Link>
      <Header />
      <main id="main-content" className="flex-1 pt-32 pb-40 relative z-10 bg-background" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
