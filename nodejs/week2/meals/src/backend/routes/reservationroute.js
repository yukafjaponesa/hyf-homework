const express = require('express');
const router = express.Router();

const fs = require('fs');
const reservation = JSON.parse(fs.readFileSync(__dirname + '/../data/reservations.json'));

router.get('/', (request, response) =>{
  const random = Math.random(); //get a random num between 0-1
  const lengthOfReservation = reservation.length; //get the num of reservation array (if there are 50 objects you get 50)
  const randomReservation = parseInt(random * lengthOfReservation); //to get a random item, multiply length and math.random between 0 and length of the array
  const randomReservationList = reservation[randomReservation]; //pick the random item in the array

  response.send(randomReservationList);
});

module.exports = router;
