import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CartProvider } from './context/CartContext'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'
import { Store } from './pages/Store'
import './App.css'

export default function App() {
  return <BrowserRouter><CartProvider><Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/tienda" element={<Store/>}/><Route path="/producto/:slug" element={<ProductDetail/>}/><Route path="/carrito" element={<Cart/>}/><Route path="*" element={<Home/>}/></Route></Routes></CartProvider></BrowserRouter>
}
