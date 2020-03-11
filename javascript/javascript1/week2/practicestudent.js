const classStudent = []
  function addStudentToClass(studenNum) {
    if (classStudent.includes(studenNum)) {
      console.log(studenNum + " is already in the class")
    }
    if (studenNum === "Queen" && studenNum.length >= 7) {
      classStudent.pop()
      classStudent.push(studenNum)
      return
    }
    if (classStudent.length >= 7) {
      console.log("cannot add more")
      return
    }
    if (studenNum === "") {
      console.log("cannot add empty string")
      return
    }
    classStudent.push(studenNum)
  };

function getNumOfStu() {
  return classStudent.length
};
console.log("Num of students: " + getNumOfStu());
