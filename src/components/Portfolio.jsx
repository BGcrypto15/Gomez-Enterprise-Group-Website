import { IconCar, IconGift, IconArrow } from './Icons.jsx'
import './Portfolio.css'

const PROJECTS = [
  {
    icon: IconCar,
    name: 'Migshot Auto Solutions',
    type: 'Website Build',
    desc: 'A full website for a Philadelphia auto body & paint shop \u2014 body work, bumper repair, alloy wheel repair, headlight restoration, insurance work, and towing. Built on React and deployed with a working contact form.',
    url: 'https://migshotautosolutions.com',
  },
  {
    icon: IconGift,
    name: 'SlotShot.live',
    type: 'Web Platform',
    desc: '"Claim a slot. Watch the live draw on YouTube. Win real gift cards." A live-draw giveaway platform built and shipped end to end.',
    url: 'https://slotshot.live',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="portfolio">
      <div className="container">
        <p className="eyebrow reveal">Our Work</p>
        <h2 className="section-title reveal">Real projects, real clients.</h2>

        <div className="portfolio__grid">
          {PROJECTS.map((p) => (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="portfolio__card reveal" key={p.name}>
              <p.icon size={30} />
              <p className="portfolio__type">{p.type}</p>
              <h3>{p.name}</h3>
              <p className="portfolio__desc">{p.desc}</p>
              <span className="portfolio__link">Visit site <IconArrow size={14} /></span>
            </a>
          ))}

          <div className="portfolio__card portfolio__card--soon reveal">
            <p className="portfolio__type">More Coming Soon</p>
            <h3>Your project could be next.</h3>
            <p className="portfolio__desc">We're always building. Reach out and let's add your business to this list.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
