import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { NavBar } from './components/NavBar.tsx'
import  ItemListContainer  from './components/ItemListContainer.tsx'
import  CartWidget  from './components/CartWidget.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    {/*<ItemListContainer text="Comprar"/>
    <CartWidget placeholder="Digite:"/>*/}
    <App />

    
  </React.StrictMode>,
)
 