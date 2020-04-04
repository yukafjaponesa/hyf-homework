let numbers = [1, 2, 3, 4];
let newNumbers = [];

/*for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}*/

//console.log("The doubled numbers are", newNumbers); // [2, 6]
function doubledNum(num) {
  if(numbers % 2 !== 0){
    newNumbers = numbers * 2;
  }
};
const mapNum = numbers.map(doubledNum);
const filteredNum = numbers.filter(doubledNum);

console.log(filteredNum);
console.log(mapNum);

/*
const result = num => {
  if(numbers % 2 !== 0) {
    return newNumbers = num * 2
  }};
const filteredNum = numbers.filter(result).map(result);
console.log("The doubled numbers are", filteredNum); // [2, 6]

/*
function higherThan3500(m) {
  return m.price > 3500
};
const pricyProduct = randomListings.filter(higherThan3500).map(x => x.price);
*/
