import Layout from '@/components/Layout';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
}

const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Full-Stack Developer Freelance',
    organization: 'Indipendente',
    description: 'Sviluppo di applicazioni web moderne per clienti internazionali, specializzandomi in React, Next.js e Node.js.',
    type: 'experience',
  },
  {
    year: '2022',
    title: 'Laurea in Informatica',
    organization: 'Università',
    description: 'Laurea con lode in Informatica, con focus su sviluppo software, architetture distribuite e user experience design.',
    type: 'education',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    organization: 'Azienda Tech',
    description: 'Sviluppo di interfacce utente moderne e responsive, collaborando con team di design e backend.',
    type: 'experience',
  },
  {
    year: '2018',
    title: 'Diploma di Maturità',
    organization: 'Istituto Tecnico',
    description: 'Diploma in Informatica e Telecomunicazioni con specializzazione in sviluppo software.',
    type: 'education',
  },
];

export default function Carriera() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Carriera</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Il mio percorso di studi ed esperienze professionali, un viaggio continuo 
              di crescita tecnica e personale.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-8">
                  {/* Year Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === 'education'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-accent/20 text-accent'
                      }`}>
                        {item.type === 'education' ? 'Formazione' : 'Esperienza'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-accent font-medium mb-3">{item.organization}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20 border-t border-border pt-12">
            <h2 className="text-3xl font-bold mb-8">Competenze Tecniche</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React, Next.js, TypeScript</li>
                  <li>• Tailwind CSS, CSS Modules</li>
                  <li>• State Management (Redux, Zustand)</li>
                  <li>• Testing (Jest, React Testing Library)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Node.js, Express, NestJS</li>
                  <li>• Database (PostgreSQL, MongoDB)</li>
                  <li>• API REST & GraphQL</li>
                  <li>• Authentication & Security</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Git, GitHub, CI/CD</li>
                  <li>• Docker, Vercel, AWS</li>
                  <li>• Figma, Adobe XD</li>
                  <li>• Agile, Scrum</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Problem Solving</li>
                  <li>• Comunicazione efficace</li>
                  <li>• Team Collaboration</li>
                  <li>• Continuous Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
