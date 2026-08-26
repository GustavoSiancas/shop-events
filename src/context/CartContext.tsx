import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { CartContext } from './cart-context'
import type { CartItem, Product } from '../types/product'

const STORAGE_KEY = 'celebra-bonito-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as CartItem[] } catch { return [] }
  })
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(items)), [items])
  const addItem = (product: Product, quantity = 1) => setItems((current) => {
    const found = current.find((item) => item.product.id === product.id)
    return found ? current.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { product, quantity }]
  })
  const removeItem = (id: number) => setItems((current) => current.filter((item) => item.product.id !== id))
  const increaseQuantity = (id: number) => setItems((current) => current.map((item) => item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  const decreaseQuantity = (id: number) => setItems((current) => current.flatMap((item) => item.product.id !== id ? [item] : item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []))
  const value = useMemo(() => ({ items, count: items.reduce((s, i) => s + i.quantity, 0), total: items.reduce((s, i) => s + (i.product.price ?? 0) * i.quantity, 0), addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart: () => setItems([]) }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
