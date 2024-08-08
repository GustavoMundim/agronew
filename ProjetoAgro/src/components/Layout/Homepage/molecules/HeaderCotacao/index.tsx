import React from 'react'
import { Container } from '../../../../../styles/styles';
import Text from '../../atoms/Text';

const Header = () => {
  return (
    <>
    <Container height="70%" BackgroundColor="rgba(0, 0, 0, 0.7)"  className="container-anim">
        <Text text="Cotação Moedas Internacionais" classname="cot-text"/>
    </Container>
    </>
  )
};

export default Header;
