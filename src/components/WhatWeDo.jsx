const CARDS = [
  {
    num: '01',
    title: 'Launch Package',
    copy: 'Turn your idea into a real business. Brand, website, socials, and a growth roadmap, built and ready to launch.',
  },
  {
    num: '02',
    title: 'Growth Advisory',
    copy: 'Strategy and accountability for businesses ready to grow. Audits, roadmaps, and ongoing advisory built around your numbers.',
  },
  {
    num: '03',
    title: 'Build-to-Own Systems',
    copy: 'Custom tools and systems you actually own. One-time cost, no subscriptions, no dependence on someone else\u2019s platform.',
  },
  {
    num: '04',
    title: 'Fractional Executive Partner',
    copy: 'Embedded, senior-level operations support for growing companies. Performance systems and automation, without a full-time executive salary.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="theme-gold-wash" id="what-we-do">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2>Four Ways We Help You Grow</h2>
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
      </div>
    </section>
  )
}
