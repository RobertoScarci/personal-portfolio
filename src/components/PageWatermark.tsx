/**
 * Watermark di sfondo per pagina (stile codewonders: grandi iniziali/testo
 * in basso a sinistra, tenue, blur). Testo dinamico per route.
 */
interface PageWatermarkProps {
  label: string;
  /** Classe per size testo, es. text-[700px] o text-[320px] */
  className?: string;
  /** Se true, posiziona il watermark verticalmente sul lato sinistro */
  vertical?: boolean;
}

export default function PageWatermark({
  label,
  className = 'text-[700px]',
  vertical = false,
}: PageWatermarkProps) {
  // RS rimane tutto maiuscolo, altre parole: prima maiuscola, resto minuscolo corsivo
  const formattedLabel = label === 'RS' 
    ? label 
    : label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();

  // Stile per posizionamento verticale (projects)
  const verticalStyle = vertical
    ? {
        left: '2%',
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'left center',
      }
    : {
        transform: 'scaleY(0.75)',
      };

  return (
    <div
      className="fixed inset-0 z-[2] pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`hero-watermark absolute font-light leading-none ${className} ${label !== 'RS' ? 'italic' : ''}`}
        style={{ 
          color: 'rgba(150, 150, 170, 0.06)',
          fontFamily: 'Georgia, "Times New Roman", serif',
          ...verticalStyle,
        }}
      >
        {formattedLabel}
      </div>
    </div>
  );
}
