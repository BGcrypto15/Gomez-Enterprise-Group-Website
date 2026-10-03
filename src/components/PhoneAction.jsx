import { useEffect, useState } from 'react'
import qrText from '../assets/qr-text.svg'
import qrCall from '../assets/qr-call.svg'

const NUMBER = '+12676256138'

const KINDS = {
  text: { href: `sms:${NUMBER}`, qr: qrText, title: 'Text Us', note: 'Point your phone camera at this code to start a text with us.' },
  call: { href: `tel:${NUMBER}`, qr: qrCall, title: 'Call Us', note: 'Point your phone camera at this code to call us.' },
}

function isDesktop() {
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

export default function PhoneAction({ kind = 'text', className = '', children }) {
  const k = KINDS[kind]
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const onClick = (e) => {
    if (isDesktop()) { e.preventDefault(); setOpen(true) }
  }

  return (
    <>
      <a href={k.href} className={className} onClick={onClick}>{children}</a>
      {open && (
        <div className="qr-backdrop" onClick={() => setOpen(false)}>
          <div className="qr-modal" role="dialog" aria-modal="true" aria-label={k.title} onClick={(e) => e.stopPropagation()}>
            <button className="qr-close" onClick={() => setOpen(false)} aria-label="Close">&times;</button>
            <h3>{k.title}</h3>
            <img src={k.qr} alt={`QR code to ${kind} Gomez Enterprise Group`} width="200" height="200" />
            <p>{k.note}</p>
          </div>
        </div>
      )}
    </>
  )
}
