

import { Container } from '../../../../../styles/styles';
import Text
 from '../../atoms/Text';


type TemperatureType = {
    weather: string
    
}

const Temperatura = ({weather}: TemperatureType) => {
  return (
    <Container width='50%'>
        <Text text={weather} classname='temperature' />
    </Container>
)};

export default Temperatura
