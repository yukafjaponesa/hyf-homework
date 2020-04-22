// use the functions on this array
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function mean(numbers) {
    let total = 0;
    for(let i = 0; i <numbers.length; i++) {
      total += numbers[i];
    }
    return total / numbers.length;
};
/*const restult = (...numbers) => numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
restult(...[1,2,3]);
*/

function median(numbers) {
let median = 0, numsLen = numbers.length;
numbers.sort();

if(numsLen % 2 === 0)//is even
{
  median = (numbers[numsLen / 2 -1] + numbers[numsLen / 2]) / 2;
} else {
  median = numbers[(numsLen - 1) / 2];
}
return median;
};

let a = mean(housePrices);
console.log(mean(housePrices));
let b = median(housePrices);
console.log(median(housePrices));
