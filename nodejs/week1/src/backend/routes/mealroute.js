const express = require('express');
const router = express.Router();

const fs = require('fs');



const meal = JSON.parse(fs.readFileSync(__dirname + '/../data/meals.json'));
const reviews = JSON.parse(fs.readFileSync(__dirname + '/../data/reviews.json'));

router.get('/', (request, response) =>{
  const random = Math.random(); //random num between 0-1 1 exclusive
  const lengthOfMeal = meal.length;
  const randomMeal = parseInt(random * lengthOfMeal);
  const randomMealList = meal[randomMeal];

  const randomReview = reviews[randomMeal];

  response.send([randomMealList, randomReview]);
});

module.exports = router;
