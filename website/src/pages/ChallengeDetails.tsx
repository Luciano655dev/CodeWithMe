import { /*useEffect, useRef,*/ useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);

  async function getApiRepos(){
    let rawData = await axios.get('https://api.github.com/repos/Luciano655dev/CodeWithMe/contents/challenges?sort=recent')

    setData(rawData.data);
    console.log(data);
  }
  getApiRepos()
  

  return (
    <>
      <div>
        <h1>Challenges Detais page</h1>
      </div>
    </>
  )
}

export default App
