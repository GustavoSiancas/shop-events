import { Check, Eye, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { categoryLabels } from '../data/products'
import type { Product } from '../types/product'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart(); const [added, setAdded] = useState(false)
  const handleAdd = () => { addItem(product); setAdded(true); window.setTimeout(() => setAdded(false), 1300) }
  return <article className="product-card">
    <Link to={`/producto/${product.slug}`} className="product-image"><img src={product.images[0]} alt={product.name} loading="lazy"/>{product.personalized && <span>Personalizable</span>}<div className="image-overlay"><Eye size={18}/> Ver detalle</div></Link>
    <div className="product-info"><p className="eyebrow">{categoryLabels[product.category]}</p><Link to={`/producto/${product.slug}`}><h3>{product.name}</h3></Link><div className="product-bottom"><strong>{product.price ? `S/ ${product.price.toFixed(2)}` : 'Consultar'}</strong><button className={added ? 'add-button added' : 'add-button'} onClick={handleAdd} aria-label={`Agregar ${product.name} al carrito`}>{added ? <Check/> : <ShoppingBag/>}<span>{added ? 'Agregado' : 'Agregar'}</span></button></div></div>
  </article>
}
