import gegLogo from '../assets/geg-logo-full.png'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-icon">
          <img src={gegLogo} alt="Gomez Enterprise Group logo" />
        </div>
        <p className="hero-descriptor">
          Business Strategy, Branding &amp; Growth for Small Businesses and First-Time Founders
        </p>
        <h1>
          Built <em>For You</em>. Built <em>With You</em>. Built <em>By You</em>.
        </h1>
        <p className="lede">
          Websites, logos, custom software, tech support, and real business strategy, all under
          one roof. However involved you want us, that's how we build it.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-glow">Start With a Free Consultation</a>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </div>
      </div>
    </header>
  )
}
