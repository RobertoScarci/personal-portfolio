import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 pt-20 relative z-10 bg-background">
        {children}
      </main>
      <Footer />
    </div>
  );
}
