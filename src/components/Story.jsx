const STATS = ['15+ Years Experience', '1,000+ Stores Across Multiple States', 'Award-Winning Track Record']

const COMPANIES = [
  { name: 'Fortune 100', note: 'Wireless & Telecom' },
  { name: 'Fortune 500', note: 'Device Protection & Services' },
  { name: 'Architectural Aluminum & Glass', note: 'Draftsman & Jr. Project Manager' },
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
            I've spent 15+ years inside Fortune 100 and Fortune 500 companies, been ranked #1
            nationally more than once, and supported over 1,000 stores across multiple states.
            Before wireless, I worked as a draftsman and junior project manager for architectural
            aluminum and glass companies.
          </p>
          <p>
            Big companies have big budgets, big teams, and big tech. Most small businesses never
            get any of that. I started Gomez Enterprise Group to close that gap, and I built it
            under the family name because it's meant to last for generations.
          </p>
        </div>
      </div>
    </section>
  )
}
