import { GlossIcon } from './Icons.jsx'

// A laptop and phone that "build" as step goes 1 to 3. The hero uses step 3.
export default function DeviceMock({ step = 3 }) {
  return (
    <div className="device" data-step={step} aria-hidden="true">
      <div className="dev-tiles">
        <GlossIcon name="social" size={64} className="tile t1" />
        <GlossIcon name="chart" size={64} className="tile t2" />
        <GlossIcon name="camera" size={52} className="tile t3" />
      </div>
      <div className="laptop">
        <div className="screen">
          <div className="scr-wash" />
          <div className="scr-ui">
            <div className="scr-bar"><i /><i /><i /></div>
            <div className="scr-hero" />
            <div className="scr-row"><b /><b /><b /></div>
            <div className="scr-row sm"><b /><b /></div>
          </div>
        </div>
        <div className="lap-base" />
      </div>
      <div className="phone">
        <div className="ph-notch" />
        <div className="ph-ui">
          <div className="ph-hero" />
          <div className="ph-line" /><div className="ph-line short" />
          <div className="ph-grid"><b /><b /><b /><b /></div>
        </div>
      </div>
      <div className="live-meter">
        <span>OFF</span>
        <div className="meter-track"><div className="meter-fill" /></div>
        <span>LIVE</span>
      </div>
    </div>
  )
}
