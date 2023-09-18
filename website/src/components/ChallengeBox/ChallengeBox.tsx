import {Card, Container} from './ChallengeBoxCSS'

export default function ChallengeBox(props: any){
    return(
        <Card to={props.fileName}>
            <Container>
                <h1>{props.projectName}</h1>
                <h2>por: {props.username}</h2>
                <p>{props.desc}</p>
                <p>{props.fileName}</p>
            </Container>
        </Card>
    )
}