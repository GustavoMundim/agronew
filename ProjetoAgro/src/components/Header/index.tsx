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
            <a href=''>Login</a> 
          </li>
        </ul>
      </Nav>
    </HeaderStyled>
  )
};

export default Header
