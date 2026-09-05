import { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

export default function EnrollForm() {
  const [service, setService] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const width = useWindowSize()
  const isMobile = width < 768

  const handleSubmit = () => {
    if (!name || !phone || !service) { alert('Please fill in all fields.'); return }
    const message = `New Enrollment Request%0AName: ${name}%0AWhatsApp: ${phone}%0AService: ${service}`
    window.open(`https://wa.me/923000000000?text=${message}`, '_blank')
  }

  const inputStyle = {
    width: '100%', background: 'rgba(3,9,5,0.76)',
    border: '1px solid rgba(255,255,255,0.09)', borderRadius: '10px',
    padding: '12px 16px', color: '#F4F8F3',
    fontFamily: 'Inter, sans-serif', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s ease',
  }

  const labelStyle = {
    fontSize: '0.75rem', color: '#8A9B8D', fontWeight: 500,
    letterSpacing: '0.06em', textTransform: 'uppercase',
    display: 'block', marginBottom: '7px',
  }

  return (
    <section id="enroll" style={{
      scrollMarginTop: '64px',
      padding: isMobile ? '80px 24px' : '110px 64px',
      background: `radial-gradient(circle at 50% 0%, rgba(82,216,11,0.095), transparent 38%), rgba(8,17,11,0.94)`,
      borderTop: '1px solid rgba(120,245,27,0.08)',
    }}>
      <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(88,220,14,0.12), rgba(120,245,27,0.035))',
          border: '1px solid rgba(120,245,27,0.25)', borderRadius: '6px',
          padding: '5px 14px', fontSize: '0.72rem', color: '#9CFF4B',
          fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px',
        }}>Get Access</div>
        <h2 style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: 800,
          fontSize: isMobile ? '1.8rem' : 'clamp(1.9rem, 4vw, 2.6rem)',
          color: '#fff', letterSpacing: '-0.043em', marginBottom: '12px',
        }}>
          Ready to{' '}
          <span style={{
            background: 'linear-gradient(90deg, #B6FF6A 0%, #83F52C 45%, #56D70D 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Start?</span>
        </h2>
        <p style={{ color: '#8A9B8D', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '40px' }}>
          Fill in your details — payment instructions appear after.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
          <div>
            <label style={labelStyle}>Full Name</label>
            <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(120,245,27,0.60)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.09)' }} />
          </div>
          <div>
            <label style={labelStyle}>WhatsApp Number</label>
            <input type="text" placeholder="+92 300 0000000" value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(120,245,27,0.60)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.09)' }} />
          </div>
          <div>
            <label style={labelStyle}>Select Service</label>
            <select value={service} onChange={e => setService(e.target.value)}
              style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
              onFocus={e => { e.target.style.borderColor = 'rgba(120,245,27,0.60)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.09)' }}>
              <option value="">Choose a plan</option>
              <option value="Discord Premium">Discord Premium</option>
              <option value="1-on-1 Mentorship">1-on-1 Mentorship</option>
            </select>
          </div>

          {service && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(82,216,11,0.10), rgba(120,245,27,0.025))',
              border: '1px solid rgba(120,245,27,0.17)', borderRadius: '10px',
              padding: '18px 20px', fontSize: '0.85rem', color: '#F4F8F3', lineHeight: 1.7, textAlign: 'left',
            }}>
              <span style={{ color: '#9CFF4B', fontWeight: 600 }}>Payment Details</span><br /><br />
              Send payment to:<br />
              <span style={{ color: '#9CFF4B', fontWeight: 600 }}>JazzCash / Easypaisa: 03XX-XXXXXXX</span>
              <br /><br />
              After payment, submit this form and send your screenshot directly on WhatsApp. We will verify and add you within 24 hours.
            </div>
          )}

          <button onClick={handleSubmit} style={{
            width: '100%', padding: '15px', borderRadius: '12px',
            fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.95rem',
            color: '#071006',
            background: 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
            border: '1px solid rgba(200,255,140,0.40)', boxShadow: '0 8px 28px rgba(82,216,11,0.25)',
            cursor: 'pointer', marginTop: '6px', transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(82,216,11,0.38)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(82,216,11,0.25)' }}
          >Submit Enrollment {'→'}</button>
        </div>
      </div>
    </section>
  )
}