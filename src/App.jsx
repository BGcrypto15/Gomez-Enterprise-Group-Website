import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Steps from './components/Steps.jsx'
import Offer from './components/Offer.jsx'
import Services from './components/Services.jsx'
import Packages from './components/Packages.jsx'
import Portfolio from './components/Portfolio.jsx'
import Story from './components/Story.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="bg-aurora" aria-hidden="true" />
      <Nav />
      <Hero />
      <Steps />
      <Offer />
      <Services />
      <Packages />
      <Portfolio />
      <Story />
      <FAQ />
      <Contact />
      <Footer />
      <Analytics />
    </>
  )
}
