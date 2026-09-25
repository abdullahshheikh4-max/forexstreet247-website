import { useState, useEffect } from 'react'
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

export default function Home() {
  const [showPerf, setShowPerf] = useState(false)

  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())
    }
    window.addEventListener('scroll', saveScroll, { passive: true })
    return () => window.removeEventListener('scroll', saveScroll)
  }, [])

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('homeScrollPosition')
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition))
      }, 50)
    }
  }, [])

  if (showPerf) {
    return <PerformancePage onBack={() => {
      setShowPerf(false)
    }} />
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