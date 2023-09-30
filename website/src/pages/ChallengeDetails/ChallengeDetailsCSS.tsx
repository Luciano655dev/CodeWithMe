import styled from 'styled-components'
import ReactMarkdown from 'react-markdown';

export const BodyCSS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 90vw;
    height: 90vh;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const SubContainer = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    button{
        top: 0;
        left: 1vw;
        border: 0;
        background: white;
        color: green;
        font-size: 1em;
        transition: 0.3s;
    }
    button:hover{
        background: gray;
    }

    h4{
        margin: 0.5em;
        overflow-y: scroll;
    }
`

export const OutputDiv = styled.div`
    border-bottom-left-radius: 0.7em;
    border-bottom-right-radius: 0.7em;
    width: calc(40vw - 4px);
    height: 20vh;

    border: 2px solid #282a36;

    @media (max-width: 774px) {
        height: 10vh;
        width: calc(80vw - 4px);
        margin-bottom: 1em;
    }
`

export const DataContainer = styled.div`
    width: 40vw;
    padding: 1em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 774px) {
        width: 80vw;
    }

    h1{
        margin: 0;
        font-size: 3em;
    }
    label{
        margin: 0;
        padding: 0;
        font-size: 0.8em;
    }
    p{
        max-height: 3em;
        overflow-y: scroll;
        overflow-x: hidden;
        text-overflow: ellipsis;
        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: #f1f1f1;
        }
    }
    div{
        width: 80%;
        background-color: lightgray;
        border-radius: 1em;
        height: 0.2em;
    }
`
export const CodeButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
`

export const ReactMarkdownStyled = styled(ReactMarkdown)`
    border-radius: 0.7em;
    margin: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    text-overflow: ellipsis;

    max-width: 40vw;
    height: 60vh;
    @media (max-width: 774px) {
        max-width: 80vw;
        min-height: 30vh;
        max-height: 60vh;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
`