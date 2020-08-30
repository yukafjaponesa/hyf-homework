const express = require('express');
const app = express();
const port = 3001;

const mealsRouter = require('./routes/mealsroute');
const cheapMealsRouter = require('./routes/cheapmealsroute');
const largeMealsRouter = require('./routes/largemealsroute');
const randomMealRouter = require('./routes/mealroute');
const reservationsRouter = require('./routes/reservationsroute');
const reservationRouter = require('./routes/reservationroute');


app.use('/meals', mealsRouter);

app.use('/cheap-meals', cheapMealsRouter);

app.use('/large-meals', largeMealsRouter);

app.use('/random-meals', randomMealRouter);

app.use('/reservations', reservationsRouter);

app.use('/reservation', reservationRouter);

app.listen(
  port,
  () => console.log(`Example app listening at http://localhost:${port}`)
);
