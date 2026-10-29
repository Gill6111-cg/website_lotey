import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, ExternalLink, Mail } from 'lucide-react'
import { BUSINESS, SERVICES } from '../config/business'

export default function Footer() {
  const year = new Date().getFullYear()
  const enabledServices = SERVICES.filter(s => s.enabled)

  return (
    <footer style={{
      background: '#0d1017',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '64px 24px 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 18, color: '#fff',
              }}>LA</div>
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 17, color: '#f1f5f9' }}>{BUSINESS.name}</span>
            </Link>
            <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              {BUSINESS.description}
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: 12 }}>
              {BUSINESS.social.instagram && (
                <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  style={socialIconStyle}><ExternalLink size={18} /></a>
              )}
              {BUSINESS.social.facebook && (
                <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  style={socialIconStyle}><ExternalLink size={18} /></a>
              )}
              {BUSINESS.social.youtube && (
                <a href={BUSINESS.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                  style={socialIconStyle}><ExternalLink size={18} /></a>
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 style={footerHeading}>Navigation</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About Us'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to} style={{ marginBottom: 10 }}>
                  <Link to={to} style={footerLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={footerHeading}>Our Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {enabledServices.map(s => (
                <li key={s.id} style={{ marginBottom: 10 }}>
                  <Link to="/services" style={footerLink}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={footerHeading}>Get In Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href={`tel:${BUSINESS.phone}`} style={{ ...footerLink, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Phone size={15} style={{ flexShrink: 0, marginTop: 2, color: '#2563EB' }} />
                <span>{BUSINESS.phoneDisplay}</span>
              </a>
              {BUSINESS.email && (
                <a href={`mailto:${BUSINESS.email}`} style={{ ...footerLink, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <Mail size={15} style={{ flexShrink: 0, marginTop: 2, color: '#2563EB' }} />
                  <span>{BUSINESS.email}</span>
                </a>
              )}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#64748b', fontSize: 14 }}>
                <MapPin size={15} style={{ flexShrink: 0, marginTop: 2, color: '#2563EB' }} />
                <span>{BUSINESS.address}, {BUSINESS.city}, {BUSINESS.state} – {BUSINESS.pincode}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#64748b', fontSize: 14 }}>
                <Clock size={15} style={{ flexShrink: 0, marginTop: 2, color: '#2563EB' }} />
                <div>
                  {BUSINESS.hours.map(h => (
                    <div key={h.day}>{h.day}: <span style={{ color: '#94a3b8' }}>{h.time}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          display: 'flex', flexWrap: 'wrap', gap: 12,
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <p style={{ color: '#475569', fontSize: 13, margin: 0 }}>
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p style={{ color: '#334155', fontSize: 13, margin: 0 }}>
            {BUSINESS.city}, {BUSINESS.state}
          </p>
        </div>
      </div>
    </footer>
  )
}

const footerHeading = {
  fontFamily: "'Sora',sans-serif",
  fontWeight: 600, fontSize: 15,
  color: '#f1f5f9', marginBottom: 20, marginTop: 0,
  letterSpacing: '0.01em',
}

const footerLink = {
  color: '#64748b', textDecoration: 'none', fontSize: 14,
  transition: 'color 0.2s',
  lineHeight: 1.5,
}

const socialIconStyle = {
  width: 36, height: 36, borderRadius: 8,
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.08)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#64748b', textDecoration: 'none',
  transition: 'background 0.2s, color 0.2s',
}
