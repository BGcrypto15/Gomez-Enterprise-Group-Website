// Hand-coded inline SVG icons — no icon library, so every glyph stays on-brand.

export function IconStrategy({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 34 L18 24 L26 30 L40 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 12 H40 V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconWeb({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="3" />
      <line x1="6" y1="18" x2="42" y2="18" stroke="currentColor" strokeWidth="3" />
      <circle cx="12" cy="14" r="1.6" fill="currentColor" />
      <circle cx="17" cy="14" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function IconMarketing({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M6 20v8h7l12 8V12l-12 8H6z" fill="currentColor" />
      <path d="M31 16c3 2.4 3 13.6 0 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M37 12c5.2 4.4 5.2 19.6 0 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function IconAI({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6 L28 20 L42 24 L28 28 L24 42 L20 28 L6 24 L20 20 Z" fill="currentColor" />
    </svg>
  )
}

export function IconPhone({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMail({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

export function IconPin({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function IconArrow({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMenu({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconCar({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 28 L11 18 a3 3 0 0 1 3-2 h16 a3 3 0 0 1 3 2 l3 10" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <rect x="5" y="28" width="38" height="9" rx="3" stroke="currentColor" strokeWidth="3" />
      <circle cx="14" cy="37" r="3.4" fill="currentColor" />
      <circle cx="34" cy="37" r="3.4" fill="currentColor" />
    </svg>
  )
}

export function IconGift({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="18" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="3" />
      <path d="M8 26h32" stroke="currentColor" strokeWidth="3" />
      <path d="M24 18v22" stroke="currentColor" strokeWidth="3" />
      <path d="M24 18c-3-8-14-8-14 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 18c3-8 14-8 14 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function IconStar({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 17l-5.6 3.1 1.4-6.3-4.8-4.3 6.4-.6L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}
