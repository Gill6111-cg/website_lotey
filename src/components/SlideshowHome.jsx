import { useState, useCallback, useEffect, Children } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const variants = {
  enter: (dir) => ({
    y: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    y: dir > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

export default function SlideshowHome({ children }) {
  const slides = Children.toArray(children)
  const total = slides.length
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback(
    (next) => {
      if (next < 0 || next >= total) return
      setDirection(next > page ? 1 : -1)
      setPage(next)
    },
    [page, total]
  )

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(page + 1)
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(page - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goTo, page])

  // Scroll wheel / trackpad
  useEffect(() => {
    let locked = false
    const onWheel = (e) => {
      if (locked) return
      locked = true
      setTimeout(() => { locked = false }, 900)
      if (e.deltaY > 30) goTo(page + 1)
      else if (e.deltaY < -30) goTo(page - 1)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [goTo, page])

  // Touch swipe
  useEffect(() => {
    let startY = null
    const onTouchStart = (e) => { startY = e.touches[0].clientY }
    const onTouchEnd = (e) => {
      if (startY === null) return
      const diff = startY - e.changedTouches[0].clientY
      if (Math.abs(diff) > 50) diff > 0 ? goTo(page + 1) : goTo(page - 1)
      startY = null
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [goTo, page])

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#111318' }}>
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'absolute', inset: 0,
            overflowY: 'auto',
          }}
        >
          {slides[page]}
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators — right side */}
      <nav
        aria-label="Slide navigation"
        style={{
          position: 'fixed', right: 24, top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', gap: 10,
          zIndex: 9999,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === page ? 10 : 6,
              height: i === page ? 32 : 6,
              borderRadius: 99,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: i === page
                ? 'linear-gradient(180deg, #2563EB, #38BDF8)'
                : 'rgba(255,255,255,0.22)',
              transition: 'all 0.3s ease',
              boxShadow: i === page ? '0 0 12px rgba(37,99,235,0.7)' : 'none',
            }}
          />
        ))}
      </nav>

      {/* Prev button */}
      {page > 0 && (
        <button
          onClick={() => goTo(page - 1)}
          aria-label="Previous slide"
          style={{
            position: 'fixed', bottom: 80, left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            background: 'rgba(37,99,235,0.18)',
            border: '1px solid rgba(37,99,235,0.4)',
            borderRadius: '50%', width: 44, height: 44,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#38BDF8',
            backdropFilter: 'blur(8px)',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
        >
          <ChevronUp size={22} />
        </button>
      )}

      {/* Next button */}
      {page < total - 1 && (
        <motion.button
          onClick={() => goTo(page + 1)}
          aria-label="Next slide"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{
            position: 'fixed', bottom: page > 0 ? 28 : 28, left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            background: 'rgba(37,99,235,0.18)',
            border: '1px solid rgba(37,99,235,0.4)',
            borderRadius: '50%', width: 48, height: 48,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#38BDF8',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 0 20px rgba(37,99,235,0.35)',
          }}
        >
          <ChevronDown size={24} />
        </motion.button>
      )}

      {/* Slide counter */}
      <div style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
        color: 'rgba(255,255,255,0.3)', fontSize: 12,
        fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em',
        userSelect: 'none',
      }}>
        {String(page + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  )
}
