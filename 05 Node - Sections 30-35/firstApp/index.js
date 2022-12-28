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

// POSTs
app.post('/cats', (req, res) => {
  res.send('This is a post request to /cats')
})

// 404 handling, always at the end of the routes
app.get('*', (req, res) => {
  res.send('error 404, path not found')
})