const express = require('express');
const app = express();
const port = 3001;

const mealsRouter = require('./routes/mealsroute');
const cheapMealsRouter = require('./routes/cheapmealsroute');
const largeMealsRouter = require('./routes/largemealsroute');
const randomMealRouter = require('./routes/mealroute');
const reservationsRouter = require('./routes/reservationsroute');
const reservationRouter = require('./routes/reservationroute');
const mealsidRouter = require('./routes/mealsroute');
const reviewsRouter = require('./routes/reviews');

app.use('/meals', mealsRouter);

app.use('/meals/:id', mealsRouter);

app.use('/meals/maxPrice', mealsRouter);

app.use('/meals/title', mealsRouter);

app.use('/meals/createdAfter', mealsRouter);

app.use('/meals/limit', mealsRouter);

app.use('/cheap-meals', cheapMealsRouter);

app.use('/large-meals', largeMealsRouter);

app.use('/random-meals', randomMealRouter);

app.use('/reservations', reservationsRouter);

app.use('/reservations/:id', reservationsRouter);

app.use('/reservation', reservationRouter);

app.use('/reviews', reviewsRouter);

app.use('/reviews/:id', reviewsRouter);

app.listen(
  port,
  () => console.log(`Example app listening at http://localhost:${port}`)
);
