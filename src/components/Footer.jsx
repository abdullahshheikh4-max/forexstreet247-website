export default function Footer() {
  const linkStyle = {
    fontSize: '0.82rem',
    color: '#8A9B8D',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  }

  const hoverOn = (e) => { e.target.style.color = '#9CFF4B' }
  const hoverOff = (e) => { e.target.style.color = '#8A9B8D' }

  return (
    <footer style={{
      padding: '40px 64px',
      background: 'rgba(5,5,12,0.65)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '24px',
    }}>

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '28px', height: '28px',
          background: 'linear-gradient(145deg, #AAFF55, #4FCB0A)',
          borderRadius: '7px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.85rem',
        }}>🐂</div>
        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          fontSize: '0.88rem',
          color: '#9CFF4B',
          letterSpacing: '-0.01em',
        }}>FOREXSTREET247</span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
        <a href="#community" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Community</a>
        <a href="#mentorship" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Mentorship</a>
        <a href="#results" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Results</a>
        <a href="#feedback" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Reviews</a>
        <a href="#enroll" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Join</a>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: '0.75rem', color: '#8A9B8D' }}>
        © 2026 ForexStreet247. Trading involves risk.
      </div>

    </footer>
  )
}