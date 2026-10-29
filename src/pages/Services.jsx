import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import ServiceGrid from '../components/ServiceGrid'
import BookingForm from '../components/BookingForm'
import { BUSINESS } from '../config/business'

export default function Services() {
  useEffect(() => { document.title = `Our Services — ${BUSINESS.name}` }, [])
  return (
    <PageWrapper>

      {/* Page header */}
      <div style={{
        paddingTop: 120, paddingBottom: 64, paddingLeft: 24, paddingRight: 24,
        background: `linear-gradient(180deg, #0d1017 0%, #111318 100%)`,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
      }}>
        <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>What We Offer</p>
        <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#f1f5f9', marginBottom: 16, letterSpacing: '-0.03em' }}>
          Our Services
        </h1>
        <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '0 auto' }}>
          Explore our full range of automotive services — each delivered with precision and care.
        </p>
      </div>

      {/* All services */}
      <section className="section" style={{ background: '#111318' }} aria-label="All services">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ServiceGrid />
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(56,189,248,0.08))',
        border: '1px solid rgba(37,99,235,0.2)',
        padding: '64px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#f1f5f9', marginBottom: 16 }}>
          Not Sure Which Service You Need?
        </h2>
        <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 28, maxWidth: 460, margin: '0 auto 28px' }}>
          Reach out and our team will guide you to the right service for your vehicle.
        </p>
        <a
          href={`tel:${BUSINESS.phone}`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg,#2563EB,#1d4ed8)',
            color: '#fff', padding: '14px 28px', borderRadius: 12,
            textDecoration: 'none', fontWeight: 700, fontSize: 16,
            boxShadow: '0 0 24px rgba(37,99,235,0.4)',
          }}
          id="services-call-btn"
        >Call Us Now</a>
      </section>

      <BookingForm />
    </PageWrapper>
  )
}
