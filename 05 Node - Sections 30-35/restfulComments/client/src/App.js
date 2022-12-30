import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const baseUrl = 'http://localhost:9000';

function App() {

  const [response, setResponse] = useState(null);

  async function callAPI() {
    const response = await fetch("http://localhost:9000/testAPI")
    const data = await response.json();
    setResponse(data);
  }

  useEffect(() => {
    callAPI();
  }, [])

  return (
    <>
      <h1>Home!</h1>
      {response ?
        response.map(item => {
          return (
            <div>
              <p>{item.comment} / <b>{item.username}</b></p>
            </div>
          )
        })
        : 'false'
      }
    </>
  )
}
export default App;