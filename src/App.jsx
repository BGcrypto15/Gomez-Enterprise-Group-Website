import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Divider from './components/Divider.jsx'
import WhatWeDo from './components/WhatWeDo.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Story from './components/Story.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <WhatWeDo />
      <Divider />
      <Services />
      <Divider />
      <Contact />
      <Divider />
      <Story />
      <Footer />
      <Analytics />
    </>
  )
}
