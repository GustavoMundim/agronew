import styled from "styled-components";
import wallpaper from '../assets/wallpaper/agro.jpg'



export const SectionHome = styled.section`
    width: 100%;
    min-height: 100dvh;
`;




export const BannerVideo = styled.div `
    width: 100%;
    height: 400px;
    background: black;
    position: relative;
`

export const VideoStyled = styled.video `
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Noticias = styled.div `
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const CardsNotices = styled.div `
    width: 500px;
    height: 300px;
    background: #fff;
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`