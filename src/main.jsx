import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './component/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartProvider>
)
