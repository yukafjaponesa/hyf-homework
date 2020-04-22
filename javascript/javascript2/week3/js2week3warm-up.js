// setTimeout(function(){
//   console.log(('Called after 2.5 seconds'))
// }, 2500);
//
// //2.
// function calledAfterTheTime(delay, stringToLog){
//   setTimeout(()=>{
//     console.log(stringToLog);
//     }, delay)
// };
// //calledAfterTheTime(5000, "its been 5 sec");
//
// // const yuka = () => {
// //   return "lau";
// // };
// //
// // console.log(yuka());
//
// //3.
// const buttonClicked = function(event) {
//   console.log(event);
//   if(event.target.id === "one"){
//     calledAfterTheTime(1000,"1 sec");
//   }
// };
// document.getElementById("one").addEventListener("click", buttonClicked);
//
// //4.
// const earthLogger = () => console.log("Earth");
// const saturnLogger = () => console.log("Saturn");
//
// const planetLogFunction = (satellite) => {
//   satellite();
// };
// planetLogFunction(earthLogger);
// planetLogFunction(saturnLogger);
//
// //5.
// const x = document.getElementById("demo");
// const getLocation = () => {
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition);
//   }
// };
//
// const showPosition = position => x.innerHTML = `Latitude: ${position.coords.latitude} <br>Longitude: ${position.coords.longitude}`;
// //document.getElementsById("location").addEventlistener("click", showPosition);
//
// // const location = (event) =>{
// //   if(mouseClick = event.target.id){
// //     return Geolocation.getCurrentPosition();
// //   }
// // };
// // document.getElementsById("location").addEventlistener("click", location)
//
// //7.
// const runAfterDelay = (delay, callback) => {
//   setTimeout(()=>{
//     console.log(callback)
//   },delay)
// };
// runAfterDelay(4000, "Hello World!");
//
// //8.
// const dblClicked = () => {document.getElementById("dbl").innerHTML = "double clicked!"};
// document.getElementById("dbl").addEventListener("dblclick",dblClicked);

//9.jokes.js file doesnt match
const {jokes, badJoke} = require("./jokes")
let logFunnyJoke = () => {
  console.log(jokes[Math.floor(Math.random()*jokes.length)]);
};

let logBadJoke = () => {
  console.log(badJoke[Math.floor(Math.random()*badJoke.length)]);
};

let jokeCreator = (shouldTellFunnyJoke, funny, bad) => {
  if(shouldTellFunnyJoke === true){
    funny();
  }else{
    bad();
  }
};
jokeCreator(true, logFunnyJoke, logBadJoke);
