import Link from 'next/link';
import Layout from '@/components/Layout';
import PageShell from '@/components/PageShell';

export default function NotFound() {
  return (
    <Layout>
      <PageShell
        watermarkLabel="404"
        watermarkClassName="text-[240px] md:text-[280px]"
        headerSpacerClassName="h-0 flex-shrink-0"
        contentWrapperClassName="flex-1 w-full flex flex-col items-center justify-center relative z-10 px-6 md:px-8 min-h-0"
        contentContainerClassName="contents"
      >
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
      </PageShell>
    </Layout>
  );
}
