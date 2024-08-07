
import { Container } from '../../../../../styles/styles';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Dados from '../../molecules/Dados';
const Weather = () => {
  return (
    <>
    {/*  CIDADE PRINCIPAL */}
    <Container height='55%' r_align={true} column={true}>
      <Container height='80%' BackgroundColor='#000f' opacity='0.75' flex_adjust='start'>

          {/* DADOS */}
          <Dados texto='Quarta feira 07 de outubro de 2024 09:53'/>

          {/* temperatura */}
          <Container width='50%'>
            <Text text='23°C' classname='temperature' />
          </Container>

          {/*  informacoes adicionais */}
          <Container width='25%' column={true} display={true}>
            <Container height='50%' flex_adjust='start' column={true} display={true}>
              <Image src='https://openweathermap.org/img/wn/01d@2x.png'/>
              <Text text='Nublado' classname='text-weather-info-2'/>
            </Container>
            <Container height='50%' flex_adjust='center' column={true} display={true}>
              <Text text='29°C' classname='text-data-2-card'/>
            </Container>
        </Container>

      {/*  LAYOUT CITY */}
      </Container>
      <Container height='30%' flex_adjust='start' BackgroundColor="#fff" opacity='0.7' padding='10px'>
          <Text text='Uberlândia' classname='cidade-principal'/>
      </Container>  
    </Container>

    </>
  )
};

export default Weather;





