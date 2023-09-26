import { useEffect, useState } from 'react';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula'
import rehypeRaw from "rehype-raw";

import { Container, BodyCSS, OutputDiv, SubContainer, DataContainer, ReactMarkdownStyled, CodeButtonsContainer } from './ChallengeDetailsCSS'

function App(props: any) {
  const [code, setCode] = useState(`
  self.addEventListener('message', function(e) {
    // O código JavaScript a ser executado deve estar aqui.
    // Pode ser uma função ou qualquer código executável.
  
    // Exemplo: executando uma função simples
    function add(a, b) {
      return a + b;
    }
  
    const result = add(3, 4);
  
    // Enviar o resultado de volta para o aplicativo principal
    self.postMessage(result);
  });
  `);
  const [output, setOutput] = useState(''); 

  const [aceEditorCSS, setAceEditorCSS] = useState({
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    borderTopLeftRadius: "0.7em",
    borderTopRightRadius: "0.7em",
    width: "40vw",
    height: "60vh"
  })

  useEffect(() => {
    window.addEventListener('resize', ()=>{
      if(window.innerWidth<=774){
        setAceEditorCSS({...aceEditorCSS, width: "80vw", height: "40vh"})
      }else{
        setAceEditorCSS({...aceEditorCSS, width: "40vw", height: "60vh"})
      }
    });
  }, []);

  const executeCode = () => {
    // Criar um novo Web Worker
    const worker = new Worker(URL.createObjectURL(new Blob([code])));
    worker.postMessage('execute');

    worker.onmessage = (e) => {
      setOutput(`${e.data}`);
      worker.terminate();
    };

    worker.onerror = (error) => {
      setOutput(`Erro: ${error.message}`);
      worker.terminate();
    };
  };
  const SaveFile = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const blobUrl = URL.createObjectURL(blob);

    // Cria um elemento de link de download invisível
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = blobUrl;
    a.download = `${props.repoData.fileName}Code.js`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <BodyCSS>
      <Container>
        <SubContainer>
          <DataContainer>
            <h1>{props.repoData.projectName}</h1>
            <p>{props.repoData.username}</p>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, omnis ipsa soluta veniam voluptates dolorum beatae aliquid reiciendis, incidunt nam atque excepturi fuga nulla quos fugit! Incidunt animi quisquam blanditiis.</h3>
            <div></div>
          </DataContainer>
          <ReactMarkdownStyled rehypePlugins={[rehypeRaw]}>README HERE</ReactMarkdownStyled>
        </SubContainer>

        <SubContainer>
          <CodeButtonsContainer>
            <button onClick={executeCode}>Run</button>
            <button onClick={SaveFile}>Save</button>
          </CodeButtonsContainer>
          <AceEditor
            style={aceEditorCSS}
            theme='dracula'
            mode="javascript"
            value={code}
            onChange={(e) => setCode(e)}
          />
          <OutputDiv>
            <h4>{output}</h4>
          </OutputDiv>
        </SubContainer>
      </Container>
    </BodyCSS>
  );
}

export default App;