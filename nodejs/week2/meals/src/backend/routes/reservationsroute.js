const express = require('express');
const router = express.Router();

const fs = require('fs');
const reservations = JSON.parse(fs.readFileSync(__dirname + '/../data/reservations.json'));

// meals
router.get('/', (request, response) =>
  response.send(reservations)

);

router.get('/:id', (req, res) => {
  const reservationsId = parseInt(req.params.id);
  const reservation = reservations.filter(reserve => reserve.id === reservationsId);

  res.send(reservation)
});

module.exports = router;


//router routes
// when user asks data router will communicate
