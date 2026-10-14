import { useState, useRef } from 'react'
import heroImg from './assets/Logo.png'

import './App.css'

// ── Data dekorasi ─────────────────────────────────────────────────────────────
const dekorasiList = [
  // Halaman 1
  { id: 1,  name: 'Dekorasi Rosella',    img: heroImg, desc: 'Percantik acaramu dengan Rosella yang memukau. Nuansa merah mawar yang elegan membuat setiap momen tak terlupakan. Sewa Rosella sekarang dan rasakan keindahannya!' },
  { id: 2,  name: 'Dekorasi Geranium',   img: heroImg, desc: 'Hadirkan keindahan Geranium untuk acara spesialmu. Perpaduan warna biru dan putih yang memesona menciptakan suasana yang magis dan berkesan.' },
  { id: 3,  name: 'Dekorasi Alyssa',     img: heroImg, desc: 'Tampilkan kemewahan dengan Alyssa, dekorasi premium dengan sentuhan bunga biru yang menawan. Buat acara Anda menjadi kenangan indah yang tak terlupakan.' },
  { id: 4,  name: 'Dekorasi Irish',      img: heroImg, desc: 'Percantik acaramu dengan Irish dengan nuansa hijau alami. Jadikan dekorasi lebih menawan. Sewa Irish sekarang dan rasakan pesonanya!' },
  { id: 5,  name: 'Dekorasi Daisy',      img: heroImg, desc: 'Hadirkan kesegaran Daisy untuk momen istimewamu. Dekorasi bunga putih segar yang mempesona akan membuat setiap tamu terkagum-kagum.' },
  { id: 6,  name: 'Dekorasi Delphinium', img: heroImg, desc: 'Suguhkan keanggunan Delphinium dengan warna biru yang menakjubkan. Dekorasi premium yang cocok untuk momen paling berkesan dalam hidupmu.' },
  // Halaman 2
  { id: 7,  name: 'Dekorasi Lavender',   img: heroImg, desc: 'Hadirkan ketenangan dan keanggunan Lavender untuk acaramu. Nuansa ungu lembut yang memikat hati menciptakan suasana romantis yang tak terlupakan.' },
  { id: 8,  name: 'Dekorasi Magnolia',   img: heroImg, desc: 'Tampilkan kemewahan Magnolia dengan kelopak bunga putih bersih yang megah. Cocok untuk pernikahan dan acara formal yang ingin berkesan elegan.' },
  { id: 9,  name: 'Dekorasi Aurora',     img: heroImg, desc: 'Biarkan Aurora menerangi acaramu dengan kombinasi warna pastel yang memukau. Dekorasi impian untuk momen paling istimewa dalam hidupmu.' },
  { id: 10, name: 'Dekorasi Jasmine',    img: heroImg, desc: 'Rasakan kesegaran alami Jasmine dalam setiap sudut dekorasi acaramu. Bunga melati putih yang harum dan indah untuk momen penuh makna.' },
  { id: 11, name: 'Dekorasi Peony',      img: heroImg, desc: 'Percantik acaramu dengan kemewahan Peony. Bunga peoni merah muda yang mewah dan elegan menjadikan setiap foto terlihat sempurna.' },
  { id: 12, name: 'Dekorasi Orchid',     img: heroImg, desc: 'Hadirkan keanggunan tiada tara dengan Orchid. Perpaduan anggrek eksotis yang menawan menjadi pilihan sempurna untuk acara berkelas dan berkesan.' },
]

// ── Data testimoni ─────────────────────────────────────────────────────────────
const testimonials = [
  { id: 1, name: 'Sari & Budi',      event: 'Pernikahan',       rating: 5, avatar: '💍', text: 'Dekorasi Citayam benar-benar luar biasa! Pernikahan kami jadi sangat indah dan tak terlupakan. Tim mereka sangat profesional dan ramah. Terima kasih banyak!' },
  { id: 2, name: 'Rina Kurniawati',  event: 'Ulang Tahun',      rating: 5, avatar: '🎂', text: 'Pesta ulang tahun anakku jadi sangat meriah berkat Dekorasi Citayam. Dekorasinya cantik, harganya terjangkau, dan pelayanannya memuaskan. Recommended banget!' },
  { id: 3, name: 'Pak Hendra',       event: 'Acara Perusahaan', rating: 5, avatar: '🏢', text: 'Kami mempercayakan dekorasi acara tahunan perusahaan kepada Dekorasi Citayam. Hasilnya melebihi ekspektasi. Profesional dan tepat waktu. Pasti akan kami gunakan lagi!' },
  { id: 4, name: 'Dewi & Reza',      event: 'Pernikahan',       rating: 5, avatar: '💐', text: 'Mimpi kami jadi kenyataan! Dekorasi pernikahan kami begitu elegan dan romantis. Setiap detail diperhatikan dengan baik. Sangat puas dengan hasil kerjanya!' },
]

const ITEMS_PER_PAGE = 6

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage]         = useState(0)
  const [selected, setSelected] = useState(null)   // dekorasi yang dipilih

  const katalogRef = useRef(null)

  const totalPages   = Math.ceil(dekorasiList.length / ITEMS_PER_PAGE)
  const visibleItems = dekorasiList.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE)

  // scroll ke elemen berdasarkan selector
  function scrollTo(href) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // klik navbar biasa
  function handleNavClick(e, href) {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  // klik "Lihat Sekarang" di kartu services
  function handleLihatSekarang(item) {
    setSelected(item)
    // scroll ke section katalog setelah state update
    setTimeout(() => {
      if (katalogRef.current) katalogRef.current.scrollIntoView({ behavior: 'smooth' })
    }, 30)
  }

  // klik "Kembali" di katalog
  function handleKembali() {
    setSelected(null)
    setTimeout(() => scrollTo('#services'), 30)
  }

  return (
    <>
      {/* ════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════ */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={heroImg} alt="Logo Dekorasi Citayam" className="navbar-logo" />
          <span className="navbar-title">Dekorasi Citayam</span>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
          <li><a href="#home"         onClick={e => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#about"        onClick={e => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#services"     onClick={e => handleNavClick(e, '#services')}>Services</a></li>
          <li><a href="#testimonials" onClick={e => handleNavClick(e, '#testimonials')}>Testimonials</a></li>
          <li>
            <a
              href="#katalog"
              className={selected ? 'nav-active' : ''}
              onClick={e => { e.preventDefault(); setMenuOpen(false); if (katalogRef.current) katalogRef.current.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Katalog
            </a>
          </li>
          <li><a href="#contact" onClick={e => handleNavClick(e, '#contact')}>Contact us</a></li>
        </ul>
      </nav>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Selamat Datang<br />Di Dekorasi Citayam
            </h1>
            <p className="hero-desc">
              Dekorasi Memukau, Kenangan Tak<br />
              Terlupakan Bersama Dekorasi Citayam.
            </p>
            <a href="#services" className="hero-btn" onClick={e => handleNavClick(e, '#services')}>
              Selanjutnya
            </a>
          </div>
          <div className="hero-logo-wrap">
            <div className="hero-logo-ring">
              <img src={heroImg} alt="Logo Dekorasi Citayam" className="hero-logo-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════ */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-img-side">
            <div className="about-img-frame">
              <img src={heroImg} alt="Tentang Dekorasi Citayam" className="about-img" />
            </div>
            <div className="about-badge">
              <span className="about-badge-num">5+</span>
              <span className="about-badge-text">Tahun Pengalaman</span>
            </div>
          </div>
          <div className="about-text-side">
            <p className="about-label">Tentang Kami</p>
            <h2 className="about-title">Dekorasi Citayam,<br />Keindahan di Setiap Momen</h2>
            <p className="about-desc">
              Dekorasi Citayam adalah jasa dekorasi profesional yang berpusat di Citayam,
              Depok. Kami hadir untuk mewujudkan impian Anda — dari pernikahan mewah hingga
              pesta ulang tahun yang meriah, semua kami tangani dengan penuh dedikasi dan
              sentuhan seni yang memukau.
            </p>
            <p className="about-desc">
              Dengan pengalaman lebih dari 5 tahun dan ratusan acara yang telah sukses kami
              dekorasi, tim kami siap memberikan pelayanan terbaik, harga terjangkau, dan
              hasil yang jauh melampaui ekspektasi Anda.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-num">500+</span>
                <span className="about-stat-label">Acara Sukses</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">200+</span>
                <span className="about-stat-label">Klien Puas</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">15+</span>
                <span className="about-stat-label">Jenis Paket</span>
              </div>
            </div>
            <a href="#services" className="hero-btn" onClick={e => handleNavClick(e, '#services')}>
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES — selalu tampil
      ════════════════════════════════════════ */}
      <section id="services" className="services-section">
        <h2 className="services-heading">Decoration List</h2>

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
                  <img src={item.img} alt={item.name} className="deko-card-img" />
                </div>
                <p className="deko-card-name">{item.name}</p>
                <button
                  className="deko-btn"
                  onClick={() => handleLihatSekarang(item)}
                >
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

        {/* Dot indicator */}
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

      {/* ════════════════════════════════════════
          KATALOG — section permanen, isi berubah
      ════════════════════════════════════════ */}
      <section id="katalog" ref={katalogRef} className="detail-section">
        {selected ? (
          /* ── Ada dekorasi dipilih: tampilkan detail ── */
          <>
            <div className="detail-overlay"></div>
            <div className="detail-content">
              <div className="detail-text">
                <p className="section-label" style={{ marginBottom: 8 }}>Katalog Dekorasi</p>
                <h1 className="detail-title">{selected.name}</h1>
                <p className="detail-desc">{selected.desc}</p>
                <div className="detail-actions">
                  <button className="deko-btn" onClick={() => handleNavClick({ preventDefault: () => {} }, '#contact')}>
                    Lihat Paket
                  </button>
                  <button className="deko-btn deko-btn-outline" onClick={handleKembali}>
                    Kembali
                  </button>
                </div>
              </div>
              <div className="detail-img-wrap">
                <div className="detail-img-circle">
                  <img src={selected.img} alt={selected.name} className="detail-img" />
                </div>
              </div>
            </div>
          </>
        ) : (
          /* ── Belum ada pilihan: placeholder ajakan ── */
          <div className="katalog-empty">
            <div className="katalog-empty-icon">🌸</div>
            <h2 className="katalog-empty-title">Pilih Dekorasi Favoritmu</h2>
            <p className="katalog-empty-desc">
              Klik tombol <strong>Lihat Sekarang</strong> pada salah satu dekorasi
              di atas untuk melihat detail dan keterangan lengkapnya di sini.
            </p>
            <a href="#services" className="hero-btn" onClick={e => handleNavClick(e, '#services')}>
              Lihat Daftar Dekorasi
            </a>
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════ */}
      <section id="testimonials" className="testi-section">
        <p className="section-label">Testimoni</p>
        <h2 className="section-title">Apa Kata Mereka?</h2>
        <p className="section-sub">
          Ratusan pelanggan telah mempercayakan momen spesial mereka kepada kami.
        </p>
        <div className="testi-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testi-card">
              <div className="testi-avatar">{t.avatar}</div>
              <div className="testi-stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-meta">
                <strong className="testi-name">{t.name}</strong>
                <span className="testi-event">{t.event}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTACT
      ════════════════════════════════════════ */}
      <section id="contact" className="contact-section">
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
              <li><span className="contact-icon">📍</span><span>Jl. Raya Citayam, Depok, Jawa Barat</span></li>
              <li><span className="contact-icon">📞</span><span>+62 812-3456-7890</span></li>
              <li><span className="contact-icon">📧</span><span>info@dekorasicitayam.com</span></li>
              <li><span className="contact-icon">🕐</span><span>Senin – Minggu, 08.00 – 20.00 WIB</span></li>
            </ul>
            <div className="contact-socials">
              <a href="#contact" className="social-btn" aria-label="WhatsApp">📱 WhatsApp</a>
              <a href="#contact" className="social-btn" aria-label="Instagram">📷 Instagram</a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <h3 className="form-title">Kirim Pesan</h3>
              <div className="form-group">
                <label htmlFor="fname">Nama Lengkap</label>
                <input id="fname" type="text" placeholder="Masukkan nama lengkap" />
              </div>
              <div className="form-group">
                <label htmlFor="fphone">Nomor WhatsApp</label>
                <input id="fphone" type="tel" placeholder="+62 8xx-xxxx-xxxx" />
              </div>
              <div className="form-group">
                <label htmlFor="fevent">Jenis Acara</label>
                <select id="fevent">
                  <option value="">-- Pilih Jenis Acara --</option>
                  <option>Pernikahan</option>
                  <option>Ulang Tahun</option>
                  <option>Acara Perusahaan</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="fmsg">Pesan</label>
                <textarea id="fmsg" rows={4} placeholder="Ceritakan detail acara Anda..."></textarea>
              </div>
              <button type="submit" className="deko-btn form-submit">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="footer">
        <div className="footer-brand">
          <img src={heroImg} alt="Logo Dekorasi Citayam" className="navbar-logo" style={{ margin: '0 auto 8px', display: 'block' }} />
          <p className="footer-name">Dekorasi Citayam</p>
          <p className="footer-tagline">Dekorasi Memukau, Kenangan Tak Terlupakan, Bersama Dekorasi Citayam.</p>
        </div>
        <p className="footer-copy">© 2026 Dekorasi Citayam. All rights reserved.</p>
      </footer>
    </>
  )
}
