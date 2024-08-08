
import { Container } from "../../../../../styles/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react';
import Header from "../../molecules/HeaderCotacao";
import Painel from "../../molecules/PainelCotacao";
import Moedas from "../../molecules/Moedas";

const Cotacao = () => {



  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.cot-text, .container-anim, .card-anim-coin, .coin-ico-img', {
        x: 0,
        opacity: 1,
        duration: 3,
        y: 0,
        rotate: 0,
    })
    return () => {
      gsap.killTweensOf('.cot-text, .container-anim')
  }})
  
  return (
    <>
    <Container height="50%" BackgroundColor="rgba(222, 222, 222, 0.8)" column={true}>
      <Header />
      <Painel value=''/>
    </Container>

    <Container height="50%" BackgroundColor="rgba(222, 222, 222, 0.8)">
        <Moedas />
    </Container>
    </>
  )
};

export default Cotacao; 