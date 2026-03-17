# Design tokens (riassunto)

Questa pagina riepiloga i token principali usati nel portfolio, così da avere
un riferimento unico quando si fanno modifiche di UI.

## Colori

- **Background scuro**: `#0a0a0f`
- **Foreground chiaro**: `#ffffff`
- **Surface**: vari livelli definiti da `--surface` e `--surface-elevated`
- **Border**: `--border` (tonalità grigio blu scuro in dark)
- **Accent (rosa)**: `#ec4899`
- **Accent foreground**: `#ffffff`

I token sono definiti in `[src/app/globals.css](src/app/globals.css)` tramite
variabili CSS e mappati nel tema Tailwind con `@theme inline`.

## Tipografia

- **Font sans**: `Geist` (`--font-geist-sans`)
- **Font mono**: `Geist Mono` (`--font-geist-mono`)
- **Titoli**: peso 700–800, `tracking[-0.02em]`, `h1` con `letter-spacing: 0.04em`
- **Body**: peso 300, `font-size` base `clamp(14px, 1.5vw, 16px)`

## Spaziatura & radius

- Sezioni verticali: `clamp(2rem, 4vw, 3rem)` come base per padding top/bottom.
- Card e contenitori: `rounded-2xl` per i blocchi principali, `rounded-xl` per elementi secondari.
- Pill e badge: `rounded-full`.

## Effetti

- **Glow neon accent**:
  - usato su cursori, CTA e tab attivi
  - tipicamente `shadow-[0_0_24px_rgba(236,72,153,0.45)]`
- **Grid di sfondo**:
  - definita in `body::before` con `--grid-color`
- **Glow di background**:
  - radiali definiti in `.dark body::after` con gradienti blu/rosa.

## Componenti riusabili

Componenti base definiti in:

- `src/components/ui/Button.tsx` — varianti `primary`, `outline`, `ghost`
- `src/components/ui/Badge.tsx` — badge `default` e `outline`
- `src/components/ui/SectionHeader.tsx` — titolo di sezione con `eyebrow` opzionale
- `src/components/ui/index.ts` — export “barrel” per import più puliti

L’obiettivo è usare questi componenti quando si introducono nuove sezioni o CTA,
così da mantenere coerenza di stile senza dover ricordare tutte le classi tailwind.

### Linee guida rapide

- **CTA principali**: usa `Button` variante `primary`.
- **CTA secondarie**: usa `Button` variante `outline`.
- **Tag/stack**: usa `Badge` (default) o `Badge` (outline) per contesti più neutri.
- **Titoli sezione**: usa `SectionHeader` per coerenza di gerarchie e spaziature.

### Esempi d’uso (snippet)

```tsx
import { Button, Badge, SectionHeader } from '@/components/ui';

export function Example() {
  return (
    <section className="space-y-6">
      <SectionHeader
        eyebrow="Section"
        title="Design system"
        description="Componenti base e token per mantenere coerenza."
      />
      <div className="flex flex-wrap gap-3">
        <Badge>Next.js</Badge>
        <Badge variant="outline">Accessibility</Badge>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="outline">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </section>
  );
}
```

