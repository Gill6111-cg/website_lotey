import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { BUSINESS } from '../config/business'

export default function WhatsAppButton() {
  const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi! I would like to enquire about your automotive services.')}`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 200,
        width: 56, height: 56, borderRadius: '50%',
        background: '#25D366',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
        color: '#fff', textDecoration: 'none',
      }}
      id="whatsapp-float-btn"
    >
      <MessageCircle size={26} fill="white" />
    </motion.a>
  )
}
