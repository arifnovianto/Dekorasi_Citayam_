export default function Navbar({ menuOpen, setMenuOpen, activeSection, katalogRef }) {
  const logoImg = '/img/Logo.png'

  function handleNavClick(e, href) {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logoImg} alt="Logo Dekorasi Citayam" className="navbar-logo" />
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
        {[
          { id: 'home',         label: 'Home' },
          { id: 'about',        label: 'About' },
          { id: 'services',     label: 'Services' },
          { id: 'testimonials', label: 'Testimonials' },
        ].map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'nav-active' : ''}
              onClick={e => handleNavClick(e, `#${id}`)}
            >
              {label}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#katalog"
            className={activeSection === 'katalog' ? 'nav-active' : ''}
            onClick={e => {
              e.preventDefault()
              setMenuOpen(false)
              if (katalogRef.current) katalogRef.current.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Katalog
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'nav-active' : ''}
            onClick={e => handleNavClick(e, '#contact')}
          >
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  )
}
