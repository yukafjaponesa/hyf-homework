const movies = require("./movies")

//1.
const creatFilterFuncion = (length, operator) => {
  return (n) => {
    if(operator === ">") {
      return n > length;
    }else {
      return n < length;
    }
  }
};
const a = movies.filter(creatFilterFuncion(10, "<"));
const b = movies.filter(creatFilterFuncion(20,">="));

// function shortTitle(n) {
//     let short = n.title;
//     return short.length < 10
// };
// const a = movies.filter(shortTitle);
//console.log(movies.length,a.length);
//console.log(a[5]);


//2. long title
// function longTitle(m) {
//     let long = m.title;
//     return long.length >= 20
//     //console.log(short);
// };
// const b = movies.filter(longTitle);
//console.log(b);


//3.
function betweenTheYears (s) {
  return 1980 <= s.year && s.year <= 1989
};
const c = movies.filter(betweenTheYears);
console.log(c.length);


//4.new array with rating - use map
const newMovies = movies.map((item) => {
  return {
    ...item,
    tag: rating(item.rating) //item.title[0]
  }
});
//console.log(newMovies[0]);

function rating(number) {
    if(number >= 7) {
      return "Good"
    } else if(4 >= number){
      return "Average"
    } else {
      return "Bad"
    }
};

//5.Using chaining,
// const higherMovies = moveis
//   .filter(movie => movie.rating > 6);
// const higherThan6 = higherMovies
//   .map(movie => movie.item);

  const higherThan6 = movies
    .filter(movie => movie.rating > 6)
    .map(movie => movie.rating);
    console.log(higherThan6);

//6. how to contain any specific items in it
function howManyMovies (itm) {
  if(itm.includes("Surfer") || itm.includes("Alien") || itm.includes("Benjamin")){
    return itm.length;
  }
};
let howmany = movies.filter(howManyMovies);
console.log(howmany);
//i = case insensitive (if needed)
//Question: how to turn forEach into map and how to conole

//7.make an new array with duplicated word in titles
const lookup = moveis.reduce((a, e) => {
  a[e.title] = ++a[e.title] || "Wars";
  return a;
}, {});
console.log(movies.filter(e => lookup[e.title]));
