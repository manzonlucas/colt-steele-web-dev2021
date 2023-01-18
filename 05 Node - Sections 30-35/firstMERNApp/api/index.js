const express = require('express');
const app = express();
const port = 9000;
const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
  .then(() => {
    console.log('Connected to database successfully');
  })
  .catch((err) => {
    console.error('Error when trying to connect to database');
    console.log(err);
  });

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

app.use(express.json());

app.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({});
  res.send(campgrounds);
});

app.post('/campgrounds/new', async (req, res) => {
  const campground = new Campground(req.body);
  await campground.save();
  res.send('post completed!')
});

app.get('/campgrounds/:id', async (req, res) => {
  const id = req.params.id;
  const campground = await Campground.findById(id);
  res.send(campground);
});

app.put('/campgrounds/:id', async (req, res) => {
  const id = req.params.id;
  // { new: true } => allows us to send back the updated object in the response.
  const campground = await Campground.findByIdAndUpdate(id, req.body, { new: true });
  res.send(campground);
});

app.delete('/campgrounds/:id', async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndDelete(id);
  res.send(campground);
})