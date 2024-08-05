import styled from "styled-components";


export const HeaderStyled = styled.header `
    width: 100%;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`


export const Nav = styled.nav `
    width: 100%;
    height: 100%;


    ul {
        list-style: none;
        height: 100%;
        width: 100%;
        justify-content: end;
        display: flex;
        align-items: center;
        gap: 50px;
        }

    li {
        margin-right: 50px;

        > a {
        text-decoration: none;
        color:  rgb(41, 41, 40);
        font-size: 0.8em;
        font-weight: 600;
        color: black;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;text-transform: uppercase;}
        }
`
