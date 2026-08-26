export type ProductCategory = 'quinceaneros' | 'matrimonios' | 'bautizos' | 'promocion'

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  category: ProductCategory
  price?: number
  images: string[]
  featured?: boolean
  personalized?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}
