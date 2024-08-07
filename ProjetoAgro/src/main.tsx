import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './components/template/Home.tsx'
import { Global } from './styles/global.ts'
import Header from './components/Header/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Global />
    <Homepage/>
  </React.StrictMode>,
)
