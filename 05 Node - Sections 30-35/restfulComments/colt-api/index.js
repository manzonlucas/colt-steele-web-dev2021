const express = require('express');
const app = express();
const port = 9000;
const data = require('./comments.json');

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

app.get('/comments', (req, res) => {
  res.send(data);
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  data.push({ username, comment })
  res.send(data);
  console.log('POST on /comments received');
})
