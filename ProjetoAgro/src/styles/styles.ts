import styled from "styled-components";
import { ContainerProps } from "../@types/types";
import weather from '../assets/Banner/sky.jpg'
import dolar from '..//assets/wallpaper/dolar.jpg'

export const SectionHome = styled.section`
    width: 100%;
    min-height: 100dvh;
`;




export const BannerPhoto = styled.div `
    width: 100%;
    height: 500px;
    background: black;
    position: relative;
`

export const PhotoStyled = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ContainerCotacao = styled.div `
    width: 250px;
    height: 250px;
    background:  #fff;
    position: absolute;
`



export const Container = styled.div<ContainerProps> `
    ${props => props.width ? `width: ${props.width}` : 'width: 100%;'};
    ${props => props.height ? `height: ${props.height}` : `height: 100%`};
    ${props => props.position ? `position: absolute` : ''};
    ${props => props.BackgroundColor && `background: ${props.BackgroundColor}`};
    ${props => props.padding && `padding: ${props.padding}`};
    ${props => props.margin && `margin-top: ${props.margin}`};
    ${props => props.bottom && `bottom: ${props.bottom}`};
    ${props => props.left && `left: ${props.left}`}
    background-image: ${props => {
    if (props.image) {
      const imageUrl = props.image === 'Clima Geral' ? weather :
                       props.image === 'Cotação Moedas' ? dolar :
                       props.image;
      return `url(${imageUrl})`;
    }
    return 'none';
  }};
  background-size: cover;
    ${props => props.radius && `border-radius: ${props.radius}; overflow: hidden;`};
    ${props => props.column ? `flex-direction: column;` : `display: flex`};
    ${props => props.display && `display: flex`};
    transform: translateX(${props => props.translate});
    justify-content: center;
    ${props => props.r_align ? `align-items: start` : `align-items: center`};
    position: relative;
    transition: all 1.5s ease;
    ${props => props.border_radius_all && `border-bottom-right-radius: 8px`};
    ${props => props.border && `border: ${props.border} solid ${props.border_color ? `${props.border_color}` :  `#fff`}`}
    ${props => props.opacity && `opacity: ${props.opacity}`};
    ${props => props.flex_adjust && `justify-content: ${props.flex_adjust}; align-items: ${props.flex_adjust}; gap: 10px;`};
    
    gap: ${props => props.gap ? `${props.gap}`: `0px`};
    & .text-weather-info-2 {
        color: #fff;
        font-size: 20px;
}

& .coin-show-text {
color: #fff; text-shadow: 0px 0px 2px black;
font-size: 15px;}

& .container-anim {
opacity: 0;
transform: translateX(-100%)}



& .coin-ico-img {
height: 100%;
object-fit: cover;
transform: rotate(-150deg)}

  & .cot-text {
  font-size: 30px;
  text-shadow: 0px 0px 7px black;
  opacity: 0;}

  & .cot-text-painel {
    font-size: 16px;
    text-shadow: 0px 0px 2px black;
    text-transform: uppercase;
  }

    & .ico-text {
    color: white;
    font-size: 70px;
    transition: ${props => props.isAnimation != 'none' ? `` : `all 0.5s ease`}
    }


    & .text-data-2-card {
    color: #fff;
    font-size: 15px;};
    

    > h3 {
     color: white;
     font-size: 20px;  
     }
     
    & .cidade-principal {
        font-size: 65px;
        margin-left: 10px;
        font-weight: 700;
        opacity: 0;
        transform: translateX(-120%);
        color: #343434;
     };

     & .card-anim {
        transform: translateX(-100%);
        opacity: 0; 
     }

     & .card-anim-coin {
         transform: translateY(100%);
         opacity: 0
     }


     & .text-data {
        font-weight: 700;
        margin-left: 20px;
        font-size: 14px;
        opacity: 0;
        };

    & .temperature {
        font-size: 90px;
        color: #fff;
        opacity: 0;
        transform: rotate(-100deg) translateY(-100%) translateX(200%) ;}
     `


export const Card = styled.div<{color?: string, width?: string, height?: string, hover?: string, radius?: string, border?: string}>  `
    width: ${props => props.width ? `${props.width}`: `350px;`};
    height:${props => props.height ? `${props.height}` : `220px`};
    background: ${props => props.color ? `${props.color}` : '#447558'};
    border-radius: ${props => props.radius ? `${props.radius}` : ``};
    bottom: 5%;
    transition: all 0.5 ease;
    border: ${props => props.border === 'none' ?  `` : `1px solid #343434;`}
    overflow: hidden;
    &.select-card { 
        transition: all 2s ease;
        background: #45594d;
    }



    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 2px #343434;
        ${props => props.hover == 'none' ? `` : `background: #45594d`}
    }

    &:hover .ico-text {
        cursor: pointer;
        transform: scale(1.2);
        transition: transform 0.3s ease; 
`;


export const Icone = styled.div `
    width: 100%;
    height: 50%;
    display
    background: orange;
`