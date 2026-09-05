import useWindowSize from '../hooks/useWindowSize'
import AnimateOnScroll from './AnimateOnScroll'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function CurriculumItem({ num, text, border }) {
  return (
    <li style={{
      display: 'flex', alignItems: 'center', gap: '18px', padding: '16px 0',
      borderBottom: border ? '1px solid rgba(255,255,255,0.07)' : 'none',
    }}>
      <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', color: '#8EF43A', fontWeight: 700, minWidth: '24px' }}>{num}</span>
      <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.9rem', color: '#F5F3FF', fontWeight: 500, letterSpacing: '-0.01em' }}>{text}</span>
    </li>
  )
}

export default function Mentorship() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="mentorship" style={{
      scrollMarginTop: '64px',
      padding: isMobile ? '80px 24px' : '110px 64px',
      background: '#050A08',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '48px' : '80px',
        alignItems: 'center',
      }}>
        <AnimateOnScroll direction="left">
          <div>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))',
            border: '1px solid rgba(120,245,27,0.25)', borderRadius: '6px',
            padding: '5px 14px', fontSize: '0.72rem', color: '#9CFF4B',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px',
          }}>Mentorship</div>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
            fontSize: isMobile ? '1.8rem' : 'clamp(1.9rem, 4vw, 2.8rem)',
            color: '#fff', letterSpacing: '-0.043em', lineHeight: 1.15, marginBottom: '16px',
          }}>
            Learn to Trade.<br />
            <span style={{
              background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>The Right Way.</span>
          </h2>
          <p style={{ color: '#8A9B8D', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '400px', marginBottom: '36px' }}>
            A structured path from zero to independent trader — no fluff, no filler.
          </p>
          <a href="#enroll" onClick={e => { e.preventDefault(); scrollTo('enroll') }} style={{
            display: 'inline-block', textDecoration: 'none', padding: '14px 28px',
            borderRadius: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 700,
            fontSize: '0.9rem', color: '#071006',
            background: 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
            border: '1px solid rgba(200,255,140,0.40)', boxShadow: '0 8px 28px rgba(82,216,11,0.25)',
            transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(82,216,11,0.38)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(82,216,11,0.25)' }}
          >Enroll Now {'→'}</a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right">
          <div>
          <p style={{ fontSize: '0.72rem', color: '#8A9B8D', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>Curriculum</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <CurriculumItem num="01" text="Forex Basics & Market Structure" border />
            <CurriculumItem num="02" text="Smart Money Concepts — Core" border />
            <CurriculumItem num="03" text="Order Blocks, FVGs & Liquidity" border />
            <CurriculumItem num="04" text="Multi-Timeframe Analysis" border />
            <CurriculumItem num="05" text="Risk Management & Psychology" border />
            <CurriculumItem num="06" text="Live Trade Reviews & Feedback" />
          </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}