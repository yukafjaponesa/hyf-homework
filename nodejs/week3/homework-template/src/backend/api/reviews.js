const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  const {
    numberOfStars,
    content,
    meal_id,
    createdAt,
  } = req.query;

  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const allReviews = await knex("review").select("*");
    res.json(allReviews);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const {
      title,
      description,
      meal_id,
      stars,
      createdAt
    } = req.body;

    const addNewRevies = {
      title,
      description,
      meal_id,
      stars,
      createdAt
    };

    const addReview = await knex("review").insert(addNewRevies);
    res.json(addReview);
  } catch (error) {
    throw error;
  }
});

router.get('/:id', async function(req, res) {
    //console.log(`params.id=${req.params.id}`);
    try {
      const thisReserve = await knex("review")
      .select()
      .where(id)
      res.send(thisReserve[0]);
    } catch (error) {
      throw error;
    }
});

router.put('/:id', async function(req, res) {
  const {numberOfStars} = req.body;
  const {id} = req.params;

    try {
      const thisReserve = await knex("review")
      .where({id})
      .update({numberOfStars})
      res.send('updated');
    } catch (error) {
      throw error;
    }
});

router.delete('/:id', async function (req, res, next) {
  try {
    let id = parseInt(req.params.id);

    await knex("review").delete(id);
    res.send('deleted ',id);
  } catch (error) {
    throw error;
  }
});


module.exports = router;
