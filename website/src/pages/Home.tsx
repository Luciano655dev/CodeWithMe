import { LineDiv, Area, Line } from '../components/Main'
import { WelcomeLogo } from '../components/Welcome'

function App() {
  return (
    <>
      <Area>
        <WelcomeLogo>Code With</WelcomeLogo>
        <WelcomeLogo>Me</WelcomeLogo>
      </Area>

      <LineDiv>
        <Line></Line>
      </LineDiv>

      <Area>
        <h1>How are you?</h1>
      </Area>
    </>
  )
}

export default App
