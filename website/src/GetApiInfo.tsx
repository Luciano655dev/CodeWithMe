import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'

const ApiDataContext = createContext();

export const useApiData = () => {
  return useContext(ApiDataContext);
};

export const ApiDataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repos: any = []
        const rawData = await axios.get('https://api.github.com/repos/Luciano655dev/CodeWithMe/contents/challenges')
      
        for(let data of rawData.data){
          let repoInfo = await axios.get(`https://api.github.com/repos/Luciano655dev/CodeWithMe/contents/challenges/${data.name}`)
      
          let jsonFile = await repoInfo.data.filter((file: any) => file.name=='info.json')
          jsonFile = await axios.get(jsonFile[0].download_url)
          jsonFile = jsonFile.data[0]
      
          let script = await repoInfo.data.filter((file: any) => file.name=='main.js')
          script = await axios.get(script[0].download_url)
          script = script.data
      
          let readme = await repoInfo.data.filter((file: any) => file.name.toLowerCase()=='readme.md')
          readme = await axios.get(readme[0].download_url)
          readme = readme.data
          
          repos.push({...jsonFile, script, readme, fileName: data.name})
        }

        setData(repos)
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiDataContext.Provider value={data}>
      {children}
    </ApiDataContext.Provider>
  );
};