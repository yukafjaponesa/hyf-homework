const express = require('express');
const app = express();
const port = 3000;
const _cal = require('./calculator');

//Add 2 routes to your index.js:
//GET /numbers/add?first=<number here>&second=<number here>.
//In response send sum (first + second).
//GET /numbers/multiply/<first number here>/<second number here>.
//in response send multiplication (first * second).

app.get('/numbers/add/', function(req, res) {
  let rs = 0;
  let firstNum = parseInt(req.query.firstNum);
  let secondNum = parseInt(req.query.secondNum);
  rs = _cal.add(firstNum, secondNum);
  res.json(rs);
  //res.send(`${firstNum} plus ${secondNum} is firstNum + secondNum`)
});

app.get('/numbers/multiply/', function(req, res) {
  let rs = 0;
  let firstNum = parseInt(req.query.firstNum);
  let secondNum = parseInt(req.query.secondNum);
  rs = _cal.mul(firstNum, secondNum);
  res.json(rs);
  //res.send(`${firstNum} times ${secondNum} is firstNum * secondNum`)
});


app.listen(
  port,
  () => console.log(`Example app listening at http://localhost:${port}`)
);
