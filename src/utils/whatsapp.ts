import { WHATSAPP_NUMBER } from '../config'
import type { CartItem, Product } from '../types/product'

export const whatsappUrl = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const productInquiryUrl = (product: Product, quantity = 1) => whatsappUrl(
  `Hola, quisiera consultar por ${product.name} x${quantity}. ¿Podrían indicarme disponibilidad, opciones de personalización y precio final?`,
)

export const orderInquiryUrl = (items: CartItem[]) => {
  const lines = items.map(({ product, quantity }) => `• ${product.name} x${quantity}`).join('\n')
  const total = items.reduce((sum, item) => sum + (item.product.price ?? 0) * item.quantity, 0)
  return whatsappUrl(`Hola, quisiera consultar por los siguientes productos:\n\n${lines}\n\nTotal referencial: S/ ${total.toFixed(2)}\n\n¿Podrían indicarme disponibilidad y precio final?`)
}
