import { CALENDLY_URL } from '../booking.js'
import PhoneAction from './PhoneAction.jsx'
import DeviceMock from './DeviceMock.jsx'
import { Arrow } from './Icons.jsx'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Philadelphia roots &middot; Anywhere you build</span>
          <h1>
            Build a business people <em className="grad-text">believe</em> in.
          </h1>
          <p className="lede">
            Strategy, branding, websites, and custom software for small businesses and first-time
            founders. We build it for you, build it with you, or teach you to run it yourself.
          </p>
          <div className="hero-ctas">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              Book a free consultation <Arrow />
            </a>
            <PhoneAction kind="text" className="btn btn-ghost">Text us now</PhoneAction>
            <a href="#services" className="btn btn-link">Explore services</a>
          </div>
        </div>
        <div className="hero-visual">
          <DeviceMock step={3} />
        </div>
      </div>
    </header>
  )
}
