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
  return (
    <section className="theme-green-wash" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Work</span>
          <h2>Portfolio Coming Soon</h2>
        </div>
        <div className="work-card work-soon">
          <span className="work-tag">Coming Soon</span>
          <h3>Our Portfolio Is Being Built</h3>
          <p>
            We're putting together our first case studies. Check back soon, or reach out and tell us
            what you want to build.
          </p>
        </div>
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
