import { useState, useRef } from 'react'
import heroImg from './img/Logo.png'
import './App.css'

<<<<<<< Updated upstream
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
=======
// ── Fasilitas & bonus standar ─────────────────────────────────────────────────
const bonusStandar = [
  'Free jasa bongkar pasang',
  'Free ongkir daerah citayam',
  'Free sewa ring cincin',
  'Free sewa bouquet flowers',
  'Free stayrofome name',
  'Free welcome sign',
]

// ── Data paket per dekorasi (dari Price List 2025) ────────────────────────────
const paketData = {
  'Dekorasi Jacinta': {
    hargaCoret: 'Rp. 800.000', harga: 'Rp. 650.000',
    gambar: '/img/Paket Jacinta.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi lingkaran (-/+) 2 Meter','2 Kursi Tiffany','Mix bunga','2 Standing Flowers','1 Buah lampu bunga almond','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Jacinta + MUA', harga: 'Rp 1.200.000' },
      { label: 'Paket Jacinta + FG',  harga: 'Rp 1.300.000' },
      { label: 'Paket Jacinta + MC',  harga: 'Rp 1.250.000' },
      { label: 'Paket Jacinta + MUA + FG + MC', harga: 'Rp 2.450.000' },
    ],
  },
  'Dekorasi Hazel': {
    hargaCoret: 'Rp. 850.000', harga: 'Rp. 700.000',
    gambar: '/img/Hazel.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi lingkaran (-/+) 2 Meter','2 Kursi Tiffany','Mix bunga dan daun palem','2 Standing Flowers','1 Buah lampu bunga almond','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Hazel + MUA', harga: 'Rp 1.250.000' },
      { label: 'Paket Hazel + FG',  harga: 'Rp 1.350.000' },
      { label: 'Paket Hazel + MC',  harga: 'Rp 1.300.000' },
      { label: 'Paket Hazel + MUA + FG', harga: 'Rp 2.500.000' },
    ],
  },
  'Dekorasi Ivy': {
    hargaCoret: 'Rp. 900.000', harga: 'Rp. 750.000',
    gambar: '/img/Ivy.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi & kain lingkaran (-/+) 2 Meter','2 Kursi Tiffany','Mix bunga','1 Buah lampu apel','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Ivy + MUA', harga: 'Rp 1.300.000' },
      { label: 'Paket Ivy + FG',  harga: 'Rp 1.400.000' },
      { label: 'Paket Ivy + MC',  harga: 'Rp 1.350.000' },
      { label: 'Paket Ivy + MUA + FG + MC', harga: 'Rp 2.550.000' },
    ],
  },
  'Dekorasi Azalea': {
    hargaCoret: 'Rp. 900.000', harga: 'Rp. 700.000',
    gambar: '/img/Azalea.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi & Kain lingkaran (-/+) 2 Meter','2 Kursi Tiffany','Mix bunga dan palem','2 Standing Flowers','1 Buah lampu apel','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Azalea + MUA', harga: 'Rp 1.250.000' },
      { label: 'Paket Azalea + FG',  harga: 'Rp 1.350.000' },
      { label: 'Paket Azalea + MC',  harga: 'Rp 1.300.000' },
      { label: 'Paket Azalea + MUA + FG + MC', harga: 'Rp 2.500.000' },
    ],
  },
  'Dekorasi Heather': {
    hargaCoret: 'Rp. 900.000', harga: 'Rp. 750.000',
    gambar: '/img/Heather.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi & Kain lingkaran (-/+) 2 Meter','2 Kursi Tiffany','Mix bunga dan palem','2 Standing Flowers','1 Buah lampu apel','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Heather + MUA', harga: 'Rp 1.300.000' },
      { label: 'Paket Heather + FG',  harga: 'Rp 1.400.000' },
      { label: 'Paket Heather + MC',  harga: 'Rp 1.350.000' },
      { label: 'Paket Heather + MUA + FG + MC', harga: 'Rp 2.550.000' },
    ],
  },
  'Dekorasi Lila': {
    hargaCoret: 'Rp. 950.000', harga: 'Rp. 750.000',
    gambar: '/img/Lila.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi lingkaran (-/+) 2 Meter','2 Kursi Tiffany','Mix bunga dan daun palem','2 Standing Flowers','1 Buah lampu bunga almond','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Lila + MUA', harga: 'Rp 1.300.000' },
      { label: 'Paket Lila + FG',  harga: 'Rp 1.400.000' },
      { label: 'Paket Lila + MC',  harga: 'Rp 1.350.000' },
      { label: 'Paket Lila + MUA + FG + MC', harga: 'Rp 2.550.000' },
    ],
  },
  'Dekorasi Rosella': {
    hargaCoret: 'Rp. 950.000', harga: 'Rp. 800.000',
    gambar: '/img/Rosella.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi & kain lingkaran (-/+) 2 Meter','2 Kursi Tiffany dan bantal','Mix bunga','2 Standing Flowers','1 Buah lampu bunga almond','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Rosella + MUA', harga: 'Rp 1.350.000' },
      { label: 'Paket Rosella + FG',  harga: 'Rp 1.450.000' },
      { label: 'Paket Rosella + MC',  harga: 'Rp 1.400.000' },
      { label: 'Paket Rosella + MUA + FG + MC', harga: 'Rp 2.600.000' },
    ],
  },
  'Dekorasi Geranium': {
    hargaCoret: 'Rp. 950.000', harga: 'Rp. 850.000',
    gambar: '/img/Geranium.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi & kain lingkaran (-/+) 2 Meter','2 Kursi Tiffany dan bantal','Mix bunga','2 Standing Flowers','1 Buah lampu bunga almond','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Geranium + MUA', harga: 'Rp 1.400.000' },
      { label: 'Paket Geranium + FG',  harga: 'Rp 1.500.000' },
      { label: 'Paket Geranium + MC',  harga: 'Rp 1.450.000' },
      { label: 'Paket Geranium + MUA + FG + MC', harga: 'Rp 2.650.000' },
    ],
  },
  'Dekorasi Alyssa': {
    hargaCoret: 'Rp. 700.000', harga: 'Rp. 550.000',
    gambar: '/img/Alyssa.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','2 bantal lesehan','Mix bunga','2 Standing Flowers','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Alyssa + MUA', harga: 'Rp 1.100.000' },
      { label: 'Paket Alyssa + FG',  harga: 'Rp 1.200.000' },
      { label: 'Paket Alyssa + MC',  harga: 'Rp 1.150.000' },
      { label: 'Paket Alyssa + MUA + FG + MC', harga: 'Rp 2.350.000' },
    ],
  },
  'Dekorasi Irish': {
    hargaCoret: 'Rp. 1.100.000', harga: 'Rp. 900.000',
    gambar: '/img/Irish.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi & kain lingkaran (-/+) 2 Meter','2 Kursi Tiffany dan bantal','1 Buah lampu bunga apel/almond (pilihan)','Mix bunga dan palem (pilihan)','2 Standing Flowers','Lampu LED full lingkaran','1 Set lampu gantung','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Irish + MUA', harga: 'Rp 1.450.000' },
      { label: 'Paket Irish + FG',  harga: 'Rp 1.550.000' },
      { label: 'Paket Irish + MC',  harga: 'Rp 1.500.000' },
      { label: 'Paket Irish + MUA + FG + MC', harga: 'Rp 2.700.000' },
    ],
  },
  'Dekorasi Delphinium': {
    hargaCoret: 'Rp. 1.100.000', harga: 'Rp. 900.000',
    gambar: '/img/Delphinium.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi & kain lingkaran (-/+) 2 Meter','2 Kursi Tiffany dan bantal','1 Buah lampu bunga apel/almond (pilihan)','Mix bunga dan palem (pilihan)','2 Standing Flowers','Lampu LED full lingkaran','1 Set lampu gantung','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Delphinium + MUA', harga: 'Rp 1.450.000' },
      { label: 'Paket Delphinium + FG',  harga: 'Rp 1.550.000' },
      { label: 'Paket Delphinium + MC',  harga: 'Rp 1.500.000' },
      { label: 'Paket Delphinium + MUA + FG + MC', harga: 'Rp 2.700.000' },
    ],
  },
  'Dekorasi Daisy': {
    hargaCoret: 'Rp. 1.100.000', harga: 'Rp. 900.000',
    gambar: '/img/Daisy.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi & kain lingkaran (-/+) 2 Meter','2 Kursi Tiffany dan bantal','1 Buah lampu bunga apel/almond (pilihan)','Mix bunga dan palem (pilihan)','2 Standing Flowers','Lampu LED full lingkaran','1 Set lampu gantung','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Daisy + MUA', harga: 'Rp 1.450.000' },
      { label: 'Paket Daisy + FG',  harga: 'Rp 1.550.000' },
      { label: 'Paket Daisy + MC',  harga: 'Rp 1.500.000' },
      { label: 'Paket Daisy + MUA + FG + MC', harga: 'Rp 2.700.000' },
    ],
  },
  'Dekorasi Jasmine': {
    hargaCoret: 'Rp. 1.250.000', harga: 'Rp. 1.000.000',
    gambar: '/img/Jasmine.png',
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi & Kain lingkaran (-/+) 2 Meter','2 Besi Oval flowers','2 Kursi Tiffany dan bantal','Mix bunga','2 Standing Flowers','1 Buah lampu bunga almond','2 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar,
    addOn: [
      { label: 'Paket Jasmine + MUA', harga: 'Rp 1.550.000' },
      { label: 'Paket Jasmine + FG',  harga: 'Rp 1.650.000' },
      { label: 'Paket Jasmine + MC',  harga: 'Rp 1.600.000' },
      { label: 'Paket Jasmine + MUA + FG + MC', harga: 'Rp 2.800.000' },
    ],
  },
  'Dekorasi HBD': {
    hargaCoret: 'Rp. 1.000.000', harga: 'Rp. 900.000',
    gambar: '/img/HBD.png',
    fasilitas: ['Dekorasi ulang tahun / khitanan tema pilihan','Balon dekorasi custom','Properti sesuai tema'],
    bonus: bonusStandar,
    addOn: [],
  },
}

function getPaket(name) {
  return paketData[name] ?? {
    hargaCoret: null, harga: 'Hubungi Kami', gambar: null,
    fasilitas: ['Backdrop ukuran (-/+) 3 Meter','Besi lingkaran (-/+) 2 Meter','2 Kursi Tiffany','Mix bunga','2 Standing Flowers','1 Buah lampu sorot','Karpet Putih'],
    bonus: bonusStandar, addOn: [],
  }
}

// ── Data dekorasi (sesuai Price List 2025) ────────────────────────────────────
const dekorasiList = [
  // Halaman 1
  { id: 1,  name: 'Dekorasi Jacinta',    img: '/img/Jacinta.png', desc: 'Backdrop besi lingkaran dengan mix bunga elegan. Lengkap dengan standing flowers dan lampu bunga almond. Cocok untuk pernikahan dan akad nikah.' },
  { id: 2,  name: 'Dekorasi Hazel',      img: '/img/Hazel.png',         desc: 'Nuansa tropis dengan mix bunga dan daun palem. Besi lingkaran dihiasi lampu gantung yang hangat untuk suasana acara yang memukau.' },
  { id: 3,  name: 'Dekorasi Ivy',        img: '/img/Ivy.png',           desc: 'Besi & kain lingkaran dengan sentuhan mix bunga segar. Tampilan bersih dan modern cocok untuk berbagai jenis acara spesial.' },
  { id: 4,  name: 'Dekorasi Azalea',     img: '/img/Azalea.png',        desc: 'Perpaduan besi & kain lingkaran dengan mix bunga dan palem. Elegan dan romantis untuk momen pernikahan yang tak terlupakan.' },
  { id: 5,  name: 'Dekorasi Heather',    img: '/img/Heather.png',       desc: 'Dekorasi kain lingkaran dengan mix bunga dan palem pilihan. Tampilan natural dan mewah yang cocok untuk acara pernikahan.' },
  { id: 6,  name: 'Dekorasi Lila',       img: '/img/Lila.png',          desc: 'Besi lingkaran dengan mix bunga dan daun palem yang cantik. Lampu bunga almond menambah keanggunan di setiap sudutnya.' },
  // Halaman 2
  { id: 7,  name: 'Dekorasi Rosella',    img: '/img/Rosella.png',       desc: 'Besi & kain lingkaran dengan 2 kursi Tiffany berbantal. Mix bunga merah mawar yang memukau untuk acara anniversary.' },
  { id: 8,  name: 'Dekorasi Geranium',   img: '/img/Geranium.png',      desc: 'Nuansa biru dan putih yang memesona dengan besi & kain lingkaran. Kursi Tiffany berbantal untuk kenyamanan ekstra.' },
  { id: 9,  name: 'Dekorasi Alyssa',     img: '/img/Alyssa.png',        desc: 'Dekorasi lesehan dengan backdrop lebar dan mix bunga indah. Cocok untuk acara yang ingin tampil beda dan elegan.' },
  { id: 10, name: 'Dekorasi Irish',      img: '/img/Irish.png',         desc: 'Paket premium dengan LED full lingkaran & lampu gantung. Mix bunga dan palem pilihan untuk acara berkelas.' },
  { id: 11, name: 'Dekorasi Delphinium', img: '/img/Delphinium.png',    desc: 'Paket premium LED full lingkaran dengan sentuhan biru elegan. Besi & kain lingkaran untuk tampilan mewah.' },
  { id: 12, name: 'Dekorasi Daisy',      img: '/img/Daisy.png',         desc: 'Tersedia pilihan A & B. LED full lingkaran dengan mix bunga dan palem. Tampilan natural dan hangat untuk semua acara.' },
  // Halaman 3
  { id: 13, name: 'Dekorasi Jasmine',    img: '/img/Jasmine.png',       desc: 'Paket lengkap dengan 2 besi oval flowers. Mix bunga merah muda yang cantik dan lampu bunga almond untuk kesan romantis.' },
  { id: 14, name: 'Dekorasi HBD',        img: '/img/HBD.png',           desc: 'Paket dekorasi ulang tahun & khitanan dengan balon custom. Berbagai pilihan tema sesuai keinginan si kecil maupun dewasa.' },
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage]         = useState(0)
  const [selected, setSelected] = useState(null)   // dekorasi yang dipilih
=======
  const [menuOpen, setMenuOpen]     = useState(false)
  const [page, setPage]             = useState(0)
  const [selected, setSelected]     = useState(null)
  const [paketModal, setPaketModal] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
>>>>>>> Stashed changes

  const katalogRef = useRef(null)

  const totalPages   = Math.ceil(dekorasiList.length / ITEMS_PER_PAGE)
  const visibleItems = dekorasiList.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE)

<<<<<<< Updated upstream
  // scroll ke elemen berdasarkan selector
=======
  // Lock scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = paketModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [paketModal])

  // Detect section aktif saat scroll
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'katalog', 'testimonials', 'contact']
    const observers = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

>>>>>>> Stashed changes
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
          <li><a href="#home"         className={activeSection === 'home'         ? 'nav-active' : ''} onClick={e => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#about"        className={activeSection === 'about'        ? 'nav-active' : ''} onClick={e => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#services"     className={activeSection === 'services'     ? 'nav-active' : ''} onClick={e => handleNavClick(e, '#services')}>Services</a></li>
          <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'nav-active' : ''} onClick={e => handleNavClick(e, '#testimonials')}>Testimonials</a></li>
          <li>
<<<<<<< Updated upstream
            <a
              href="#katalog"
              className={selected ? 'nav-active' : ''}
=======
            <a href="#katalog"
              className={activeSection === 'katalog' ? 'nav-active' : ''}
>>>>>>> Stashed changes
              onClick={e => { e.preventDefault(); setMenuOpen(false); if (katalogRef.current) katalogRef.current.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Katalog
            </a>
          </li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'nav-active' : ''} onClick={e => handleNavClick(e, '#contact')}>Contact us</a></li>
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
              Dekorasi Memukau, Kenangan Tak Terlupakan Bersama Dekorasi Citayam.
            </p>
            {/* Tombol di desktop — di dalam teks (kiri) */}
            <a href="#services" className="hero-btn hero-btn-desktop" onClick={e => handleNavClick(e, '#services')}>
              Selanjutnya
            </a>
          </div>
          <div className="hero-logo-wrap">
            <div className="hero-logo-ring">
              <img src={heroImg} alt="Logo Dekorasi Citayam" className="hero-logo-img" />
            </div>
          </div>
          {/* Tombol di mobile — di bawah logo */}
          <a href="#services" className="hero-btn hero-btn-mobile" onClick={e => handleNavClick(e, '#services')}>
            Selanjutnya
          </a>
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
<<<<<<< Updated upstream
                  <img src={item.img} alt={item.name} className="deko-card-img" />
=======
                  <img src={item.img} alt={item.name} className="deko-card-img"
                    onError={e => { e.currentTarget.src = heroImg }} />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                <div className="detail-actions">
                  <button className="deko-btn" onClick={() => handleNavClick({ preventDefault: () => {} }, '#contact')}>
                    Lihat Paket
                  </button>
                  <button className="deko-btn deko-btn-outline" onClick={handleKembali}>
                    Kembali
                  </button>
=======
                {/* Tombol di desktop (hidden di mobile) */}
                <div className="detail-actions detail-actions-desktop">
                  <button className="deko-btn" onClick={handleLihatPaket}>Lihat Paket</button>
                  <button className="deko-btn deko-btn-outline" onClick={handleKembali}>Kembali</button>
>>>>>>> Stashed changes
                </div>
              </div>
              <div className="detail-img-wrap">
                <div className="detail-img-circle">
<<<<<<< Updated upstream
                  <img src={selected.img} alt={selected.name} className="detail-img" />
=======
                  <img src={selected.img} alt={selected.name} className="detail-img"
                    onError={e => { e.currentTarget.src = heroImg }} />
>>>>>>> Stashed changes
                </div>
              </div>
              {/* Tombol di mobile (hidden di desktop) */}
              <div className="detail-actions detail-actions-mobile">
                <button className="deko-btn" onClick={handleLihatPaket}>Lihat Paket</button>
                <button className="deko-btn deko-btn-outline" onClick={handleKembali}>Kembali</button>
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
              <li><span className="contact-icon">📍</span><span>Jl. Masjid Nurul Ihsan , Kampung Baru, Jl. Desa Citayam, Ragajaya, Kecamatan Bojonggede, Kabupaten Bogor, Jawa Barat 16920</span></li>
              <li><span className="contact-icon">📞</span><span>+62 8953-3226-0872 </span></li>
              <li><span className="contact-icon">📧</span><span>dekorasi-citayam.vercel.app</span></li>
              <li><span className="contact-icon">🕐</span><span>Senin – Minggu, 08.00 – 20.00 WIB</span></li>
            </ul>
            <div className="contact-socials">
              <a
                href="https://wa.me/62895332260872"
                className="social-btn"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 WhatsApp
              </a>
              <a
                href="https://instagram.com/dekorasicitayam"
                className="social-btn"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷 Instagram
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
<<<<<<< Updated upstream
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
=======
            <div className="syarat-box">
              <h3 className="syarat-title">Syarat &amp; Ketentuan</h3>
              <ol className="syarat-list">
                <li>Wajib follow instagram <strong>@dekorasicitayam</strong></li>
                <li>Free ongkir khusus daerah citayam, apabila acara diluar daerah citayam ongkir akan disesuaikan</li>
                <li>Barang yang disewakan apabila hilang/rusak ditanggung oleh customer</li>
                <li>DP tanggal tidak bisa dikembalikan apabila acara batal termasuk DP MUA, FG dan MC</li>
                <li>Bersedia mengirimkan foto acaranya untuk kebutuhan marketing</li>
              </ol>

              <h3 className="syarat-title syarat-title-pembayaran">Pembayaran</h3>
              <ol className="syarat-list">
                <li>DP Tanggal acara <strong>RP.100.000</strong></li>
                <li>Pelunasan sewa dekorasi hari H setelah pemasangan backdrop</li>
                <li>Pembayaran transfer via Bank BCA <strong>7651745997</strong> a/n Rosdianah</li>
                <li>Bukti Transfer dikirimkan ke whatsapp admin dekorasi citayam <strong>(0895332260872)</strong></li>
              </ol>

              <div className="syarat-logo">
                <img src={heroImg} alt="Logo Dekorasi Citayam" className="syarat-logo-img" />
              </div>
            </div>
>>>>>>> Stashed changes
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
          <p className="footer-tagline">Dekorasi Memukau, Kenangan Tak Terlupakan.</p>
        </div>
        <p className="footer-copy">© 2024 Dekorasi Citayam. All rights reserved.</p>
      </footer>
    </>
  )
}
