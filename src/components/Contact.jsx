import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdenpyrv'

const INITIAL_FORM = {
  name: '',
  email: '',
  interest: 'Launch Package',
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
      <section className="theme-charcoal" id="contact">
        <div className="wrap contact-inner">
          <span className="eyebrow">Let's Talk</span>
          <h2>Got It.</h2>
          <p className="sub">Thanks for reaching out. We'll get back to you shortly.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="theme-charcoal" id="contact">
      <div className="wrap contact-inner">
        <span className="eyebrow">Let's Talk</span>
        <h2>What Do You Want to Build?</h2>
        <p className="sub">
          Start with a free consultation. No obligation, just a real conversation about what's next.
        </p>
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
              <option>Launch Package</option>
              <option>Growth Advisory</option>
              <option>Build-to-Own Systems</option>
              <option>Fractional Executive Partner</option>
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
          <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send It'}
          </button>
          {status === 'error' && (
            <p className="form-error">Something went wrong. Try again, or email us directly.</p>
          )}
        </form>
      </div>
    </section>
  )
}
