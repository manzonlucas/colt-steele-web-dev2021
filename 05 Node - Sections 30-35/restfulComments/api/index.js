const express = require('express');
const app = express();
const port = 9000;
let data = require('./comments.json');
const { v4: uuid } = require('uuid');

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

// GET all comments
app.get('/comments', (req, res) => {
  res.send(data);
})

// POST comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  data.push({ id: uuid(), username, comment })
  res.send(data);
})

// GET comment by id
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = data.find(comment => comment.id === id);
  res.send(comment);
})

// PATCH comment by id
app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const foundComment = data.find(comment => comment.id === id);
  foundComment.comment = newComment;
  res.send(foundComment)
})

// DELETE comment by id
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  data = data.filter(comment => comment.id !== id);
  res.send(`Comment with id ${id} deleted`)
})