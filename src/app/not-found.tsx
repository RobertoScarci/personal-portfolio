import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import PageWatermark from '@/components/PageWatermark';

export default function NotFound() {
  return (
    <Layout>
      <PageWatermark label="404" className="text-[240px] md:text-[280px]" />
      <section className="relative w-full min-h-screen flex flex-col">
        <div className="h-10 md:h-12 flex-shrink-0" aria-hidden="true" />

        <div className="w-full flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col">
            <Header />
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10 px-6 md:px-8">
          <div className="w-full max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Pagina non trovata
            </h1>
            <p className="mt-4 text-base md:text-lg text-foreground/70">
              L’indirizzo che cerchi non esiste o è stato spostato.
            </p>
            <Link
              href="/"
              className="mt-8 inline-block rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-accent hover:text-foreground transition-colors"
            >
              Torna alla home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
