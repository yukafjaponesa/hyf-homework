const firstDrink= ["Vermouth", "Whisky", "Amaretto", "Ouzo", "Tequila", "Vodka", "Gin", "Rum", "Port", "Malibu"];
const secondAnimal= ["Dog", "Cat", "Hawk", "Hippo", "Wolf", "Beaver", "Horse", "Duck", "Panda", "Tiger"];

function getName() {
  if(document.getElementById("name").value === "") {
    document.getElementById("name").value = "No name is typed";
} else {
    let randomItem = firstDrink[Math.floor(Math.random()*firstDrink.length)];
    let randomAnimal = secondAnimal[Math.floor(Math.random()*secondAnimal.length)];
    document.getElementById("animal-name").value = document.getElementById("name").value + " - the "
    + randomItem + " " + randomAnimal;
}
};
//let a = getName("animal-name");
//console.log(a(yuka));
/*
function randomAnimalName(items) {
  let firstItem = firstDrink[Math.floor(Math.random()*firstDrink.length)];
  let secondItem = secondAnimal[Math.floor(Math.random()*secondAnimal.length)];
  return "Your name - " + firstItem + secondItem;
};
let a = randomAnimalName();*/
//console.log(a("Yuka"));
