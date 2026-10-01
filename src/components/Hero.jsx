import gegLogo from '../assets/geg-logo-full.png'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-icon">
          <img src={gegLogo} alt="Gomez Enterprise Group logo" />
        </div>
        <h1>
          Built <em>For You</em>. Built <em>With You</em>. Built <em>By You</em>.
        </h1>
        <p className="lede">
          Strategy, branding, websites, and custom software for small businesses and first-time
          founders, built however involved you want us to be.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-glow">Start With a Free Consultation</a>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </div>
      </div>
    </header>
  )
}
