import type { Product, ProductCategory } from '../types/product'

export const categoryLabels: Record<ProductCategory, string> = {
  quinceaneros: 'Quinceañeros', matrimonios: 'Matrimonios', bautizos: 'Bautizos', promocion: 'Promoción escolar',
}

const photos = {
  quinceaneros: ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85'],
  matrimonios: ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85'],
  bautizos: ['https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=85'],
  promocion: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=85'],
}

export const products: Product[] = [
  { id: 1, name: 'Cofre de recuerdos XV', slug: 'cofre-recuerdos-xv', description: 'Un delicado cofre personalizado con nombre y fecha, perfecto para agradecer a quienes compartieron este día especial.', category: 'quinceaneros', price: 48, images: photos.quinceaneros, featured: true, personalized: true },
  { id: 2, name: 'Kit de brindis rosé', slug: 'kit-brindis-rose', description: 'Copas decoradas y estuche personalizado en una paleta rosa empolvada.', category: 'quinceaneros', price: 72, images: [photos.quinceaneros[1], photos.quinceaneros[0]], personalized: true },
  { id: 3, name: 'Invitación floral XV', slug: 'invitacion-floral-xv', description: 'Invitación con acabado mate, sobre artesanal y detalle floral.', category: 'quinceaneros', price: 8.5, images: photos.quinceaneros, personalized: true },
  { id: 4, name: 'Caja para padrinos', slug: 'caja-para-padrinos', description: 'Una presentación elegante para una invitación que merece ser recordada.', category: 'matrimonios', price: 59, images: photos.matrimonios, featured: true, personalized: true },
  { id: 5, name: 'Vela botánica de boda', slug: 'vela-botanica-boda', description: 'Vela aromática con flores secas y etiqueta personalizada para tus invitados.', category: 'matrimonios', price: 16, images: [photos.matrimonios[1], photos.matrimonios[0]], personalized: true },
  { id: 6, name: 'Mini champagne personalizado', slug: 'mini-champagne-personalizado', description: 'Un detalle sofisticado para brindar por una historia que recién comienza.', category: 'matrimonios', price: 25, images: photos.matrimonios, featured: true },
  { id: 7, name: 'Cajita angelito', slug: 'cajita-angelito', description: 'Cajita de recuerdo en tonos crema con una delicada medalla de ángel.', category: 'bautizos', price: 12, images: photos.bautizos, featured: true, personalized: true },
  { id: 8, name: 'Rosario en estuche', slug: 'rosario-en-estuche', description: 'Rosario artesanal presentado en una caja personalizada y suave.', category: 'bautizos', price: 22, images: [photos.bautizos[1], photos.bautizos[0]], personalized: true },
  { id: 9, name: 'Vela recuerdo bautizo', slug: 'vela-recuerdo-bautizo', description: 'Vela aromática de cera vegetal con etiqueta para el día de su bautizo.', category: 'bautizos', price: 15, images: photos.bautizos },
  { id: 10, name: 'Box de graduación', slug: 'box-graduacion', description: 'Una caja llena de detalles para celebrar el final de una gran etapa.', category: 'promocion', price: 65, images: photos.promocion, featured: true, personalized: true },
  { id: 11, name: 'Diploma souvenir', slug: 'diploma-souvenir', description: 'Mini diploma con nombre y promoción, listo para sorprender a cada compañero.', category: 'promocion', price: 9, images: [photos.promocion[1], photos.promocion[0]], personalized: true },
  { id: 12, name: 'Llavero de promoción', slug: 'llavero-promocion', description: 'Llavero metálico con empaque y tarjeta diseñados para tu promoción.', category: 'promocion', price: 14, images: photos.promocion, personalized: true },
]
