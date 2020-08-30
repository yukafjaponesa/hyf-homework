const express = require('express');
const router = express.Router();

const fs = require('fs');
const meals = JSON.parse(fs.readFileSync(__dirname + '/../data/meals.json'));

router.get('/', (req, res) => {
  let maxPrice = req.query.maxPrice;
  let title = req.query.title;
  let createdAfter = req.query.createdAt;
  const limit = req.query.limit
    //console.log('query', query);
    if(maxPrice) {
      const meal = meals.filter(item => item.price < maxPrice)
      console.log(req.query);
      res.json(meal);
    } else if (title) {
      const titles = meals.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))

      res.json(titles);
    } else if (createdAfter) {
      const date = meals.filter(item => {return item.createdAt > createdAfter})
      console.log(req.query);
      res.json(date);
    } else if (limit) {
      const limitNum = meals.filter((item, acc) => {return acc < limit})
      res.json(limitNum) //accumulate like for loop ass is like i++
    } else {
      res.json(meals);
    }
});



router.get('/:id', (req, res) => {
  const mealsId = parseInt(req.params.id);
  if(isNaN(mealsId)){
    const meal = meals.filter(meal => meal.id === mealsId);

    if(meal.length === 0){
      return res.status(404).send('ID not matches');
    }
    res.send(meal)
  }
  return res.status(400).send('Bad request')

});


module.exports = router;
