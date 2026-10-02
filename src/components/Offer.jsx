const INCLUDES = [
  'Custom website build or upgrade',
  'Professional logo',
  'QR code for your business',
  'Business strategy plan',
]

export default function Offer() {
  return (
    <section className="theme-gold-wash" id="starter">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Starter Bundle</span>
          <h2>Your Business, Online and Ready to Work</h2>
        </div>
        <div className="offer-card">
          <div className="offer-price">
            <div className="offer-ticket" role="note" aria-label="October only. Normally starts at $1,000.">
              <span className="ticket-stub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 8a2 2 0 0 0 0 4v4h18v-4a2 2 0 0 0 0-4V4H3v4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M14 5v2M14 10v2M14 15v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                October Only
              </span>
              <span className="ticket-main">
                Normally <s>$1,000</s>
              </span>
            </div>
            <span className="offer-amount">$500</span>
            <span className="offer-sub">One price for everything below</span>
            <span className="offer-fast">Website live in as little as 48 hours</span>
            <span className="offer-sub">Need the full build-out? See the Launch Package.</span>
          </div>
          <ul className="offer-list">
            {INCLUDES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-glow">Claim the $500 Bundle</a>
        </div>
        <p className="offer-referral">
          Know someone who needs this? Earn <strong>$100 cash</strong> for every client you refer,
          paid once their project is paid in full.
        </p>
      </div>
    </section>
  )
}
