import { HeaderStyled, Nav } from './style/style';
import React from 'react'
    
const Header = () => {
  return (
    <HeaderStyled>
      <Nav>
        <ul>
          <li>
            <a href=''>Inicio</a> 
          </li>
          <li>
            <a href=''>Ofertas</a> 
          </li>
          <li>
            <a href=''>Clima Geral</a> 
          </li>
          <li>
            <a href=''>Cotação moedas</a> 
          </li>
        </ul>
      </Nav>
    </HeaderStyled>
  )
};

export default Header
