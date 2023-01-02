const express = require('express');
const app = express();
const port = 3000;
const data = require('./comments.json');

app.use(express.json());

app.get('/comments', (req, res) => {
  res.send(data);
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  res.send(`Ok ${username}, your comment is: ${comment}`);
  console.log('post received');
  console.log(req.body);
})

app.listen(9000, () => {
  console.log(`Listening on port ${port}`);
}) 