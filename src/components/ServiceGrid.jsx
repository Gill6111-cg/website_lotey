import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Wrench, Droplets, Sparkles, Shield, Settings, Battery } from 'lucide-react'
import { SERVICES } from '../config/business'

const ICON_MAP = { Wrench, Droplets, Sparkles, Shield, Settings, Battery }

function ServiceCard({ service, index }) {
  const Icon = ICON_MAP[service.icon] || Wrench
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        background: '#181c24',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 20, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
      }}
      whileHover={{ y: -6 }}
      id={`service-card-${service.id}`}
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Image */}
      <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
        <img
          src={service.image}
          alt={`${service.title} at Lotey Autocad`}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Icon badge */}
        <div style={{
          position: 'absolute', bottom: 12, left: 12,
          width: 44, height: 44, borderRadius: 12,
          background: 'rgba(17,19,24,0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(37,99,235,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={20} color="#38BDF8" />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 id={`service-title-${service.id}`} style={{
          fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18,
          color: '#f1f5f9', marginBottom: 10, marginTop: 0,
        }}>{service.title}</h3>
        <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 20, marginTop: 0 }}>
          {service.shortDesc}
        </p>
        <Link
          to="/contact#booking"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            color: '#38BDF8', textDecoration: 'none', fontWeight: 600, fontSize: 14,
            transition: 'gap 0.2s',
          }}
          aria-label={`Enquire about ${service.title}`}
        >
          Enquire Now <ArrowRight size={15} />
        </Link>
      </div>
    </motion.article>
  )
}

export default function ServiceGrid({ limit }) {
  const services = SERVICES.filter(s => s.enabled).slice(0, limit)
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 24,
    }}>
      {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
    </div>
  )
}
