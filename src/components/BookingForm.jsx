import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { BUSINESS, SERVICES } from '../config/business'

const INITIAL = {
  name: '', phone: '', car: '', service: '', date: '', message: '',
}

function buildWhatsAppMessage(data) {
  return `Hello! I'd like to book a service at ${BUSINESS.name}.

*Name:* ${data.name}
*Phone:* ${data.phone}
*Car:* ${data.car}
*Service Required:* ${data.service}
*Preferred Date:* ${data.date}${data.message ? `\n*Additional Notes:* ${data.message}` : ''}

Please confirm my appointment. Thank you!`
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!/^[0-9+\- ]{7,15}$/.test(form.phone.trim())) errors.phone = 'Enter a valid phone number.'
  if (!form.car.trim()) errors.car = 'Please enter your car make/model.'
  if (!form.service) errors.service = 'Please select a service.'
  if (!form.date) errors.date = 'Please choose a preferred date.'
  return errors
}

export default function BookingForm() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    const msg = buildWhatsAppMessage(form)
    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('success')
  }

  const enabledServices = SERVICES.filter(s => s.enabled)

  const inputStyle = hasError => ({
    width: '100%', background: '#111318',
    border: `1px solid ${hasError ? '#ef4444' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 10, padding: '12px 16px',
    color: '#f1f5f9', fontSize: 15, outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: "'Inter', sans-serif",
    boxSizing: 'border-box',
  })

  const labelStyle = { display: 'block', color: '#94a3b8', fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: '0.02em' }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section
      id="booking"
      className="section"
      style={{ background: '#0d1017' }}
      aria-labelledby="booking-heading"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>

          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Book a Service</p>
            <h2 id="booking-heading" style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#f1f5f9', marginBottom: 16, lineHeight: 1.15 }}>
              Ready to Give Your Car Expert Attention?
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
              Fill out the form and we'll open a WhatsApp chat with your details pre-filled. Or call us directly to speak with our team.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href={`tel:${BUSINESS.phone}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'rgba(37,99,235,0.08)',
                  border: '1px solid rgba(37,99,235,0.25)',
                  borderRadius: 12, padding: '16px 20px',
                  textDecoration: 'none', color: '#f1f5f9',
                  transition: 'background 0.2s',
                }}
                id="booking-call-btn"
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={18} color="#38BDF8" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#64748b', marginBottom: 2 }}>Call us directly</div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{BUSINESS.phoneDisplay}</div>
                </div>
              </a>

              <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'rgba(37,211,102,0.08)',
                  border: '1px solid rgba(37,211,102,0.2)',
                  borderRadius: 12, padding: '16px 20px',
                  textDecoration: 'none', color: '#f1f5f9',
                  transition: 'background 0.2s',
                }}
                id="booking-whatsapp-btn"
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(37,211,102,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageCircle size={18} color="#25D366" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#64748b', marginBottom: 2 }}>Chat on WhatsApp</div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>Send us a message</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === 'success' ? (
              <div style={{
                background: 'rgba(37,99,235,0.08)',
                border: '1px solid rgba(37,211,102,0.3)',
                borderRadius: 16, padding: 36, textAlign: 'center',
              }}>
                <CheckCircle size={48} color="#25D366" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: "'Sora',sans-serif", color: '#f1f5f9', fontSize: 22, marginBottom: 12 }}>WhatsApp Opened!</h3>
                <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                  Your booking details have been pre-filled in WhatsApp. Please send the message to complete your enquiry. We will confirm your slot shortly.
                </p>
                <button onClick={() => { setForm(INITIAL); setStatus('idle') }}
                  style={{
                    background: 'linear-gradient(135deg,#2563EB,#1d4ed8)',
                    color: '#fff', border: 'none', borderRadius: 10, padding: '12px 24px',
                    fontWeight: 600, fontSize: 15, cursor: 'pointer',
                  }}>Book Another Service</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate
                style={{
                  background: '#181c24', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20, padding: '32px',
                }}
                aria-label="Service booking form"
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 20px' }}>
                  {/* Name */}
                  <div style={{ gridColumn: 'span 1' }}>
                    <label htmlFor="bk-name" style={labelStyle}>Full Name *</label>
                    <input id="bk-name" type="text" autoComplete="name" placeholder="Your name"
                      value={form.name} onChange={set('name')}
                      style={inputStyle(errors.name)}
                      aria-describedby={errors.name ? 'bk-name-err' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p id="bk-name-err" role="alert" style={errStyle}><AlertCircle size={13} />{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div style={{ gridColumn: 'span 1' }}>
                    <label htmlFor="bk-phone" style={labelStyle}>Phone Number *</label>
                    <input id="bk-phone" type="tel" autoComplete="tel" placeholder="+91 XXXXX XXXXX"
                      value={form.phone} onChange={set('phone')}
                      style={inputStyle(errors.phone)}
                      aria-describedby={errors.phone ? 'bk-phone-err' : undefined}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <p id="bk-phone-err" role="alert" style={errStyle}><AlertCircle size={13} />{errors.phone}</p>}
                  </div>

                  {/* Car */}
                  <div style={{ gridColumn: '1/-1' }}>
                    <label htmlFor="bk-car" style={labelStyle}>Car Make & Model *</label>
                    <input id="bk-car" type="text" placeholder="e.g. Maruti Swift 2020"
                      value={form.car} onChange={set('car')}
                      style={inputStyle(errors.car)}
                      aria-describedby={errors.car ? 'bk-car-err' : undefined}
                      aria-invalid={!!errors.car}
                    />
                    {errors.car && <p id="bk-car-err" role="alert" style={errStyle}><AlertCircle size={13} />{errors.car}</p>}
                  </div>

                  {/* Service */}
                  <div style={{ gridColumn: 'span 1' }}>
                    <label htmlFor="bk-service" style={labelStyle}>Service Required *</label>
                    <select id="bk-service"
                      value={form.service} onChange={set('service')}
                      style={{ ...inputStyle(errors.service), cursor: 'pointer' }}
                      aria-describedby={errors.service ? 'bk-service-err' : undefined}
                      aria-invalid={!!errors.service}
                    >
                      <option value="">Select a service</option>
                      {enabledServices.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Other / Not Listed">Other / Not Listed</option>
                    </select>
                    {errors.service && <p id="bk-service-err" role="alert" style={errStyle}><AlertCircle size={13} />{errors.service}</p>}
                  </div>

                  {/* Date */}
                  <div style={{ gridColumn: 'span 1' }}>
                    <label htmlFor="bk-date" style={labelStyle}>Preferred Date *</label>
                    <input id="bk-date" type="date" min={today}
                      value={form.date} onChange={set('date')}
                      style={{ ...inputStyle(errors.date), colorScheme: 'dark' }}
                      aria-describedby={errors.date ? 'bk-date-err' : undefined}
                      aria-invalid={!!errors.date}
                    />
                    {errors.date && <p id="bk-date-err" role="alert" style={errStyle}><AlertCircle size={13} />{errors.date}</p>}
                  </div>

                  {/* Message */}
                  <div style={{ gridColumn: '1/-1' }}>
                    <label htmlFor="bk-message" style={labelStyle}>Additional Notes (optional)</label>
                    <textarea id="bk-message" rows={3} placeholder="Any specific requirements or details about your vehicle..."
                      value={form.message} onChange={set('message')}
                      style={{ ...inputStyle(false), resize: 'vertical', minHeight: 80 }}
                    />
                  </div>
                </div>

                <p style={{ color: '#475569', fontSize: 12, lineHeight: 1.6, margin: '16px 0', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                  <AlertCircle size={13} style={{ flexShrink: 0, marginTop: 2, color: '#64748b' }} />
                  Submitting this form will open WhatsApp with your details pre-filled. Your booking is not automatically confirmed — it is confirmed once our team responds.
                </p>

                <button type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg,#2563EB,#1d4ed8)',
                    color: '#fff', border: 'none', borderRadius: 12,
                    padding: '14px', fontWeight: 700, fontSize: 16,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    boxShadow: '0 0 24px rgba(37,99,235,0.4)',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    fontFamily: "'Sora',sans-serif",
                  }}
                  id="booking-submit-btn"
                >
                  <MessageCircle size={18} /> Book via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const errStyle = {
  display: 'flex', alignItems: 'center', gap: 6,
  color: '#ef4444', fontSize: 12, margin: '6px 0 0', padding: 0,
}
