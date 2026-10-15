import { useState, useRef, useEffect } from 'react'
import './App.css'
import Navbar      from './components/Navbar'
import ModalPaket  from './components/ModalPaket'
import { dekorasiList, testimonials } from './data/dekorasi'

const LOGO        = '/img/Jacinta.png'   // ganti ke '/img/Logo.png' setelah Logo.png ditaruh di public/img/
const ITEMS_PER_PAGE = 6

export default function App() {
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [page,          setPage]          = useState(0)
  const [selected,      setSelected]      = useState(null)   // dekorasi aktif di katalog
  const [paketModal,    setPaketModal]    = useState(null)   // dekorasi yang dibuka modalnya
  const [activeSection, setActiveSection] = useState('home')

  const katalogRef = useRef(null)

  const totalPages   = Math.ceil(dekorasiList.length / ITEMS_PER_PAGE)
  const visibleItems = dekorasiList.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  )

  // Lock body scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = paketModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [paketModal])

  // Highlight navbar sesuai section yang terlihat
  useEffect(() => {
    const ids = ['home', 'about', 'services', 'katalog', 'testimonials', 'contact']
    const observers = ids.map(id => {
      const el  = document.getElementById(id)
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

  return (
    <>
      {/* ── NAVBAR ───────────────────────────────────────── */}
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        katalogRef={katalogRef}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
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
              Dekorasi Memukau, Kenangan Tak Terlupakan Bersama Dekorasi Citayam.
            </p>
            <a href="#services" className="hero-btn hero-btn-desktop"
               onClick={e => handleNavClick(e, '#services')}>
              Selanjutnya
            </a>
          </div>

          <div className="hero-logo-wrap">
            <div className="hero-logo-ring">
              <img src={LOGO} alt="Logo Dekorasi Citayam" className="hero-logo-img" />
            </div>
            {/* Tombol — mobile: di bawah logo ring */}
            <a href="#services" className="hero-btn hero-btn-mobile"
               onClick={e => handleNavClick(e, '#services')}>
              Selanjutnya
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="about" className="about-section">
        <div className="section-accent"></div>
        <div className="about-content">

          <div className="about-img-side">
            <div className="about-img-frame">
              <img src={LOGO} alt="Tentang Dekorasi Citayam" className="about-img" />
            </div>
            <div className="about-badge">
              <span className="about-badge-num">5+</span>
              <span className="about-badge-text">Tahun Pengalaman</span>
            </div>
          </div>

          <div className="about-text-side">
            <p className="about-label">Tentang Kami</p>
            <h2 className="about-title">
              Dekorasi Citayam,<br />Keindahan di Setiap Momen
            </h2>
            <p className="about-desc">
              Dekorasi Citayam adalah jasa dekorasi profesional yang berpusat di Citayam,
              Depok. Kami hadir untuk mewujudkan impian Anda — dari pernikahan mewah hingga
              pesta ulang tahun yang meriah, semua kami tangani dengan penuh dedikasi.
            </p>
            <p className="about-desc">
              Dengan pengalaman lebih dari 5 tahun dan ratusan acara sukses, tim kami
              siap memberikan pelayanan terbaik dan hasil yang melampaui ekspektasi.
            </p>

            <div className="about-stats">
              {[
                { num: '500+', label: 'Acara Sukses' },
                { num: '200+', label: 'Klien Puas'   },
                { num: '15+',  label: 'Jenis Paket'  },
              ].map(({ num, label }) => (
                <div key={label} className="about-stat">
                  <span className="about-stat-num">{num}</span>
                  <span className="about-stat-label">{label}</span>
                </div>
              ))}
            </div>

            <a href="#services" className="hero-btn"
               onClick={e => handleNavClick(e, '#services')}>
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="services-section">
        <h2 className="services-heading">Decoration List</h2>
        <p className="services-subtitle">✦ Pilih Dekorasi Terbaik Untuk Acaramu ✦</p>

        <div className="services-carousel">
          <button
            className="carousel-btn prev"
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous"
          >
            &#8249;
          </button>

          <div className="services-grid">
            {visibleItems.map(item => (
              <div key={item.id} className="deko-card">
                <div className="deko-card-img-wrap">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="deko-card-img"
                    onError={e => { e.currentTarget.src = LOGO }}
                  />
                </div>
                <p className="deko-card-name">{item.name}</p>
                <button className="deko-btn" onClick={() => handleLihatSekarang(item)}>
                  Lihat Sekarang
                </button>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn next"
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${page === i ? ' active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Halaman ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── KATALOG ──────────────────────────────────────── */}
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
                {/* Tombol — desktop: di dalam teks */}
                <div className="detail-actions detail-actions-desktop">
                  <button className="deko-btn" onClick={() => setPaketModal(selected)}>Lihat Paket</button>
                  <button className="deko-btn deko-btn-outline" onClick={handleKembali}>Kembali</button>
                </div>
              </div>

              <div className="detail-img-wrap">
                <div className="detail-img-circle">
                  <img
                    src={selected.img}
                    alt={selected.name}
                    className="detail-img"
                    onError={e => { e.currentTarget.src = LOGO }}
                  />
                </div>
              </div>

              {/* Tombol — mobile: di bawah gambar */}
              <div className="detail-actions detail-actions-mobile">
                <button className="deko-btn" onClick={() => setPaketModal(selected)}>Lihat Paket</button>
                <button className="deko-btn deko-btn-outline" onClick={handleKembali}>Kembali</button>
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
            <a href="#services" className="hero-btn"
               onClick={e => handleNavClick(e, '#services')}>
              Lihat Daftar Dekorasi
            </a>
          </div>
        )}
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section id="testimonials" className="testi-section">
        <div className="testi-top-line"></div>
        <p className="section-label">Testimoni</p>
        <h2 className="section-title">Apa Kata Mereka?</h2>
        <p className="section-sub">
          Ratusan pelanggan telah mempercayakan momen spesial mereka kepada kami.
        </p>
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

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="contact-top-line"></div>
        <div className="contact-content">

          <div className="contact-info">
            <p className="section-label">Hubungi Kami</p>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Siap Wujudkan<br />Acara Impianmu?
            </h2>
            <p className="contact-desc">
              Konsultasikan kebutuhanmu bersama tim kami. Kami siap membantu
              merancang dekorasi terbaik untuk momen spesialmu.
            </p>
            <ul className="contact-list">
              <li><span className="contact-icon">📍</span><span>Jl. Masjid Nurul Ihsan, Kampung Baru, Citayam, Ragajaya, Bojonggede, Bogor, Jawa Barat 16920</span></li>
              <li><span className="contact-icon">📞</span><span>+62 8953-3226-0872</span></li>
              <li><span className="contact-icon">📧</span><span>dekorasi-citayam.vercel.app</span></li>
              <li><span className="contact-icon">🕐</span><span>Senin – Minggu, 08.00 – 20.00 WIB</span></li>
            </ul>
            <div className="contact-socials">
              <a href="https://wa.me/62895332260872" className="social-btn"
                 target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                📱 WhatsApp
              </a>
              <a href="https://instagram.com/dekorasicitayam" className="social-btn"
                 target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                📷 Instagram
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="syarat-box">
              <h3 className="syarat-title">Syarat &amp; Ketentuan</h3>
              <ol className="syarat-list">
                <li>Wajib follow instagram <strong>@dekorasicitayam</strong></li>
                <li>Free ongkir khusus daerah Citayam. Diluar daerah Citayam ongkir disesuaikan</li>
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

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-brand">
          <img src={LOGO} alt="Logo" className="navbar-logo"
               style={{ margin: '0 auto 8px', display: 'block' }} />
          <p className="footer-name">Dekorasi Citayam</p>
          <p className="footer-tagline">Dekorasi Memukau, Kenangan Tak Terlupakan.</p>
        </div>
        <p className="footer-copy">© 2026 Dekorasi Citayam. All rights reserved.</p>
      </footer>

      {/* ── MODAL PAKET ──────────────────────────────────── */}
      <ModalPaket
        dekorasi={paketModal}
        onClose={() => setPaketModal(null)}
        onOrder={() => { setPaketModal(null); scrollTo('#contact') }}
      />
    </>
  )
}
