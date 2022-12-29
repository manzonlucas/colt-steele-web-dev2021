const express = require('express');
const app = express();
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

// Middleware functions, parses incoming requests:
// with URLENCODED PAYLOADS
app.use(express.urlencoded({ extended: true }));

// with JSON PAYLOADS
app.use(express.json());

app.get('/burgers', (req, res) => {
  res.send('Hi! This is a GET on /burgers response')
})

// Using req.body to access the payload, keys come from the inputs names props.
app.post('/burgers', (req, res) => {
  const { type, qty } = req.body
  res.send(`Hi! POST on /burgers response. <br> You ordered ${qty} ${type} burger(s)`);
})