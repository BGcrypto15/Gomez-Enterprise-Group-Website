import { useEffect, useState } from 'react'
import { Reveal, Scramble, useInView } from './Reveal.jsx'
import { Arrow } from './Icons.jsx'

const INCLUDES = [
  'Custom website build or upgrade',
  'Professional logo',
  'QR code for your business',
  'Written business plan, reviewed with you',
]

export default function Offer() {
  const [ref, seen] = useInView({ threshold: 0.4 })
  const [on, setOn] = useState(0)

  useEffect(() => {
    if (!seen) return
    const timers = INCLUDES.map((_, i) => setTimeout(() => setOn(i + 1), 350 + i * 260))
    return () => timers.forEach(clearTimeout)
  }, [seen])

  return (
    <section className="offer" id="starter">
      <div className="wrap offer-grid">
        <div className="offer-copy">
          <span className="eyebrow">A good place to start</span>
          <Scramble as="h2" parts={[{ t: 'Starter Bundle', hl: false }]} />
          <div className="offer-ticket" role="note" aria-label="October only. Normally starts at $1,000.">
            <span className="ticket-pill">October only</span>
            <span>Normally starting at <s>$1,000</s></span>
          </div>
          <div className="offer-price">
            <span className="offer-amount">$500</span>
            <span className="offer-one">One price</span>
          </div>
          <p>Everything you need to look established online, without waiting for someday.</p>
          <p className="offer-fine">Website live in as little as 48 hours after your content and photos are ready. Want us hands-on for 90 days? See the Launch Package below.</p>
          <a href="#contact" className="btn btn-light">Claim the $500 bundle <Arrow /></a>
        </div>
        <Reveal className="glow-card offer-card">
          <div ref={ref}>
            <div className="oc-head">
              <span>Starter bundle</span>
              <span>{on} of {INCLUDES.length} on</span>
            </div>
            <ul className="toggles">
              {INCLUDES.map((t, i) => (
                <li key={t} className={i < on ? 'is-on' : ''}>
                  <span>{t}</span>
                  <span className="switch" aria-hidden="true"><i /></span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <div className="wrap">
        <p className="offer-referral">
          Know someone who needs this? Earn <strong>$100 cash</strong> for every client you refer,
          paid once their project is paid in full.
        </p>
      </div>
    </section>
  )
}
