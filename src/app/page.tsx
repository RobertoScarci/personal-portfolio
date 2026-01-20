import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Home Page
          </h1>
          <p className="text-lg text-muted-foreground">
            Questa è la pagina home. Il contenuto verrà implementato nello step successivo.
          </p>
        </div>
      </div>
    </Layout>
  );
}
