const express = require('express');
const app = express();

// app.use(() => {
//   console.log('request received');
// });

app.use((req, res) => {
  res.send('Request received, this is a response')
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})