
import { Container } from '../../../../../styles/styles';
import Text from '../../atoms/Text';

type TextProp = {
    texto?: string
}

const Dados = ({texto}: TextProp) => {
  return (
    <Container width='30%' padding='10px' flex_adjust='center'>
        <Text text={texto} classname='text-data'/>
    </Container> 
  )
};

export default Dados
