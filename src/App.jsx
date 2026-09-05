import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function App() {
  useEffect(() => {
    let lenis
    const timeout = setTimeout(() => {
      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }, 100)

    return () => {
      clearTimeout(timeout)
      lenis?.destroy()
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}