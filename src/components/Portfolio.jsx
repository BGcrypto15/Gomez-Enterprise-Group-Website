const PROJECTS = [
  {
    name: 'Migshot Auto Solutions',
    type: 'Auto Body Shop, Philadelphia',
    copy: 'Full website, Google Business Profile, and LinkedIn setup for a local auto body shop.',
    tag: 'Launch Package',
    url: 'https://migshotautosolutions.com',
    link: 'migshotautosolutions.com',
  },
  {
    name: 'The Natty King',
    type: 'Personal Brand',
    copy: 'Website, photo gallery, and booking form for a world champion powerlifter, plus a content and outreach plan.',
    tag: 'Launch Package',
    url: 'https://thedavebrown.website',
    link: 'thedavebrown.website',
  },
  {
    name: 'SlotShot.live',
    type: 'Sweepstakes Platform',
    copy: 'A full sweepstakes platform with user accounts, an admin dashboard, and a live drawing tool.',
    tag: 'Build-to-Own Systems',
    url: 'https://slotshot.live',
    link: 'slotshot.live',
  },
  {
    name: 'Card Watch',
    type: 'Inventory Alert System',
    copy: 'Watches stock around the clock and alerts collectors by phone call and message the moment new product lands.',
    tag: 'Build-to-Own Systems',
    status: 'Live demo available',
  },
  {
    name: 'Digital Signage',
    type: 'In-Store Ad Rotation',
    copy: 'Custom software that rotates a business’s ads and promos on in-store screens.',
    tag: 'Build-to-Own Systems',
    status: 'In development',
  },
]

export default function Portfolio() {
  return (
    <section className="theme-green-wash" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Work</span>
          <h2>Real Projects, Built and Running</h2>
        </div>
        <div className="work-grid">
          {PROJECTS.map((p) => (
            <div className="work-card" key={p.name}>
              <span className="work-tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <span className="work-type">{p.type}</span>
              <p>{p.copy}</p>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="work-link">
                  Visit {p.link} &rarr;
                </a>
              ) : (
                <span className="work-status">{p.status}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
