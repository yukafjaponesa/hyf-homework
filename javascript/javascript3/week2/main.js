// This code will move the li to the position 100, 100.
//Calling moveElement will return a promise that resolves after the li element has been moved.
const redCircle = document.querySelector('ul.marks li:nth-child(1)')
const blueCircle = document.querySelector('ul.marks li:nth-child(2)')
const greenCircle = document.querySelector('ul.marks li:nth-child(3)')

const translateOneByOne = () => {
    moveElement(redCircle, { x: 20, y: 300 })
        .then(() => {
            console.log('red done');
            return moveElement(blueCircle, { x: 400, y: 300 })
        })
        .then(() => {
            console.log('blue done');
            return moveElement(greenCircle, { x: 400, y: 20 })
        })
        .then(() => console.log('green done'))
}
translateOneByOne();



const translateAllAtOnce = () => {
  const redTarget = moveElement(redCircle, {x: 20, y: 300})
  const blueTarget = moveElement(blueCircle, {x: 400, y: 300})
  const greenTarget = moveElement(greenCircle, {x: 400, y: 20})
  Promise.all([redTarget, blueTarget, greenTarget])
    .then(() => console.log('Elements have been moved'))
}

translateAllAtOnce();
