const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
  .then(() => {
    console.log('Connection successful');
  })
  .catch(error => {
    console.log('Oops, error');
    console.log(error);
  });

// creates a schema, like a template with our object and its properties, with its types of values.
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});

// this creates a collection with the 1st argument name, but automatic lowercased and pluralized.
// we save this inside Movie, a CLASS.
// 2nd arg is the previously created schema.
const Movie = mongoose.model('Movie', movieSchema);
// now we can create instances of this class.
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
// and save it to the db.
amadeus.save();

// creating more than one instance is made this way, and don't require to use .save()
Movie.insertMany([
  { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
  { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
  { title: 'The iron giant', year: 1999, score: 8.6, rating: 'PG' },
  { title: 'Stand by me', year: 1956, score: 8.6, rating: 'R' },
  { title: 'Moonrise kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
  .then(data => {
    console.log('It worked!');
    console.log(data);
  });