import { styled, createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
    body {
        font-family: "Poppins", sans-serif;}
    
`

export const Overlay = styled.div<{color: string, opacity?: string}> `
    width: 100%;
    height: 100%;
    background: ${props => props.color};
    opacity: ${props => props.opacity};
    position: absolute;
    top: 0;
    left: 0;
`