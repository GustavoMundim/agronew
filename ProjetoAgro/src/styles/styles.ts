import styled from "styled-components";
import wallpaper from '../assets/wallpaper/agro.jpg'
import { ContainerProps } from "../@types/types";
import weather from '../assets/Banner/sky.jpg'

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




export const Container = styled.div<ContainerProps> `
    ${props => props.width ? `width: ${props.width}` : 'width: 100%;'};
    ${props => props.height ? `height: ${props.height}` : `height: 100%`};
    ${props => props.position ? `position: absolute` : ''};
    ${props => props.BackgroundColor && `background: ${props.BackgroundColor}`};
    ${props => props.padding && `padding: ${props.padding}`};
    ${props => props.margin && `margin-top: ${props.margin}`};
    ${props => props.image && `background-image: url(${weather}); background-size: cover;`};
    ${props => props.radius && `border-radius: ${props.radius}; overflow: hidden;`};
    ${props => props.column ? `flex-direction: column;` : `display: flex`};
    ${props => props.display && `display: flex`};
    justify-content: center;
    ${props => props.r_align ? `align-items: start` : `align-items: center`};
    position: relative;
    ${props => props.opacity && `opacity: ${props.opacity}`};
    ${props => props.flex_adjust && `justify-content: ${props.flex_adjust}; align-items: ${props.flex_adjust}; gap: 10px;`};

    & .text-weather-info-2 {
        color: #fff;
        font-size: 20px;
    }

    & .ico-text {
    color: white;
    font-size: 70px;
    transition: all 0.5s ease;
    }

    & .text-data-2-card {
    color: #fff;
    font-size: 15px;};
    

    > h3 {
     color: white;
     font-size: 20px;  
     }
     
    & .cidade-principal {
        font-size: 60px;
        opacity: 0.8;
        color: black;
        text-shadow: 0px 0px 2px  #fff;
     };


     & .text-data {
        font-weight: 700;
        margin-left: 20px;
        font-size: 14px;
        };

    & .temperature {
        font-size: 100px;
        color: #fff;}
     `


export const Card = styled.div<{color?: string, width?: string, height?: string, hover?: string}>  `
    width: 350px;
    height: 220px;
    background: ${props => props.color ? `${props.color}` : '#447558'};
    bottom: 5%;
    transition: all 0.5 ease;
    border: 1px solid #343434;

    &.select-card { 
        transition: all 2s ease;
        background: #45594d;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 2px #343434;
        background: #45594d;
        background: ${props => props.hover && `${props.hover}`}
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