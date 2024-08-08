import React from 'react'
import { Container } from '../../../../../styles/styles';  
import Text from '../../atoms/Text';

type ValueProps = {
    value?: string
}

const Painel = ({value}: ValueProps) => {
  return (
    <Container height="20%" BackgroundColor="rgba(222, 222, 222, 0.8)" border="1px" border_color="rgba(0, 0, 0, 0.7)" gap="10px" padding="7px">
        <Container width="20%" BackgroundColor="rgba(0, 0, 0, 0.7)" radius="4px">
          <Text text='USS' classname="cot-text-painel"/>
        </Container>
    </Container>
  )
};

export default Painel;
