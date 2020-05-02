function getTheDay(numdays) {
    const alldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date()
    const today = date.getDay();
    const num = (today+numdays) % 7
    return "today is " + alldays[today] + " and the even will be held on " + alldays[num] + "."
};

const a = getTheDay(4);
const b = getTheDay(-8);
console.log(a);
console.log(b);

console.log(getTheDay(5));

//feed back from Florin:
// what would happen if I call this function like this
// const a = myFunction(-8)
// it turned held on undefined.

// function somefunction(bamse, root){
//   console.log(bamse)
//   console.log(root)
// };
