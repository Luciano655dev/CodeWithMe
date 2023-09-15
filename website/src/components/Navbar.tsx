import styled from 'styled-components'

export const NavbarDiv = styled.nav`
    position: sticky;
    top: 0;
    width: 100vw;
    min-height: 50px;

    display: flex;
    justify-content: space-between;
    padding: 5px;

    background-color: #161623;
`

export const NavbarLogo = styled.h1`
    position: absolute;
    margin: 0;
    margin-left: 0.7em;
    font-size: 40px;
    color: white;
`

export const NavbarList = styled.ul`
    position: absolute;
    right: 0;
    display: flex;
    list-style: none;
    align-items: center;

    li{
        margin-right: 3em;
    };
    li p{
        margin: 0;
        font-size: 20px;
        color: white;
        text-decoration: none;
        border-bottom: 1px solid #161623;
        transition: 0.2s;
    }
    li p:hover{
        cursor: pointer;
        border-bottom: 1px solid white;
    }
`