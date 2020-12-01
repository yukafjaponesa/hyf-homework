const express = require('express');
const router = express.Router();

const fs = require('fs');
const reviews = JSON.parse(fs.readFileSync(__dirname + '/../data/reviews.json'));

// meals
router.get('/', (request, response) =>
  response.send(reviews)

);

router.get('/:id', (req, res) => {
  const reviewsId = parseInt(req.params.id);
  const review = reviews.filter(rev => rev.id === reviewsId);

  res.send(review)
});

module.exports = router;


//router routes
// when user asks data router will communicate
