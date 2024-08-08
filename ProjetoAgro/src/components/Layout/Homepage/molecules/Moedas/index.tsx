
import { Container } from '../../../../../styles/styles';
import { Card } from '../../../../../styles/styles';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import coin from '../../../../../assets/icos/coin.svg'

const Moedas = () => {  
const moedas = ['USS', 'BRL', 'EUR']
  return (
    <Container height="50%"  flex_adjust="center" gap="50px">
      {moedas.map((moeda, index) => (
        <Card width="300px" height="240px" radius="8px" hover="none" color="rgba(0, 0, 0, 0.8)" key={index}>
            <Container height="50%" padding="3px" margin='5px'>
              <Image image={coin} className="coin-ico-img"/>
            </Container>
            <Container  position={true} BackgroundColor='rgba(222, 222, 222, 0.8)' 
            height='15%'
            width='25%' 
            bottom='54%' 
            border='1px'
             border_color='black' 
             border_radius_all={true}>
                <Text text={moeda} classname="coin-show-text"/>
            </Container>
            <Container height="50%" BackgroundColor="rgba(222, 222, 222, 0.5)" r_align={true} flex_adjust='center'>
                <Container width='50%'  flex_adjust='start' column={true} padding='10px'>
                    <h3>Value</h3>
                    <h3>Value</h3>
                </Container>
                <Container width='50%' column={true} padding='10px' flex_adjust='start'>
                    <h3>Value</h3>
                    <h3>Value</h3>
                </Container>
            </Container>
        </Card>
      ))}
      </Container>
  )
};

export default Moedas;