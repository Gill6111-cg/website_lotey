import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=900&q=80',
    alt: 'Mechanic performing engine repair at Lotey Autocad',
    caption: 'Engine Repair & Mechanical Work',
  },
  {
    src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=900&q=80',
    alt: 'Car foam wash and exterior cleaning service',
    caption: 'Professional Foam Wash',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    alt: 'Interior car detailing and deep cleaning',
    caption: 'Interior Detailing',
  },
  {
    src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=900&q=80',
    alt: 'Car polishing and paint correction service',
    caption: 'Paint Polishing & Correction',
  },
  {
    src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=900&q=80',
    alt: 'Full car servicing and maintenance',
    caption: 'Full Car Servicing',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80',
    alt: 'Luxury car in an automotive workshop',
    caption: 'Premium Vehicle Care',
  },
  {
    src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&q=80',
    alt: 'Sports car detailing and wax treatment',
    caption: 'Sports Car Detailing',
  },
  {
    src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&q=80',
    alt: 'Clean and polished car exterior after service',
    caption: 'After-Service Shine',
  },
]

export { GALLERY_IMAGES }

export default function Gallery({ limit }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const images = limit ? GALLERY_IMAGES.slice(0, limit) : GALLERY_IMAGES

  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
  const next = () => setLightboxIndex(i => (i + 1) % GALLERY_IMAGES.length)

  useEffect(() => {
    const handler = e => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 16,
      }}>
        {images.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setLightboxIndex(i)}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ scale: 1.02 }}
            style={{
              position: 'relative', height: 220,
              borderRadius: 16, overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              cursor: 'pointer', background: 'none', padding: 0,
            }}
            aria-label={`View ${img.caption}`}
            id={`gallery-img-${i}`}
          >
            <img
              src={img.src} alt={img.alt} loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
              display: 'flex', alignItems: 'flex-end', padding: 16,
            }}>
              <span style={{ color: '#f1f5f9', fontSize: 13, fontWeight: 600 }}>{img.caption}</span>
            </div>
          </motion.button>
        ))}
      </div>


      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-bg"
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 24,
            }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: 900, width: '100%', borderRadius: 20,
                overflow: 'hidden', background: '#111318',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <img
                src={GALLERY_IMAGES[lightboxIndex].src.replace('w=900', 'w=1200')}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                style={{ width: '100%', maxHeight: '75vh', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '16px 20px', background: '#181c24' }}>
                <p style={{ color: '#f1f5f9', fontWeight: 600, margin: 0, fontSize: 15 }}>
                  {GALLERY_IMAGES[lightboxIndex].caption}
                </p>
                <p style={{ color: '#475569', margin: '4px 0 0', fontSize: 13 }}>
                  {lightboxIndex + 1} / {GALLERY_IMAGES.length}
                </p>
              </div>

              {/* Close */}
              <button onClick={close} aria-label="Close lightbox"
                style={{
                  position: 'absolute', top: 12, right: 12,
                  background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: 8,
                  width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff',
                }}>
                <X size={18} />
              </button>

              {/* Prev */}
              <button onClick={prev} aria-label="Previous image"
                style={{
                  position: 'absolute', left: 12, top: '45%', transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: 8,
                  width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff',
                }}>
                <ChevronLeft size={22} />
              </button>

              {/* Next */}
              <button onClick={next} aria-label="Next image"
                style={{
                  position: 'absolute', right: 12, top: '45%', transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: 8,
                  width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff',
                }}>
                <ChevronRight size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
