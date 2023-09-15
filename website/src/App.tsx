import { LineDiv, Area, Line } from './components/Main'
import { NavbarDiv, NavbarList, NavbarLogo } from './components/Navbar'
import { WelcomeLogo } from './components/Welcome'
import './App.css'

function App() {
  return (
    <>
      <NavbarDiv>
        <NavbarLogo>CWM</NavbarLogo>

        <NavbarList>
          <li>
           <p>Home</p>
          </li>
          <li>
           <p>About Us</p>
          </li>
          <li>
           <p>Contact</p>
          </li>
        </NavbarList>
      </NavbarDiv>

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
