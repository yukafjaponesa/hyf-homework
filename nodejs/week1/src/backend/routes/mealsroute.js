const express = require('express');
const router = express.Router();

const fs = require('fs');
const meals = JSON.parse(fs.readFileSync(__dirname + '/../data/meals.json'));

// meals
router.get('/', (request, response) =>
  response.send(meals)

);

module.exports = router;
