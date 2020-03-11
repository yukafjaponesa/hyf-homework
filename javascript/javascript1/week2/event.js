let currentDate = new Date();
function getEventWeekday(days) {
  return new Date(currentDate.getTime() + days * 24 * 60 * 1000)
};

let days = prompt("please enter event days up to now");
let newDate = getEventWeekday(days);
console.log("The even will be held on this date:" + newDate);
