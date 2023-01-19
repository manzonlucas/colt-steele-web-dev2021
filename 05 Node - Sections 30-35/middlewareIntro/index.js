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

// used to parse every request to json:
// app.use(express.json());

// morgan is a middleware that logs info about every request:
app.use(morgan('tiny'));

// "custom" middlewares.
// It runs BEFORE any other middleware or route handler, so if we send a response it finishes the whole cycle (you can only send 1 response to a given request).
// app.use((req, res) => {
// res.send('Intercepted by app.use()')
// })

// by logging the cycle is not interrupted.
// but if we don't end the cycle the client never gets a response, so it will time out.
app.use((req, res, next) => {
  console.log('Hey! First middleware here');
  // for avoiding timing out we should do next()
  // this executes the next middleware OR route handler:
  next();
})

app.use((req, res, next) => {
  console.log('Hey! Second middleware here. Im going to call next() so the following function runs...');
  // if we dont use return, anything after the next() will run eventually.
  // so, to avoid it, it is a good practice to end the middleware with return:
  return next();
  console.log('thanks to return, this code is unreachable :(');
})


app.get('/', (req, res) => {
  res.send('Hi! This is home.');
})