import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS } from '../config/business'

const NAV_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About'    },
  { to: '/gallery',  label: 'Gallery'  },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(17,19,24,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s',
      }}
    >
      <nav
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 72,
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" aria-label="Lotey Autocad home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 18, color: '#fff',
            flexShrink: 0,
          }}>LA</div>
          <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: '#f1f5f9', letterSpacing: '-0.02em' }}>
            {BUSINESS.name}
          </span>
        </Link>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  padding: '8px 16px',
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 15,
                  textDecoration: 'none',
                  color: isActive ? '#38BDF8' : '#cbd5e1',
                  background: isActive ? 'rgba(37,99,235,0.12)' : 'transparent',
                  transition: 'color 0.2s, background 0.2s',
                })}
              >{label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }} className="hidden-mobile">
          <a
            href={`tel:${BUSINESS.phone}`}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: '#94a3b8', textDecoration: 'none', fontSize: 14, fontWeight: 500,
              transition: 'color 0.2s',
            }}
            aria-label={`Call us at ${BUSINESS.phoneDisplay}`}
          >
            <Phone size={15} /> {BUSINESS.phoneDisplay}
          </a>
          <Link
            to="/contact#booking"
            style={{
              background: 'linear-gradient(135deg, #2563EB, #1d4ed8)',
              color: '#fff', padding: '10px 22px', borderRadius: 10,
              textDecoration: 'none', fontWeight: 600, fontSize: 14,
              border: 'none', cursor: 'pointer',
              boxShadow: '0 0 20px rgba(37,99,235,0.4)',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
          >Book a Service</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8, padding: 8, color: '#f1f5f9', cursor: 'pointer',
            display: 'none',
          }}
          className="show-mobile"
          id="mobile-menu-btn"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(17,19,24,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              overflow: 'hidden',
            }}
            id="mobile-menu"
          >
            <nav style={{ padding: '16px 24px 24px' }} aria-label="Mobile navigation">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  style={({ isActive }) => ({
                    display: 'block', padding: '12px 4px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    color: isActive ? '#38BDF8' : '#cbd5e1',
                    fontWeight: 500, fontSize: 16, textDecoration: 'none',
                  })}
                >{label}</NavLink>
              ))}
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '12px', borderRadius: 10,
                    border: '1px solid rgba(37,99,235,0.4)',
                    color: '#38BDF8', textDecoration: 'none', fontWeight: 600,
                  }}
                ><Phone size={16} /> Call Us</a>
                <Link
                  to="/contact#booking"
                  style={{
                    display: 'block', textAlign: 'center',
                    background: 'linear-gradient(135deg, #2563EB, #1d4ed8)',
                    color: '#fff', padding: '13px', borderRadius: 10,
                    textDecoration: 'none', fontWeight: 700, fontSize: 15,
                  }}
                >Book a Service</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
