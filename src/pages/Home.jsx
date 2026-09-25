import { useState } from 'react'
import ScrollProgress from '../components/ScrollProgress'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import WhatYouGet from '../components/WhatYouGet'
import Results from '../components/Results'
import Feedback from '../components/Feedback'
import EnrollForm from '../components/EnrollForm'
import Footer from '../components/Footer'
import PerformancePage from '../components/PerformancePage'

export default function Home({ lenisRef }) {
  const [showPerf, setShowPerf] = useState(false)

  if (showPerf) {
    return <PerformancePage onBack={() => {
      setShowPerf(false)
    }} lenisRef={lenisRef} />
  }

  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero onShowPerformance={() => setShowPerf(true)} />
      <Stats />
      <WhatYouGet />
      <Services />
      <Results onShowPerformance={() => setShowPerf(true)} />
      <Feedback />
      <EnrollForm />
      <Footer />
    </main>
  )
}