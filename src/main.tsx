import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErpApp } from '../ErpApp' 
import './index.css' // <--- Asegúrate de que este archivo exista en la carpeta src

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErpApp />
    </BrowserRouter>
  </React.StrictMode>,
)