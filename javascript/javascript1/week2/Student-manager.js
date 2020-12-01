//const class07Students = ["Abdi","Queen", "Yuak", "Lau", "Yuka", "Jonathan", "Bjorn"]
const class07Students =[]
function addStudentToClass(studentName) {
    // You write code here
    // You can not add same person
    if (class07Students.includes(studentName)) {
      //console.log(studentName + ' is already in the class')
      return `${studentName} is already in the class`;
    }
    if (studentName === "Queen" && class07Students.length >= 7) {
      //one of the name will be out and Queen should be added
      class07Students.pop()
      class07Students.push(studentName)
      //return
    }
    // Check if there will be more than 7
    // people in the array (class)
    if (class07Students.length >= 7) {
      console.log("Cannot add more students to class 07")
      return
    }
    //
    if (studentName === "") {
      //must push one of the name to Arrays
      console.log("Can not add Empty string")
      return
    }
    class07Students.push(studentName)
};

//addStudentToClass("Yuak");
//console.log("class07Students: " + class07Students)

function getNumberOfStudents() {
    // You write code here
    return class07Students.length
}
console.log("Number of students: " + getNumberOfStudents())
//     const arr = [];
//     arr[0] = "Jani";
//     arr[1] = "Hege";
//     arr[2] = "Stale";
//     arr[3] = "Kai Jim";
//     arr[4] = "Borge";
//     arr[5] = "Steve";
//     arr[6] = "Hans";
// }
