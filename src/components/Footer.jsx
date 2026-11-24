import useWindowSize from '../hooks/useWindowSize'
import AnimateOnScroll from './AnimateOnScroll'

export default function Footer() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <AnimateOnScroll direction="fade">
      <footer style={{
        padding: isMobile ? '32px 24px' : '36px 64px',
        background: 'rgba(4,8,6,0.95)',
        borderTop: '1px solid rgba(120,245,27,0.08)',
      }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}>

          {/* Left — brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '30px', height: '30px',
              background: 'linear-gradient(145deg, #AAFF55, #4FCB0A)',
              borderRadius: '8px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '0.9rem',
              boxShadow: '0 4px 14px rgba(82,216,11,0.30)',
            }}>🐂</div>
            <div>
              <div style={{
                fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
                fontSize: '0.88rem', color: '#9CFF4B', letterSpacing: '-0.01em',
              }}>FOREXSTREET247</div>
              <div style={{ fontSize: '0.68rem', color: '#5A6B5D', marginTop: '1px' }}>
                Education · Community · Live Trading
              </div>
            </div>
          </div>

          {/* Center — quick links */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
              {[
                { label: 'Discord', href: 'http://discord.gg/forexstreet247' },
                { label: 'Instagram', href: 'http://instagram.com/forexstreet247' },
                { label: 'YouTube', href: 'https://www.youtube.com/@wallstreet247' },
                { label: 'WhatsApp', href: 'https://wa.me/00000000' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.78rem', color: '#8A9B8D',
                    textDecoration: 'none', transition: 'color 0.2s ease',
                    fontWeight: 500,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#9CFF4B' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#8A9B8D' }}
                >{label}</a>
              ))}
            </div>
          )}

          {/* Right — copyright */}
          <div style={{ fontSize: '0.72rem', color: '#3D4D3F', textAlign: isMobile ? 'left' : 'right' }}>
            © 2026 ForexStreet247.<br />
            <span style={{ color: '#2E3D30' }}>Trading involves risk.</span>
          </div>

        </div>
      </footer>
    </AnimateOnScroll>
  )
}