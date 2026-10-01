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
          <h2>Everything You Need to Look Legit Online</h2>
        </div>
        <div className="offer-card">
          <div className="offer-price">
            <span className="offer-tag">Limited-Time Price</span>
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
