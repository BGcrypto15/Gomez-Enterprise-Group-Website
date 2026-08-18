import { IconStar } from './Icons.jsx'
import './Reviews.css'

// PLACEHOLDER CONTENT — none of these are real reviews.
// Swap this whole section for a live Google Reviews or Elfsight widget
// once you have real client feedback — the layout below is just a
// stand-in so the page doesn't look empty before then.
const PLACEHOLDER_REVIEWS = [
  { name: 'Client Name', text: 'This card is a placeholder. Replace it with a real client review once you have one.' },
  { name: 'Client Name', text: 'Swap this section for a live Google Reviews or testimonial widget when you\u2019re ready.' },
  { name: 'Client Name', text: 'No real reviews are shown here yet \u2014 this is sample layout only.' },
]

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <p className="eyebrow reveal">Client Reviews</p>
        <h2 className="section-title reveal">What clients are saying.</h2>

        <div className="reviews__grid">
          {PLACEHOLDER_REVIEWS.map((r, i) => (
            <div className="reviews__card reveal" key={i}>
              <span className="reviews__badge">Sample &mdash; not a real review</span>
              <div className="reviews__stars">
                {Array.from({ length: 5 }).map((_, s) => <IconStar key={s} />)}
              </div>
              <p className="reviews__text">&ldquo;{r.text}&rdquo;</p>
              <p className="reviews__name">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
