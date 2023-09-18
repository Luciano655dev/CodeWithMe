import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainDiv = styled.nav`
    position: sticky;
    top: 0;
    width: 100vw;
    min-height: 50px;

    display: flex;
    justify-content: space-between;
    padding: 5px;

    background-color: #161623;
`

export const Logo = styled.h1`
    position: absolute;
    margin: 0;
    margin-left: 0.7em;
    font-size: 40px;
    color: white;
`

export const List = styled.ul`
    position: absolute;
    right: 0;
    display: flex;
    list-style: none;
    align-items: center;

    li{
        margin-right: 3em;
    };

    li Link{
        margin: 0;
        font-size: 20px;
        color: white;
        text-decoration: none;
        border-bottom: 1px solid #161623;
        transition: 0.2s;
    }
    li Link:hover{
        cursor: pointer;
        border-bottom: 1px solid white;
    }
`

export const StyledLink = styled(Link)`
    margin: 0;
    font-size: 20px;
    color: white;
    text-decoration: none;
    border-bottom: 1px solid #161623;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        border-bottom: 1px solid white;
    }
`