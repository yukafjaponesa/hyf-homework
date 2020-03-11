const boughtCandyPrices = []
const amountToSpend = Math.random() * 100
console.log(amountToSpend)

candyMoreCandy(
function addCandy(candyType, weight) {
  if(candyType === "sweet") {
    boughtCandyPrices.push(0.5*weight)
  } else if(candyType === "chocolate") {
    boughtCandyPrices.push(0.7*weight)
  } else if(candyType === "Toffee") {
    boughtCandyPrices.push(1.1*weight)
  } else (candyType === "Chewing-gum") {
    boughtCandyPrices.push(0.03*weight)
  }
}

function canBuyMoreCandy(arrayOfPrices) {
  let totalPrice = 0
     for( let i = 0; i < arrayOfPrices.length; i++) {
       totalPrice = totalPrice + arrayOfPrices[i]
     }
     return totalPrice < amountToSpend
}
addCandy("Sweet", 10)
addCandy("Chocolate", 100)
const isAbailableToBuyMore = canBuyMoreCandy(boughtCandyPrices)
console.log(isAbailableToBuyMore)
