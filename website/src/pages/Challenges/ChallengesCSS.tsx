import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const SearchDiv = styled.div`
    width: 100vw;
    margin-top: 2em;
    margin-bottom: 2em;

    display: flex;
    justify-content: center;
    align-items: center;

    input{
        width: 30vw;
        padding: 1em;
        border: 2px solid lightgray;
        border-radius: 2em;
    }
`