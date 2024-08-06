import styled from "styled-components";
import wallpaper from '../assets/wallpaper/agro.jpg'



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

export const Container = styled.div<{width?: string, height?: string, BackgroundColor?: string, position?: boolean, padding?: string, margin?: string}> `
    ${props => props.width ? `width: ${props.width}` : 'width: 100%;'};
    ${props => props.height ? `height: ${props.height}` : `height: 100%`};
    ${props => props.position ? `position: absolute` : ''};
    ${props => props.BackgroundColor && `background: ${props.BackgroundColor}`};
    ${props => props.padding && `padding: ${props.padding}`};
    ${props => props.margin && `margin-top: ${props.margin}`};
    justify-content: center;
    align-items: center;
    display: flex;

    
    
    & .ico-text {
    color: white;
    font-size: 70px;
    transition: all 0.5s ease;
    }
    
    > h3 {
     color: white;
     font-size: 20px;}`


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