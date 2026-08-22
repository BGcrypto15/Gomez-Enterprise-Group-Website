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
          Four ways to work with us: hands-on business consulting, full brand and website
          launches, custom-built systems for markets bigger companies overlook, and fractional
          executive support for growing companies. However involved you want us, that's how we
          build it.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-gold">Start With a Free Consultation</a>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </div>
      </div>
    </header>
  )
}
