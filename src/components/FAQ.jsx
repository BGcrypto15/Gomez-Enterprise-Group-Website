const FAQS = [
  {
    q: 'Do I really own what you build?',
    a: 'Yes. Once your project is paid in full, the website, code, and accounts are yours. We can set them up in your name from day one or hand everything over at the end.',
  },
  {
    q: 'Are there any monthly costs?',
    a: 'It depends on what we build. Most websites only need a domain name, which usually runs about $15 to $25 a year. Systems that send texts, take payments, or store a lot of data can have small usage fees from those services. We lay out every cost before we start.',
  },
  {
    q: 'How long does a website take?',
    a: 'Most websites can go live in as little as 48 hours once we have your content and photos. More complex builds get their own timeline in your quote.',
  },
  {
    q: 'Can you fix or upgrade the website I already have?',
    a: 'Yes. We can refresh what you have or rebuild it, whichever makes more sense for your goals and budget.',
  },
  {
    q: 'Do you only work with Philadelphia businesses?',
    a: 'We are based in Philadelphia, but most of our work is done remotely, so location is not a problem. Hands-on tech setup is available in the Philadelphia and South Jersey area.',
  },
  {
    q: 'Can you teach me to do it myself?',
    a: 'Yes. Every service can be built for you, built with you, or taught to you so you can run it yourself.',
  },
  {
    q: 'How does the $100 referral program work?',
    a: 'Send someone our way. Once they have paid for their project in full, not just the deposit, you get $100 cash. There is no limit on how many people you can refer.',
  },
]

export default function FAQ() {
  return (
    <section className="theme-gold-wash" id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Questions</span>
          <h2>Straight Answers</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
