import { useState } from 'react';
import { useEffect } from 'react';

const baseUrl = 'http://localhost:9000';

function App() {

  const [comments, setComments] = useState([]);
  const [inputData, setInputData] = useState({});

  useEffect(() => {
    fetchComments();
  }, [])

  async function fetchComments() {
    const response = await fetch(`${baseUrl}/comments`)
    const data = await response.json();
    setComments(data);
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
  }

  async function submitHandler(e) {
    e.preventDefault();
    console.log('submitting...');
    await postComment(inputData);
    fetchComments();
  }

  function changeHandler(e) {
    const value = e.target.value
    const id = e.target.id;
    setInputData({ ...inputData, [id]: value })
  }

  return (
    <>
      <main>
        <h2>List of comments:</h2>
        {comments.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.comment} / <b>{item.username}</b></p>
            </div>
          )
        })}

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