import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  const [showPerf, setShowPerf] = useState(false)

  return (
    <main>
      <Navbar />
      <Hero onShowPerformance={() => setShowPerf(true)} />
    </main>
  )
}