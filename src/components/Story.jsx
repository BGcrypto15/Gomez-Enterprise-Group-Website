import { BOOKING_ENABLED, CALENDLY_URL } from '../booking.js'
import benPhoto from '../assets/ben-headshot.jpg'

const STATS = ['15+ Years Experience', '1,000+ Business Owners Supported & Managed', 'Multiple Top Company Honors', 'You Own What We Build', 'We Teach You to Run It']

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
          <img src={benPhoto} alt="Benny Gomez Jr., founder of Gomez Enterprise Group" width="560" height="560" loading="lazy" />
          <p className="founder-name">Benny Gomez Jr.</p>
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
