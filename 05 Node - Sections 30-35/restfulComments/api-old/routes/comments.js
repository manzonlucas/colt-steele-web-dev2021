const express = require('express');
const router = express.Router();
const data = require('../comments.json');

router.get('/', function (req, res) {
  res.send(data);
});

module.exports = router;