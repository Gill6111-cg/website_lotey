import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Navigation, MessageCircle } from 'lucide-react'
import { BUSINESS } from '../config/business'

export default function ContactSection() {
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi! I have a question about your services.')}`

  return (
    <section className="section" style={{ background: '#111318' }} aria-labelledby="contact-heading">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Contact Us</p>
          <h2 id="contact-heading" style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#f1f5f9', marginBottom: 16 }}>
            Find Us & Get in Touch
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            We're easy to reach. Drop by the workshop, call us, or send a WhatsApp message.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={contactCard}
          >
            <div style={iconBox}><MapPin size={22} color="#38BDF8" /></div>
            <h3 style={cardTitle}>Our Location</h3>
            <p style={cardText}>{BUSINESS.address}</p>
            <p style={{ ...cardText, marginTop: 4 }}>{BUSINESS.city}, {BUSINESS.state} – {BUSINESS.pincode}</p>
            {BUSINESS.mapsLink && (
              <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer"
                style={linkStyle} id="directions-link"
              ><Navigation size={14} /> Get Directions</a>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={contactCard}
          >
            <div style={iconBox}><Phone size={22} color="#38BDF8" /></div>
            <h3 style={cardTitle}>Call or WhatsApp</h3>
            <p style={cardText}>{BUSINESS.phoneDisplay}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
              <a href={`tel:${BUSINESS.phone}`}
                style={{ ...linkBtn, background: 'rgba(37,99,235,0.12)', borderColor: 'rgba(37,99,235,0.3)', color: '#38BDF8' }}
                id="contact-call-btn"
              ><Phone size={14} /> Call Now</a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                style={{ ...linkBtn, background: 'rgba(37,211,102,0.08)', borderColor: 'rgba(37,211,102,0.2)', color: '#25D366' }}
                id="contact-whatsapp-btn"
              ><MessageCircle size={14} /> WhatsApp</a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            style={contactCard}
          >
            <div style={iconBox}><Clock size={22} color="#38BDF8" /></div>
            <h3 style={cardTitle}>Business Hours</h3>
            {BUSINESS.hours.map(h => (
              <div key={h.day} style={{ marginBottom: 12 }}>
                <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: 13 }}>{h.day}</div>
                <div style={{ color: '#f1f5f9', fontSize: 15, marginTop: 2 }}>{h.time}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const contactCard = {
  background: '#181c24',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 20, padding: 28,
}
const iconBox = {
  width: 52, height: 52, borderRadius: 14,
  background: 'rgba(37,99,235,0.12)',
  border: '1px solid rgba(37,99,235,0.2)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  marginBottom: 20,
}
const cardTitle = {
  fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 18,
  color: '#f1f5f9', marginBottom: 10, marginTop: 0,
}
const cardText = { color: '#64748b', fontSize: 15, lineHeight: 1.6, margin: 0 }
const linkStyle = {
  display: 'inline-flex', alignItems: 'center', gap: 6,
  color: '#38BDF8', textDecoration: 'none', fontWeight: 600, fontSize: 14, marginTop: 14,
}
const linkBtn = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  padding: '10px 16px', borderRadius: 10, border: '1px solid',
  fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s',
}
