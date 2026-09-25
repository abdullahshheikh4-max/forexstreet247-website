import useWindowSize from '../hooks/useWindowSize'
import AnimateOnScroll from './AnimateOnScroll'

const badgeStyle = {
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
}

const features = [
  ['STRUCTURED ANALYSIS', 'Understand market structure and trade planning.'],
  ['LIVE EXECUTION', 'See how decisions are made in real-time market conditions.'],
  ['TRADING PSYCHOLOGY', 'Build discipline and manage emotions such as FOMO and revenge trading.'],
  ['QUALITY OVER QUANTITY', 'Focus on high-quality setups instead of forcing trades.'],
  ['RISK MANAGEMENT', 'Learn how to approach risk and protect trading capital.'],
  ['THE "WHY" BEHIND EVERY TRADE', 'Understand the reasoning behind the setup, entry, stop loss and target.'],
]

export default function WhatYouGet() {
  const isMobile = useWindowSize() < 768

  return (
    <section id="whatyouget" style={{
      scrollMarginTop: '64px',
      padding: isMobile ? '80px 24px' : '110px 64px',
      background: '#050A08',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '40px' : '80px',
        alignItems: 'start',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div>
          <AnimateOnScroll delay={0.1}>
            <div style={badgeStyle}>WHAT YOU GET</div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08, color: '#fff', letterSpacing: '-0.043em', marginBottom: '16px' }}>
              Don&apos;t Just Follow Trades.
              <span style={{ display: 'block', background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Understand Them.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <p style={{ color: '#8A9B8D', fontSize: '0.95rem', lineHeight: 1.7 }}>ForexStreet247 is built around learning the process behind every trade.</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4}>
            <div style={{ borderLeft: '4px solid #9CFF4B', paddingLeft: '20px', marginTop: '54px' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.85rem', color: '#9CFF4B', letterSpacing: '0.08em', lineHeight: 1.6 }}>FROM ANALYSIS · EXECUTION · REVIEW · LEARNING</div>
              <p style={{ color: '#8A9B8D', fontSize: '0.88rem', marginTop: '10px', lineHeight: 1.65 }}>The goal is simple: help you become a more informed and independent trader.</p>
            </div>
          </AnimateOnScroll>
        </div>

        <div>
          <AnimateOnScroll delay={0.1}>
            <div style={badgeStyle}>THE FOCUS</div>
          </AnimateOnScroll>
          {features.map(([title, description], index) => (
            <AnimateOnScroll key={title} delay={0.1 * (index + 1)}>
              <div style={{ padding: '18px 0', borderBottom: index === features.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#F5F3FF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{title}</div>
                <p style={{ fontSize: '0.88rem', color: '#8A9B8D', lineHeight: 1.65, marginTop: '5px' }}>{description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}