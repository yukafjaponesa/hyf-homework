const savedName = [];
const todos = [];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dish = [];
const calendar = [];

function getReply(command) {
  let get = command.slice(17);
  //console.log(command,"savedName.push(get)");
  if(command.substring(0,17) === "Hello my name is ") {
  savedName.push(get)
  //savedName.push({name:get})
};
  //console.log(command.substring(0,17));
  for(let i = 0; i < savedName.length; i++) {
    if(command === "Hello my name is " +  savedName[i]) {
      return "Nice to meet you " + get;
    }
  }

  if(command === "What is my name?") {
    //console.log(savedName);
    //console.log(savedName.slice(-1)[0],"savedName.slice(-1)[0]");
    return savedName.slice(-1)[0];
};

for(let i = 0; i < command.length; i++) {
  if(command === "Add fishing to my todo") {
    todos.push(command[i]);
    return   "Added " + command.substring(4,14) + " your todos"
  }} //use replace() ??

  if (command === "Remove fishing from my todo") {
      let remove = todos.shift([0])
      return "Removed " + remove + " from your todo"
  }

  if (command === "What is on my todo?") {
    //let allTodos = todos.map();
    return todos
  }

  if (command === "What day is it today?") {
    let d = new Date();
    let today = d.getDate();
    let thisMonth = d.getMonth();
    let thisYear = d.getFullYear();
    return "Today is " + today + ". of " + months[d.getMonth()] + " " + thisYear;

  }

  /*if (command === "what is " + (x + y)) {
    let x = x;
    let y = y;
    return x + y;
  }*/

    if (command === "My favorite dish is lasagne") {
      let favDish = command.slice(20);
      dish.push(favDish);
      return "My favorite dish is " + favDish;
    }

    //set a timer
    let counter = 0;
    let timeleft = 60;

    function convertSeconds(s) {
      let min = floor(s / 60);
      let sec = s % 60;
      return nf(min,2) + ':' + nf(sec,2);
    }

    /*let ding;
    function preload() {
      ding = loadSound("ding.mp3"); //need a file
    }*/

    function setup() {

      let params = getURLParams();
      if (params.minute) {
      let min = params.minute;
      timeleft = min * 60;
    }

      let timer = select('#timer');
      convertSeconds(timeleft - counter);

      let interval = setInterval(timeIt, 1000);

      function timeIt() {
        counter++;
        convertSeconds(timeleft - counter);
        if (counter === timeleft) {
          ding.play();
          clearInterval(interval);
          //counter = 0;
        }
      }
    } //set a timer end
    /*
    if (command === "Set a timer for 4 minutes") {
      let deadline = new Date("dec 31, 2020 15:37:25").getTime();
      let now = new Date().getTime();
      let t = deadline - now;
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return "Timer set for 4 minutes"
    } else {
      return "Timer done"
    }
    */

      for(let i = 0; i < calendar.length; i++) {
      if(command === 'Add Bike ride the 3/5/2019 to my calendar') {
        calendar.push(command[i]);
        return "Bike ride added to your calendar"
      }
    }

    if(command === 'What am I doing this week?') {
      let a = calendar.toString(); //convert an array to a string
    }

};


console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name?'));
console.log(getReply('Hello my name is Yuka'));
//let a = getReply("Benjamin");
//console.log(a);
console.log(savedName);

console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(todos);
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply('What day is it today?'));
//console.log(getReply('What is ' 3+3));
console.log(getReply("My favorite dish is lasagne"));
console.log(dish);
console.log(getReply("Timer set for 4 minutes"));
console.log(getReply("Add Bike ride the 3/5/2019 to my calendar"));
console.log(getReply("What am I doing this week?"));
console.log(calendar);
