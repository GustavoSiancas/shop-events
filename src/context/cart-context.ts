import { createContext } from 'react'
import type { CartItem, Product } from '../types/product'

export interface CartContextValue {
  items: CartItem[]
  count: number
  total: number
  addItem: (product: Product, quantity?: number) => void
  removeItem: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
