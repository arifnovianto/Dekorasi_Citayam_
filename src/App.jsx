import { useState, useRef, useEffect } from 'react'
import './App.css'
import Navbar     from './components/Navbar'
import ModalPaket from './components/ModalPaket'
import { dekorasiList, testimonials } from './data/dekorasi'

const LOGO           = '/img/Logo.png'    // dipakai di Hero, About, Contact, Footer, Navbar
const FALLBACK_IMG   = '/img/Jacinta.png' // fallback jika gambar dekorasi tidak ditemukan
const ITEMS_PER_PAGE = 6

export default function App() {
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [page,           setPage]           = useState(0)
  const [selected,       setSelected]       = useState(null)
  const [paketModal,     setPaketModal]     = useState(null)
  const [activeSection,  setActiveSection]  = useState('home')

  const katalogRef = useRef(null)

  const totalPages   = Math.ceil(dekorasiList.length / ITEMS_PER_PAGE)
  const visibleItems = dekorasiList.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  )

  // Lock scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = paketModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [paketModal])

  // Highlight navbar sesuai section yang terlihat
  useEffect(() => {
    const ids = ['home', 'about', 'services', 'katalog', 'testimonials', 'contact']
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  function scrollTo(href) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleNavClick(e, href) {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  function handleLihatSekarang(item) {
    setSelected(item)
    setTimeout(() => katalogRef.current?.scrollIntoView({ behavior: 'smooth' }), 30)
  }

  function handleKembali() {
    setSelected(null)
    setTimeout(() => scrollTo('#services'), 30)
  }

  function handleLihatPaket() {
    setPaketModal(selected)
  }

  return (
    <>
      {/* ── NAVBAR ── */}
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        katalogRef={katalogRef}
      />

      {/* ── HERO ── */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-dots"></div>
        <div className="hero-deco hero-deco-1"></div>
        <div className="hero-deco hero-deco-2"></div>
        <div className="hero-deco hero-deco-3"></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Selamat Datang<br />Di <span>Dekorasi Citayam</span>
            </h1>
            <p className="hero-desc">
              Wujudkan momen istimewa dengan dekorasi kreatif dan elegan yang dirancang sesuai impian Anda. 
            </p>
            {/* Tombol desktop: di dalam hero-text */}
            <a
              href="#services"
              className="hero-btn hero-btn-desktop"
              onClick={e => handleNavClick(e, '#services')}
            >
              Selanjutnya
            </a>
          </div>

          <div className="hero-logo-wrap">
            <div className="hero-logo-ring">
              <img src={LOGO} alt="Logo Dekorasi Citayam" className="hero-logo-img" />
            </div>
            {/* Tombol mobile: di bawah logo ring */}
            <a
              href="#services"
              className="hero-btn hero-btn-mobile"
              onClick={e => handleNavClick(e, '#services')}
            >
              Selanjutnya
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about-section">
        <div className="section-accent"></div>
        <div className="about-content">

          <div className="about-img-side">
            <div className="about-img-frame">
              <img src={FALLBACK_IMG} alt="Tentang Dekorasi Citayam" className="about-img" />
            </div>
            <div className="about-badge">
              <span className="about-badge-num">2+</span>
              <span className="about-badge-text">Tahun Pengalaman</span>
            </div>
          </div>

          <div className="about-text-side">
            <p className="about-label">Tentang Kami</p>
            <h2 className="about-title">
              Dekorasi Citayam,<br />Keindahan di Setiap Momen
            </h2>
            <p className="about-desc">
              Dekorasi Citayam adalah jasa dekorasi profesional yang berpusat di Ragajaya, Bojonggede, Bogor. Kami hadir untuk mewujudkan impian Anda — dari pernikahan mewah hingga
              pesta ulang tahun yang meriah, semua kami tangani dengan penuh dedikasi.
            </p>
            <p className="about-desc">
              Dengan pengalaman lebih dari 2 tahun dan ratusan acara sukses, tim kami
              siap memberikan pelayanan terbaik dan hasil yang melampaui ekspektasi.
            </p>

            <div className="about-stats">
              {[
                { num: '500+', label: 'Acara Sukses' },
                { num: '200+', label: 'Klien Puas'   },
                { num: '10+',  label: 'Jenis Paket'  },
              ].map(({ num, label }) => (
                <div key={label} className="about-stat">
                  <span className="about-stat-num">{num}</span>
                  <span className="about-stat-label">{label}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="hero-btn"
              onClick={e => handleNavClick(e, '#services')}
            >
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="services-section">
        <h2 className="services-heading">Decoration List</h2>
        <p className="services-subtitle">✦ Pilih Dekorasi Terbaik Untuk Acaramu ✦</p>

        <div className="services-carousel">
          <button className="carousel-btn prev" onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} aria-label="Previous">&#8249;</button>
          <div className="services-grid">
            {visibleItems.map(item => (
              <div key={item.id} className="deko-card">
                <div className="deko-card-img-wrap">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="deko-card-img"
                    onError={e => { e.currentTarget.src = FALLBACK_IMG }}
                  />
                </div>
                <p className="deko-card-name">{item.name}</p>
                <button className="deko-btn" onClick={() => handleLihatSekarang(item)}>
                  Lihat Sekarang
                </button>
              </div>
            ))}
          </div>
          <button className="carousel-btn next" onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1} aria-label="Next">&#8250;</button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} className={`carousel-dot${page === i ? ' active' : ''}`} onClick={() => setPage(i)} aria-label={`Halaman ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ── KATALOG ── */}
      <section id="katalog" ref={katalogRef} className="detail-section">
        <div className="detail-bg-circle"></div>

        {selected ? (
          <>
            <div className="detail-overlay"></div>
            <div className="detail-content">
              <div className="detail-text">
                <p className="section-label" style={{ marginBottom: 8 }}>Katalog Dekorasi</p>
                <h1 className="detail-title">{selected.name}</h1>
                <p className="detail-desc">{selected.desc}</p>
                <div className="detail-actions detail-actions-desktop">
                  <button className="deko-btn" onClick={() => setPaketModal(selected)}>
                    Lihat Paket
                  </button>
                  <button className="deko-btn deko-btn-outline" onClick={handleKembali}>
                    Kembali
                  </button>
                </div>
              </div>

              <div className="detail-img-wrap">
                <div className="detail-img-circle">
                  <img
                    src={selected.img}
                    alt={selected.name}
                    className="detail-img"
                    onError={e => { e.currentTarget.src = FALLBACK_IMG }}
                  />
                </div>
              </div>

              <div className="detail-actions detail-actions-mobile">
                <button className="deko-btn" onClick={() => setPaketModal(selected)}>
                  Lihat Paket
                </button>
                <button className="deko-btn deko-btn-outline" onClick={handleKembali}>
                  Kembali
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="katalog-empty">
            <div className="katalog-empty-icon">🌸</div>
            <h2 className="katalog-empty-title">Pilih Dekorasi Favoritmu</h2>
            <p className="katalog-empty-desc">
              Klik tombol <strong>Lihat Sekarang</strong> pada salah satu dekorasi
              di atas untuk melihat detail lengkapnya di sini.
            </p>
            <a
              href="#services"
              className="hero-btn"
              onClick={e => handleNavClick(e, '#services')}
            >
              Lihat Daftar Dekorasi
            </a>
          </div>
        )}
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="testi-section">
        <div className="testi-top-line"></div>
        <p className="section-label">Testimoni</p>
        <h2 className="section-title">Apa Kata Mereka?</h2>
        <p className="section-sub">Ratusan pelanggan telah mempercayakan momen spesial mereka kepada kami.</p>
        <div className="testi-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testi-card">
              <div className="testi-avatar">{t.avatar}</div>
              <div className="testi-stars">
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-meta">
                <strong className="testi-name">{t.name}</strong>
                <span className="testi-event">{t.event}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section">
        <div className="contact-top-line"></div>
        <div className="contact-content">

          <div className="contact-info">
            <p className="section-label">Hubungi Kami</p>
            <h2 className="section-title" style={{ color: '#fff' }}>Siap Wujudkan<br />Acara Impianmu?</h2>
            <p className="contact-desc">Konsultasikan kebutuhanmu bersama tim kami. Kami siap membantu merancang dekorasi terbaik untuk momen spesialmu.</p>
            <ul className="contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>Jl. Masjid Nurul Ihsan, Kampung Baru, Citayam, Ragajaya, Bojonggede, Bogor 16920</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+62 8953-3226-0872</span>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <span>dekorasi-citayam.vercel.app</span>
              </li>
              <li>
                <span className="contact-icon">🕐</span>
                <span>Senin – Minggu, 08.00 – 20.00 WIB</span>
              </li>
            </ul>
            <div className="contact-socials">
              <a
                href="https://wa.me/62895332260872"
                className="social-btn social-btn-wa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.538 5.875L.057 23.428a.75.75 0 0 0 .916.916l5.553-1.481A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.512-5.218-1.403l-.374-.22-3.868 1.033 1.032-3.867-.22-.374A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="https://instagram.com/dekorasicitayam"
                className="social-btn social-btn-ig"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
          <div className="contact-form-wrap">
            <div className="syarat-box">
              <h3 className="syarat-title">Syarat &amp; Ketentuan</h3>
              <ol className="syarat-list">
                <li>Wajib follow instagram <strong>@dekorasicitayam</strong></li>
                <li>Free ongkir khusus daerah Citayam. Diluar Citayam ongkir disesuaikan</li>
                <li>Barang yang disewakan apabila hilang/rusak ditanggung oleh customer</li>
                <li>DP tanggal tidak bisa dikembalikan apabila acara batal, termasuk DP MUA, FG dan MC</li>
                <li>Bersedia mengirimkan foto acaranya untuk kebutuhan marketing</li>
              </ol>
              <h3 className="syarat-title syarat-title-pembayaran">Pembayaran</h3>
              <ol className="syarat-list">
                <li>DP Tanggal acara <strong>Rp. 100.000</strong></li>
                <li>Pelunasan sewa dekorasi hari H setelah pemasangan backdrop</li>
                <li>Transfer via Bank BCA <strong>7651745997</strong> a/n Rosdianah</li>
                <li>Bukti transfer ke WhatsApp admin <strong>(0895332260872)</strong></li>
              </ol>
              <div className="syarat-logo">
                <img src={LOGO} alt="Logo Dekorasi Citayam" className="syarat-logo-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-brand">
          <img
            src={LOGO}
            alt="Logo"
            className="navbar-logo"
            style={{ margin: '0 auto 8px', display: 'block' }}
          />
          <p className="footer-name">Dekorasi Citayam</p>
          <p className="footer-tagline">Dekorasi Memukau, Kenangan Tak Terlupakan, Bersama Dekorasi Citayam.</p>
        </div>
        <p className="footer-copy">© 2026 Dekorasi Citayam. All rights reserved.</p>
      </footer>

      {/* ── MODAL PAKET ── */}
      <ModalPaket
        dekorasi={paketModal}
        onClose={() => setPaketModal(null)}
        onOrder={() => { setPaketModal(null); scrollTo('#contact') }}
      />
    </>
  )
}
