import { BOOKING_ENABLED, CALENDLY_URL } from '../booking.js'
import benPhoto from '../assets/ben-headshot.jpg'

const STATS = ['15+ Years Experience', '1,000+ Business Owners Across Multiple States', 'Multiple Top Company Honors', 'You Own What We Build', 'We Teach You to Run It']

const COMPANIES = [
  { name: 'Fortune 100', note: 'Wireless & Telecom' },
  { name: 'Fortune 500', note: 'Device Protection & Services' },
  { name: 'Project Management', note: 'Certified' },
]

export default function Story() {
  return (
    <section className="theme-gold-wash" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Gomez Family</span>
          <h2>Built on Real Experience.</h2>
        </div>
        <div className="founder">
          <img src={benPhoto} alt="Ben Gomez, founder of Gomez Enterprise Group" width="560" height="560" loading="lazy" />
          <p className="founder-name">Ben Gomez</p>
          <p className="founder-role">Founder</p>
        </div>
        <div className="stat-row">
          {STATS.map((s) => (
            <span className="stat-pill" key={s}>{s}</span>
          ))}
        </div>
        <p className="worked-label">Experience Across</p>
        <div className="company-row">
          {COMPANIES.map((c) => (
            <div className="company-chip" key={c.name}>
              <span className="company-name">{c.name}</span>
              <span className="company-note">{c.note}</span>
            </div>
          ))}
        </div>
        <div className="story-copy">
          <p>
            I've spent 15+ years inside Fortune 100 and Fortune 500 companies, supporting over
            1,000 independent business owners across multiple states. Along the way I earned the
            highest honors those companies give, more than once, for both results and leadership,
            and my work reached teams from Brazil to the UK.
          </p>
          <p>
            I started at a small wireless shop, working my way up to store manager and fixing the
            tech myself. So I know small business from the inside, and I know what it takes to
            compete at the highest level.
          </p>
          <p>
            Big companies have big budgets, big teams, and big tech. Most small businesses never
            get any of that. I started Gomez Enterprise Group to close that gap, and I built it
            under the family name because it's meant to last for generations.
          </p>
        </div>
        <div className="story-ctas">
          {BOOKING_ENABLED && (
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-glow">
              Book a Free Call
            </a>
          )}
          <a href="#contact" className={BOOKING_ENABLED ? 'btn btn-outline' : 'btn btn-gold'}>
            {BOOKING_ENABLED ? 'Send a Message' : 'Get Your Free Consultation'}
          </a>
        </div>
      </div>
    </section>
  )
}
