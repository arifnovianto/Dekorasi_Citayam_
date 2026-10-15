import { getPaket } from '../data/dekorasi'

const FALLBACK_IMG = '/img/Logo.png'

export default function ModalPaket({ dekorasi, onClose, onOrder }) {
  if (!dekorasi) return null

  const p      = getPaket(dekorasi.name)
  const imgSrc = p.gambar ?? dekorasi.img

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className="modal-close" onClick={onClose} aria-label="Tutup">✕</button>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-row">
            <h2 className="modal-name">
              {dekorasi.name.replace('Dekorasi ', '').toUpperCase()}
            </h2>
            {p.hargaCoret && (
              <span className="modal-harga-coret">{p.hargaCoret}</span>
            )}
          </div>
          <p className="modal-harga">{p.harga}</p>
        </div>

        {/* Foto */}
        <div className="modal-img-wrap">
          <img
            src={imgSrc}
            alt={dekorasi.name}
            className="modal-img"
            onError={e => { e.currentTarget.src = FALLBACK_IMG }}
          />
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

        <button className="deko-btn modal-order-btn" onClick={onOrder}>
          Pesan Sekarang
        </button>
      </div>
    </div>
  )
}
