const inputTag = document.getElementById('time')
const btnTag = document.getElementById('btn')

const gameTime = (delay) => {
  const time = inputTag.value

  const setTime = time * 1000
  setTimeout(() => {
    alert(`${time} sec. times up`)
  }, setTime)
}
btnTag.addEventListener('click', gameTime)


  if(!time) {
    alert('Set a time to begin!')
  } else {
    const setTime = time * 1000
    setTimeout(() => {
      alert(`${time} sec. times up`)
    }, setTime)
  }
}
btnTag.addEventListener('click', gameTime)

let countS = 0;
let countL = 0;

const inputS = document.getElementById('displayS');
const inputL = document.getElementById('displayL');

window.onkeydown = function() {
    const key = event.keyCode || event.charCode;
    if( key == 83 ){
        countS++;
        console.log( countS );
        inputS.value = countS
        return false;
    }
    if( key == 76 ){
        countL++;
        console.log( countL );
        inputL.value = countL
        return false;
    }
};

/*

window.onkeydown = function() {
    const key = event.keyCode || event.charCode;
    if( key == 76 ){
        countL++;
        console.log( countL );
        inputL.value = countL
        return false;
    }

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

}; */
