import iconLogo from '../assets/logo/geg-icon.jpg'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__mark reveal" aria-hidden="true">
          <img src={iconLogo} alt="" />
        </div>

        <div className="about__copy reveal">
          <p className="eyebrow">Why GEG Exists</p>
          <h2 className="section-title">Fifteen years of enterprise strategy, built for the rest of us.</h2>

          <p>
            I spent over fifteen years managing partner networks and account strategy for
            national brands &mdash; leading indirect sales channels, building training programs,
            and driving growth across 900+ retail accounts. I hit #1 in the country. I won the
            awards. And the whole time, I kept noticing the same gap: that level of strategy
            almost never reaches small businesses or first-time founders. It's reserved for
            companies with big budgets and bigger org charts.
          </p>
          <p>
            Gomez Enterprise Group is me bringing that same strategy down to street level &mdash;
            for the small business that's outgrown "figuring it out as we go," and for the
            person who's always wanted to start something but never knew where to begin.
          </p>
          <p>
            I don't just hand over a plan and disappear. I build it with you, or I build it for
            you &mdash; and if you want, I'll teach you to run it yourself. Philadelphia born,
            Philadelphia built.
          </p>

          <p className="about__sign">&mdash; Benny Gomez Jr., Founder</p>
        </div>
      </div>
    </section>
  )
}
