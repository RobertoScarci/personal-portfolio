/**
 * Watermark di sfondo per pagina (stile codewonders: grandi iniziali/testo
 * in basso a sinistra, tenue, blur). Testo dinamico per route.
 */
interface PageWatermarkProps {
  label: string;
  /** Classe per size testo, es. text-[700px] o text-[320px] */
  className?: string;
}

export default function PageWatermark({
  label,
  className = 'text-[700px]',
}: PageWatermarkProps) {
  return (
    <div
      className="fixed inset-0 z-[2] pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`hero-watermark absolute font-light italic leading-none ${className}`}
        style={{ 
          color: 'rgba(150, 150, 170, 0.25)',
          transform: 'scaleY(0.75)',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        {label}
      </div>
    </div>
  );
}
