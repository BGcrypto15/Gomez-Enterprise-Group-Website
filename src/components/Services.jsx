import { useState } from 'react'
import { IconStrategy, IconWeb, IconMarketing, IconAI } from './Icons.jsx'
import './Services.css'

const TIERS = [
  { key: 'for', label: 'Built For You', hint: 'We handle it end to end.' },
  { key: 'with', label: 'Built With You', hint: 'We work through it together.' },
  { key: 'by', label: 'Built By You', hint: 'We teach it, you run it.' },
]

const SERVICES = [
  {
    key: 'strategy',
    icon: IconStrategy,
    title: 'Strategy & Consulting',
    blurb: 'Growth plans, fractional support, and a second set of eyes on the decisions that matter.',
    tiers: {
      for: 'We build your growth plan, sit in on your meetings, and hand you a clear strategy to run.',
      with: 'We work through the strategy together in live sessions, so every decision makes sense to you.',
      by: 'We teach you the frameworks and hand you the templates to run your own strategy sessions.',
    },
  },
  {
    key: 'brand',
    icon: IconWeb,
    title: 'Brand & Web Design',
    blurb: 'Logos, identity, and websites that look like they cost more than they did.',
    tiers: {
      for: 'We design and build your logo and website, start to finish.',
      with: 'We design it together &mdash; your input shapes every round.',
      by: 'We hand you a starter template and walk you through building it yourself.',
    },
  },
  {
    key: 'marketing',
    icon: IconMarketing,
    title: 'Marketing & Content',
    blurb: 'Social media management, content creation, and campaigns that sound like you.',
    tiers: {
      for: 'We plan, create, and post your content on an ongoing basis.',
      with: 'We build your content calendar and templates together each month.',
      by: 'We teach you a repeatable content system you can run solo.',
    },
  },
  {
    key: 'tech',
    icon: IconAI,
    title: 'Tech & AI Coaching',
    blurb: 'Practical AI skills and tech setup for real people and small teams.',
    tiers: {
      for: 'We set up your tools, wifi, and systems, and configure your AI workflows.',
      with: 'We set it up alongside you so you know how it works.',
      by: 'We coach you 1:1 until you can use AI and your tools with confidence.',
    },
  },
]

export default function Services() {
  const [tier, setTier] = useState('for')

  return (
    <section id="services" className="services">
      <div className="container">
        <p className="eyebrow reveal">What We Do</p>
        <h2 className="section-title reveal">Four ways we help you grow.</h2>
        <p className="services__intro reveal">
          Every service works the same way, however you want to work with us. Pick a mode below
          to see what it looks like.
        </p>

        <div className="services__tabs reveal" role="tablist" aria-label="Delivery style">
          {TIERS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tier === t.key}
              className={`services__tab ${tier === t.key ? 'is-active' : ''}`}
              onClick={() => setTier(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="services__tab-hint reveal">
          {TIERS.find((t) => t.key === tier).hint}
        </p>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <div className="services__card reveal" key={s.key}>
              <s.icon size={30} />
              <h3>{s.title}</h3>
              <p className="services__blurb">{s.blurb}</p>
              <p className="services__tier-text">{s.tiers[tier]}</p>
            </div>
          ))}
        </div>

        <div className="services__cta reveal">
          <a href="#contact" className="btn btn-primary">Get a Custom Quote</a>
        </div>
      </div>
    </section>
  )
}
