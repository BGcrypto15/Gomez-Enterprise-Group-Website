// Glossy gradient tiles with simple line glyphs. Colors come from the theme tokens.
const GLYPHS = {
  website: (<><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /><path d="M7 14h6M7 17h10" /></>),
  social: (<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />),
  apps: (<><rect x="4" y="4" width="7" height="7" rx="2" /><rect x="13" y="4" width="7" height="7" rx="2" /><rect x="4" y="13" width="7" height="7" rx="2" /><rect x="13" y="13" width="7" height="7" rx="2" /></>),
  launch: (<><path d="M5 19c.5-3 2-4.5 4-5l5-5c2-2 4.5-3 6-3-0 1.5-1 4-3 6l-5 5c-.5 2-2 3.5-5 4" /><path d="M9 15l-4 1M14 20l1-4M15 9h.01" /></>),
  growth: (<><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 15l4-4 3 3 5-6" /></>),
  leader: (<><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" /></>),
  ai: (<><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" /><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" /></>),
  tech: (<><path d="M5 10a10 10 0 0 1 14 0M8 13.5a6 6 0 0 1 8 0" /><circle cx="12" cy="17" r="1.2" /></>),
  apparel: (<path d="M8 4l-5 3 2 4 3-1v10h8V10l3 1 2-4-5-3c-.5 1.5-2 2.5-4 2.5S8.500 5.500 8 4Z" />),
  chart: (<><path d="M4 17l5-6 4 4 7-9" /><path d="M16 6h4v4" /></>),
  camera: (<><rect x="3.5" y="6" width="17" height="13" rx="3.5" /><circle cx="12" cy="12.5" r="3.5" /><path d="M16.5 9.5h.01" /></>),
}

export function GlossIcon({ name, size = 56, className = '' }) {
  return (
    <span className={`gloss ${className}`.trim()} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 24 24" width={size * 0.5} height={size * 0.5} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {GLYPHS[name]}
      </svg>
    </span>
  )
}

export function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
