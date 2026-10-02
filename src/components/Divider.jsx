import { useEffect, useRef, useState } from 'react'
import gegIcon from '../assets/geg-icon.png'

export default function Divider() {
  const ref = useRef(null)
  const [go, setGo] = useState(false)
  const [live, setLive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setGo(true); setLive(true); return }
    const io = new IntersectionObserver(([entry]) => {
      setLive(entry.isIntersecting)
      if (entry.isIntersecting) setGo(true)
    }, { rootMargin: '0px 0px -20% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const cls = ['divider-streak', go && 'go', live && 'live'].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={cls} role="presentation" aria-hidden="true">
      <span className="streak streak-left"><span className="streak-core" /></span>
      <span className="streak streak-right"><span className="streak-core" /></span>
      <img className="streak-logo streak-logo-left" src={gegIcon} alt="" />
      <img className="streak-logo streak-logo-right" src={gegIcon} alt="" />
    </div>
  )
}
