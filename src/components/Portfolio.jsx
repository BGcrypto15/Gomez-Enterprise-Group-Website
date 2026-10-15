import migshot from '../assets/work/migshot.jpg'
import natty from '../assets/work/natty.jpg'
import slotshot from '../assets/work/slotshot.jpg'
import { Reveal, Scramble } from './Reveal.jsx'
import { Arrow } from './Icons.jsx'

const PROJECTS = [
  {
    label: 'Auto body shop · Philadelphia', name: 'Migshot Auto Solutions',
    copy: 'Full website, Google Business Profile, and LinkedIn setup for a local auto body shop.',
    url: 'https://migshotautosolutions.com', host: 'migshotautosolutions.com', img: migshot,
    alt: 'Screenshot of the Migshot Auto Solutions website',
  },
  {
    label: 'Personal brand · Powerlifting', name: 'The Natty King',
    copy: 'Website, photo gallery, and booking form for a world champion powerlifter, plus a content and outreach plan.',
    url: 'https://thedavebrown.website', host: 'thedavebrown.website', img: natty,
    alt: 'Screenshot of The Natty King website',
  },
  {
    label: 'Custom software · Sweepstakes', name: 'SlotShot.live',
    copy: 'A full sweepstakes platform with user accounts, an admin dashboard, and a live drawing tool.',
    url: 'https://slotshot.live', host: 'slotshot.live', img: slotshot,
    alt: 'Screenshot of the SlotShot.live website',
  },
]

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
                <img src={p.img} alt={p.alt} loading="lazy" />
              </div>
            </Reveal>
          ))}
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
