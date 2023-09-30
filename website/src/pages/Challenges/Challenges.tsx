import { useState } from 'react'
import ChallengeBox from '../../components/ChallengeBox/ChallengeBox.tsx'
import { Container, SearchDiv } from './ChallengesCSS';

function App(props: any) {
  const [search, setSearch] = useState('')

  return (
    <>
      <SearchDiv>
        <input type="text" placeholder='Search here' onChange={(e)=>setSearch(e.target.value)}></input>
      </SearchDiv>
      <Container>
        {
          props.repos
            .filter((item: any)=>search.toLowerCase() === ''
                            ? item
                            : item.projectName.toLowerCase().replace(/\s/g, '')
                              .includes(search.toLowerCase().replace(/\s/g, '')))
            .map((challenge: any) => {
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
