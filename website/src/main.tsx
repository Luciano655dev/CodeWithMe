import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from 'axios'
import './main.css'

import Navbar from './components/Navbar/Navbar.tsx'
import Home from './pages/Home.tsx'
import Challenges from './pages/Challenges/Challenges.tsx'
import ChallengeDetails from './pages/ChallengeDetails.tsx'

async function getApiRepos(){
  const repos: any = []
  const rawData = await axios.get('https://api.github.com/repos/Luciano655dev/CodeWithMe/contents/challenges')

  for(let data of rawData.data){
    let repoInfo = await axios.get(`https://api.github.com/repos/Luciano655dev/CodeWithMe/contents/challenges/${data.name}`)
    console.log(data.name);

    let jsonFile = await repoInfo.data.filter((file: any) => file.name=='info.json')
    jsonFile = await axios.get(jsonFile[0].download_url)
    jsonFile = jsonFile.data[0]

    let script = await repoInfo.data.filter((file: any) => file.name=='main.js')
    script = await axios.get(script[0].download_url)
    script = script.data
    
    repos.push({...jsonFile, script: script, fileName: data.name})
  }
  
  return await repos
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <Navbar></Navbar> <Home></Home> </div>,
  },
  {
    path: '/challenges',
    element: <div> <Navbar></Navbar> <Challenges repos={await getApiRepos()}></Challenges> </div>
  },
  {
    path: '/challenges/:id',
    element: <div> <Navbar></Navbar> <ChallengeDetails></ChallengeDetails> </div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
