import { useState } from 'react'

import { BOOKING_ENABLED, CALENDLY_URL } from '../booking.js'
import { Scramble } from './Reveal.jsx'
import { Arrow } from './Icons.jsx'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdenpyrv'

const INITIAL_FORM = {
  name: '',
  email: '',
  interest: 'Starter Bundle ($500)',
  message: '',
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="contact" id="contact">
        <div className="wrap contact-inner">
          <span className="eyebrow">Let's talk</span>
          <h2>Got it.</h2>
          <p className="sub">Thanks for reaching out. We'll get back to you within 24 hours.</p>
          {BOOKING_ENABLED && (<p className="sub">
            Want to lock in a time now?{' '}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-link">
              Book a call on our calendar
            </a>
            .
          </p>)}
        </div>
      </section>
    )
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-inner">
        <span className="eyebrow">Let's talk about your next step</span>
        <Scramble as="h2" parts={[{ t: 'What do you want to ', hl: false }, { t: 'build?', hl: true }]} />
        <p className="sub">
          Start with a free consultation. No obligation, just a real conversation about what's next.
        </p>
        {BOOKING_ENABLED ? (
          <div className="contact-options">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              Book your free 30-minute call <Arrow />
            </a>
            <span className="contact-or">or send us a message below. We reply within 24 hours.</span>
          </div>
        ) : (
          <div className="contact-options">
            <span className="contact-or">Send us a message below. We reply within 24 hours.</span>
          </div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="interest">What are you interested in?</label>
            <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
              <option>Starter Bundle ($500)</option>
              <option>Launch Package</option>
              <option>Growth Advisory</option>
              <option>Build-to-Own Systems</option>
              <option>Fractional Executive Partner</option>
              <option>AI Coaching</option>
              <option>Tech Setup &amp; Support</option>
              <option>Social Media Content</option>
              <option>Branded Apparel or QR Codes</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Tell us what you're building</label>
            <textarea
              id="message"
              name="message"
              placeholder="A few sentences about your business or idea..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-light" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send It'}
          </button>
          {status === 'error' && (
            <p className="form-error">Something went wrong. Please try sending it again in a minute.</p>
          )}
        </form>
        <p className="contact-ref">Refer someone and earn $100 cash after their project is paid in full.</p>
      </div>
    </section>
  )
}
