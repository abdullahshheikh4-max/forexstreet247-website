import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const hoverOn = (e) => { e.target.style.color = '#C8FF85' }
  const hoverOff = (e) => { e.target.style.color = '#7A8C7D' }

  const joinHoverOn = (e) => {
    e.currentTarget.style.background = 'linear-gradient(135deg, #BDFF78 0%, #82F228 60%, #5AD80C 100%)'
    e.currentTarget.style.boxShadow = '0 6px 24px rgba(82,216,11,0.42)'
    e.currentTarget.style.transform = 'translateY(-1px)'
  }

  const joinHoverOff = (e) => {
    e.currentTarget.style.background = 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)'
    e.currentTarget.style.boxShadow = '0 2px 12px rgba(82,216,11,0.28)'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 64px',
    height: '64px',
    background: scrolled ? 'rgba(2,8,4,0.96)' : 'rgba(2,8,4,0.60)',
    backdropFilter: 'blur(28px)',
    WebkitBackdropFilter: 'blur(28px)',
    borderBottom: scrolled ? '1px solid rgba(120,245,27,0.10)' : '1px solid rgba(120,245,27,0.04)',
    transition: 'all 0.4s ease',
    boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.35)' : 'none',
  }

  const linkStyle = {
    color: '#7A8C7D',
    fontSize: '0.82rem',
    textDecoration: 'none',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    transition: 'color 0.2s ease',
  }

  const joinStyle = {
    color: '#071006',
    fontSize: '0.82rem',
    textDecoration: 'none',
    fontWeight: 700,
    padding: '9px 22px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
    border: '1px solid rgba(200,255,140,0.40)',
    boxShadow: '0 2px 12px rgba(82,216,11,0.28)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
  }

  return (
    <nav style={navStyle}>

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '34px',
          height: '34px',
          background: 'linear-gradient(145deg, #AAFF55, #4FCB0A)',
          borderRadius: '9px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.12), 0 6px 18px rgba(82,216,11,0.32)',
          flexShrink: 0,
        }}>
          {'🐂'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '0.92rem',
            color: '#EEF5EE',
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}>
            FOREXSTREET247
          </span>
          <span style={{
            fontSize: '0.60rem',
            color: '#4FCB0A',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 500,
            lineHeight: 1,
          }}>
            Trading Community
          </span>
        </div>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <a href="#community" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          Community
        </a>
        <a href="#mentorship" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          Mentorship
        </a>
        <a href="#results" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          Results
        </a>

        <div style={{ width: '1px', height: '18px', background: 'rgba(120,245,27,0.12)' }} />

        <a
          href="#enroll"
          style={joinStyle}
          onMouseEnter={joinHoverOn}
          onMouseLeave={joinHoverOff}
        >
          Join
          <span style={{ fontSize: '0.85rem', fontWeight: 900 }}>{'→'}</span>
        </a>
      </div>

    </nav>
  )
}