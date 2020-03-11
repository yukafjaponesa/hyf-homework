function getFullname (firstname, surname, useFormalName) {
  if (useFormalName === true) {
    return "Lord " + firstname + " " + surname
  } else {
    return firstname + " " + surname
  }
};
const fullname1 = getFullname("yuka", "fukuzawa", true);
const fullname2 = getFullname("yuka", "fukuzawa");
console.log(fullname1);
console.log(fullname2);
