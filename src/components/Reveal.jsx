import { useEffect, useRef, useState } from 'react'

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useInView({ threshold = 0.25, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) { setSeen(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); if (once) io.disconnect() }
      else if (!once) setSeen(false)
    }, { threshold, rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])
  return [ref, seen]
}

// Fades and lifts its children into place when scrolled into view.
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, seen] = useInView({ threshold: 0.15 })
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghkmnpqrstuvwxyz0123456789#%&*+'

// Headline that scrambles into place. parts: [{ t: 'text', hl: true|false }]
// The real text is always in aria-label, so screen readers and search see the final words.
export function Scramble({ as: Tag = 'h2', parts, className = '' }) {
  const full = parts.map((p) => p.t).join('')
  const [ref, seen] = useInView({ threshold: 0.4 })
  const [shown, setShown] = useState(full)
  const started = useRef(false)

  useEffect(() => {
    if (!seen || started.current || prefersReducedMotion()) return
    started.current = true
    const start = performance.now()
    const dur = 750
    let raf = 0
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur)
      const lock = Math.floor(p * full.length)
      let out = ''
      for (let i = 0; i < full.length; i++) {
        const c = full[i]
        out += i < lock || c === ' ' ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      setShown(p >= 1 ? full : out)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    setShown(full.replace(/[^ ]/g, ' '))
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, full])

  let cursor = 0
  return (
    <Tag ref={ref} className={`scramble ${className}`.trim()} aria-label={full}>
      <span aria-hidden="true">
        {parts.map((p, i) => {
          const slice = shown.slice(cursor, cursor + p.t.length)
          cursor += p.t.length
          return p.hl ? <em key={i} className="grad-text">{slice}</em> : <span key={i}>{slice}</span>
        })}
      </span>
    </Tag>
  )
}

export function CountUp({ to, prefix = '', suffix = '', duration = 1400 }) {
  const [ref, seen] = useInView({ threshold: 0.5 })
  const [val, setVal] = useState(prefersReducedMotion() ? to : 0)
  useEffect(() => {
    if (!seen || prefersReducedMotion()) { if (seen) setVal(to); return }
    const start = performance.now()
    let raf = 0
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])
  return <span ref={ref}>{prefix}{val.toLocaleString('en-US')}{suffix}</span>
}
