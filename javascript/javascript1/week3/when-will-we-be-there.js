const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeOfTravel(travelInfo) {
  speedInMinute = travelInformation.speed/60;
  time = travelInformation.destinationDistance/speedInMinute;
  timeInHours = Math.floor(time/60);
  timeInMinute = Math.floor(time - timeInHours*60);
  console.log(timeInMinute);
  console.log(timeInHours);
  console.log(time);
  return timeInHours + " hours and " + timeInMinute + " minutes."
};

let a = timeOfTravel(travelInformation);
console.log(a);

//const travelTime = notThisFunctionName(travelInformation);
//console.log(travelTime); // 4 hours and 42 minutes
