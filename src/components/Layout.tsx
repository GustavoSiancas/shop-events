import { useState } from 'react'
import { AtSign, Menu, MessageCircle, ShoppingBag, Sparkles, X } from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BUSINESS_NAME, INSTAGRAM_URL, TIKTOK_URL } from '../config'
import { useCart } from '../hooks/useCart'
import { whatsappUrl } from '../utils/whatsapp'

export function Layout() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const links = [['/', 'Inicio'], ['/tienda', 'Tienda'], ['/#categorias', 'Categorías'], ['/#videos', 'Videos'], ['/#contacto', 'Contacto']]
  return <>
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand"><span className="brand-mark"><Sparkles size={18}/></span><span>{BUSINESS_NAME}<small>detalles & celebraciones</small></span></Link>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Navegación principal">
          {links.map(([to, label]) => <NavLink key={label} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
        <div className="nav-actions">
          <Link to="/carrito" className="icon-button" aria-label={`Carrito con ${count} productos`}><ShoppingBag size={21}/>{count > 0 && <span className="cart-badge">{count}</span>}</Link>
          <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menú">{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
    </header>
    <main><Outlet/></main>
    <footer className="footer">
      <div className="container footer-grid">
        <div><Link to="/" className="brand brand-light"><span className="brand-mark"><Sparkles size={18}/></span><span>{BUSINESS_NAME}<small>detalles & celebraciones</small></span></Link><p>Creamos detalles que guardan la emoción de tus momentos más especiales.</p></div>
        <div><h4>Explora</h4><Link to="/">Inicio</Link><Link to="/tienda">Tienda</Link><Link to="/#contacto">Contacto</Link></div>
        <div><h4>Celebra</h4><Link to="/tienda?categoria=quinceaneros">Quinceañeros</Link><Link to="/tienda?categoria=matrimonios">Matrimonios</Link><Link to="/tienda?categoria=bautizos">Bautizos</Link></div>
        <div><h4>Conversemos</h4><a href={whatsappUrl('Hola, quisiera conocer sus productos.')} target="_blank"><MessageCircle size={16}/> WhatsApp</a><a href={INSTAGRAM_URL} target="_blank"><AtSign size={16}/> Instagram</a><a href={TIKTOK_URL} target="_blank">TikTok</a></div>
      </div>
      <div className="container footer-bottom">© 2026 {BUSINESS_NAME}. Todos los derechos reservados.</div>
    </footer>
    <a className="whatsapp-float" href={whatsappUrl('Hola, quisiera conocer sus productos.')} target="_blank" aria-label="Escríbenos por WhatsApp"><MessageCircle/></a>
  </>
}
