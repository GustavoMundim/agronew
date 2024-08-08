import { Container } from '../../../../../styles/styles';
import Text from '../../atoms/Text';
import Dados from '../../molecules/Dados';
import InformacoesWeather from '../../molecules/InformacoesWeather';
import Temperatura from '../../molecules/Temperatura';
import CreateCards from '../../molecules/WeathersCards';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react';

const Weather = () => {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.cidade-principal, .temperature, .text-data, .card-anim', {
        x: 0,
        opacity: 1,
        duration: 4,
        y: 0,
        rotate: 0,
    })
    return () => {
      gsap.killTweensOf('.cidade-principal, .temperature, .text-data, .card-anim')
  }})

  return (
    <>
      <Container height='50%' r_align={true} column={true}>
        <Container height='80%' BackgroundColor='rgba(0, 0, 0, 0.7)  ' flex_adjust='start'>
          <Dados texto='Quarta-feira, 07 de outubro de 2024, 09:53'/>
          <Temperatura weather='29°C'/>
          <InformacoesWeather 
            ico_weather='https://openweathermap.org/img/wn/01d@2x.png' 
            text='Nublado' 
          />
        </Container>
        <Container height='30%' flex_adjust='start'  BackgroundColor='rgba(222, 222, 222, 0.9)' padding='2px'>
          <Text text='Uberlândia' classname='cidade-principal'/>
        </Container>  
      </Container>

      {/* CARDS */}
      <Container height='50%' gap='15px' display={true} margin='34px' BackgroundColor='rgba(222, 222, 222, 0.7)'>
        <CreateCards />
      </Container>
    </>
  );
};

export default Weather;
