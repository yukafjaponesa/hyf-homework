const express = require('express');
const router = express.Router();

const fs = require('fs');



const meals = JSON.parse(fs.readFileSync(__dirname + '/../data/meals.json'));
const reviews = JSON.parse(fs.readFileSync(__dirname + '/../data/reviews.json'));


router.get('/', (request, response) =>{
  const largeMeals = meals.filter(meal => {
    return meal.maxNumberOfGuests > 8; //parseInt(meal.maxNumberOfGuests > 8);
  })
  largeMeals.forEach(meal => {
    const largemeal = reviews.filter(review => {
      return review.mealId === meal.id
    })
  })

  response.send(largeMeals);
});

module.exports = router;
