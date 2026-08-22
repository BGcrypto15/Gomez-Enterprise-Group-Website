const STATS = ['15+ Years Experience', '1,000+ Stores Supported', '7 States', '#1 Nationally Ranked']

export default function Story() {
  return (
    <section className="theme-gold-wash" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Gomez Family</span>
          <h2>Started at Sixteen. Still Building.</h2>
        </div>
        <div className="stat-row">
          {STATS.map((s) => (
            <span className="stat-pill" key={s}>{s}</span>
          ))}
        </div>
        <div className="story-copy">
          <p>
            We started working at sixteen, at a Quiznos counter, and became night supervisor
            within a year. That pattern stuck. By senior year of high school in 2005, we were
            already working as a draftsman and taking on project management work on the side.
          </p>
          <p>
            In 2010, it was on to the wireless industry, starting on the indirect channel floor
            at a dealer store. From there, on to the master agent side as an account executive,
            then into the corporate world: T-Mobile and Metro by T-Mobile from 2017 to 2022,
            Assurant for three years after that, and Verizon since May 2025. Fortune 100 and
            Fortune 500 companies, the kind with real scale and real stakes.
          </p>
          <p>
            Along the way, we've been ranked number one nationally more than once, earned some
            of the most prestigious awards these companies give out, and taken markets from the
            bottom of the leaderboard to the top. We've supported over 1,000 stores across seven
            states: New Jersey, Pennsylvania, Maryland, DC, Virginia, North Carolina, and South
            Carolina.
          </p>
          <p>
            We've spent our careers inside companies where the resources were unlimited: big
            budgets, big teams, big tech stacks. Most small businesses and first-time founders
            will never have access to any of that. Gomez Enterprise Group exists to close that
            gap, not by cutting corners, but by bringing real, tested strategy and systems down
            to a scale that actually fits a growing business.
          </p>
          <p>
            This is built to last beyond one client, one project, or one year. It's built to be
            generational, for the businesses we work with and for our own.
          </p>
        </div>
      </div>
    </section>
  )
}
