function myFunc(days) {
  const allweek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
  d = new Date()
  today = d.getDay()
  let number = (today + days) % 7
  return "today is " + allweek[today] + " and the event will be held on " + allweek[number] + "."
};

let a = myFunc(11);
console.log(a);
