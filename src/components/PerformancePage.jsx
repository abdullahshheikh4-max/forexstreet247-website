import { useState } from 'react'

function MonthCard({ month, pct, trades, wins }) {
  const handleEnter = (e) => {
    e.currentTarget.style.borderColor = 'rgba(120,245,27,0.34)'
    e.currentTarget.style.transform = 'translateY(-3px)'
  }
  const handleLeave = (e) => {
    e.currentTarget.style.borderColor = 'rgba(120,245,27,0.10)'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        background: 'linear-gradient(145deg, rgba(120,245,27,0.035), rgba(255,255,255,0.012)), rgba(9,19,13,0.86)',
        border: '1px solid rgba(120,245,27,0.10)',
        borderRadius: '22px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'all 0.2s ease',
        cursor: 'default',
      }}
    >
      <div style={{
        fontSize: '0.72rem',
        color: '#8A9B8D',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}>{month}</div>

      <div style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '2rem',
        fontWeight: 800,
        color: '#8EF43A',
        letterSpacing: '-0.045em',
        lineHeight: 1,
      }}>{pct}</div>

      <div style={{
        fontSize: '0.78rem',
        color: '#8A9B8D',
      }}>{trades} trades · {wins} wins</div>

      <div style={{
        height: '100px',
        background: 'rgba(3,9,5,0.76)',
        borderRadius: '10px',
        border: '1px dashed rgba(120,245,27,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem',
        color: '#8A9B8D',
      }}>
        Screenshot
      </div>
    </div>
  )
}

function LiveCard({ pair, rr, date }) {
  const handleEnter = (e) => {
    e.currentTarget.style.borderColor = 'rgba(120,245,27,0.34)'
    e.currentTarget.style.transform = 'translateY(-3px)'
  }
  const handleLeave = (e) => {
    e.currentTarget.style.borderColor = 'rgba(120,245,27,0.10)'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        background: 'linear-gradient(145deg, rgba(120,245,27,0.035), rgba(255,255,255,0.012)), rgba(9,19,13,0.86)',
        border: '1px solid rgba(120,245,27,0.10)',
        borderRadius: '22px',
        overflow: 'hidden',
        transition: 'all 0.2s ease',
        cursor: 'default',
      }}
    >
      <div style={{
        height: '160px',
        background: 'rgba(3,9,5,0.76)',
        borderBottom: '1px solid rgba(120,245,27,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem',
        color: '#8A9B8D',
      }}>
        Trade Screenshot
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: '0.95rem',
          color: '#F5F3FF',
          marginBottom: '6px',
          letterSpacing: '-0.02em',
        }}>{pair}</div>
        <div style={{
          fontSize: '0.8rem',
          color: '#8EF43A',
          fontWeight: 600,
          marginBottom: '4px',
        }}>{rr}</div>
        <div style={{
          fontSize: '0.78rem',
          color: '#8A9B8D',
        }}>{date}</div>
      </div>
    </div>
  )
}

export default function PerformancePage({ onBack }) {
  const [activeTab, setActiveTab] = useState('monthly')

  const tabStyle = (tab) => ({
    padding: '9px 22px',
    borderRadius: '8px',
    fontSize: '0.82rem',
    fontWeight: 600,
    cursor: 'pointer',
    border: '1px solid',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s ease',
    background: activeTab === tab ? 'rgba(82,216,11,0.12)' : 'transparent',
    borderColor: activeTab === tab ? 'rgba(120,245,27,0.45)' : 'rgba(255,255,255,0.09)',
    color: activeTab === tab ? '#9CFF4B' : '#8A9B8D',
  })

  return (
    <div style={{
      minHeight: '100vh',
      background: `
        radial-gradient(circle at 50% -8%, rgba(83,216,11,0.10), transparent 35%),
        linear-gradient(135deg, #07140D 0%, #050A08 48%, #020403 100%)
      `,
      padding: '120px 64px 80px',
    }}>

      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#8A9B8D',
          fontSize: '0.85rem',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '48px',
          transition: 'color 0.2s ease',
          padding: 0,
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#9CFF4B' }}
        onMouseLeave={e => { e.currentTarget.style.color = '#8A9B8D' }}
      >
        {'←'} Back to Home
      </button>

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
        }}>Performance</div>

        <h2 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#fff',
          letterSpacing: '-0.043em',
          marginBottom: '14px',
        }}>
          Full Track{' '}
          <span style={{
            background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Record.</span>
        </h2>

        <p style={{
          color: '#8A9B8D',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          maxWidth: '380px',
          margin: '0 auto',
        }}>
          Every month. Every trade. No filters.
        </p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        marginBottom: '48px',
      }}>
        <button style={tabStyle('monthly')} onClick={() => setActiveTab('monthly')}>
          Monthly Returns
        </button>
        <button style={tabStyle('live')} onClick={() => setActiveTab('live')}>
          Live Trading
        </button>
      </div>

      {/* Monthly Tab */}
      {activeTab === 'monthly' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          <MonthCard month="January 2026" pct="+18.4%" trades="32" wins="26" />
          <MonthCard month="February 2026" pct="+22.1%" trades="28" wins="24" />
          <MonthCard month="March 2026" pct="+14.7%" trades="35" wins="29" />
          <MonthCard month="April 2026" pct="+19.3%" trades="30" wins="25" />
        </div>
      )}

      {/* Live Trading Tab */}
      {activeTab === 'live' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          <LiveCard pair="XAUUSD Long" rr="+3.2R" date="Live Session · 14 Aug 2026" />
          <LiveCard pair="EURUSD Short" rr="+2.8R" date="Live Session · 10 Aug 2026" />
          <LiveCard pair="GBPUSD Long" rr="+4.1R" date="Live Session · 5 Aug 2026" />
        </div>
      )}

    </div>
  )
}