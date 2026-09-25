import { Link } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'

export default function PageNavbar() {
  const isMobile = useWindowSize() < 768

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: isMobile ? '0 24px' : '0 64px', height: '64px', background: 'rgba(2,8,4,0.96)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(120,245,27,0.08)',
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <div style={{ width: '34px', height: '34px', background: 'linear-gradient(145deg, #AAFF55, #4FCB0A)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', boxShadow: '0 0 0 1px rgba(255,255,255,0.12), 0 6px 18px rgba(82,216,11,0.32)', flexShrink: 0 }}>🐂</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.92rem', color: '#EEF5EE', letterSpacing: '-0.01em', lineHeight: 1 }}>FOREXSTREET247</span>
          <span style={{ fontSize: '0.60rem', color: '#4FCB0A', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, lineHeight: 1 }}>Trading Community</span>
        </div>
      </Link>
    </nav>
  )
}