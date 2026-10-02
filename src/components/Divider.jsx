import { useEffect, useRef, useState } from 'react'
import gegIcon from '../assets/geg-icon.png'

export default function Divider() {
  const ref = useRef(null)
  const [go, setGo] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setGo(true); return }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setGo(true); io.disconnect() }
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={go ? 'divider-streak go' : 'divider-streak'} role="presentation" aria-hidden="true">
      <span className="streak streak-left" />
      <span className="streak streak-right" />
      <img className="streak-logo streak-logo-left" src={gegIcon} alt="" />
      <img className="streak-logo streak-logo-right" src={gegIcon} alt="" />
    </div>
  )
}
