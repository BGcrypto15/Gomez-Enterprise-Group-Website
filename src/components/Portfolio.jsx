import { useEffect, useRef } from 'react'
import migshotVideo from '../assets/work/migshot.mp4'
import migshotWebm from '../assets/work/migshot.webm'
import migshotPoster from '../assets/work/migshot-poster.jpg'
import nattyVideo from '../assets/work/natty.mp4'
import nattyWebm from '../assets/work/natty.webm'
import nattyPoster from '../assets/work/natty-poster.jpg'
import slotshotVideo from '../assets/work/slotshot.mp4'
import slotshotWebm from '../assets/work/slotshot.webm'
import slotshotPoster from '../assets/work/slotshot-poster.jpg'
import { Reveal, Scramble, prefersReducedMotion } from './Reveal.jsx'
import { Arrow } from './Icons.jsx'

const PROJECTS = [
  {
    label: 'Auto body shop · Philadelphia', name: 'Migshot Auto Solutions',
    copy: 'Full website, Google Business Profile, and LinkedIn setup for a local auto body shop.',
    url: 'https://migshotautosolutions.com', host: 'migshotautosolutions.com', video: migshotVideo, webm: migshotWebm, poster: migshotPoster,
    alt: 'Scrolling preview of the Migshot Auto Solutions website',
  },
  {
    label: 'Personal brand · Powerlifting', name: 'The Natty King',
    copy: 'Website, photo gallery, and booking form for a world champion powerlifter, plus a content and outreach plan.',
    url: 'https://thedavebrown.website', host: 'thedavebrown.website', video: nattyVideo, webm: nattyWebm, poster: nattyPoster,
    alt: 'Scrolling preview of The Natty King website',
  },
  {
    label: 'Custom software · Sweepstakes', name: 'SlotShot.live',
    copy: 'A full sweepstakes platform with user accounts, an admin dashboard, and a live drawing tool.',
    url: 'https://slotshot.live', host: 'slotshot.live', video: slotshotVideo, webm: slotshotWebm, poster: slotshotPoster,
    alt: 'Scrolling preview of the SlotShot.live website',
  },
]

function ClipVideo({ src, webm, poster, label }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v || prefersReducedMotion() || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { const p = v.play(); if (p && p.catch) p.catch(() => {}) } else v.pause() },
      { threshold: 0.35 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <video ref={ref} poster={poster} muted loop playsInline preload="none" disablePictureInPicture aria-label={label}>
      <source src={src} type="video/mp4" />
      <source src={webm} type="video/webm" />
    </video>
  )
}

function MapArt() {
  const pins = [[22, 34], [41, 58], [58, 28], [70, 52], [34, 74], [82, 70]]
  return (
    <div className="map-art" role="img" aria-label="Illustration of job pins on a map">
      <svg viewBox="0 0 100 62" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="pinG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--a2)" /><stop offset="1" stopColor="var(--a3)" /></linearGradient>
        </defs>
        <g stroke="currentColor" strokeWidth="0.25" opacity="0.22" fill="none">
          {[8, 18, 28, 38, 48, 58].map((y) => (<path key={'h' + y} d={`M0 ${y}H100`} />))}
          {[10, 24, 38, 52, 66, 80, 94].map((x) => (<path key={'v' + x} d={`M${x} 0V62`} />))}
          <path d="M0 50C22 44 36 20 62 22S92 10 100 6" strokeWidth="0.9" opacity="0.7" />
          <path d="M14 62C26 44 44 40 54 34" strokeWidth="0.6" opacity="0.6" />
        </g>
        {pins.map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y * 0.62})`} className="map-pin" style={{ animationDelay: `${i * 0.5}s` }}>
            <circle r="3.6" fill="var(--a2)" opacity="0.18" />
            <path d="M0 0C-2.6-3.6-3.4-5.2-3.4-6.8a3.4 3.4 0 0 1 6.8 0C3.4-5.2 2.6-3.6 0 0Z" fill="url(#pinG)" />
            <circle cy="-6.8" r="1.2" fill="#0A0B0A" />
          </g>
        ))}
      </svg>
      <span className="map-chip">Post work</span>
    </div>
  )
}

const CUSTOM = [
  'Digital signage for in-store screens',
  'Online booking with automatic text reminders',
  'Customer loyalty and rewards programs',
  'Client portals and simple CRMs',
  'Quote, estimate, and invoice builders',
  'Online ordering and payment pages',
  'KPI and sales dashboards',
]

export default function Portfolio() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Selected work</span>
          <Scramble as="h2" parts={[{ t: 'Real projects, built and ', hl: false }, { t: 'running.', hl: true }]} />
        </div>
        <div className="work-list">
          {PROJECTS.map((p, i) => (
            <Reveal className={`work-item glow-card ${i % 2 ? 'flip' : ''}`} key={p.name}>
              <div className="work-text">
                <span className="eyebrow">{p.label}</span>
                <h3>{p.name}</h3>
                <p>{p.copy}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="visit">
                  Visit project <Arrow />
                </a>
              </div>
              <div className="browser">
                <div className="b-bar"><i /><i /><i /><span>{p.host}</span></div>
                <ClipVideo src={p.video} webm={p.webm} poster={p.poster} label={p.alt} />
              </div>
            </Reveal>
          ))}
          <Reveal className="work-item glow-card">
            <div className="work-text">
              <span className="eyebrow">Local jobs &middot; Web app</span>
              <h3>MapHire</h3>
              <p>Local gigs and part-time jobs on a map. People browse nearby work as pins, and anyone can post work for free.</p>
              <a href="https://map-hire.com" target="_blank" rel="noopener noreferrer" className="visit">
                Visit project <Arrow />
              </a>
            </div>
            <MapArt />
          </Reveal>
          <Reveal className="work-item glow-card work-demo">
            <div className="work-text">
              <span className="eyebrow">Inventory alerts &middot; Custom software</span>
              <h3>Card Watch</h3>
              <p>Watches stock around the clock and alerts collectors by phone call and message the moment new product lands.</p>
              <span className="demo-pill"><i /> Live demo available</span>
            </div>
          </Reveal>
        </div>
        <Reveal className="custom-box">
          <h3>Need something custom?</h3>
          <ul className="chip-list">
            {CUSTOM.map((c) => (<li key={c}>{c}</li>))}
          </ul>
          <a href="#contact" className="visit">Tell us what you need <Arrow /></a>
        </Reveal>
      </div>
    </section>
  )
}
