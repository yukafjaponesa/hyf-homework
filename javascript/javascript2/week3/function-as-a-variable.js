//1.
const func1 = () => console.log("func1");
const func2 = () => console.log("func2");
const func3 = () => console.log("func3");

const arrayOfFunctions = [func1, func2, func3];
arrayOfFunctions.forEach(funcItem => funcItem());

//2.
const myFunc = () => console.log("this is my func.");
function myFunc2 () {console.log("func2")};
myFunc();
myFunc2();

//3.
const func = {
  key: function(){
    console.log("function")
  }
};
func.key();
