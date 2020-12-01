const express = require('express');
const router = express.Router();

const fs = require('fs');



const meals = JSON.parse(fs.readFileSync(__dirname + '/../data/meals.json'));
const reviews = JSON.parse(fs.readFileSync(__dirname + '/../data/reviews.json'));


router.get('/', (request, response) =>{
  const cheapMeals = meals.filter(meal => {
    return meal.price < 70; //parseInt(meal.price < 70);
  })
  cheapMeals.map(meal => {
    meal.reviews = reviews.filter(review =>
       review.mealId === meal.id)
       return meal
    })
  response.send(cheapMeals);
});

module.exports = router;
