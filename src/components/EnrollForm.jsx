import { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import AnimateOnScroll from './AnimateOnScroll'

export default function EnrollForm() {
  const [service, setService] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')
  const width = useWindowSize()
  const isMobile = width < 768

  const handleSubmit = async () => {
    setError('')

    if (!name.trim()) { setError('Please enter your full name.'); return }

    const phoneClean = phone.replace(/\s+/g, '').replace(/-/g, '')
    const phoneValid = /^(\+92|92|0)3[0-9]{9}$/.test(phoneClean)
    if (!phoneClean) { setError('Please enter your WhatsApp number.'); return }
    if (!phoneValid) { setError('Please enter a valid Pakistani WhatsApp number (e.g. 03XX-XXXXXXX).'); return }
    if (!service) { setError('Please select a service.'); return }

    setStatus('loading')

    // Send email via Web3Forms
    const formData = new FormData()
    formData.append('access_key', '3ab62d81-13c5-4c3f-a537-27c9f923996a')
    formData.append('subject', `New Enrollment — ${service}`)
    formData.append('message',
      `New enrollment received.\n\nName: ${name}\nWhatsApp: ${phone}\nService: ${service}\n\nPlease verify payment and add the student.`
    )

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
    } catch {
      // silently continue even if email fails
    }

    setStatus('idle')
    setName('')
    setPhone('')
    setService('')
    setError('')

    // Open WhatsApp with pre-filled message
    const message = `New Enrollment Request%0A%0AName: ${encodeURIComponent(name)}%0AWhatsApp: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}`
    window.open(`https://wa.me/923172490120?text=${message}`, '_blank')
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
      <AnimateOnScroll>
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
            <input type="text" placeholder="Your name" value={name}
              onChange={e => setName(e.target.value)} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'rgba(120,245,27,0.60)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.09)' }} />
          </div>

          <div>
            <label style={labelStyle}>WhatsApp Number</label>
            <input type="text" placeholder="03XX-XXXXXXX" value={phone}
              onChange={e => setPhone(e.target.value)} style={inputStyle}
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
              padding: '18px 20px', fontSize: '0.85rem', color: '#F4F8F3', lineHeight: 1.7,
            }}>
              <span style={{ color: '#9CFF4B', fontWeight: 600 }}>Payment Details</span>
              <br /><br />
              Send payment to:<br />
              <span style={{ color: '#9CFF4B', fontWeight: 600 }}>JazzCash / Easypaisa: 03XX-XXXXXXX</span>
              <br /><br />
              After submitting, you will be redirected to WhatsApp to send your payment screenshot directly.
            </div>
          )}

          {error && (
            <div style={{
              background: 'rgba(255,60,60,0.08)',
              border: '1px solid rgba(255,60,60,0.25)',
              borderRadius: '10px', padding: '14px 18px',
              fontSize: '0.85rem', color: '#FF8080', textAlign: 'center',
            }}>{error}</div>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            style={{
              width: '100%', padding: '15px', borderRadius: '12px',
              fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.95rem',
              color: '#071006',
              background: status === 'loading'
                ? 'rgba(82,216,11,0.5)'
                : 'linear-gradient(135deg, #AAFF55 0%, #6EE815 60%, #4FCB0A 100%)',
              border: '1px solid rgba(200,255,140,0.40)',
              boxShadow: '0 8px 28px rgba(82,216,11,0.25)',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              marginTop: '6px', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              if (status !== 'loading') {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(82,216,11,0.38)'
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(82,216,11,0.25)'
            }}
          >
            {status === 'loading' ? 'Submitting...' : 'Submit Enrollment →'}
          </button>

        </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}