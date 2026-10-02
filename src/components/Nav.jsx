import { useState } from 'react'
import gegIcon from '../assets/geg-icon.png'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Gomez Enterprise Group home">
          <img src={gegIcon} alt="" />
          <span className="brand-name">Gomez Enterprise Group</span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Our Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="btn btn-gold" onClick={closeMenu}>
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}
