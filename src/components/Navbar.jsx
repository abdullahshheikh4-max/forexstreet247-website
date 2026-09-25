import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useWindowSize from '../hooks/useWindowSize'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar() {
  const [isCompact, setIsCompact] = useState(false)
  const lastScrollY = useRef(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const width = useWindowSize()
  const isMobile = width < 768
  const compact = isMobile || isCompact

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 80) {
        setIsCompact(true)
      } else {
        setIsCompact(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['stats', 'whatyouget', 'community', 'results', 'feedback']

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('')
        return
      }

      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id
          break
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const hoverOn = (e) => { e.target.style.color = '#C8FF85' }
  const hoverOff = (e) => { e.target.style.color = activeSection === e.currentTarget.hash.slice(1) ? '#C8FF85' : '#7A8C7D' }

  const linkStyle = (id) => ({
    color: activeSection === id ? '#C8FF85' : '#7A8C7D',
    fontSize: '0.82rem',
    textDecoration: 'none',
    fontWeight: activeSection === id ? 600 : 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap',
  })

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
    whiteSpace: 'nowrap',
  }

  const renderJoin = () => (
    <a href="#enroll" className="join-btn" style={joinStyle} onClick={e => { e.preventDefault(); scrollTo('enroll') }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #BDFF78 0%, #82F228 60%, #5AD80C 100%)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >Join <span style={{ fontWeight: 900 }}>{'→'}</span></a>
  )

  return (
    <>
      <motion.nav
        animate={{
          width: 'fit-content',
          gap: compact ? '16px' : '32px',
          padding: compact ? '8px 16px' : '10px 24px',
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed', top: '16px', left: '50%', transform: 'translateX(-50%)',
          width: 'fit-content', borderRadius: '100px', padding: '10px 24px',
          background: 'rgba(2,8,4,0.92)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(120,245,27,0.15)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', zIndex: 100,
        }}
      >
        <div style={{
          width: '28px', height: '28px', background: 'linear-gradient(145deg, #AAFF55, #4FCB0A)', borderRadius: '7px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', flexShrink: 0,
        }}>🐂</div>

        <AnimatePresence initial={false} mode="wait">
          {!compact && (
            <motion.div
              key="full-links"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', gap: '28px', alignItems: 'center', overflow: 'hidden' }}
            >
              <a href="#stats" style={linkStyle('stats')} onClick={e => { e.preventDefault(); scrollTo('stats') }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Stats</a>
              <a href="#whatyouget" style={linkStyle('whatyouget')} onClick={e => { e.preventDefault(); scrollTo('whatyouget') }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Our Approach</a>
              <a href="#community" style={linkStyle('community')} onClick={e => { e.preventDefault(); scrollTo('community') }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Community</a>
              <a href="#results" style={linkStyle('results')} onClick={e => { e.preventDefault(); scrollTo('results') }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Results</a>
              <a href="#feedback" style={linkStyle('feedback')} onClick={e => { e.preventDefault(); scrollTo('feedback') }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Reviews</a>
              <div style={{ width: '1px', height: '18px', background: 'rgba(120,245,27,0.12)' }} />
            </motion.div>
          )}
        </AnimatePresence>

        {compact && !isMobile && <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(120,245,27,0.5)' }} />
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(120,245,27,0.5)' }} />
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(120,245,27,0.5)' }} />
        </div>}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'none', border: '1px solid rgba(120,245,27,0.2)', borderRadius: '8px', padding: '8px 10px', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: '5px',
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#9CFF4B' : '#7A8C7D', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#9CFF4B' : '#7A8C7D', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#9CFF4B' : '#7A8C7D', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        )}

        {renderJoin()}
      </motion.nav>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '76px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(2,8,4,0.98)', backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(120,245,27,0.10)', padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          <a href="#stats" style={linkStyle('stats')} onClick={e => { e.preventDefault(); scrollTo('stats'); setMenuOpen(false) }}>Stats</a>
          <a href="#whatyouget" style={linkStyle('whatyouget')} onClick={e => { e.preventDefault(); scrollTo('whatyouget'); setMenuOpen(false) }}>Our Approach</a>
          <a href="#community" style={linkStyle('community')} onClick={e => { e.preventDefault(); scrollTo('community'); setMenuOpen(false) }}>Community</a>
          <a href="#results" style={linkStyle('results')} onClick={e => { e.preventDefault(); scrollTo('results'); setMenuOpen(false) }}>Results</a>
          <a href="#feedback" style={linkStyle('feedback')} onClick={e => { e.preventDefault(); scrollTo('feedback'); setMenuOpen(false) }}>Reviews</a>
          <a href="#enroll" className="join-btn" style={{ ...joinStyle, justifyContent: 'center' }} onClick={e => { e.preventDefault(); scrollTo('enroll'); setMenuOpen(false) }}>
            Join {'→'}
          </a>
        </div>
      )}
    </>
  )
}
