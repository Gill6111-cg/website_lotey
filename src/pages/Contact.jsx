import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import BookingForm from '../components/BookingForm'
import ContactSection from '../components/ContactSection'
import FAQ from '../components/FAQ'
import { BUSINESS } from '../config/business'

export default function Contact() {
  useEffect(() => { document.title = `Contact Us — ${BUSINESS.name}` }, [])
  return (
    <PageWrapper>

      <div style={{
        paddingTop: 120, paddingBottom: 48, paddingLeft: 24, paddingRight: 24,
        background: 'linear-gradient(180deg, #0d1017 0%, #111318 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
      }}>
        <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Get in Touch</p>
        <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#f1f5f9', marginBottom: 16, letterSpacing: '-0.03em' }}>
          Contact Us
        </h1>
        <p style={{ color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
          Ready to book or have a question? We're happy to help.
        </p>
      </div>

      <ContactSection />
      <BookingForm />
      <FAQ />
    </PageWrapper>
  )
}
