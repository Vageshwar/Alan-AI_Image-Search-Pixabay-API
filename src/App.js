import React, {useState,useEffect} from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import ImageCards from './components/ImageCards/ImageCards';


const alanKey = '0eb66423884de847227c7ff60e4bc1b52e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {

  const [searchResult,setSearchReults] = useState([])

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command , result}) => {
        if(command === "testCommand"){
          alert("Test command executed!!!")
        }
        if(command == "SearchResults"){
          setSearchReults(result.hits);
        }
      }
    })
  },[])

  return (
    
    <div >
      <h1>Voice Image Search</h1>
      <ImageCards results={searchResult}/>
    </div>
  );
}

export default App;
