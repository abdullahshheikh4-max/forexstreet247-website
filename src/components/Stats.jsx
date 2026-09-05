import useWindowSize from '../hooks/useWindowSize'

export default function Stats() {
  const width = useWindowSize()
  const isMobile = width < 768

  const statNum = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: isMobile ? '1.8rem' : '2.4rem',
    fontWeight: 800, color: '#9BFF4A', lineHeight: 1,
    letterSpacing: '-0.045em', textShadow: '0 0 28px rgba(120,245,27,0.2)',
  }

  const statLabel = {
    fontSize: '0.75rem', color: '#85849B', marginTop: '8px',
    letterSpacing: '0.08em', textTransform: 'uppercase',
  }

  return (
    <section id="stats" style={{
      scrollMarginTop: '64px',
      padding: isMobile ? '50px 24px' : '60px 64px',
      background: 'rgba(8,19,12,0.72)',
      borderTop: '1px solid rgba(120,245,27,0.08)',
      borderBottom: '1px solid rgba(120,245,27,0.08)',
    }}>
      <div style={{
        maxWidth: '900px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
        gap: isMobile ? '32px' : '0',
        alignItems: 'center', justifyItems: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={statNum}>500+</div>
          <div style={statLabel}>Active Members</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={statNum}>84%</div>
          <div style={statLabel}>Signal Accuracy</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={statNum}>4 yrs</div>
          <div style={statLabel}>Market Experience</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={statNum}>Daily</div>
          <div style={statLabel}>Live Sessions</div>
        </div>
      </div>
    </section>
  )
}