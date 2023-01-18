const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
  .then(() => {
    console.log('Connected to database successfully');
  })
  .catch((err) => {
    console.error('Error when trying to connect to database');
    console.log(err);
  });

function randomize(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function seedDB() {
  await Campground.deleteMany({});
  for (let i = 0; i <= 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      title: `${randomize(descriptors)} ${randomize(places)}`,
      location: `${cities[random1000].city}, ${cities[random1000].state}`
    })
    await camp.save();
  }
}

seedDB()
  .then(() => {
    mongoose.connection.close();
  })