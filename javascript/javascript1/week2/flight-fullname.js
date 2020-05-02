function getFullname (firstname, surname, useFormalName) {
  if (useFormalName === true) {
    return "Lord " + firstname + " " + surname
  } else if(firstname === "" && surname === ""){
    return "Please enter your name";
  }else {
    return firstname + " " + surname
  }
};
const fullname1 = getFullname("yuka", "fukuzawa", true);
const fullname2 = getFullname("yuka", "fukuzawa");
const emptyName = getFullname("", "");
console.log(fullname1);
console.log(fullname2);
console.log(emptyName);
