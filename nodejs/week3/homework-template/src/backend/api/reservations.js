const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  const {
    reservations,
    number_of_guests,
    meal_id,
    location,
    createdAt
  } = req.query;

  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    if(reservations) {
      const allReservations = await knex("reservation").select("*");
      res.json(allReservations);
    }

  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const {
      number_of_guests,
      meal_id,
      location,
      createdAt
    } = req.body;

    const addNewReservations = {
      number_of_guests,
      meal_id,
      location,
      createdAt
    };

    const addReserve = await knex("reservation").insert(addNewReservations);
    res.json(addReserve);
  } catch (error) {
    throw error;
  }
});

router.get('/:id', async function(req, res) {
    //console.log(`params.id=${req.params.id}`);
    try {
      const thisReserve = await knex("reservation")
      .select("*")
      .where(req.params)
      res.send(thisReserve[0]);
    } catch (error) {
      throw error;
    }
});

router.put('/:id', async function(req, res) {
  const {number_of_guests} = req.body;
  const {id} = req.params;

    try {
      const thisReserve = await knex("reservation")
      .where({id})
      .update({number_of_guests})
      res.send('updated');
    } catch (error) {
      throw error;
    }
});

router.delete('/:id', async function (req, res, next) {
  try {
    let id = parseInt(req.params.id);

    await knex("reservation").delete(id);
    res.send('deleted ',id);
  } catch (error) {
    throw error;
  }
});


module.exports = router;
