const class07Students = ["Steve", "Peter", "Maria", "Laura", "Hans", "Luka"];
function addStudentToClass(name) {
  let index = class07Students.indexOf(name);
  if (index == -1) {
    class07Students.push(name);
    for(let i = 0; i < class07Students.length; i++)
    {console.log(class07Students[i])}
  } else {console.log("Content already exists, please change entry")}
};
addStudentToClass("Queen");

/*
var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join());
arr.splice(2, 0, "Lene");
console.log(arr.join());
