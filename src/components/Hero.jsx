export default function Hero({ onShowPerformance }) {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 40px 80px',
      position: 'relative',
      overflow: 'hidden',
      background: `
        radial-gradient(circle at 50% -8%, rgba(83,216,11,0.13), transparent 35%),
        radial-gradient(circle at 0% 45%, rgba(65,153,69,0.08), transparent 30%),
        linear-gradient(135deg, #07140D 0%, #050A08 48%, #020403 100%)
      `,
    }}>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.28,
        backgroundImage: `
          linear-gradient(rgba(120,245,27,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(120,245,27,0.018) 1px, transparent 1px)
        `,
        backgroundSize: '56px 56px',
        maskImage: 'linear-gradient(to bottom, black, transparent 75%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 75%)',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '-90px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '900px',
        height: '680px',
        background: `radial-gradient(ellipse at center,
          rgba(120,245,27,0.15) 0%,
          rgba(82,216,11,0.065) 34%,
          transparent 69%)`,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))',
          border: '1px solid rgba(120,245,27,0.25)',
          borderRadius: '100px',
          padding: '6px 16px',
          marginBottom: '28px',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: '#9CFF4B',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#79F51B',
            boxShadow: '0 0 14px rgba(120,245,27,0.9)',
            display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          Live Community · 500+ Traders
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2.9rem, 6vw, 5.25rem)',
          lineHeight: 1.04,
          letterSpacing: '-0.055em',
          color: '#fff',
          marginBottom: '22px',
          textShadow: '0 10px 50px rgba(0,0,0,0.42)',
        }}>
          Trade Smarter.<br />
          <span style={{
            background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Not Harder.
          </span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: '1.05rem',
          color: '#8A9B8D',
          maxWidth: '460px',
          lineHeight: 1.7,
          marginBottom: '40px',
          letterSpacing: '-0.008em',
          margin: '0 auto 40px',
        }}>
          Signals, live sessions, and mentorship — built for traders who are done guessing.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#enroll" style={{
            display: 'inline-block',
            textDecoration: 'none',
            padding: '16px 32px',
            borderRadius: '15px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '0.96rem',
            letterSpacing: '-0.01em',
            color: '#071006',
            background: 'linear-gradient(105deg, #B6FF68 0%, #8DF333 35%, #68E51A 68%, #4FCB0A 100%)',
            border: '1px solid rgba(210,255,180,0.28)',
            boxShadow: '0 14px 38px rgba(82,216,11,0.25), 0 2px 8px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.55)',
            transition: 'all 0.22s ease',
            minWidth: '220px',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.015)'
              e.currentTarget.style.boxShadow = '0 19px 50px rgba(82,216,11,0.38), 0 4px 12px rgba(0,0,0,0.28)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 14px 38px rgba(82,216,11,0.25), 0 2px 8px rgba(0,0,0,0.28)'
            }}
          >
            Join the Community {'→'}
          </a>

          <button
            onClick={onShowPerformance}
            style={{
              padding: '16px 32px',
              borderRadius: '15px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '0.96rem',
              color: '#E2EAE2',
              background: 'rgba(255,255,255,0.018)',
              border: '1px solid rgba(255,255,255,0.10)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minWidth: '185px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(120,245,27,0.48)'
              e.currentTarget.style.color = '#9CFF4B'
              e.currentTarget.style.background = 'rgba(120,245,27,0.035)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
              e.currentTarget.style.color = '#E2EAE2'
              e.currentTarget.style.background = 'rgba(255,255,255,0.018)'
            }}
          >
            View Performance
          </button>
        </div>

      </div>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

    </section>
  )
}