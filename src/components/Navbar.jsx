import { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const width = useWindowSize()
  const isMobile = width < 768

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const hoverOn = (e) => { e.target.style.color = '#C8FF85' }
  const hoverOff = (e) => { e.target.style.color = '#7A8C7D' }

  const linkStyle = {
    color: '#7A8C7D',
    fontSize: isMobile ? '1rem' : '0.82rem',
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
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '14px 24px' : '0 64px',
        height: isMobile ? 'auto' : '64px',
        background: scrolled ? 'rgba(2,8,4,0.98)' : 'rgba(2,8,4,0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: scrolled ? '1px solid rgba(120,245,27,0.10)' : '1px solid rgba(120,245,27,0.04)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.35)' : 'none',
      }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '34px', height: '34px',
            background: 'linear-gradient(145deg, #AAFF55, #4FCB0A)',
            borderRadius: '9px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.12), 0 6px 18px rgba(82,216,11,0.32)',
            flexShrink: 0,
          }}>🐂</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800,
              fontSize: '0.92rem',
              color: '#EEF5EE',
              letterSpacing: '-0.01em',
              lineHeight: 1,
            }}>FOREXSTREET247</span>
            <span style={{
              fontSize: '0.60rem',
              color: '#4FCB0A',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
              lineHeight: 1,
            }}>Trading Community</span>
          </div>
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            <a href="#stats" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Stats</a>
            <a href="#community" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Community</a>
            <a href="#mentorship" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Mentorship</a>
            <a href="#results" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Results</a>
            <a href="#feedback" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Reviews</a>
            <div style={{ width: '1px', height: '18px', background: 'rgba(120,245,27,0.12)' }} />
            <a href="#enroll" style={joinStyle}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #BDFF78 0%, #82F228 60%, #5AD80C 100%)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >Join <span style={{ fontWeight: 900 }}>{'→'}</span></a>
          </div>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: '1px solid rgba(120,245,27,0.2)',
              borderRadius: '8px',
              padding: '8px 10px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#9CFF4B' : '#7A8C7D', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#9CFF4B' : '#7A8C7D', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#9CFF4B' : '#7A8C7D', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0, right: 0,
          zIndex: 99,
          background: 'rgba(2,8,4,0.98)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(120,245,27,0.10)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <a href="#stats" style={linkStyle} onClick={() => setMenuOpen(false)}>Stats</a>
          <a href="#community" style={linkStyle} onClick={() => setMenuOpen(false)}>Community</a>
          <a href="#mentorship" style={linkStyle} onClick={() => setMenuOpen(false)}>Mentorship</a>
          <a href="#results" style={linkStyle} onClick={() => setMenuOpen(false)}>Results</a>
          <a href="#feedback" style={linkStyle} onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#enroll" style={{ ...joinStyle, justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
            Join {'→'}
          </a>
        </div>
      )}
    </>
  )
}