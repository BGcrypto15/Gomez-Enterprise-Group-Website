import { BOOKING_ENABLED, CALENDLY_URL } from '../booking.js'
import { CountUp, Reveal, Scramble } from './Reveal.jsx'
import { Arrow } from './Icons.jsx'

const COMPANIES = [
  { name: 'Fortune 100', note: 'Wireless & Telecom' },
  { name: 'Fortune 500', note: 'Device Protection & Services' },
  { name: 'Project Management', note: 'Certified' },
]

export default function Story() {
  return (
    <section className="story" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Gomez family</span>
          <Scramble as="h2" parts={[{ t: 'Built on real ', hl: false }, { t: 'experience.', hl: true }]} />
        </div>
        <div className="stats">
          <div className="stat"><b className="grad-text"><CountUp to={15} suffix="+" /></b><span>Years of experience</span></div>
          <div className="stat"><b className="grad-text"><CountUp to={1000} suffix="+" /></b><span>Business owners supported and managed</span></div>
          <div className="stat"><b className="grad-text"><CountUp to={48} /></b><span>Hours, fastest website launch</span></div>
        </div>
        <div className="pill-row">
          <span>Multiple top company honors</span>
          <span>You own what we build</span>
          <span>We teach you to run it</span>
        </div>
        <p className="worked-label">Experience across</p>
        <div className="company-row">
          {COMPANIES.map((c) => (
            <div className="company-chip" key={c.name}>
              <b>{c.name}</b>
              <span>{c.note}</span>
            </div>
          ))}
        </div>
        <Reveal className="story-copy">
          <p>
            I've spent 15+ years inside Fortune 100 and Fortune 500 companies, supporting and
            managing over 1,000 independent business owners across multiple states. Along the way I
            earned the highest honors those companies give, more than once, for both results and
            leadership, and my work reached teams around the world.
          </p>
          <p>
            I've worked both sides of business: on the sales floor running a store and fixing the
            tech myself, and at the corporate level helping owners compete with the best in the
            country. So I know small business from the inside, and I know what it takes to win at
            the highest level.
          </p>
          <p>
            Big companies have big budgets, big teams, and big tech. Most small businesses never
            get any of that. I started Gomez Enterprise Group to close that gap, and I built it
            under the family name because it's meant to last for generations.
          </p>
          <p className="signoff">Benny Gomez Jr. <span>Founder</span></p>
        </Reveal>
        <div className="story-ctas">
          {BOOKING_ENABLED && (
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              Book a free call <Arrow />
            </a>
          )}
          <a href="#contact" className="btn btn-ghost">Send a message</a>
        </div>
      </div>
    </section>
  )
}
