const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const circles = []

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x
    this.y = y
    this.r = r
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.fillColor = fillColor
  }

  draw() {

    // saves the current styles set elsewhere
    // to avoid overwriting them
    ctx.save()

    // set the styles for this shape
    ctx.fillStyle = this.fillColor

    // create the 'path'
    ctx.beginPath()

    // // draw the path to screen
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle)
    ctx.stroke()
    ctx.fill()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  move() {
      this.x = this.x + random(-5, 5)
      this.y = this.y + random(-5,5)
    }

    show() {
      stroke(255)
      strokeWeight(4)
      noFill()
      ellipse(tis.x, this.y, 24, 24)
    }
}

// function random_bg_color() {
//     // const x = Math.floor(Math.random() * 256)
//     // const y = Math.floor(Math.random() * 256)
//     // const z = Math.floor(Math.random() * 256)
//     // const bgColor = `rgb(${x}, ${y}, ${z})`
//     // console.log(bgColor)
//
//     document.body.style.background = randomColor();
// }

function randomColor() {
    const x = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    const z = Math.floor(Math.random() * 256)
    return `rgb(${x}, ${y}, ${z})`
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, randomColor());
const c2 = new Circle(100, 50, 20, 0, 2 * Math.PI, randomColor());
c1.draw();
c2.draw();

//random_bg_color();
randomColor();

/*
// function to create bubble objects
class Bubble {
  // you create new Bubbles by calling this as a function
  // these are the arguments you pass in
  // add default values to avoid errors on empty arguments
  constructor(x = 0, y = 0, width = 0, height = 0, fillColor = '', strokeColor = '', strokeWidth = 2) {
      // ensure the arguments passed in are numbers
      // a bit overkill for this tutorial
      this.x = Number(x)
      this.y = Number(y)
      this.width = Number(width)
      this.height = Number(height)
      this.fillColor = fillColor
      this.strokeColor = strokeColor
      this.strokeWidth = strokeWidth
  }

  // get keyword causes this method to be called
  // when you use myBubble.area
  get area () {
    return this.width * this.height
  }

  // gets the X position of the left side
  get left () {
    // origin is at top left so just return x
    return this.x
  }

  // get X position of right side
  get right () {
    // x is left position + the width to get end point
    return this.x + this.width
  }

  // get the Y position of top side
  get top () {
    // origin is at top left so just return y
    return this.y
  }

  // get Y position at bottom
  get bottom () {
    return this.y + this.height
  }

  // draw bubbles to screen
  draw () {
    // destructuring
    const {
      x, y, width, height, fillColor, strokeColor, strokeWidth
    } = this

    // saves the current styles set elsewhere
    // to avoid overwriting them
    ctx.save()

    // set the styles for this shape
    ctx.fillStyle = fillColor
    ctx.lineWidth = strokeWidth

    // create the 'path'
    ctx.beginPath()
    ctx.strokeStyle = strokeColor
    ctx.ellipse(x, y, width, height)

    // draw the path to screen
    ctx.fill()
    ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }
}

const myBubble = new Bubble(400, 85, 50, 50, 'gold')
console.log(myBubble)

myBubble.draw()
*/


// let bubble1
// let bubble2
//
// function setup() {
//   createCanvas(600, 400)
//   bubble1 = new Bubble()
//   bubble2 = new Bubble()
// }
//
// function draw() {
//   bacground(0)
//   bubble1.move()
//   bubble1.show()
//   bubble2.move()
//   bubble2.show()
// }
//
// class Bubble {
//   constructor() {
//     this.x = 200
//     this.y = 150
//   }
//
//   move() {
//     this.x = this.x + random(-5, 5)
//     this.y = this.y + random(-5,5)
//   }
//
//   show() {
//     stroke(255)
//     strokeWeight(4)
//     noFill()
//     ellipse(tis.x, this.y, 24, 24)
//   }
// }
