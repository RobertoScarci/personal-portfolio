# Personal Portfolio

Portfolio personale moderno e minimale per sviluppatori full-stack freelance, sviluppato con Next.js, TypeScript e Tailwind CSS.

## 🚀 Caratteristiche

- **Design Moderno e Minimale**: Ispirato ai migliori portfolio professionali
- **Dark/Light Mode**: Toggle tema con persistenza in localStorage
- **Animazioni Fluide**: Micro-animazioni con Framer Motion
- **Completamente Responsive**: Ottimizzato per tutti i dispositivi
- **SEO Ottimizzato**: Metadata, sitemap e robots.txt configurati
- **Accessibilità**: Supporto per screen reader e preferenze utente
- **Performance**: Ottimizzazioni Next.js per velocità e performance

## 📁 Struttura del Progetto

```
personal-portfolio/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # Home page
│   │   ├── carriera/     # Pagina carriera
│   │   ├── progetti/     # Pagina progetti
│   │   ├── contatti/     # Pagina contatti
│   │   ├── layout.tsx    # Layout principale
│   │   ├── metadata.ts   # Configurazione SEO
│   │   ├── globals.css   # Stili globali e design system
│   │   ├── sitemap.ts    # Sitemap dinamica
│   │   └── robots.ts     # Robots.txt
│   ├── components/        # Componenti React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── GlitchText.tsx
│   ├── contexts/         # React Context
│   │   └── ThemeContext.tsx
│   └── lib/              # Utility
│       └── utils.ts
└── public/               # File statici
```

## 🛠 Stack Tecnologico

- **Framework**: Next.js 16 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animazioni**: Framer Motion
- **Font**: Geist Sans & Geist Mono (Google Fonts)

## 📦 Installazione

1. **Clona il repository** (se non l'hai già fatto):
```bash
git clone <your-repo-url>
cd personal-portfolio
```

2. **Installa le dipendenze**:
```bash
npm install
```

3. **Avvia il server di sviluppo**:
```bash
npm run dev
```

4. **Apri** [http://localhost:3000](http://localhost:3000) nel browser

## ⚙️ Configurazione

### Personalizza i Contenuti

1. **Metadata e SEO** (`src/app/metadata.ts`):
   - Aggiorna `siteConfig` con i tuoi dati
   - Modifica URL, social links, descrizioni
   - Aggiungi codici di verifica Google/Yandex se necessario

2. **Home Page** (`src/app/page.tsx`):
   - Personalizza il testo introduttivo
   - Modifica le sezioni "Cosa faccio e per chi"

3. **Carriera** (`src/app/carriera/page.tsx`):
   - Aggiorna l'array `timeline` con le tue esperienze
   - Modifica le competenze tecniche

4. **Progetti** (`src/app/progetti/page.tsx`):
   - Aggiorna l'array `projects` con i tuoi progetti
   - Aggiungi link reali e immagini

5. **Contatti** (`src/app/contatti/page.tsx`):
   - Aggiungi il tuo indirizzo email
   - Configura il link al calendario
   - Implementa l'invio del form (es. con Resend, Formspree, ecc.)

6. **Footer** (`src/components/Footer.tsx`):
   - Aggiorna i link social con i tuoi profili reali

### Personalizza i Colori

Modifica la palette colori in `src/app/globals.css`:
- Variabili CSS `:root` per light mode
- Classe `.dark` per dark mode
- Colore accent principale: `--accent: #ec4899`

### Aggiungi Icone Social

Attualmente i link social usano placeholder. Puoi:
- Installare `react-icons` o `lucide-react`
- Aggiungere SVG personalizzati
- Usare un font icon come Font Awesome

## 🚢 Deploy

### Vercel (Consigliato)

1. Pusha il codice su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Importa il repository
4. Vercel rileverà automaticamente Next.js e configurerà tutto

### Altri Provider

Il progetto può essere deployato su qualsiasi provider che supporta Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 TODO / Prossimi Passi

- [ ] Aggiungere immagini reali per i progetti
- [ ] Implementare invio form contatti (es. Resend API)
- [ ] Aggiungere iconografie social (react-icons o SVG)
- [ ] Configurare analytics (es. Google Analytics, Plausible)
- [ ] Aggiungere blog se necessario
- [ ] Ottimizzare immagini con next/image
- [ ] Aggiungere test (Jest, React Testing Library)
- [ ] Configurare CI/CD

## 🎨 Design System

Il design system è definito in `src/app/globals.css`:
- **Colori**: Variabili CSS per light/dark mode
- **Tipografia**: Geist Sans (body), Geist Mono (code)
- **Spaziatura**: Sistema Tailwind standard
- **Breakpoints**: Mobile-first responsive design

## 📄 Licenza

Questo progetto è open source e disponibile sotto licenza MIT.

## 👤 Autore

Sviluppato seguendo le best practices per portfolio professionali.

---

**Buon lavoro con il tuo portfolio! 🚀**
