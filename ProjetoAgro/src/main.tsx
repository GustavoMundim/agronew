import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './components/template/Home.tsx'
import { Global } from './styles/global.ts'
import Header from './components/Header/index.tsx'
import { register } from 'swiper/element'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Global />
    <Homepage/>
  </React.StrictMode>,
)
