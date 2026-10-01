const CARDS = [
  {
    num: '01',
    title: 'AI Coaching',
    copy: 'Learn how to use AI for your job, your business, or everyday life. Plain-English training, no tech background needed.',
  },
  {
    num: '02',
    title: 'Tech Setup & Support',
    copy: 'WiFi, extenders, security cameras, and devices installed and set up right, plus help when something stops working.',
  },
  {
    num: '03',
    title: 'Social Media Content',
    copy: 'Posts created and scheduled for you, so your page stays active and consistent while you run the business.',
  },
  {
    num: '04',
    title: 'Branded Apparel & QR Codes',
    copy: 'Shirts with your logo for your team or customers, and QR codes that send people straight to your site, menu, or reviews.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="theme-charcoal" id="more">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">More Ways We Help</span>
          <h2>Tech, AI, and Everyday Business Support</h2>
        </div>
        <div className="card-grid">
          {CARDS.map((c) => (
            <div className="wwd-card" key={c.num}>
              <span className="num">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.copy}</p>
            </div>
          ))}
        </div>
        <p className="more-note">
          Want to learn to do it yourself? Anything we build, we can also teach you to run.
        </p>
      </div>
    </section>
  )
}
