const express = require('express');
const app = express();

// app.use(() => {
//   console.log('request received');
// });

// app.use((req, res) => {
//   res.send('Request received, this is a response')
// });

app.listen(3000, () => {
  console.log('listening on port 3000');
})

// GETs
app.get('/', (req, res) => {
  res.send('Welcome, this is home')
})

app.get('/cats', (req, res) => {
  res.send('meow')
})

app.get('/dogs', (req, res) => {
  res.send('woof')
})

// GET: path parameter
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`Hey! This is the ${subreddit} subreddit`)
})

// GET: more than 1 path parameter
app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`Hey! This is the post ID: ${postId} on the ${subreddit} subreddit`)
})

// POSTs
app.post('/cats', (req, res) => {
  res.send('This is a post request to /cats')
})

// 404 handling, always at the end of the routes
app.get('*', (req, res) => {
  res.send('error 404, path not found')
})