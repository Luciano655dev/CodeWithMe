import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled(Link)`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    margin: 1em;
    transition: 0.3s;

    text-decoration: none;
    color: black;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: translateY(-10px);
    }
`

export const Container = styled.div`
    margin: 10px;
    padding: 5vw;
    text-align: center;

    h1{
        margin: 0;
        font-size: 3em;
    }
    h2{
        margin: 0;
        font-size: 1em;
    }
    p{
        font-size: 1em;
    }
`