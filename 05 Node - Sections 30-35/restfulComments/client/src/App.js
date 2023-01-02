import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const baseUrl = 'http://localhost:9000';

function App() {

  const [response, setResponse] = useState(null);

  const [data, setData] = useState({});

  async function fetchComments() {
    const response = await fetch(`${baseUrl}/comments`)
    const data = await response.json();
    setResponse(data);
  }

  async function postComment(payload) {
    const response = await fetch(`${baseUrl}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
      .catch(error => {
        console.error(error);
      })
    const data = await response.text()
    console.log(data)
  }

  useEffect(() => {
    fetchComments();
  }, [])

  function submitHandler(e) {
    e.preventDefault();
    console.log('submitting...');
    postComment(data);
  }

  function changeHandler(e) {
    const value = e.target.value
    const id = e.target.id;
    setData({ ...data, [id]: value })
  }

  return (
    <>
      <main>
        <h1>Home!</h1>
        <h2>List of comments:</h2>
        {response ?
          response.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.comment} / <b>{item.username}</b></p>
              </div>
            )
          })
          : 'false'
        }

        <h2>Add a comment:</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" onChange={changeHandler} />
          <label htmlFor="comment">Your comment:</label>
          <input type="text" name="comment" id="comment" onChange={changeHandler} />
          <button>Submit</button>
        </form>
      </main>
    </>
  )
}
export default App;