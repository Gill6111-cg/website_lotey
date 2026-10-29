import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import GalleryComponent from '../components/Gallery'
import { BUSINESS } from '../config/business'

export default function Gallery() {
  useEffect(() => { document.title = `Gallery — ${BUSINESS.name}` }, [])
  return (
    <PageWrapper>

      <div style={{
        paddingTop: 120, paddingBottom: 48, paddingLeft: 24, paddingRight: 24,
        background: 'linear-gradient(180deg, #0d1017 0%, #111318 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
      }}>
        <p style={{ color: '#2563EB', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Our Work</p>
        <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#f1f5f9', marginBottom: 16, letterSpacing: '-0.03em' }}>
          Gallery
        </h1>
        <p style={{ color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
          A selection of our work. Click any image to view it in full.
        </p>
      </div>

      <section className="section" style={{ background: '#111318' }} aria-label="Photo gallery">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <GalleryComponent />
        </div>
      </section>
    </PageWrapper>
  )
}
