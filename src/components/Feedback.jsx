import useWindowSize from '../hooks/useWindowSize'

function FeedbackCard({ stars, text, name, role, avatar }) {
  const handleEnter = (e) => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.3)' }
  const handleLeave = (e) => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.10)' }

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{
      background: 'linear-gradient(145deg, rgba(120,245,27,0.035), rgba(255,255,255,0.012)), rgba(9,19,13,0.86)',
      border: '1px solid rgba(120,245,27,0.10)', borderRadius: '22px',
      padding: '32px 28px', backdropFilter: 'blur(12px)',
      transition: 'border-color 0.2s ease', cursor: 'default',
    }}>
      <div style={{ color: '#8EF43A', fontSize: '0.85rem', marginBottom: '16px', letterSpacing: '2px' }}>{stars}</div>
      <p style={{ fontSize: '0.9rem', color: '#8A9B8D', lineHeight: 1.7, marginBottom: '24px', fontStyle: 'italic' }}>{text}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '38px', height: '38px', borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(82,216,11,0.15), rgba(120,245,27,0.035))',
          border: '1px solid rgba(120,245,27,0.16)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1rem', flexShrink: 0,
        }}>{avatar}</div>
        <div>
          <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#F5F3FF', marginBottom: '2px' }}>{name}</div>
          <div style={{ fontSize: '0.78rem', color: '#8A9B8D' }}>{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Feedback() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="feedback" style={{
      scrollMarginTop: '64px',
      padding: isMobile ? '80px 24px' : '110px 64px',
      background: '#050A08',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))',
          border: '1px solid rgba(120,245,27,0.25)', borderRadius: '6px',
          padding: '5px 14px', fontSize: '0.72rem', color: '#9CFF4B',
          fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px',
        }}>Student Feedback</div>
        <h2 style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
          fontSize: isMobile ? '1.8rem' : 'clamp(1.9rem, 4vw, 2.8rem)',
          color: '#fff', letterSpacing: '-0.043em', marginBottom: '14px',
        }}>
          Real Traders.{' '}
          <span style={{
            background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Real Wins.</span>
        </h2>
        <p style={{ color: '#8A9B8D', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '380px', margin: '0 auto' }}>
          From confused beginners to consistent traders.
        </p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px', maxWidth: '1000px', margin: '0 auto',
      }}>
        <FeedbackCard stars="★★★★★" text="Finally understand why price moves. First profitable month after 6 weeks of mentorship." name="Ahmed R." role="Mentorship · Karachi" avatar="👨" />
        <FeedbackCard stars="★★★★★" text="Live sessions changed everything. Learning more here than months of YouTube." name="Sana M." role="Discord Premium · Lahore" avatar="👩" />
        <FeedbackCard stars="★★★★★" text="SMC finally clicked. I can spot setups on my own now. Game changer." name="Bilal K." role="Signals · Dubai" avatar="🧑" />
      </div>
    </section>
  )
}