function myFunction(numdays) {
    const alldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    d = new Date()
    today = d.getDay();
    let num = (today+numdays) % 7
    return "today is " + alldays[today] + " and the even will be held on " + alldays[num] + "."
};

let a = myFunction(4)
console.log(a)

// function somefunction(bamse, root){
//   console.log(bamse)
//   console.log(root)
// };
