# Contributing

Grazie per l’interesse nel migliorare questo portfolio.

## Setup

```bash
npm install
```

## Comandi utili

- **Dev**:

```bash
npm run dev
```

- **Lint**:

```bash
npm run lint
```

- **Build**:

```bash
npm run build
```

- **Pre-publish check** (consigliato prima di pushare):

```bash
npm run check
```

## Convenzioni

- **Branch**: lavora su branch dedicati quando possibile (es. `feat/...`, `fix/...`, `chore/...`).
- **Commit**: usa messaggi in stile conventional (es. `feat(ui): ...`, `fix(a11y): ...`, `chore(docs): ...`).
- **Stile UI**:
  - Preferisci i componenti in `src/components/ui/` per CTA, badge e titoli.
  - Usa i token documentati in `src/app/design-tokens.md` come riferimento.

## Quality bar (prima di aprire una PR)

- `npm run check` passa in locale.
- Nessuna regressione di accessibilità evidente (focus, contrasto, navigazione tastiera).
- Nessun asset/secret aggiunto per errore (`.env`, chiavi, credenziali).

