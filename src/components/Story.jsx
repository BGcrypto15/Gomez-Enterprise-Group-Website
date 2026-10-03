import { BOOKING_ENABLED, CALENDLY_URL } from '../booking.js'

const STATS = ['15+ Years Experience', '1,000+ Business Owners Across Multiple States', 'Top Company Honors, 3 Times', 'You Own What We Build', 'We Teach You to Run It']

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
            highest honor at both companies: the PEAK Award at one, then the Pinnacle Award two
            years in a row at the other. The first Pinnacle was for my impact on company culture,
            with work that reached teams from Brazil to the UK. The second was for finishing #1 to
            goal in the nation.
          </p>
          <p>
            Before the corporate side, I started at a small wireless shop. I worked my way up from
            sales to store manager and handled the device repairs myself, so I know small business
            from the inside.
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
