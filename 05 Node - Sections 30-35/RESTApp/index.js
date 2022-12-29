const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000');
})

app.get('/burgers', (req, res) => {
  res.send('Hi! This is a GET on /burgers response')
  console.log('getttt');
})

app.post('/burgers', (req, res) => {
  res.send('Hi! POST on /burgers response')
})