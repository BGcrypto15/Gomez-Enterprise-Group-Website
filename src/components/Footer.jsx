import iconLogo from '../assets/logo/geg-icon.jpg'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__brand">
          <img src={iconLogo} alt="" width="32" height="32" />
          <span>Gomez Enterprise Group, LLC</span>
        </a>

        <nav className="footer__links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          {/* Add Instagram / social links here once handles are set up */}
        </nav>

        <p className="footer__copy">&copy; {year} Gomez Enterprise Group, LLC. Philadelphia, PA.</p>
      </div>
    </footer>
  )
}
