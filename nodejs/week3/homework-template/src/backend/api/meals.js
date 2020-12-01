const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  const {
    meals,
    maxPrice,
    availableReservations,
    title,
    createdAfter,
    limit
  } = req.query;

  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    if(meals) {
      const meals = await knex("meal").select("*");
      res.json(meals);
    }

    if(maxPrice) {
      const getMaxPrice = parseInt(maxPrice);
      const meals = await knex("meal").select().where("price", "<", getMaxPrice);
      // const cheapMeals = meals.filter(meal => {
      //   return meal.price < 70;
    } //)

    if(availableReservations === true) {
      meals = await knex
        .from("meal")
        .select("*")
        .sum({ total: "reservation.number_of_guests" })
        .join("reservation", {"meal.id": "reservation.meal_id" })
        .where("meal.meal_maxNumberOfGuests", "<", knex.fn.now())
        .groupBy("meal.id")
        .having(sum(total), "<", "meal.meal_maxNumberOfGuests");
    }

    if(title) {
      meals = await knex("meal").where("title", "like", `%${title}%`);
    }

    if(createdAfter) {
      const dateCreatedAfter = new Date(createdAfter);
      meals = await knex("meal")
        .select()
        .where("createdAt", ">", dateCreatedAfter);
    }

    if(limit) {
      const numOfMeal = parseInt(limit);
      meals = await knex.select().from("meal").limit(numOfMeal);
    }

    const getResult = await meals.select("*");

    if(getResult.length === 0 || availableReservations === "false") {
      res.status(404).send(`Error 404. Meals not found`);
    }

  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const {
      title,
      maxNumberOfGuests,
      description,
      createdAt,
      price
    } = req.body;

    const addNewMeal = {
      title,
      maxNumberOfGuests,
      description,
      createdAt,
      price
    };

    const addMeal = await knex("meal").insert(addNewMeal);
    res.json(addMeal);
  } catch (error) {
    throw error;
  }
});

router.get('/:id', async function(req, res) {
    //console.log(`params.id=${req.params.id}`);
    try {
      const thisMeal = await knex("meal")
      .select("*")
      .where(req.params) // .where({'id' : req.params.id})
      res.json(thisMeal[0]);
    } catch (error) {
      throw error;
    }
});

router.put('/:id', async function(req, res) {
  const {title} = req.body;
  const {id} = req.params;

    try {
      const thisMeal = await knex("meal")
      .where({id})
      .update({title});
      res.send('updated');
    } catch (error) {
      throw error;
    }
});

router.delete('/:id', async function (req, res, next) {
  try {
    let id = parseInt(req.params.id);

    await knex("meal").delete(id);
    res.send('deleted ',id);
  } catch (error) {
    throw error;
  }
});


module.exports = router;
