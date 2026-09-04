export default function Stats() {
  return (
    <section style={{
      padding: '60px 64px',
      background: 'rgba(8,19,12,0.72)',
      borderTop: '1px solid rgba(120,245,27,0.08)',
      borderBottom: '1px solid rgba(120,245,27,0.08)',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '40px',
      }}>

        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#9BFF4A',
            lineHeight: 1,
            letterSpacing: '-0.045em',
            textShadow: '0 0 28px rgba(120,245,27,0.2)',
          }}>500+</div>
          <div style={{
            fontSize: '0.75rem',
            color: '#85849B',
            marginTop: '8px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>Active Members</div>
        </div>

        <div style={{ width: '1px', height: '48px', background: 'rgba(120,245,27,0.08)' }} />

        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#9BFF4A',
            lineHeight: 1,
            letterSpacing: '-0.045em',
            textShadow: '0 0 28px rgba(120,245,27,0.2)',
          }}>84%</div>
          <div style={{
            fontSize: '0.75rem',
            color: '#85849B',
            marginTop: '8px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>Signal Accuracy</div>
        </div>

        <div style={{ width: '1px', height: '48px', background: 'rgba(120,245,27,0.08)' }} />

        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#9BFF4A',
            lineHeight: 1,
            letterSpacing: '-0.045em',
            textShadow: '0 0 28px rgba(120,245,27,0.2)',
          }}>4 yrs</div>
          <div style={{
            fontSize: '0.75rem',
            color: '#85849B',
            marginTop: '8px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>Market Experience</div>
        </div>

        <div style={{ width: '1px', height: '48px', background: 'rgba(120,245,27,0.08)' }} />

        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#9BFF4A',
            lineHeight: 1,
            letterSpacing: '-0.045em',
            textShadow: '0 0 28px rgba(120,245,27,0.2)',
          }}>Daily</div>
          <div style={{
            fontSize: '0.75rem',
            color: '#85849B',
            marginTop: '8px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>Live Sessions</div>
        </div>

      </div>
    </section>
  )
}