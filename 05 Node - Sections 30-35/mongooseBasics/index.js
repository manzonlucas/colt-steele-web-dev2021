const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/moviesApp')
  .then(() => {
    console.log('Connection successful');
  })
  .catch(error => {
    console.log('Oops, error');
    console.log(error);
  })