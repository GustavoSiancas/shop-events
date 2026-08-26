import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { categoryLabels, products } from '../data/products'
import type { ProductCategory } from '../types/product'

export function Store() {
  const [params, setParams] = useSearchParams(); const [query, setQuery] = useState(''); const [filtersOpen, setFiltersOpen] = useState(false)
  const category = params.get('categoria') as ProductCategory | null
  const filtered = useMemo(() => products.filter((product) => (!category || product.category === category) && `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase())), [category, query])
  const setCategory = (value: string) => { setParams(value ? { categoria: value } : {}); setFiltersOpen(false) }
  return <div className="page store-page"><div className="store-hero"><div className="container"><p className="kicker">Nuestra colección</p><h1>Detalles creados para <em>celebrar</em></h1><p>Encuentra ese detalle especial y personalízalo para hacerlo completamente tuyo.</p></div></div><div className="container store-layout"><button className="filter-toggle" onClick={() => setFiltersOpen(true)}><SlidersHorizontal size={18}/> Filtros</button><aside className={filtersOpen ? 'filters open' : 'filters'}><button className="filter-close" onClick={() => setFiltersOpen(false)}><X/></button><p className="filter-title">Categorías</p><button className={!category ? 'active' : ''} onClick={() => setCategory('')}>Todos <span>{products.length}</span></button>{Object.entries(categoryLabels).map(([key, label]) => <button className={category === key ? 'active' : ''} key={key} onClick={() => setCategory(key)}>{label}<span>{products.filter(p => p.category === key).length}</span></button>)}<div className="filter-note"><strong>¿Buscas algo único?</strong><p>Todos nuestros productos pueden adaptarse a tu celebración.</p></div></aside><div className="store-content"><div className="store-toolbar"><div className="search"><Search size={19}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar productos..."/></div><span>{filtered.length} productos</span></div>{filtered.length ? <div className="product-grid store-grid">{filtered.map((p) => <ProductCard product={p} key={p.id}/>)}</div> : <div className="empty-state"><Search/><h2>No encontramos coincidencias</h2><p>Prueba con otra palabra o categoría.</p><button className="button primary" onClick={() => {setQuery(''); setCategory('')}}>Limpiar filtros</button></div>}</div></div>{filtersOpen && <div className="backdrop" onClick={() => setFiltersOpen(false)}/>}</div>
}
