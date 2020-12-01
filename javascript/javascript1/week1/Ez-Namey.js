const firstWords = ["Easy", "Awesome", "Corporate", "Bright", "Advanced"];
const secondWords = ["Life", "Action", "Together", "Way", "Future"];

function getStartUpName (firstWords, secondWords) {
  const firstName = firstWords[Math.floor(Math.random() * firstWords.length)];
  const secondName = secondWords[Math.floor(Math.random() * secondWords.length)];
  return firstName + " " + secondName;
};

const startupName = getStartUpName(["Easy", "Awesome", "Corporate", "Bright", "Advanced"], ["Life", "Action", "Together", "Way", "Future"]);

console.log(startupName);
