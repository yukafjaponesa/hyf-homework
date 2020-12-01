const express = require('express');
const router = express.Router();

const fs = require('fs');
const reservations = JSON.parse(fs.readFileSync(__dirname + '/../data/reservations.json'));

// meals
router.get('/', (request, response) =>
  response.send(reservations)

);

module.exports = router;


//router routes
// when user asks data router will communicate
