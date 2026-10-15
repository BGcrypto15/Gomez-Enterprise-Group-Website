import { useEffect, useState } from 'react'
import gegIcon from '../assets/geg-icon.png'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav ${solid || open ? 'solid' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Gomez Enterprise Group home">
          <img src={gegIcon} alt="" />
          <span className="brand-name">Gomez Enterprise Group</span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open
              ? <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              : <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
          </svg>
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#packages" onClick={closeMenu}>Packages</a>
          <a href="#work" onClick={closeMenu}>Our work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#faq" onClick={closeMenu}>Questions</a>
          <a href="#contact" className="btn btn-light nav-cta" onClick={closeMenu}>Free consultation</a>
        </div>
      </div>
    </nav>
  )
}
