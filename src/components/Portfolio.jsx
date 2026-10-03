import { useCallback, useEffect, useRef, useState } from 'react'


const PROJECTS = [
  {
    name: 'Migshot Auto Solutions',
    type: 'Auto Body Shop, Philadelphia',
    copy: 'Full website, Google Business Profile, and LinkedIn setup for a local auto body shop.',
    tag: 'Launch Package',
    url: 'https://migshotautosolutions.com',
    link: 'migshotautosolutions.com',
  },
  {
    name: 'The Natty King',
    type: 'Personal Brand',
    copy: 'Website, photo gallery, and booking form for a world champion powerlifter, plus a content and outreach plan.',
    tag: 'Launch Package',
    url: 'https://thedavebrown.website',
    link: 'thedavebrown.website',
  },
  {
    name: 'SlotShot.live',
    type: 'Sweepstakes Platform',
    copy: 'A full sweepstakes platform with user accounts, an admin dashboard, and a live drawing tool.',
    tag: 'Build-to-Own Systems',
    url: 'https://slotshot.live',
    link: 'slotshot.live',
  },
  {
    name: 'Card Watch',
    type: 'Inventory Alert System',
    copy: 'Watches stock around the clock and alerts collectors by phone call and message the moment new product lands.',
    tag: 'Build-to-Own Systems',
    status: 'Live demo available',
  },
]

const CUSTOM = [
  'Digital signage for in-store screens',
  'Online booking with automatic text reminders',
  'Customer loyalty and rewards programs',
  'Client portals and simple CRMs to track customers and jobs',
  'Quote, estimate, and invoice builders',
  'Online ordering and payment pages',
  'KPI and sales dashboards',
]

export default function Portfolio() {
  const trackRef = useRef(null)
  const wrapRef = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)
  const pauseTimer = useRef(null)
  const count = PROJECTS.length

  const goTo = useCallback((i) => {
    const track = trackRef.current
    if (!track) return
    const idx = (i + count) % count
    const card = track.children[idx]
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' })
  }, [count])

  // figure out which card is centered
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const mid = track.scrollLeft + track.clientWidth / 2
        let best = 0, bestD = Infinity
        Array.from(track.children).forEach((c, i) => {
          const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid)
          if (d < bestD) { bestD = d; best = i }
        })
        setActive(best)
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { track.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  // only auto-advance while on screen
  useEffect(() => {
    const el = wrapRef.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || !visible || reduce) return
    const t = setTimeout(() => goTo(active + 1), 5000)
    return () => clearTimeout(t)
  }, [active, paused, visible, goTo])

  const holdPause = () => {
    setPaused(true)
    clearTimeout(pauseTimer.current)
    pauseTimer.current = setTimeout(() => setPaused(false), 12000)
  }

  return (
    <section className="theme-green-wash" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Work</span>
          <h2>Real Projects, Built and Running</h2>
        </div>
      </div>
      <div
        className="work-carousel"
        ref={wrapRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={holdPause}
        aria-roledescription="carousel"
        aria-label="Our projects"
      >
        <button className="car-arrow car-prev" onClick={() => { holdPause(); goTo(active - 1) }} aria-label="Previous project">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="work-track" ref={trackRef}>
          {PROJECTS.map((p, i) => (
            <div
              className={i === active ? 'work-card car-card is-active' : 'work-card car-card'}
              key={p.name}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${p.name}`}
              onClick={() => { if (i !== active) { holdPause(); goTo(i) } }}
            >
              <span className="car-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <span className="work-tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <span className="work-type">{p.type}</span>
              <p>{p.copy}</p>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="work-link" tabIndex={i === active ? 0 : -1}>
                  Visit {p.link} &rarr;
                </a>
              ) : (
                <span className="work-status">{p.status}</span>
              )}
            </div>
          ))}
        </div>
        <button className="car-arrow car-next" onClick={() => { holdPause(); goTo(active + 1) }} aria-label="Next project">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="car-dots">
          {PROJECTS.map((p, i) => (
            <button
              key={p.name}
              className={i === active ? 'car-dot is-active' : 'car-dot'}
              onClick={() => { holdPause(); goTo(i) }}
              aria-label={`Show ${p.name}`}
              aria-current={i === active}
            />
          ))}
        </div>
      </div>
      <div className="wrap">
        <div className="work-card work-custom work-custom-solo">
          <span className="work-tag">Build-to-Own Systems</span>
          <h3>Need Something Custom?</h3>
          <span className="work-type">Other systems we build</span>
          <ul className="custom-list">
            {CUSTOM.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <a href="#contact" className="work-link">Tell us what you need &rarr;</a>
        </div>
      </div>
    </section>
  )
}
