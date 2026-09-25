import { motion } from 'framer-motion'
import PageNavbar from '../components/PageNavbar'
import { featureDesc, featureItem, featureTitle, pageStyle, twoColGrid } from '../components/pageStyles'
import useWindowSize from '../hooks/useWindowSize'

const badgeStyle = { display: 'inline-block', background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))', border: '1px solid rgba(120,245,27,0.25)', borderRadius: '6px', padding: '5px 14px', fontSize: '0.72rem', color: '#9CFF4B', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px' }
const fade = (delay) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } })

export default function AboutPage() {
  const isMobile = useWindowSize() < 768
  return <div style={{ ...pageStyle, padding: isMobile ? '100px 24px 60px' : pageStyle.padding }}>
    <PageNavbar />
    <motion.div {...fade(0.1)} style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 72px' }}>
      <div style={badgeStyle}>WHAT YOU GET</div>
      <motion.h1 {...fade(0.2)} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: isMobile ? '2.35rem' : 'clamp(2.7rem, 5vw, 4.4rem)', lineHeight: 1.05, letterSpacing: '-0.05em', marginBottom: '20px' }}>
        Don't Just Follow Trades.
        <span style={{ display: 'block', background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Understand Them.</span>
      </motion.h1>
      <p style={{ ...featureDesc, fontSize: '1rem' }}>ForexStreet247 is built around learning the process behind every trade.</p>
    </motion.div>
    <div style={{ ...twoColGrid, gridTemplateColumns: isMobile ? '1fr' : twoColGrid.gridTemplateColumns, gap: isMobile ? '40px' : twoColGrid.gap }}>
      <motion.div {...fade(0.2)}>
        <p style={{ color: '#A6B5A9', fontSize: isMobile ? '1.8rem' : '2.25rem', fontStyle: 'italic', lineHeight: 1.25, letterSpacing: '-0.03em', marginBottom: '32px' }}>“From confused to confident, one trade at a time.”</p>
        <div style={{ borderLeft: '2px solid rgba(120,245,27,0.5)', padding: '10px 0 10px 22px', marginBottom: '28px' }}>
          <p style={{ color: '#9CFF4B', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.16em', lineHeight: 1.7 }}>FROM ANALYSIS → EXECUTION → REVIEW → LEARNING</p>
        </div>
        <p style={{ ...featureDesc, fontSize: '0.95rem' }}>The goal is simple: help you become a more informed and independent trader.</p>
      </motion.div>
      <motion.div {...fade(0.3)}>
        <div style={badgeStyle}>THE FOCUS</div>
        {[
          ['STRUCTURED ANALYSIS', 'Understand market structure and trade planning.'],
          ['LIVE EXECUTION', 'See how decisions are made in real-time market conditions.'],
          ['TRADING PSYCHOLOGY', 'Build discipline and manage emotions such as FOMO and revenge trading.'],
          ['QUALITY OVER QUANTITY', 'Focus on high-quality setups instead of forcing trades.'],
          ['RISK MANAGEMENT', 'Learn how to approach risk and protect trading capital.'],
          ['THE "WHY" BEHIND EVERY TRADE', 'Understand the reasoning behind the setup, entry, stop loss and target.'],
        ].map(([title, desc]) => <div key={title} style={featureItem}><div style={featureTitle}>{title}</div><p style={featureDesc}>{desc}</p></div>)}
      </motion.div>
    </div>
  </div>
}