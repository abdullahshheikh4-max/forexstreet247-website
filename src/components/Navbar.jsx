import { useEffect, useState } from 'react'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: '16px', left: '50%', transform: 'translateX(-50%)',
      zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '24px',
      padding: scrolled ? '8px 16px' : '10px 20px',
      borderRadius: '100px',
      background: 'rgba(2,8,4,0.92)',
      backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
      border: '1px solid rgba(120,245,27,0.15)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      transition: 'padding 0.3s ease',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '28px', height: '28px',
          background: 'linear-gradient(145deg, #AAFF55, #4FCB0A)',
          borderRadius: '7px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '0.85rem', flexShrink: 0,
        }}>🐂</div>
        <span style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
          fontSize: '0.82rem', color: '#EEF5EE', letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
        }}>FOREXSTREET247</span>
      </div>

      {/* Join VIP button */}
      <button
        onClick={() => scrollTo('steps')}
        style={{
          color: '#071006', fontSize: '0.82rem',
          fontWeight: 700, padding: '9px 22px', borderRadius: '10px',
          background: 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
          border: '1px solid rgba(200,255,140,0.40)',
          boxShadow: '0 2px 12px rgba(82,216,11,0.28)',
          letterSpacing: '0.04em', textTransform: 'uppercase',
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          whiteSpace: 'nowrap', animation: 'gentlePulse 2.5s ease-in-out infinite',
          transition: 'all 0.2s ease', cursor: 'pointer',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
      >
        Join VIP <span style={{ fontWeight: 900 }}>→</span>
      </button>
    </nav>
  )
}