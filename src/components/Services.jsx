import useWindowSize from '../hooks/useWindowSize'
import AnimateOnScroll from './AnimateOnScroll'
import { Link } from 'react-router-dom'

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
    <Link to={card.path} onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{
      gridColumn: card.featured && !card.isMobile ? 'span 1' : undefined,
      display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(145deg, rgba(120,245,27,0.035), rgba(255,255,255,0.012)), rgba(9,19,13,0.86)',
      border: '1px solid rgba(120,245,27,0.10)', borderRadius: '22px',
      padding: card.featured ? '36px 32px' : '26px 24px', backdropFilter: 'blur(12px)',
      boxShadow: '0 16px 50px rgba(0,0,0,0.20)', transition: 'all 0.25s ease', cursor: 'pointer', textDecoration: 'none',
    }}>
      <div style={{
        width: '48px', height: '48px', borderRadius: '10px',
        background: 'linear-gradient(135deg, rgba(82,216,11,0.15), rgba(120,245,27,0.035))',
        border: '1px solid rgba(120,245,27,0.16)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.3rem', marginBottom: '20px',
      }}>{card.icon}</div>
      <div style={{
        fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
        fontSize: '1.1rem', color: '#F5F3FF', marginBottom: '10px', letterSpacing: '-0.025em',
      }}>{card.title}</div>
      <p style={{ fontSize: '0.875rem', color: '#8A9B8D', lineHeight: 1.65, marginBottom: '20px' }}>{card.desc}</p>
      <span style={{
        display: 'inline-block', alignSelf: 'flex-start', marginTop: 'auto', background: 'transparent',
        border: '1px solid rgba(120,245,27,0.35)', borderRadius: '8px',
        padding: '9px 14px', fontSize: '0.78rem', color: '#9CFF4B', fontWeight: 600,
      }}>Learn More {'→'}</span>
    </Link>
  )
}

const cards = [
  { icon: '📡', title: 'Premium Monthly Membership', desc: 'Daily live trading, market analysis, and practical trading education inside the Premium Community.', path: '/premium', featured: true },
  { icon: '🎓', title: '1-on-1 Mentorship', desc: 'Personalized guidance, private calls, and direct support built around your real trading journey.', path: '/mentorship-program', featured: true },
]

export default function Services() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="community" style={{
      scrollMarginTop: '64px',
      padding: isMobile ? '80px 24px' : '110px 64px',
      background: `radial-gradient(circle at 15% 15%, rgba(82,216,11,0.055), transparent 30%), #07100B`,
    }}>
      <AnimateOnScroll>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))',
          border: '1px solid rgba(120,245,27,0.25)', borderRadius: '6px',
          padding: '5px 14px', fontSize: '0.72rem', color: '#9CFF4B',
          fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px',
        }}>The Community</div>
        <h2 style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
          fontSize: isMobile ? '1.8rem' : 'clamp(1.9rem, 4vw, 2.8rem)',
          color: '#fff', letterSpacing: '-0.043em', marginBottom: '14px',
        }}>
          Everything Inside{' '}
          <span style={{
            background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>One Community</span>
        </h2>
        <p style={{ color: '#8A9B8D', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto' }}>
          Everything you need to go from confused to consistent, in one place.
        </p>
        </div>
      </AnimateOnScroll>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
        gap: '20px', maxWidth: '1100px', margin: '0 auto',
      }}>
        {cards.map((card, index) => (
          <AnimateOnScroll key={card.title} delay={0.1 * (index + 1)}>
            <ServiceCard card={{ ...card, isMobile }} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}