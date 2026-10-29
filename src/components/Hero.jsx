import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { BUSINESS } from '../config/business'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        overflow: 'hidden',
      }}
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1618843479619-f3d0d81e4d10?w=1600&q=85')",
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.35)',
        zIndex: 0,
      }} aria-hidden="true" />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(17,19,24,0.9) 40%, rgba(37,99,235,0.15) 100%)',
        zIndex: 1,
      }} aria-hidden="true" />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px',
        width: '100%',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(37,99,235,0.15)',
            border: '1px solid rgba(37,99,235,0.4)',
            borderRadius: 100, padding: '6px 16px',
            marginBottom: 28,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#38BDF8' }} />
            <span style={{ color: '#38BDF8', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Premium Automotive Services
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 800, lineHeight: 1.08,
            color: '#f8fafc', marginBottom: 24,
            letterSpacing: '-0.03em',
            maxWidth: 800,
          }}>
            Your Car<br />
            <span style={{ background: 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Deserves the Best.
            </span>
          </h1>

          {/* Sub */}
          <p style={{
            color: '#94a3b8', fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7, maxWidth: 560, marginBottom: 40,
          }}>
            Expert repair, professional detailing, and thorough maintenance — all under one roof at {BUSINESS.name}, {BUSINESS.city}.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link
              to="/contact#booking"
              id="hero-book-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg, #2563EB, #1d4ed8)',
                color: '#fff', padding: '14px 28px', borderRadius: 12,
                textDecoration: 'none', fontWeight: 700, fontSize: 16,
                boxShadow: '0 0 30px rgba(37,99,235,0.5)',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
            >
              Book Your Service <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              id="hero-services-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#f1f5f9', padding: '14px 28px', borderRadius: 12,
                textDecoration: 'none', fontWeight: 600, fontSize: 16,
                transition: 'background 0.2s',
              }}
            >
              Explore Our Services
            </Link>
          </div>

          {/* Quick info strip */}
          <div style={{
            marginTop: 60, display: 'flex', flexWrap: 'wrap', gap: 32,
          }}>
            {[
              { label: 'Location', value: BUSINESS.city },
              { label: 'Hours', value: BUSINESS.hours[0].time },
              { label: 'Contact', value: BUSINESS.phoneDisplay },
            ].map(item => (
              <div key={item.label}>
                <div style={{ color: '#475569', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>
                  {item.label}
                </div>
                <div style={{ color: '#cbd5e1', fontSize: 15, fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>


    </section>
  )
}
