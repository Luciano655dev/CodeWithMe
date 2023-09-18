import { MainDiv, Logo, List, StyledLink } from './NavbarCSS'

export default function Navbar(){
    return(
        <MainDiv>
            <Logo>CWM</Logo>

            <List>
                <li>
                    <StyledLink to='/'>Home</StyledLink>
                </li>
                <li>
                    <StyledLink to='/challenges'>Challenges</StyledLink>
                </li>
                <li>
                    <StyledLink to='/contact'>Contact</StyledLink>
                </li>
            </List>
        </MainDiv>
    )
}