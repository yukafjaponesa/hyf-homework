const amountOfTime = (time, numToLog) => {
  setTimeout(()=>{
    console.log(numToLog);
  },time)
};

document.getElementById("button").onclick = () => {
  const getNumber = document.getElementById("time").value;
  const time = parseInt(getNumber,10); //this line only READ the num
  amountOfTime(time*1000,"Over!");
  //debugger
};

//need to reset
let nbr = 0; //shouldnt be 0
let nbr2 = 0;
window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(evt) {
  if(evt.keyCode === 83){
    nbr++;
  }else if(evt.keyCode === 76){
    nbr2++;
  }
  console.log(nbr, nbr2);
  document.getElementById("leftcounter").innerHTML = nbr;
  document.getElementById("rightcounter").innerHTML = nbr2;
};
