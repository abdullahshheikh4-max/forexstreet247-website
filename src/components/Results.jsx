import useWindowSize from '../hooks/useWindowSize'

function ResultCard({ month, pct }) {
  const handleEnter = (e) => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.34)'; e.currentTarget.style.transform = 'translateY(-3px)' }
  const handleLeave = (e) => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.10)'; e.currentTarget.style.transform = 'translateY(0)' }

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{
      background: 'linear-gradient(145deg, rgba(120,245,27,0.035), rgba(255,255,255,0.012)), rgba(9,19,13,0.86)',
      border: '1px solid rgba(120,245,27,0.10)', borderRadius: '22px',
      padding: '32px 24px', textAlign: 'center',
      backdropFilter: 'blur(12px)', transition: 'all 0.2s ease', cursor: 'default',
    }}>
      <div style={{ fontSize: '0.72rem', color: '#8A9B8D', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>{month}</div>
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#8EF43A', letterSpacing: '-0.045em', lineHeight: 1 }}>{pct}</div>
      <div style={{ fontSize: '0.78rem', color: '#8A9B8D', marginTop: '8px' }}>Monthly Return</div>
    </div>
  )
}

export default function Results({ onShowPerformance }) {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="results" style={{
      scrollMarginTop: '64px',
      padding: isMobile ? '80px 24px' : '110px 64px',
      background: `radial-gradient(circle at 15% 15%, rgba(82,216,11,0.055), transparent 30%), #07100B`,
    }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))',
          border: '1px solid rgba(120,245,27,0.25)', borderRadius: '6px',
          padding: '5px 14px', fontSize: '0.72rem', color: '#9CFF4B',
          fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px',
        }}>Track Record</div>
        <h2 style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
          fontSize: isMobile ? '1.8rem' : 'clamp(1.9rem, 4vw, 2.8rem)',
          color: '#fff', letterSpacing: '-0.043em', marginBottom: '14px',
        }}>
          Numbers Don{"'"}t{' '}
          <span style={{
            background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Lie.</span>
        </h2>
        <p style={{ color: '#8A9B8D', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto' }}>
          Verified monthly returns from live trading — no edits, no cherry picking.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: '20px', maxWidth: '900px', margin: '0 auto 48px',
      }}>
        <ResultCard month="January 2026" pct="+18.4%" />
        <ResultCard month="February 2026" pct="+22.1%" />
        <ResultCard month="March 2026" pct="+14.7%" />
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#8A9B8D', fontSize: '0.88rem', marginBottom: '20px' }}>
          See full breakdown with trade screenshots and live session recordings.
        </p>
        <button onClick={onShowPerformance} style={{
          padding: '14px 28px', borderRadius: '12px', fontFamily: 'Inter, sans-serif',
          fontWeight: 700, fontSize: '0.9rem', color: '#071006',
          background: 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
          border: '1px solid rgba(200,255,140,0.40)', boxShadow: '0 8px 28px rgba(82,216,11,0.25)',
          cursor: 'pointer', transition: 'all 0.2s ease',
          width: isMobile ? '100%' : 'auto',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(82,216,11,0.38)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(82,216,11,0.25)' }}
        >View All Performance {'→'}</button>
      </div>
    </section>
  )
}