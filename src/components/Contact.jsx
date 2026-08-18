import { IconPhone, IconMail, IconPin } from './Icons.jsx'
import './Contact.css'

const FORMSPREE_ACTION = 'https://formspree.io/f/mdenpyrv'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div className="reveal">
          <p className="eyebrow">Let's Talk</p>
          <h2 className="section-title">Tell us where you want to go.</h2>
          <p className="contact__intro">
            Whether you're growing an existing business or finally starting the one you've always
            talked about, this is where it starts. Reach out and we'll get back to you.
          </p>

          <div className="contact__details">
            <a href="tel:+12676256138" className="contact__row">
              <IconPhone /> 267-625-6138
            </a>
            <a href="mailto:Bgomezjeb@gmail.com" className="contact__row">
              <IconMail /> Bgomezjeb@gmail.com
            </a>
            <div className="contact__row">
              <IconPin /> Philadelphia, PA &middot; By appointment
            </div>
          </div>
        </div>

        <form className="contact__form reveal" action={FORMSPREE_ACTION} method="POST">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Phone <span>(optional)</span>
            <input type="tel" name="phone" />
          </label>
          <label>
            What do you need help with?
            <select name="service" defaultValue="">
              <option value="" disabled>Select one</option>
              <option>Strategy & Consulting</option>
              <option>Brand & Web Design</option>
              <option>Marketing & Content</option>
              <option>Tech & AI Coaching</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
