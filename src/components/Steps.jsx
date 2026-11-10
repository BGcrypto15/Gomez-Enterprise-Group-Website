import { useEffect, useRef, useState } from 'react'
import DeviceMock from './DeviceMock.jsx'
import { Scramble, prefersReducedMotion } from './Reveal.jsx'

const STEPS = [
  {
    parts: [{ t: 'We build it ', hl: false }, { t: 'for you.', hl: true }],
    copy: 'Hand us the idea. We handle the brand, the website, and the setup so you can focus on the business.',
  },
  {
    parts: [{ t: 'We build it ', hl: false }, { t: 'with you.', hl: true }],
    copy: 'Your vision, executed by us. You stay in the loop on every decision and we keep it moving.',
  },
  {
    parts: [{ t: 'Or you build it ', hl: false }, { t: 'yourself.', hl: true }],
    copy: 'We teach you to run it. Anything we build, we can also show you how to manage on your own.',
  },
]

export default function Steps() {
  const [active, setActive] = useState(1)
  const refs = useRef([])

  const deviceRef = useRef(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setActive(3); return }
    const small = window.matchMedia('(max-width: 960px)').matches

    // Phones and tablets: the mockup sits still and builds itself once when you reach it.
    if (small) {
      if (prefersReducedMotion()) { setActive(3); return }
      let timers = []
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        timers = [setTimeout(() => setActive(2), 900), setTimeout(() => setActive(3), 1800)]
      }, { threshold: 0.6 })
      if (deviceRef.current) io.observe(deviceRef.current)
      return () => { io.disconnect(); timers.forEach(clearTimeout) }
    }

    // Laptops: the mockup follows whichever step is on screen.
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(Number(e.target.dataset.step))
      })
    }, { rootMargin: '-35% 0px -35% 0px' })
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="steps" id="how">
      <div className="wrap steps-grid">
        <div className="steps-device" ref={deviceRef}>
          <DeviceMock step={active} />
        </div>
        <div className="steps-list">
          {STEPS.map((s, i) => (
            <div
              className={`step ${active === i + 1 ? 'on' : ''}`}
              key={i}
              data-step={i + 1}
              ref={(el) => (refs.current[i] = el)}
            >
              <span className="eyebrow">Step {i + 1} of 3</span>
              <Scramble as="h2" parts={s.parts} rise />
              <p>{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
