import { useEffect } from 'react'
import SlideshowHome from '../components/SlideshowHome'
import Hero from '../components/Hero'
import ServiceGrid from '../components/ServiceGrid'
import BookingForm from '../components/BookingForm'
import ContactSection from '../components/ContactSection'
import FAQ from '../components/FAQ'
import Gallery from '../components/Gallery'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Wrench, Clock, Shield, Users } from 'lucide-react'
import { BUSINESS } from '../config/business'

const WHY_US = [
  { icon: Wrench, title: 'Skilled Technicians', desc: 'Trained mechanics with hands-on experience across all major car brands and models.' },
  { icon: Clock, title: 'Time-Efficient Service', desc: 'We respect your schedule. Most services are completed promptly with quality guaranteed.' },
  { icon: Shield, title: 'Quality Products', desc: 'We use professional-grade cleaning agents, lubricants and genuine parts where applicable.' },
  { icon: Users, title: 'Customer-First Approach', desc: 'Your satisfaction is our priority. Transparent communication before, during, and after each job.' },
]

/* ── Shared slide shell — full viewport, scrollable content ── */
function Slide({ children, bg = '#111318' }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: bg,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      {children}
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = `${BUSINESS.name} — Premium Automotive Services in ${BUSINESS.city}`
  }, [])

  return (
    <SlideshowHome>

      {/* ── Slide 1: Hero ── */}
      <Hero />

      {/* ── Slide 2: Services Preview ── */}
      <Slide bg="#111318">
        <section className="section" aria-labelledby="services-preview-heading">
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>What We Offer</p>
              <h2 id="services-preview-heading" style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#f1f5f9', marginBottom: 16 }}>
                Our Core Services
              </h2>
              <p style={{ color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
                Everything your car needs, handled with expertise and care.
              </p>
            </div>
            <ServiceGrid limit={3} />
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link to="/services"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  border: '1px solid rgba(37,99,235,0.4)',
                  color: '#38BDF8', padding: '12px 28px', borderRadius: 12,
                  textDecoration: 'none', fontWeight: 600, fontSize: 15,
                  transition: 'background 0.2s',
                }}
                id="view-all-services-btn"
              >View All Services →</Link>
            </div>
          </div>
        </section>
      </Slide>

      {/* ── Slide 3: Why Choose Us ── */}
      <Slide bg="#0d1017">
        <section className="section" aria-labelledby="why-us-heading">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'center' }}>
              <div>
                <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Why Choose Us</p>
                <h2 id="why-us-heading" style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#f1f5f9', marginBottom: 20, lineHeight: 1.15 }}>
                  Trusted Care for Every Vehicle
                </h2>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                  At {BUSINESS.name}, we combine technical expertise with a genuine commitment to quality. We treat every vehicle as if it were our own.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['Transparent pricing — no hidden charges', 'Service quality you can verify', 'Friendly and professional team', 'Convenient location in ' + BUSINESS.city].map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#94a3b8', fontSize: 15 }}>
                      <CheckCircle size={16} color="#2563EB" style={{ flexShrink: 0 }} /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {WHY_US.map((item, i) => (
                  <motion.div key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      background: '#181c24',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 16, padding: 20,
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      <item.icon size={18} color="#38BDF8" />
                    </div>
                    <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 15, color: '#f1f5f9', marginBottom: 8, marginTop: 0 }}>{item.title}</h3>
                    <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Slide>

      {/* ── Slide 4: Gallery Preview ── */}
      <Slide bg="#111318">
        <section className="section" aria-labelledby="gallery-preview-heading">
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Our Work</p>
              <h2 id="gallery-preview-heading" style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#f1f5f9', marginBottom: 16 }}>
                Featured Work
              </h2>
            </div>
            <Gallery limit={4} />
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <Link to="/gallery" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(37,99,235,0.4)',
                color: '#38BDF8', padding: '12px 28px', borderRadius: 12,
                textDecoration: 'none', fontWeight: 600, fontSize: 15,
              }} id="view-gallery-btn">View Full Gallery →</Link>
            </div>
          </div>
        </section>
      </Slide>

      {/* ── Slide 5: Booking Form ── */}
      <Slide bg="#0d1017">
        <BookingForm />
      </Slide>

      {/* ── Slide 6: FAQ ── */}
      <Slide bg="#111318">
        <FAQ />
      </Slide>

      {/* ── Slide 7: Contact ── */}
      <Slide bg="#0d1017">
        <ContactSection />
      </Slide>

    </SlideshowHome>
  )
}
