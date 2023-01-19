const express = require('express');
const app = express();
const port = 9000;
const morgan = require('morgan');

app.listen(9000, () => {
  console.log(`Listening on port: ${port}`);
});

// any function inside app.use() will run on EVERY request:
// app.use(() => {
// console.log('Hey! First middleware');
// })

// commonly used to parse every request:
// app.use(express.json());

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hi! This is home.');
})