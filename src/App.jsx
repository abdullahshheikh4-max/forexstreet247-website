import { useEffect, useLayoutEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import PremiumPage from './pages/PremiumPage'
import MentorshipPage from './pages/MentorshipPage'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const scrollToTop = () => {
      lenisRef.current?.scrollTo(0, { immediate: true, force: true })
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    scrollToTop()
    const frameId = requestAnimationFrame(scrollToTop)
    return () => cancelAnimationFrame(frameId)
  }, [lenisRef, pathname])

  return null
}

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    let lenis
    const timeout = setTimeout(() => {
      lenis = new Lenis({
        duration: 1.8,
        lerp: 0.04,
        wheelMultiplier: 0.45,
        touchMultiplier: 0.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
      lenisRef.current = lenis

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }, 100)

    return () => {
      clearTimeout(timeout)
      lenis?.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    const glow = document.createElement('div')
    glow.style.position = 'fixed'
    glow.style.width = '320px'
    glow.style.height = '320px'
    glow.style.borderRadius = '50%'
    glow.style.pointerEvents = 'none'
    glow.style.zIndex = '9999'
    glow.style.background = 'radial-gradient(circle, rgba(120,245,27,0.06), transparent 70%)'
    glow.style.transform = 'translate(-50%, -50%)'
    glow.style.transition = 'left 0.12s ease, top 0.12s ease'
    document.body.appendChild(glow)

    const handleMouseMove = (e) => {
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      glow.remove()
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop lenisRef={lenisRef} />
      <Routes>
        <Route path="/" element={<Home lenisRef={lenisRef} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/mentorship-program" element={<MentorshipPage />} />
      </Routes>
    </BrowserRouter>
  )
}