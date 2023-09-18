import ChallengeBox from '../../components/ChallengeBox/ChallengeBox.tsx'
import { Container } from './ChallengesCSS';

function App(props: any) {
  return (
    <>
      <Container>
        {
          props.repos.map((challenge: any) => {
            return (
              <ChallengeBox fileName={challenge.fileName} projectName={challenge.projectName} username={challenge.username} desc={challenge.desc} key={Math.random()}></ChallengeBox>
            )
          })
        }
      </Container>
    </>
  )
}

export default App
