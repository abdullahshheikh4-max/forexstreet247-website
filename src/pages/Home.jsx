import { useState, useEffect, useRef } from 'react'
import ScrollProgress from '../components/ScrollProgress'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker() {
  const text = 'Forex Market  •  Analysis  •  Trade Ideas  •  100% Free for Members  •  Daily Live Trading Sessions  •  Education on Live Trading  •  '
  const content = text.repeat(4)
  return (
    <div style={{ background: 'rgba(8,19,12,0.90)', borderTop: '1px solid rgba(120,245,27,0.10)', borderBottom: '1px solid rgba(120,245,27,0.10)', overflow: 'hidden', padding: '10px 0' }}>
      <div style={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        animation: 'ticker 32s linear infinite',
        fontSize: '0.72rem',
        color: '#8A9B8D',
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        fontWeight: 500,
      }}>{content}</div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{
      padding: isMobile ? '100px 24px 80px' : '100px 64px 80px',
      background: `radial-gradient(circle at 50% -8%, rgba(83,216,11,0.13), transparent 35%),
        radial-gradient(circle at 0% 45%, rgba(65,153,69,0.08), transparent 30%),
        linear-gradient(135deg, #07140D 0%, #050A08 48%, #020403 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.22,
        backgroundImage: `linear-gradient(rgba(120,245,27,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(120,245,27,0.018) 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
        maskImage: 'linear-gradient(to bottom, black, transparent 75%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 75%)',
      }} />

      {/* Golden zigzag chart line — fixed to viewport top-right */}
      <svg style={{
        position: 'fixed', top: 0, right: 0,
        width: isMobile ? '55%' : '42%', height: '55vh',
        pointerEvents: 'none', zIndex: 1, opacity: 0.8,
      }} viewBox="0 0 400 300" preserveAspectRatio="xMaxYMin meet" fill="none">
        <defs>
          <linearGradient id="goldLine" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#C9A227" stopOpacity="0" />
            <stop offset="45%" stopColor="#E8B84B" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Zigzag upward line */}
        <polyline
          points="0,290 50,240 90,260 140,200 180,220 230,155 265,175 305,110 335,130 370,65 390,80 400,20"
          stroke="url(#goldLine)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" fill="none"
        />
        {/* Glowing dot at tip */}
        <circle cx="400" cy="20" r="6" fill="#FFD700" filter="url(#glow)" opacity="0.95" />
        <circle cx="400" cy="20" r="3" fill="#fff" />
      </svg>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes starFloat { from { transform: translateY(0px); opacity: 0.4; } to { transform: translateY(-8px); opacity: 1; } }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))',
          border: '1px solid rgba(120,245,27,0.25)', borderRadius: '100px',
          padding: '6px 16px', marginBottom: '24px',
          fontSize: '0.72rem', fontWeight: 600, color: '#9CFF4B',
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#79F51B', boxShadow: '0 0 14px rgba(120,245,27,0.9)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Live Community · 500+ Traders
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', alignItems: 'center' }}>
          {/* Left: headline + CTAs */}
          <div>
            <h1 style={{
              fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
              fontSize: isMobile ? '2.6rem' : 'clamp(2.6rem, 5vw, 4rem)',
              lineHeight: 1.05, letterSpacing: '-0.05em', color: '#fff',
              marginBottom: '18px',
            }}>
              Welcome to the<br />
              <span style={{
                background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>ForexStreet247</span><br />
              Community
            </h1>
            <p style={{ color: '#8A9B8D', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '460px' }}>
              VIP is our gift to the community, and it is <strong style={{ color: '#E2EAE2' }}>completely free</strong>. Finish the 3 steps below and your VIP access unlocks.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://discord.gg/forexstreet247" target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', borderRadius: '12px',
                fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.92rem',
                color: '#071006',
                background: 'linear-gradient(105deg, #B6FF68 0%, #8DF333 35%, #68E51A 68%, #4FCB0A 100%)',
                border: '1px solid rgba(210,255,180,0.28)',
                boxShadow: '0 10px 32px rgba(82,216,11,0.28)',
                textDecoration: 'none', transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 44px rgba(82,216,11,0.42)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(82,216,11,0.28)' }}
              >
                Join Discord →
              </a>
              <a href="https://one.exnessonelink.com/a/anish" target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', borderRadius: '12px',
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.92rem',
                color: '#E2EAE2', background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.12)',
                textDecoration: 'none', transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.5)'; e.currentTarget.style.color = '#9CFF4B' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#E2EAE2' }}
              >
                Open Exness Account →
              </a>
            </div>
          </div>

          {/* Right: VIP Benefits */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(88,220,14,0.07), rgba(120,245,27,0.015))',
              border: '1px solid rgba(120,245,27,0.15)', borderRadius: '20px',
              padding: '28px',
            }}>
              <div style={{ fontSize: '0.65rem', color: '#9CFF4B', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>FREE FOR EVERY MEMBER</div>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#fff', marginBottom: '20px', letterSpacing: '-0.03em' }}>VIP Exclusive Benefits</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  ['📈', 'Trade Ideas', 'Signals and trade setups'],
                  ['🎥', 'Live Trading', 'Daily educational sessions'],
                  ['🧠', 'The Why', 'Behind every trade explained'],
                  ['📊', 'Structured Analysis', 'Market structure & planning'],
                ].map(([icon, title, desc]) => (
                  <div key={title} style={{
                    background: 'rgba(9,19,13,0.80)', border: '1px solid rgba(120,245,27,0.10)',
                    borderRadius: '12px', padding: '16px 14px',
                  }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{icon}</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#F5F3FF', marginBottom: '4px' }}>{title}</div>
                    <div style={{ fontSize: '0.74rem', color: '#8A9B8D', lineHeight: 1.5 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Alternative Join ─────────────────────────────────────────────────────────
function AlternativeJoin({ isMobile }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      marginTop: '20px',
      background: 'linear-gradient(145deg, rgba(120,245,27,0.03), rgba(255,255,255,0.008)), rgba(9,19,13,0.86)',
      border: '1px solid rgba(120,245,27,0.12)',
      borderRadius: '16px', overflow: 'hidden',
    }}>
      <div style={{ padding: '20px 24px' }}>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#F5F3FF', marginBottom: '4px' }}>
          Not trading on Exness broker? Still want to join?
        </div>
        <div style={{ fontSize: '0.84rem', color: '#8A9B8D', marginBottom: '16px' }}>
          You can join through monthly subscription of <strong style={{ color: '#E2EAE2' }}>$50 / month</strong>
        </div>

        {/* Payment details toggle */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '9px 18px', borderRadius: '8px', cursor: 'pointer',
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.82rem',
          color: '#9CFF4B', background: 'rgba(120,245,27,0.08)',
          border: '1px solid rgba(120,245,27,0.25)', transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(120,245,27,0.14)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(120,245,27,0.08)' }}
        >
          Payment details
          <span style={{ transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>⌄</span>
        </button>

        {open && (
          <div style={{
            marginTop: '14px',
            background: 'rgba(3,9,5,0.76)', borderRadius: '10px',
            padding: '16px 18px', border: '1px solid rgba(120,245,27,0.12)',
            fontSize: '0.83rem', color: '#8A9B8D', lineHeight: 1.9,
          }}>
            <div style={{ color: '#9CFF4B', fontWeight: 600, marginBottom: '8px' }}>Payment Options</div>
            <div><strong style={{ color: '#E2EAE2' }}>USDT TRC20 Address:</strong><br />
              <span style={{ wordBreak: 'break-all', color: '#E2EAE2' }}>TNLxfXFgW8ARBorHLKcmjXav7eBuA5Lvgi</span>
            </div>
            <div style={{ marginTop: '8px' }}><strong style={{ color: '#E2EAE2' }}>Binance Pay Email:</strong><br />
              <span style={{ color: '#E2EAE2' }}>forexstreet247@gmail.com</span>
            </div>
          </div>
        )}

        {/* After payment - Discord/WA */}
        <div style={{ marginTop: '16px', fontSize: '0.83rem', color: '#8A9B8D', marginBottom: '12px' }}>
          After submitting payment, gain VIP access via:
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/923172490120" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', borderRadius: '10px',
            fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.84rem',
            color: '#071006',
            background: 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
            border: '1px solid rgba(200,255,140,0.40)',
            boxShadow: '0 4px 14px rgba(82,216,11,0.25)',
            textDecoration: 'none', transition: 'all 0.2s ease',
          }}>💬 WhatsApp Support</a>
          <a href="https://discord.gg/forexstreet247" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', borderRadius: '10px',
            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.84rem',
            color: '#E2EAE2', background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.12)',
            textDecoration: 'none', transition: 'all 0.2s ease',
          }}>Discord Support Ticket</a>
        </div>
      </div>
    </div>
  )
}

// ─── Steps ────────────────────────────────────────────────────────────────────
function Steps() {
  const [open, setOpen] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const steps = [
    {
      num: '1',
      title: 'Open Your Trading Account',
      sub: 'Open a new Exness account, or move your existing account under our link',
      content: (
        <div style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
            <span style={{
              padding: '7px 20px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600,
              background: 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
              color: '#071006', border: 'none', cursor: 'default',
            }}>Exness</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {['New Registration', 'Already on Exness? Change Partner'].map((label, i) => (
              <span key={label} style={{
                flex: 1, padding: '10px', borderRadius: '8px', fontSize: '0.78rem',
                fontWeight: 600, textAlign: 'center', cursor: 'pointer',
                background: i === 0 ? 'linear-gradient(135deg, rgba(82,216,11,0.3), rgba(120,245,27,0.15))' : 'transparent',
                color: i === 0 ? '#9CFF4B' : '#8A9B8D',
                border: i === 0 ? '1px solid rgba(120,245,27,0.4)' : '1px solid rgba(255,255,255,0.08)',
              }}>{label}</span>
            ))}
          </div>
          <ol style={{ paddingLeft: '18px', color: '#8A9B8D', fontSize: '0.85rem', lineHeight: 2 }}>
            <li>Log in to Exness and open the <strong style={{ color: '#E2EAE2' }}>live chat</strong> (bottom right).</li>
            <li>Type <strong style={{ color: '#E2EAE2' }}>Change Partner</strong> and press Enter.</li>
            <li>Open the link the chat sends you.</li>
            <li>Pick <strong style={{ color: '#E2EAE2' }}>Education</strong> as the reason, paste this link and tap <strong style={{ color: '#E2EAE2' }}>Submit</strong>:</li>
          </ol>
          <div style={{
            margin: '12px 0', background: 'rgba(3,9,5,0.76)', borderRadius: '8px',
            padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            border: '1px solid rgba(120,245,27,0.15)', fontSize: '0.8rem', color: '#9CFF4B',
          }}>
            <span>https://one.exnessonelink.com/a/kbewadzi0d</span>
            <button onClick={() => navigator.clipboard.writeText('https://one.exnessonelink.com/a/kbewadzi0d')} style={{
              padding: '4px 12px', borderRadius: '6px', fontSize: '0.74rem', fontWeight: 600,
              background: 'linear-gradient(135deg, #AAFF55 0%, #4FCB0A 100%)', color: '#071006',
              border: 'none', cursor: 'pointer',
            }}>Copy</button>
          </div>
          <ol start="5" style={{ paddingLeft: '18px', color: '#8A9B8D', fontSize: '0.85rem', lineHeight: 2 }}>
            <li>Wait for the confirmation email from Exness.</li>
            <li><strong style={{ color: '#E2EAE2' }}>Open a new real account</strong> and create it.</li>
          </ol>
          <div style={{ marginTop: '12px', fontSize: '0.82rem', color: '#8A9B8D' }}>
            Prefer to watch?{' '}
            <a href="https://youtu.be/rHS1JXZ_mEg" target="_blank" rel="noreferrer" style={{ color: '#9CFF4B', textDecoration: 'underline' }}>Video guide</a>
            {' '}or{' '}
            <a href="#" style={{ color: '#9CFF4B', textDecoration: 'underline' }}>picture guide</a>
          </div>
        </div>
      ),
    },
    {
      num: '2',
      title: 'Fund Your Account',
      sub: 'Keep $15 or more of your own money in it',
      content: (
        <div style={{ marginTop: '16px', color: '#8A9B8D', fontSize: '0.85rem', lineHeight: 1.9 }}>
          Deposit/transfer <strong style={{ color: '#E2EAE2' }}>$250</strong> for trading activity criteria.<br />
          Maintain <strong style={{ color: '#E2EAE2' }}>0.30+ total traded lot per week</strong>.
        </div>
      ),
    },
    {
      num: '3',
      title: 'Get Your VIP Access',
      sub: 'Submit on Discord or WhatsApp to unlock your VIP',
      content: (
        <div style={{ marginTop: '16px', color: '#8A9B8D', fontSize: '0.85rem', lineHeight: 1.9 }}>
          <p style={{ marginBottom: '16px' }}>After completing Steps 1 & 2, submit your details to gain VIP access via either:</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/00000000" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', borderRadius: '10px',
              fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.84rem',
              color: '#071006',
              background: 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
              border: '1px solid rgba(200,255,140,0.40)',
              boxShadow: '0 4px 14px rgba(82,216,11,0.25)',
              textDecoration: 'none', transition: 'all 0.2s ease',
            }}>💬 WhatsApp Support</a>
            <a href="https://discord.gg/forexstreet247" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', borderRadius: '10px',
              fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.84rem',
              color: '#E2EAE2', background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.12)',
              textDecoration: 'none', transition: 'all 0.2s ease',
            }}>Discord Support Ticket</a>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section style={{
      padding: isMobile ? '60px 24px' : '72px 64px',
      background: `radial-gradient(circle at 50% 0%, rgba(82,216,11,0.07), transparent 40%), #050A08`,
      borderTop: '1px solid rgba(120,245,27,0.08)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
            fontSize: isMobile ? '1.6rem' : '2rem',
            color: '#fff', letterSpacing: '-0.03em', marginBottom: '8px',
          }}>Unlock all of this in <span style={{ background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>3 simple steps</span> ↓</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: 'linear-gradient(145deg, rgba(120,245,27,0.03), rgba(255,255,255,0.008)), rgba(9,19,13,0.86)',
              border: `1px solid ${open === i ? 'rgba(120,245,27,0.35)' : 'rgba(120,245,27,0.10)'}`,
              borderRadius: '16px', overflow: 'hidden', transition: 'border-color 0.2s ease',
            }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '16px',
                padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                  background: open === i
                    ? 'linear-gradient(135deg, #AAFF55, #4FCB0A)'
                    : 'rgba(120,245,27,0.10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.9rem',
                  color: open === i ? '#071006' : '#9CFF4B',
                  transition: 'all 0.2s ease',
                }}>{step.num}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
                    fontSize: isMobile ? '0.95rem' : '1.05rem',
                    color: '#F5F3FF', letterSpacing: '-0.02em',
                  }}>{step.title}</div>
                  <div style={{ fontSize: '0.78rem', color: '#8A9B8D', marginTop: '3px' }}>{step.sub}</div>
                </div>
                <span style={{ color: '#9CFF4B', fontSize: '1rem', transition: 'transform 0.2s ease', transform: open === i ? 'rotate(180deg)' : 'none' }}>⌄</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 24px', borderTop: '1px solid rgba(120,245,27,0.08)' }}>
                  {step.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Alternative join - non Exness users */}
        <AlternativeJoin isMobile={isMobile} />

        {/* Need Help / WA button */}
        <div style={{
          marginTop: '32px',
          background: 'rgba(9,19,13,0.80)',
          border: '1px solid rgba(120,245,27,0.12)',
          borderRadius: '16px', padding: '24px 28px',
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between', gap: '16px',
        }}>
          <div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>Need help?</div>
            <div style={{ fontSize: '0.84rem', color: '#8A9B8D' }}>Our team helps with referral changes, VIP access and Zoom approval.</div>
          </div>
          <a href="https://wa.me/923172490120" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 24px', borderRadius: '10px',
            fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.88rem',
            color: '#071006',
            background: 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
            border: '1px solid rgba(200,255,140,0.40)',
            boxShadow: '0 6px 20px rgba(82,216,11,0.28)',
            textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(82,216,11,0.42)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(82,216,11,0.28)' }}
          >
            💬 Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Social Proof ─────────────────────────────────────────────────────────────
function SocialProof() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  return (
    <section style={{
      padding: isMobile ? '60px 24px' : '72px 64px',
      background: `radial-gradient(circle at 80% 50%, rgba(82,216,11,0.05), transparent 40%), #050A08`,
      borderTop: '1px solid rgba(120,245,27,0.08)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))',
            border: '1px solid rgba(120,245,27,0.25)', borderRadius: '6px',
            padding: '5px 14px', fontSize: '0.70rem', color: '#9CFF4B',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
          }}>VIP Trades, Posted Live</div>
          <h3 style={{
            fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
            fontSize: isMobile ? '1.4rem' : '1.8rem',
            color: '#fff', letterSpacing: '-0.03em',
          }}>Real Results from the Community</h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '20px',
        }}>
          <div style={{
            background: 'linear-gradient(145deg, rgba(120,245,27,0.03), rgba(255,255,255,0.008)), rgba(9,19,13,0.86)',
            border: '1px solid rgba(120,245,27,0.12)', borderRadius: '16px',
            overflow: 'hidden', transition: 'border-color 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.12)' }}
          >
            <img src="/src/assets/image 12.png" alt="VIP trades posted live" style={{ width: '100%', display: 'block', borderRadius: '16px 16px 0 0' }} />
            <div style={{ padding: '14px 18px', fontSize: '0.78rem', color: '#8A9B8D' }}>
              💚 VIP trade results shared live in the community
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(145deg, rgba(120,245,27,0.03), rgba(255,255,255,0.008)), rgba(9,19,13,0.86)',
            border: '1px solid rgba(120,245,27,0.12)', borderRadius: '16px',
            overflow: 'hidden', transition: 'border-color 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.12)' }}
          >
            <img src="/src/assets/image 13.png" alt="XAUUSD live trade result" style={{ width: '100%', display: 'block', borderRadius: '16px 16px 0 0' }} />
            <div style={{ padding: '14px 18px', fontSize: '0.78rem', color: '#8A9B8D' }}>
              🎯 XAUUSD +230 PIPS — shared 15 mins before NY open, executed on live session
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Stats bar ────────────────────────────────────────────────────────────────
function Stats() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  return (
    <section style={{
      padding: isMobile ? '40px 24px' : '48px 64px',
      background: 'rgba(8,19,12,0.72)',
      borderTop: '1px solid rgba(120,245,27,0.08)',
      borderBottom: '1px solid rgba(120,245,27,0.08)',
    }}>
      <div style={{
        maxWidth: '900px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
        gap: isMobile ? '28px' : '0',
        alignItems: 'center', justifyItems: 'center',
      }}>
        {[
          ['500+', 'Active Members'],
          ['84%', 'Signal Accuracy'],
          ['4 yrs', 'Market Experience'],
          ['Daily', 'Live Sessions'],
        ].map(([num, label]) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 800, color: '#9BFF4A', letterSpacing: '-0.045em', textShadow: '0 0 28px rgba(120,245,27,0.2)' }}>{num}</div>
            <div style={{ fontSize: '0.72rem', color: '#85849B', marginTop: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Social / Footer links ────────────────────────────────────────────────────
function SocialLinks() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const channels = [
    { icon: '📸', label: 'Instagram', sub: '@forexstreet247', href: 'http://instagram.com/forexstreet247' },
    { icon: '🎮', label: 'Discord Server', sub: '10k+ members', href: 'http://discord.gg/forexstreet247' },
    { icon: '▶️', label: 'YouTube', sub: 'Free sessions & live trading', href: 'https://www.youtube.com/@wallstreet247' },
    { icon: '💬', label: 'WhatsApp Channel', sub: 'Free market guidance & learning', href: '#' },
    { icon: '💬', label: 'WhatsApp Support', sub: 'Help from our team', href: 'https://wa.me/923172490120' },
  ]

  const cardBase = {
    background: 'rgba(9,19,13,0.80)',
    border: '1px solid rgba(120,245,27,0.10)',
    borderRadius: '14px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  }

  return (
    <section style={{
      padding: isMobile ? '60px 24px' : '72px 64px',
      background: `radial-gradient(circle at 15% 100%, rgba(82,216,11,0.04), transparent 30%), #07100B`,
      borderTop: '1px solid rgba(120,245,27,0.08)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h3 style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
          fontSize: isMobile ? '1.3rem' : '1.5rem',
          color: '#fff', marginBottom: '24px', letterSpacing: '-0.03em',
        }}>Stay close to the community</h3>

        {/* Channel links grid */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '10px' }}>
          {channels.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              style={{ ...cardBase, display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.35)'; e.currentTarget.style.background = 'rgba(9,19,13,0.95)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(120,245,27,0.10)'; e.currentTarget.style.background = 'rgba(9,19,13,0.80)' }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                background: 'linear-gradient(135deg, rgba(82,216,11,0.15), rgba(120,245,27,0.035))',
                border: '1px solid rgba(120,245,27,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              }}>{l.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: '#F5F3FF' }}>{l.label}</div>
                <div style={{ fontSize: '0.70rem', color: '#8A9B8D', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{l.sub}</div>
              </div>
              <span style={{ color: '#9CFF4B', fontSize: '0.8rem', flexShrink: 0 }}>→</span>
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{
          marginTop: '40px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          fontSize: '0.72rem',
          color: '#5A6B5D',
          lineHeight: 1.7,
        }}>
          <strong style={{ color: '#6B7D6E' }}>Disclaimer:</strong> ForexStreet247 is an educational tool. It is not a trading platform or a financial advisor. All market analysis, live trades and insights are for educational and informational purposes only. Trading Forex, CFDs, cryptocurrencies and Indian F&O involves risk, and the value of your trades can go down as well as up. Please trade responsibly and only with funds you are comfortable putting at risk. Past results do not guarantee future results.
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />

      {/* Fixed floating stars — always visible across whole page */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99 }}>
        {[
          { top: '3%',  left: '8%',   size: 2,   dur: 3.2, del: 0 },
          { top: '7%',  left: '75%',  size: 1.5, dur: 2.8, del: 0.6 },
          { top: '12%', left: '45%',  size: 2.5, dur: 3.5, del: 1.1 },
          { top: '16%', left: '88%',  size: 1.5, dur: 2.5, del: 0.3 },
          { top: '20%', left: '15%',  size: 2,   dur: 4.0, del: 0.9 },
          { top: '24%', left: '62%',  size: 1,   dur: 3.1, del: 1.4 },
          { top: '28%', left: '33%',  size: 2,   dur: 2.9, del: 0.5 },
          { top: '32%', left: '92%',  size: 1.5, dur: 3.6, del: 0.2 },
          { top: '36%', left: '22%',  size: 2.5, dur: 2.7, del: 1.6 },
          { top: '40%', left: '55%',  size: 1,   dur: 3.3, del: 0.8 },
          { top: '44%', left: '78%',  size: 2,   dur: 2.6, del: 1.2 },
          { top: '48%', left: '40%',  size: 1.5, dur: 3.8, del: 0.4 },
          { top: '52%', left: '28%',  size: 1,   dur: 3.0, del: 1.7 },
          { top: '56%', left: '5%',   size: 2,   dur: 2.4, del: 0.7 },
          { top: '60%', left: '95%',  size: 1.5, dur: 3.4, del: 1.3 },
          { top: '64%', left: '12%',  size: 1,   dur: 2.8, del: 0.1 },
          { top: '68%', left: '70%',  size: 2.5, dur: 3.7, del: 1.0 },
          { top: '72%', left: '52%',  size: 1.5, dur: 2.3, del: 1.5 },
          { top: '76%', left: '35%',  size: 2,   dur: 3.2, del: 0.8 },
          { top: '80%', left: '82%',  size: 1,   dur: 2.9, del: 0.4 },
          { top: '84%', left: '18%',  size: 2.5, dur: 3.5, del: 1.2 },
          { top: '88%', left: '60%',  size: 1.5, dur: 2.6, del: 0.6 },
          { top: '92%', left: '42%',  size: 1,   dur: 4.0, del: 1.8 },
          { top: '96%', left: '90%',  size: 2,   dur: 3.1, del: 0.3 },
          { top: '9%',  left: '30%',  size: 1.5, dur: 2.7, del: 1.4 },
          { top: '19%', left: '50%',  size: 1,   dur: 3.3, del: 0.9 },
          { top: '37%', left: '68%',  size: 2,   dur: 2.5, del: 1.6 },
          { top: '53%', left: '85%',  size: 1.5, dur: 3.6, del: 0.5 },
          { top: '65%', left: '25%',  size: 2.5, dur: 2.8, del: 1.1 },
          { top: '77%', left: '48%',  size: 1,   dur: 3.9, del: 0.2 },
          { top: '14%', left: '97%',  size: 2,   dur: 2.4, del: 1.3 },
          { top: '45%', left: '15%',  size: 1.5, dur: 3.2, del: 0.7 },
          { top: '58%', left: '58%',  size: 2,   dur: 2.7, del: 1.5 },
          { top: '82%', left: '3%',   size: 1,   dur: 3.4, del: 0.3 },
          { top: '25%', left: '77%',  size: 2.5, dur: 2.6, del: 1.0 },
          { top: '6%',  left: '38%',  size: 1,   dur: 3.1, del: 0.5 },
          { top: '11%', left: '83%',  size: 2,   dur: 2.9, del: 1.3 },
          { top: '17%', left: '57%',  size: 1.5, dur: 3.6, del: 0.8 },
          { top: '22%', left: '4%',   size: 2.5, dur: 2.4, del: 1.6 },
          { top: '31%', left: '72%',  size: 1,   dur: 3.8, del: 0.2 },
          { top: '39%', left: '47%',  size: 2,   dur: 2.7, del: 1.1 },
          { top: '50%', left: '93%',  size: 1.5, dur: 3.3, del: 0.6 },
          { top: '61%', left: '19%',  size: 1,   dur: 2.5, del: 1.4 },
          { top: '70%', left: '64%',  size: 2.5, dur: 3.7, del: 0.9 },
          { top: '79%', left: '36%',  size: 1.5, dur: 2.8, del: 0.4 },
          { top: '87%', left: '74%',  size: 2,   dur: 3.2, del: 1.7 },
          { top: '94%', left: '22%',  size: 1,   dur: 2.6, del: 0.3 },
          { top: '4%',  left: '65%',  size: 2,   dur: 3.5, del: 1.2 },
          { top: '43%', left: '8%',   size: 1.5, dur: 2.3, del: 0.7 },
          { top: '73%', left: '89%',  size: 1,   dur: 4.0, del: 1.5 },
          { top: '55%', left: '43%',  size: 2.5, dur: 3.0, del: 0.1 },
          { top: '33%', left: '98%',  size: 1,   dur: 2.7, del: 1.9 },
          { top: '89%', left: '51%',  size: 2,   dur: 3.4, del: 0.6 },
          { top: '15%', left: '21%',  size: 1.5, dur: 2.9, del: 1.0 },
          { top: '2%',  left: '44%',  size: 1,   dur: 3.2, del: 0.4 },
          { top: '8%',  left: '67%',  size: 2,   dur: 2.7, del: 1.1 },
          { top: '13%', left: '11%',  size: 1.5, dur: 3.5, del: 0.8 },
          { top: '19%', left: '89%',  size: 1,   dur: 2.4, del: 1.5 },
          { top: '26%', left: '34%',  size: 2.5, dur: 3.8, del: 0.3 },
          { top: '30%', left: '56%',  size: 1,   dur: 2.6, del: 1.7 },
          { top: '34%', left: '79%',  size: 2,   dur: 3.1, del: 0.6 },
          { top: '41%', left: '23%',  size: 1.5, dur: 2.8, del: 1.2 },
          { top: '46%', left: '61%',  size: 1,   dur: 3.6, del: 0.1 },
          { top: '51%', left: '37%',  size: 2.5, dur: 2.3, del: 1.8 },
          { top: '57%', left: '84%',  size: 1,   dur: 3.9, del: 0.5 },
          { top: '62%', left: '14%',  size: 2,   dur: 2.7, del: 1.3 },
          { top: '67%', left: '49%',  size: 1.5, dur: 3.3, del: 0.7 },
          { top: '74%', left: '76%',  size: 1,   dur: 2.5, del: 1.6 },
          { top: '78%', left: '28%',  size: 2,   dur: 3.7, del: 0.2 },
          { top: '83%', left: '62%',  size: 1.5, dur: 2.9, del: 1.4 },
          { top: '91%', left: '7%',   size: 2.5, dur: 3.4, del: 0.9 },
          { top: '95%', left: '44%',  size: 1,   dur: 2.6, del: 0.4 },
          { top: '5%',  left: '91%',  size: 2,   dur: 3.0, del: 1.1 },
          { top: '21%', left: '42%',  size: 1,   dur: 2.4, del: 0.6 },
          { top: '38%', left: '17%',  size: 1.5, dur: 3.6, del: 1.3 },
          { top: '54%', left: '73%',  size: 2,   dur: 2.8, del: 0.2 },
          { top: '69%', left: '31%',  size: 1,   dur: 3.2, del: 1.7 },
          { top: '85%', left: '86%',  size: 2.5, dur: 2.5, del: 0.8 },
          { top: '10%', left: '53%',  size: 1.5, dur: 3.9, del: 1.5 },
          { top: '29%', left: '96%',  size: 1,   dur: 2.7, del: 0.3 },
          { top: '47%', left: '26%',  size: 2,   dur: 3.4, del: 1.0 },
          { top: '66%', left: '59%',  size: 1.5, dur: 2.3, del: 0.5 },
          { top: '90%', left: '39%',  size: 1,   dur: 3.7, del: 1.9 },
          { top: '16%', left: '72%',  size: 2.5, dur: 2.6, del: 0.7 },
          { top: '35%', left: '6%',   size: 1,   dur: 3.1, del: 1.2 },
          { top: '59%', left: '88%',  size: 2,   dur: 2.9, del: 0.4 },
          { top: '76%', left: '16%',  size: 1.5, dur: 3.5, del: 1.6 },
          { top: '93%', left: '67%',  size: 1,   dur: 2.4, del: 0.1 },
        ].map((s, i) => (
          <div key={i} style={{
            position: 'absolute', top: s.top, left: s.left,
            width: `${s.size}px`, height: `${s.size}px`,
            borderRadius: '50%', background: '#fff',
            animation: `starFloat ${s.dur}s ease-in-out ${s.del}s infinite alternate`,
            boxShadow: `0 0 ${s.size * 3}px rgba(255,255,255,0.9)`,
          }} />
        ))}
        <style>{`
          @keyframes starFloat {
            from { transform: translateY(0px); opacity: 0.35; }
            to   { transform: translateY(-8px); opacity: 0.95; }
          }
        `}</style>
      </div>

      {/* Fixed histogram bars — always at bottom of viewport */}
      <svg style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        width: '100%', height: '260px',
        pointerEvents: 'none', zIndex: 0, opacity: 0.07,
      }} viewBox="0 0 1440 260" preserveAspectRatio="none">
        {[
          { h: 130, w: 55 }, { h: 210, w: 42 }, { h: 115, w: 70 }, { h: 240, w: 38 },
          { h: 160, w: 65 }, { h: 220, w: 42 }, { h: 130, w: 80 }, { h: 250, w: 38 },
          { h: 170, w: 55 }, { h: 190, w: 48 }, { h: 120, w: 75 }, { h: 230, w: 38 },
          { h: 145, w: 62 }, { h: 200, w: 42 }, { h: 135, w: 58 }, { h: 175, w: 72 },
          { h: 215, w: 38 }, { h: 150, w: 60 }, { h: 240, w: 42 }, { h: 165, w: 68 },
        ].reduce((acc, bar, i, arr) => {
          const totalW = arr.reduce((s, b) => s + b.w, 0)
          const totalGap = 1440 - totalW
          const gap = totalGap / (arr.length - 1)
          const x = arr.slice(0, i).reduce((s, b) => s + b.w + gap, 0)
          acc.push(<rect key={i} x={x} y={260 - bar.h} width={bar.w} height={bar.h} fill="rgba(120,245,27,1)" rx="4" />)
          return acc
        }, [])}
      </svg>

      <Hero />
      <Ticker />
      <Stats />
      <Steps />
      <SocialProof />
      <SocialLinks />
      <Footer />
    </main>
  )
}