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
          <a href="#contact" className="btn btn-glow">Start With a Free Consultation</a>
          <a href="sms:+12676256138" className="btn btn-text-us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 5h16v11H9l-5 4V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            Text Us Now
          </a>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </div>
        <p className="hero-phone">Text or call <a href="sms:+12676256138">267-625-6138</a></p>
      </div>
    </header>
  )
}
