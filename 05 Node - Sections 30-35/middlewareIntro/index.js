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
  // so, to avoid it, it is a good practice to end the middleware with return so nothing happens after next().
  return next();
  console.log('thanks to return, this code is unreachable :(');
})

// middlewares can access the request BEFORE the route handlers, being able to adding info or modifying it.
app.use((req, res, next) => {
  console.log('Custom middleware accessing request:');
  console.log(`method: ${req.method}`);
  console.log(`path: ${req.path}`);

  // adding data
  req.requestDate = Date.now();
  return next();
})

app.get('/', (req, res) => {
  // accessing data added on the middleware:
  console.log(`REQUEST DATE: ${req.requestDate}`);
  res.send('Hi! This is home.');
})

// we can set the route where the middleware triggers:
app.use('/dogs', (req, res, next) => {
  console.log('Middleware here, I love dogs!');
  return next();
})

app.get('/dogs', (req, res, next) => {
  res.send('Dogs body!')
})

// if any route BEFORE matches with the request, this will run:
app.use((req, res) => {
  // we can return the corresponding status:
  res.status(404).send('Not found')
})