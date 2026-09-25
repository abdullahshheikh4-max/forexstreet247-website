import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PageNavbar from '../components/PageNavbar'
import { applyBtn, featureDesc, featureItem, featureTitle, pageStyle, twoColGrid } from '../components/pageStyles'
import useWindowSize from '../hooks/useWindowSize'

const badgeStyle = { display: 'inline-block', background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))', border: '1px solid rgba(120,245,27,0.25)', borderRadius: '6px', padding: '5px 14px', fontSize: '0.72rem', color: '#9CFF4B', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px' }
const fade = (delay) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } })

export default function PremiumPage() {
  const isMobile = useWindowSize() < 768
  const navigate = useNavigate()
  return <div style={{ ...pageStyle, padding: isMobile ? '100px 24px 60px' : pageStyle.padding }}>
    <PageNavbar />
    <div style={{ ...twoColGrid, gridTemplateColumns: isMobile ? '1fr' : twoColGrid.gridTemplateColumns, gap: isMobile ? '40px' : twoColGrid.gap }}>
      <div>
        <motion.div {...fade(0.1)} style={badgeStyle}>PREMIUM MONTHLY MEMBERSHIP</motion.div>
        <motion.h1 {...fade(0.2)} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: isMobile ? '2.3rem' : 'clamp(2.5rem, 5vw, 4.2rem)', lineHeight: 1.05, letterSpacing: '-0.05em', marginBottom: '22px' }}>
          Trade Live.
          <span style={{ display: 'block' }}>Learn Live.</span>
          <span style={{ display: 'block', background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Improve Your Execution.</span>
        </motion.h1>
        <motion.p {...fade(0.3)} style={{ ...featureDesc, fontSize: '1rem', maxWidth: '500px' }}>Join the ForexStreet247 Premium Community for daily live trading, market analysis and practical trading education.</motion.p>
        <motion.div {...fade(0.4)} style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginTop: '42px' }}><span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '3.5rem', color: '#9CFF4B', lineHeight: 1 }}>$70</span><span style={{ color: '#8A9B8D', fontSize: '1rem' }}>/ MONTH</span></motion.div>
        <motion.a {...fade(0.4)} href="https://forms.gle/PLACEHOLDER" target="_blank" rel="noreferrer" style={{ ...applyBtn, maxWidth: '100%' }}>Apply Now {'→'}</motion.a>
      </div>
      <motion.div {...fade(0.3)}>
        <div style={badgeStyle}>YOU GET</div>
        {[
          ['LIVE TRADING', 'Daily live trading sessions.'],
          ['SMART MONEY CONCEPTS', 'Learn SMC through real-time market execution.'],
          ['MARKETS', 'XAUUSD & NASDAQ.'],
          ['DAILY ANALYSIS', 'Key levels with potential buy & sell zones.'],
          ['TRADE SETUPS', 'Typical setups range from 1:1 to 1:3+ RR, depending on market conditions.'],
        ].map(([title, desc]) => <div key={title} style={featureItem}><div style={featureTitle}>{title}</div><p style={featureDesc}>{desc}</p></div>)}
      </motion.div>
    </div>
    <div style={{ maxWidth: '1100px', margin: '60px auto 0', padding: isMobile ? '40px 24px 40px' : '0 0 40px' }}>
      <button
        onClick={() => navigate('/')}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8A9B8D', fontSize: '0.85rem', cursor: 'pointer', background: 'none', border: '1px solid rgba(120,245,27,0.15)', borderRadius: '8px', padding: '10px 18px', fontFamily: 'Inter, sans-serif', transition: 'all 0.2s ease' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.45)'; e.currentTarget.style.color = '#9CFF4B' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.15)'; e.currentTarget.style.color = '#8A9B8D' }}
      >{'←'} Back to Home</button>
    </div>
  </div>
}