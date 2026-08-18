import fullLogo from '../assets/logo/geg-full.jpg'
import { IconArrow } from './Icons.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy reveal">
          <p className="eyebrow">Gomez Enterprise Group, LLC &middot; Philadelphia, PA</p>
          <h1 className="hero__title">
            Business Strategy,<br />
            <span className="text-gradient">Branding &amp; Growth</span>
          </h1>
          <p className="hero__sub">
            For small businesses ready to grow, and first-time founders ready to start.
            Planned, built, and taught &mdash; not just advised.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Start a Project <IconArrow />
            </a>
            <a href="#services" className="btn btn-ghost">See What We Do</a>
          </div>

          <div className="hero__stats">
            <div>
              <span className="hero__stat-num">15+</span>
              <span className="hero__stat-label">Years in Account &amp; Growth Strategy</span>
            </div>
            <div>
              <span className="hero__stat-num">900+</span>
              <span className="hero__stat-label">Partner Accounts Managed</span>
            </div>
            <div>
              <span className="hero__stat-num">#1</span>
              <span className="hero__stat-label">Nationally Ranked, 2024</span>
            </div>
          </div>
        </div>

        <div className="hero__art reveal">
          <img src={fullLogo} alt="Gomez Enterprise Group" />
        </div>
      </div>
    </section>
  )
}
