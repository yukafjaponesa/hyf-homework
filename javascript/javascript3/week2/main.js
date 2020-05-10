// This code will move the li to the position 100, 100.
//Calling moveElement will return a promise that resolves after the li element has been moved.
const redCircle = document.querySelector('ul.marks li:nth-child(1)')
const blueCircle = document.querySelector('ul.marks li:nth-child(2)')
const greenCircle = document.querySelector('ul.marks li:nth-child(3)')

const translateOneByOne = () => {
  setTimeout(() => {
    moveElement(redCircle, {x: 20, y: 300})
    .then(() => {
      console.log('red done')
    })
  }, 0)

  setTimeout(() => {
    moveElement(blueCircle, {x: 400, y: 300})
      .then(() => {
        console.log('blue done')
    })
  }, 1000)

  // .then(() => {
  //   moveElement(blueCircle, {x: 400, y: 300})
  //   .then(() => {
  //     console.log('blue done')
  //   })
  // })
  setTimeout(() => {
    moveElement(greenCircle, {x: 400, y: 20})
      .then(() => {
        console.log('green done')
    })
  }, 2000)
  // .then(() => {
  //   moveElement(greenCircle, {x: 40, y: 20})
  //   .then(() => {
  //     console.log('green done')
  //   })
  // })
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


// const redCircle = {x: 20px, y: 300px}
// const blueCircle = {x: 400px, y: 300px}
// const greenCircle = {x: 40px, y: 20px}
//
// moveElement(redCircle, {x: 20, y: 300})
//   .then(() => {
//       console.log('Red Element has been moved');
//   })
