
import { Container } from '../../../../../styles/styles';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Dados from '../../molecules/Dados';
import InformacoesWeather from '../../molecules/InformacoesWeather';
import Temperatura from '../../molecules/Temperatura';
import { Card } from '../../../../../styles/styles';

const Weather = () => {
  return (
    <>
    <Container height='55%' r_align={true} column={true}>
      <Container height='80%' BackgroundColor='#000f' opacity='0.75' flex_adjust='start'>
          <Dados texto='Quarta feira 07 de outubro de 2024 09:53'/>
          <Temperatura weather='29°c'/>
          <InformacoesWeather ico_weather='https://openweathermap.org/img/wn/01d@2x.png' text='Nublado' />
      </Container>
      <Container height='30%' flex_adjust='start' BackgroundColor="#fff" opacity='0.7' padding='2px'>
          <Text text='Uberlândia' classname='cidade-principal'/>
      </Container>  
    </Container>
    <Container height='50%' gap='15px' display={true}>
        <Card width='190px' height='200px' radius='10px' border='none' hover='none' color='#fff'></Card>
        <Card width='190px' height='200px' radius='10px' border='none' hover='none' color='#fff'></Card>
        <Card width='190px' height='200px' radius='10px' border='none' hover='none' color='#fff'></Card>
    </Container>

    </>
  )
};

export default Weather;





