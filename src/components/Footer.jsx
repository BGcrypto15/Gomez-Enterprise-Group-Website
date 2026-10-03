import { BOOKING_ENABLED, CALENDLY_URL } from '../booking.js'
import PhoneAction from './PhoneAction.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <p className="footer-title">Get in Touch</p>
        <div className="footer-actions">
          {BOOKING_ENABLED && (
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="foot-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              Book a Call
            </a>
          )}
          <PhoneAction kind="text" className="foot-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H9l-5 4V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
            Text Us
          </PhoneAction>
          <PhoneAction kind="call" className="foot-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
            Call Us
          </PhoneAction>
          <a href="#contact" className="foot-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
            Send a Message
          </a>
        </div>
        <div className="footer-inner">
          <span>Gomez Enterprise Group, LLC</span>
          <span>&middot;</span>
          <span>Philadelphia, PA</span>
        </div>
      </div>
    </footer>
  )
}
