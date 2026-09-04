const cards = [
  {
    icon: '📈',
    title: 'Live Trading',
    desc: 'Real trades. Real time. Watch every entry and exit with full commentary.',
    tag: 'Daily',
  },
  {
    icon: '📡',
    title: 'Premium Signals',
    desc: 'Forex and crypto signals with precise entry, SL, and TP levels.',
    tag: 'Forex · Crypto',
  },
  {
    icon: '💬',
    title: 'Discord Community',
    desc: 'Private server with signal alerts, market bias, and direct mentor access.',
    tag: 'Premium Access',
  },
  {
    icon: '🎓',
    title: '1-on-1 Mentorship',
    desc: 'Personalized SMC coaching from basics to full trading independence.',
    tag: 'Structured Course',
  },
]

export default function Services() {
  return (
    <section id="community" style={{
      padding: '110px 64px',
      background: `
        radial-gradient(circle at 15% 15%, rgba(82,216,11,0.055), transparent 30%),
        #07100B
      `,
    }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))',
          border: '1px solid rgba(120,245,27,0.25)',
          borderRadius: '6px',
          padding: '5px 14px',
          fontSize: '0.72rem',
          color: '#9CFF4B',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '18px',
        }}>The Community</div>

        <h2 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
          color: '#fff',
          letterSpacing: '-0.043em',
          marginBottom: '14px',
        }}>
          Everything Inside{' '}
          <span style={{
            background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>One Community</span>
        </h2>

        <p style={{
          color: '#8A9B8D',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          maxWidth: '420px',
          margin: '0 auto',
        }}>
          Everything you need to go from confused to consistent — in one place.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {cards.map((card) => (
          <ServiceCard key={card.title} card={card} />
        ))}
      </div>

    </section>
  )
}

function ServiceCard({ card }) {
  const handleEnter = (e) => {
    e.currentTarget.style.borderColor = 'rgba(120,245,27,0.34)'
    e.currentTarget.style.transform = 'translateY(-4px)'
    e.currentTarget.style.boxShadow = '0 20px 60px rgba(48,150,18,0.13)'
  }
  const handleLeave = (e) => {
    e.currentTarget.style.borderColor = 'rgba(120,245,27,0.10)'
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,0,0,0.20)'
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        background: 'linear-gradient(145deg, rgba(120,245,27,0.035), rgba(255,255,255,0.012)), rgba(9,19,13,0.86)',
        border: '1px solid rgba(120,245,27,0.10)',
        borderRadius: '22px',
        padding: '32px 28px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 16px 50px rgba(0,0,0,0.20)',
        transition: 'all 0.25s ease',
        cursor: 'default',
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, rgba(82,216,11,0.15), rgba(120,245,27,0.035))',
        border: '1px solid rgba(120,245,27,0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.3rem',
        marginBottom: '20px',
      }}>
        {card.icon}
      </div>

      <div style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: '1.1rem',
        color: '#F5F3FF',
        marginBottom: '10px',
        letterSpacing: '-0.025em',
      }}>
        {card.title}
      </div>

      <p style={{
        fontSize: '0.875rem',
        color: '#8A9B8D',
        lineHeight: 1.65,
        marginBottom: '20px',
      }}>
        {card.desc}
      </p>

      <span style={{
        display: 'inline-block',
        background: 'rgba(82,216,11,0.085)',
        border: '1px solid rgba(120,245,27,0.20)',
        borderRadius: '6px',
        padding: '4px 12px',
        fontSize: '0.72rem',
        color: '#9CFF4B',
        fontWeight: 600,
      }}>
        {card.tag}
      </span>
    </div>
  )
}