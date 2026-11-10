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

// Headline. Fades up by default. Pass rise to have the words lift into place one at a time,
// with the highlighted phrase landing last. parts: [{ t: 'text', hl: true|false }]
export function Scramble({ as: Tag = 'h2', parts, className = '', rise = false }) {
  const full = parts.map((p) => p.t).join('')
  const [ref, seen] = useInView({ threshold: 0.4 })

  if (!rise) {
    return (
      <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`.trim()}>
        {parts.map((p, i) => (p.hl ? <em key={i} className="grad-text">{p.t}</em> : <span key={i}>{p.t}</span>))}
      </Tag>
    )
  }

  let n = 0
  return (
    <Tag ref={ref} className={`rise ${seen ? 'in' : ''} ${className}`.trim()} aria-label={full}>
      <span aria-hidden="true">
        {parts.map((p, i) => {
          if (p.hl) {
            const d = n++ * 80 + 120
            return <em key={i} className="grad-text rise-w rise-hl" style={{ transitionDelay: `${d}ms` }}>{p.t}</em>
          }
          return p.t.split(/(\s+)/).map((w, j) => {
            if (!w.trim()) return w
            const d = n++ * 80
            return <span key={`${i}-${j}`} className="rise-w" style={{ transitionDelay: `${d}ms` }}>{w}</span>
          })
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
