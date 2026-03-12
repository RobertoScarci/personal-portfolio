'use client';

type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(name: string, payload?: AnalyticsPayload) {
  if (typeof window === 'undefined') return;

  if (process.env.NODE_ENV === 'development') {
    // In sviluppo, limitiamoci a mostrare gli eventi in console.
    // In futuro qui si potrà collegare Plausible/Umami o altro provider.
    // eslint-disable-next-line no-console
    console.debug('[analytics]', name, payload ?? {});
  }
}

