import { CALENDLY_URL } from '../booking.js'
import PhoneAction from './PhoneAction.jsx'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <h1>
          Built <em>For You</em>. Built <em>With You</em>. Built <em>By You</em>.
        </h1>
        <p className="lede">
          Strategy, branding, websites, and custom software for small businesses and first-time
          founders. We build it for you, build it with you, or teach you to run it yourself.
        </p>
        <div className="hero-ctas">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-glow">Schedule a Free Consultation</a>
          <PhoneAction kind="text" className="btn btn-text-us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 5h16v11H9l-5 4V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            Text Us Now
          </PhoneAction>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </div>
      </div>
    </header>
  )
}
