import { Reveal, Scramble } from './Reveal.jsx'
import { GlossIcon, Arrow } from './Icons.jsx'

// Prices not confirmed yet show this text. Replace with real "Starting at" numbers when set.
const PRICE_PENDING = 'Quote at consultation'

const PACKAGES = [
  { icon: 'website', name: 'Starter Bundle', tags: ['Website', 'Logo', 'QR code', 'Business plan'], price: '$500', note: 'Flat price. October only, normally from $1,000.' },
  { icon: 'launch', name: 'Launch Package', tags: ['Brand identity', 'Website', 'Social setup', 'Registration guidance', '90 days hands-on'], price: 'From $1,000' },
  { icon: 'growth', name: 'Growth Advisory', tags: ['Audits', '90-day roadmap', 'Check-ins', 'Training'], price: 'From $500' },
  { icon: 'apps', name: 'Build-to-Own Systems', tags: ['Trackers', 'Automations', 'Dashboards', 'Alerts'], price: 'From $500' },
  { icon: 'leader', name: 'Fractional Executive Partner', tags: ['Weekly syncs', 'KPI dashboards', 'Automation sprints', 'Partner reviews'], price: 'From $1,500', per: '/mo' },
]

const EXTRAS = [
  { icon: 'ai', name: 'AI Coaching', tags: ['One-on-one', 'Plain English', 'Job, business, or career'], price: PRICE_PENDING },
  { icon: 'tech', name: 'Tech Setup & Support', tags: ['WiFi and extenders', 'Security cameras', 'New devices', 'Fixes'], price: PRICE_PENDING },
  { icon: 'social', name: 'Social Media Content', tags: ['Planned', 'Designed in your brand', 'Scheduled', 'Or learn to run it'], price: PRICE_PENDING },
  { icon: 'apparel', name: 'Branded Apparel & QR Codes', tags: ['Shirts with your logo', 'QR to your site, menu, or reviews'], price: PRICE_PENDING },
]

function Row({ r, i }) {
  const pending = r.price === PRICE_PENDING
  return (
    <Reveal className="p-row" delay={i * 60}>
      <GlossIcon name={r.icon} size={52} />
      <div className="p-main">
        <h3>{r.name}</h3>
        <ul className="p-tags">{r.tags.map((t) => (<li key={t}>{t}</li>))}</ul>
        {r.note && <span className="p-note">{r.note}</span>}
      </div>
      <div className={`p-price ${pending ? 'pending' : ''}`}>
        {pending ? r.price : (<><span className="amt">{r.price}</span>{r.per && <span className="per">{r.per}</span>}</>)}
      </div>
    </Reveal>
  )
}

export default function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Packages and pricing</span>
          <Scramble as="h2" parts={[{ t: 'Find your ', hl: false }, { t: 'fit.', hl: true }]} />
          <p className="sub">Pick a package, or mix and match from the extras below.</p>
        </div>
        <div className="p-list">
          {PACKAGES.map((r, i) => (<Row r={r} i={i} key={r.name} />))}
        </div>
        <h3 className="p-sub">Additional services</h3>
        <div className="p-list">
          {EXTRAS.map((r, i) => (<Row r={r} i={i} key={r.name} />))}
        </div>
        <p className="price-note">
          Starting prices cover smaller projects. Bigger builds get a custom quote after your free consultation.
          Want to learn to do it yourself? Anything we build, we can also teach you to run.
        </p>
        <div className="center"><a href="#contact" className="btn btn-light">Get your quote <Arrow /></a></div>
      </div>
    </section>
  )
}
