import { useEffect } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import BookingForm from '../components/BookingForm'
import { Wrench, Clock, Users, Shield } from 'lucide-react'
import { BUSINESS } from '../config/business'

const VALUES = [
  { icon: Wrench, title: 'Technical Excellence', desc: 'Combining modern diagnostic tools with skilled, hands-on craftsmanship.' },
  { icon: Users, title: 'Built on Trust', desc: 'Honest assessments, no unnecessary up-selling, and transparent communication at every step.' },
  { icon: Clock, title: 'Respect for Your Time', desc: 'Efficient workflows that get your car back to you promptly without cutting corners.' },
  { icon: Shield, title: 'Quality Materials', desc: 'Every product we use is selected for safety, effectiveness, and compatibility with your vehicle.' },
]

export default function About() {
  useEffect(() => { document.title = `About Us — ${BUSINESS.name}` }, [])
  return (
    <PageWrapper>

      {/* Hero */}
      <div style={{
        paddingTop: 120, paddingBottom: 64, paddingLeft: 24, paddingRight: 24,
        background: 'linear-gradient(180deg, #0d1017 0%, #111318 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>About Us</p>
            <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#f1f5f9', marginBottom: 20, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Driven by Passion,<br />
              <span style={{ background: 'linear-gradient(135deg,#2563EB,#38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Defined by Quality.
              </span>
            </h1>
            <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8 }}>
              {BUSINESS.name} is a dedicated automotive service centre in {BUSINESS.city}. We offer a comprehensive range of services — from mechanical repairs to premium detailing — with a focus on quality workmanship and honest service.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1504222490345-c075b626a50a?w=800&q=80"
              alt="Automotive workshop at Lotey Autocad"
              style={{ width: '100%', borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <section className="section" style={{ background: '#111318' }} aria-labelledby="story-heading">
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 id="story-heading" style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#f1f5f9', marginBottom: 20 }}>
            Our Story
          </h2>
          <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
            {BUSINESS.name} was founded with a simple belief: every car owner deserves honest, high-quality automotive care without the confusion or pressure often found at larger chains.
          </p>
          <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.9 }}>
            Located in {BUSINESS.city}, we serve car owners across the region with services ranging from essential maintenance and mechanical repairs to full interior detailing and paint care. Our technicians stay updated with evolving vehicle technologies so we can service modern cars with confidence.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#0d1017' }} aria-labelledby="values-heading">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 id="values-heading" style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#f1f5f9', marginBottom: 12 }}>Our Values</h2>
            <p style={{ color: '#64748b', fontSize: 16 }}>The principles that guide every job we take on.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ background: '#181c24', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <v.icon size={22} color="#38BDF8" />
                </div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 17, color: '#f1f5f9', marginBottom: 10, marginTop: 0 }}>{v.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingForm />
    </PageWrapper>
  )
}
