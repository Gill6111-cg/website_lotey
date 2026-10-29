import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../config/business'

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        background: '#181c24',
        border: `1px solid ${open ? 'rgba(37,99,235,0.4)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 14,
        overflow: 'hidden',
        transition: 'border-color 0.25s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
        style={{
          width: '100%', background: 'none', border: 'none',
          padding: '20px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          cursor: 'pointer', color: '#f1f5f9', textAlign: 'left', gap: 16,
        }}
      >
        <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.4 }}>
          {faq.q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={20} color="#38BDF8" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.75, padding: '0 24px 20px', margin: 0 }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section" style={{ background: '#0d1017' }} aria-labelledby="faq-heading">
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>FAQ</p>
          <h2 id="faq-heading" style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#f1f5f9', marginBottom: 16 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            Have questions? We have answers.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>
  )
}
