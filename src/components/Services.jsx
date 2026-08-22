import { useState } from 'react'

const SERVICES = [
  {
    id: 'launch',
    label: 'Launch Package',
    hook: "For the idea that's been sitting in your notes app too long.",
    impact: 'Turns a passion or an idea into a fully branded, live business, fast.',
    items: [
      'Brand identity: logo, colors, voice',
      'Website build, live and mobile-ready',
      'Social media setup and starter content',
      'Business registration guidance (EIN, structure)',
      '90-day growth roadmap',
    ],
    example:
      'a hobby that turns into a storefront, or a side project that finally gets a real name and a real home online.',
  },
  {
    id: 'growth',
    label: 'Growth Advisory',
    hook: "For businesses that are running, but not running efficiently.",
    impact: 'Brings structure, accountability, and a clear plan to businesses that have outgrown guesswork.',
    items: [
      'Performance and partner audits',
      '90-day growth roadmaps',
      'Monthly advisory and check-ins',
      'Training and accountability systems',
    ],
    example: 'a multi-location business that needs its numbers reviewed and a real plan to fix what\u2019s slipping.',
  },
  {
    id: 'systems',
    label: 'Build-to-Own Systems',
    hook: 'Why rent software when you can own it outright.',
    impact:
      'Custom-built tools and systems, designed around exactly how you work, for markets bigger companies never bother building for, no subscription required.',
    items: [
      'Custom tracking and management systems',
      'Workflow and reporting automation',
      'WiFi, network, and camera system setup',
      'Delivered Built For You, Built With You, or Built By You',
    ],
    example: 'a custom system to track trading cards, collectibles, or niche inventory, built to your spec and yours to keep.',
  },
  {
    id: 'fractional',
    label: 'Fractional Executive Partner',
    hook: 'Senior operational leadership, without the executive salary.',
    impact:
      "Embedded performance and operations support for growing companies that need more structure than a consultant, but aren't ready for a full-time hire.",
    items: [
      'Weekly leadership syncs',
      'KPI dashboard build and maintenance',
      'Monthly automation sprints',
      'Quarterly partner and performance reviews',
    ],
    example: 'a $2 to $10 million business that needs someone owning performance and operations, on a fractional basis.',
  },
]

export default function Services() {
  const [active, setActive] = useState('launch')
  const current = SERVICES.find((s) => s.id === active)

  return (
    <section className="theme-green-wash" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Explore Our Services</span>
          <h2>Pick the Path That Fits Where You Are</h2>
        </div>

        <div className="tabs">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              className={`tab-btn ${active === s.id ? 'active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="tab-panel active">
          <div className="tab-card">
            <p className="hook">{current.hook}</p>
            <p className="impact">{current.impact}</p>
            <ul>
              {current.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="example">
              <strong>The type of work:</strong> {current.example}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
