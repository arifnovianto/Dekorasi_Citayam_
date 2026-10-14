import { useState, useRef, useEffect } from 'react'
import heroImg from './assets/Logo.png'
import './App.css'

// ── Data paket per dekorasi ───────────────────────────────────────────────────
const paketData = {
  'Dekorasi Jacinta': {
    hargaCoret: 'Rp. 800.000',
    harga:      'Rp. 650.000',
    gambar:     '/img/Paket Jacinta.png',
    fasilitas: [
      'Backdrop ukuran (-/+) 3 Meter',
      'Besi lingkaran (-/+) 2 Meter',
      '2 Kursi Tiffany',
      'Mix bunga',
      '2 Standing Flowers',
      '1 Buah lampu bunga almond',
      '2 Buah lampu sorot',
      'Karpet Putih',
    ],
    bonus: [
      'Free jasa bongkar pasang',
      'Free ongkir daerah citayam',
      'Free sewa ring cincin',
      'Free sewa bouquet flowers',
      'Free stayrofome name',
      'Free welcome sign',
    ],
    addOn: [
      { label: 'Paket Jacinta + MUA', harga: 'Rp 1.200.000' },
      { label: 'Paket Jacinta + FG',  harga: 'Rp 1.300.000' },
      { label: 'Paket Jacinta + MC',  harga: 'Rp 1.250.000' },
      { label: 'Paket Jacinta + MUA + FG + MC', harga: 'Rp 2.450.000' },
    ],
  },
}

// ── Paket default untuk dekorasi yang belum punya data ────────────────────────
function getPaket(name) {
  return paketData[name] ?? {
    hargaCoret: null,
    harga: 'Hubungi Kami',
    gambar: null,
    fasilitas: [
      'Backdrop ukuran (-/+) 3 Meter',
      'Besi lingkaran (-/+) 2 Meter',
      '2 Kursi Tiffany',
      'Mix bunga',
      '2 Standing Flowers',
      '1 Buah lampu bunga almond',
      '2 Buah lampu sorot',
      'Karpet Putih',
    ],
    bonus: [
      'Free jasa bongkar pasang',
      'Free ongkir daerah citayam',
      'Free sewa ring cincin',
      'Free sewa bouquet flowers',
      'Free stayrofome name',
      'Free welcome sign',
    ],
    addOn: [],
  }
}

// ── Data dekorasi ─────────────────────────────────────────────────────────────
const dekorasiList = [
  { id: 1,  name: 'Dekorasi Rosella',    img: '/img/Rosella.png',       desc: 'Percantik acaramu dengan Rosella yang memukau. Nuansa merah mawar yang elegan membuat setiap momen tak terlupakan.' },
  { id: 2,  name: 'Dekorasi Geranium',   img: '/img/Geranium.png',      desc: 'Hadirkan keindahan Geranium untuk acara spesialmu. Perpaduan warna biru dan putih yang memesona menciptakan suasana yang magis.' },
  { id: 3,  name: 'Dekorasi Alyssa',     img: '/img/Alyssa.png',        desc: 'Tampilkan kemewahan dengan Alyssa, dekorasi premium sentuhan bunga biru yang menawan. Jadikan kenangan indah tak terlupakan.' },
  { id: 4,  name: 'Dekorasi Irish',      img: '/img/Irish.png',         desc: 'Percantik acaramu dengan Irish nuansa hijau alami. Jadikan dekorasi lebih menawan. Sewa Irish sekarang dan rasakan pesonanya!' },
  { id: 5,  name: 'Dekorasi Daisy',      img: '/img/Daisy.png',         desc: 'Hadirkan kesegaran Daisy untuk momen istimewamu. Dekorasi bunga putih segar yang mempesona membuat setiap tamu terkagum.' },
  { id: 6,  name: 'Dekorasi Jacinta',    img: '/img/Paket Jacinta.png', desc: 'Hadirkan keindahan Jacinta yang menawan untuk acaramu. Perpaduan bunga memesona menciptakan suasana elegan dan berkesan.' },
  { id: 7,  name: 'Dekorasi Lavender',   img: '/img/Lavender.png',      desc: 'Hadirkan ketenangan Lavender untuk acaramu. Nuansa ungu lembut yang memikat hati menciptakan suasana romantis tak terlupakan.' },
  { id: 8,  name: 'Dekorasi Magnolia',   img: '/img/Magnolia.png',      desc: 'Tampilkan kemewahan Magnolia dengan kelopak bunga putih bersih yang megah. Cocok untuk pernikahan dan acara formal.' },
  { id: 9,  name: 'Dekorasi Aurora',     img: '/img/Aurora.png',        desc: 'Biarkan Aurora menerangi acaramu dengan kombinasi warna pastel yang memukau. Dekorasi impian untuk momen paling istimewa.' },
  { id: 10, name: 'Dekorasi Jasmine',    img: '/img/Jasmine.png',       desc: 'Rasakan kesegaran alami Jasmine dalam setiap sudut dekorasi acaramu. Bunga melati putih harum untuk momen penuh makna.' },
  { id: 11, name: 'Dekorasi Peony',      img: '/img/Peony.png',         desc: 'Percantik acaramu dengan kemewahan Peony. Bunga peoni merah muda yang elegan menjadikan setiap foto terlihat sempurna.' },
  { id: 12, name: 'Dekorasi Orchid',     img: '/img/Orchid.png',        desc: 'Hadirkan keanggunan tiada tara dengan Orchid. Anggrek eksotis yang menawan untuk acara berkelas dan berkesan.' },
]

// ── Data testimoni ────────────────────────────────────────────────────────────
const testimonials = [
  { id: 1, name: 'Sari & Budi',     event: 'Pernikahan',       rating: 5, avatar: '💍', text: 'Dekorasi Citayam benar-benar luar biasa! Pernikahan kami jadi sangat indah dan tak terlupakan. Tim mereka sangat profesional dan ramah.' },
  { id: 2, name: 'Rina Kurniawati', event: 'Ulang Tahun',      rating: 5, avatar: '🎂', text: 'Pesta ulang tahun anakku jadi sangat meriah berkat Dekorasi Citayam. Dekorasinya cantik, harganya terjangkau, pelayanannya memuaskan.' },
  { id: 3, name: 'Pak Hendra',      event: 'Acara Perusahaan', rating: 5, avatar: '🏢', text: 'Kami mempercayakan dekorasi acara tahunan perusahaan kepada Dekorasi Citayam. Hasilnya melebihi ekspektasi. Profesional dan tepat waktu.' },
  { id: 4, name: 'Dewi & Reza',     event: 'Pernikahan',       rating: 5, avatar: '💐', text: 'Mimpi kami jadi kenyataan! Dekorasi pernikahan kami begitu elegan dan romantis. Setiap detail diperhatikan dengan baik. Sangat puas!' },
]

const ITEMS_PER_PAGE = 6

export default function App() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [page, setPage]           = useState(0)
  const [selected, setSelected]   = useState(null)
  const [paketModal, setPaketModal] = useState(null) // dekorasi yang dibuka paketnya

  const katalogRef = useRef(null)

  const totalPages   = Math.ceil(dekorasiList.length / ITEMS_PER_PAGE)
  const visibleItems = dekorasiList.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE)

  // Lock scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = paketModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [paketModal])

  function scrollTo(href) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  function handleNavClick(e, href) {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  function handleLihatSekarang(item) {
    setSelected(item)
    setTimeout(() => {
      if (katalogRef.current) katalogRef.current.scrollIntoView({ behavior: 'smooth' })
    }, 30)
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
      {/* ════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════ */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={heroImg} alt="Logo Dekorasi Citayam" className="navbar-logo" />
          <span className="navbar-title">Dekorasi Citayam</span>
        </div>
        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
          <li><a href="#home"         onClick={e => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#about"        onClick={e => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#services"     onClick={e => handleNavClick(e, '#services')}>Services</a></li>
          <li><a href="#testimonials" onClick={e => handleNavClick(e, '#testimonials')}>Testimonials</a></li>
          <li>
            <a href="#katalog"
              className={selected ? 'nav-active' : ''}
              onClick={e => { e.preventDefault(); setMenuOpen(false); if (katalogRef.current) katalogRef.current.scrollIntoView({ behavior: 'smooth' }) }}
            >Katalog</a>
          </li>
          <li><a href="#contact" onClick={e => handleNavClick(e, '#contact')}>Contact us</a></li>
        </ul>
      </nav>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
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
        <div className="section-accent"></div>
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
              pesta ulang tahun yang meriah, semua kami tangani dengan penuh dedikasi.
            </p>
            <p className="about-desc">
              Dengan pengalaman lebih dari 5 tahun dan ratusan acara sukses, tim kami siap
              memberikan pelayanan terbaik, harga terjangkau, dan hasil yang melampaui ekspektasi.
            </p>
            <div className="about-stats">
              <div className="about-stat"><span className="about-stat-num">500+</span><span className="about-stat-label">Acara Sukses</span></div>
              <div className="about-stat"><span className="about-stat-num">200+</span><span className="about-stat-label">Klien Puas</span></div>
              <div className="about-stat"><span className="about-stat-num">15+</span><span className="about-stat-label">Jenis Paket</span></div>
            </div>
            <a href="#services" className="hero-btn" onClick={e => handleNavClick(e, '#services')}>
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════ */}
      <section id="services" className="services-section">
        <h2 className="services-heading">Decoration List</h2>
        <p className="services-subtitle">✦ Pilih Dekorasi Terbaik Untuk Acaramu ✦</p>
        <div className="services-carousel">
          <button className="carousel-btn prev" onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} aria-label="Previous">&#8249;</button>
          <div className="services-grid">
            {visibleItems.map(item => (
              <div key={item.id} className="deko-card">
                <div className="deko-card-img-wrap">
                  <img src={item.img} alt={item.name} className="deko-card-img"
                    onError={e => { e.currentTarget.src = '/img/Paket Jacinta.png' }} />
                </div>
                <p className="deko-card-name">{item.name}</p>
                <button className="deko-btn" onClick={() => handleLihatSekarang(item)}>Lihat Sekarang</button>
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

      {/* ════════════════════════════════════════
          KATALOG
      ════════════════════════════════════════ */}
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
                <div className="detail-actions">
                  <button className="deko-btn" onClick={handleLihatPaket}>Lihat Paket</button>
                  <button className="deko-btn deko-btn-outline" onClick={handleKembali}>Kembali</button>
                </div>
              </div>
              <div className="detail-img-wrap">
                <div className="detail-img-circle">
                  <img src={selected.img} alt={selected.name} className="detail-img"
                    onError={e => { e.currentTarget.src = '/img/Paket Jacinta.png' }} />
                </div>
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
        <div className="testi-top-line"></div>
        <p className="section-label">Testimoni</p>
        <h2 className="section-title">Apa Kata Mereka?</h2>
        <p className="section-sub">Ratusan pelanggan telah mempercayakan momen spesial mereka kepada kami.</p>
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
        <div className="contact-top-line"></div>
        <div className="contact-content">
          <div className="contact-info">
            <p className="section-label">Hubungi Kami</p>
            <h2 className="section-title" style={{ color: '#fff' }}>Siap Wujudkan<br />Acara Impianmu?</h2>
            <p className="contact-desc">Konsultasikan kebutuhanmu bersama tim kami. Kami siap membantu merancang dekorasi terbaik untuk momen spesialmu.</p>
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
              <div className="form-group"><label htmlFor="fname">Nama Lengkap</label><input id="fname" type="text" placeholder="Masukkan nama lengkap" /></div>
              <div className="form-group"><label htmlFor="fphone">Nomor WhatsApp</label><input id="fphone" type="tel" placeholder="+62 8xx-xxxx-xxxx" /></div>
              <div className="form-group">
                <label htmlFor="fevent">Jenis Acara</label>
                <select id="fevent">
                  <option value="">-- Pilih Jenis Acara --</option>
                  <option>Pernikahan</option><option>Ulang Tahun</option>
                  <option>Acara Perusahaan</option><option>Lainnya</option>
                </select>
              </div>
              <div className="form-group"><label htmlFor="fmsg">Pesan</label><textarea id="fmsg" rows={4} placeholder="Ceritakan detail acara Anda..."></textarea></div>
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
          <img src={heroImg} alt="Logo" className="navbar-logo" style={{ margin: '0 auto 8px', display: 'block' }} />
          <p className="footer-name">Dekorasi Citayam</p>
          <p className="footer-tagline">Dekorasi Memukau, Kenangan Tak Terlupakan, Bersama Dekorasi Citayam.</p>
        </div>
        <p className="footer-copy">© 2026 Dekorasi Citayam. All rights reserved.</p>
      </footer>

      {/* ════════════════════════════════════════
          MODAL PAKET
      ════════════════════════════════════════ */}
      {paketModal && (() => {
        const p = getPaket(paketModal.name)
        const imgSrc = p.gambar ?? paketModal.img
        return (
          <div className="modal-backdrop" onClick={() => setPaketModal(null)}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
              {/* Close button */}
              <button className="modal-close" onClick={() => setPaketModal(null)} aria-label="Tutup">✕</button>

              {/* Header nama + harga */}
              <div className="modal-header">
                <div className="modal-title-row">
                  <h2 className="modal-name">{paketModal.name.replace('Dekorasi ', '').toUpperCase()}</h2>
                  {p.hargaCoret && <span className="modal-harga-coret">{p.hargaCoret}</span>}
                </div>
                <p className="modal-harga">{p.harga}</p>
              </div>

              {/* Foto paket */}
              <div className="modal-img-wrap">
                <img src={imgSrc} alt={paketModal.name} className="modal-img"
                  onError={e => { e.currentTarget.src = '/img/Paket Jacinta.png' }} />
              </div>

              {/* Fasilitas + Bonus */}
              <div className="modal-features">
                <ul className="modal-list">
                  {p.fasilitas.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
                <ul className="modal-list">
                  {p.bonus.map((b, i) => <li key={i}>• {b}</li>)}
                </ul>
              </div>

              {/* Add-on */}
              {p.addOn.length > 0 && (
                <div className="modal-addon">
                  {p.addOn.map((a, i) => (
                    <p key={i}>{a.label} = {a.harga}</p>
                  ))}
                </div>
              )}

              <button className="deko-btn modal-order-btn"
                onClick={() => { setPaketModal(null); scrollTo('#contact') }}>
                Pesan Sekarang
              </button>
            </div>
          </div>
        )
      })()}
    </>
  )
}
