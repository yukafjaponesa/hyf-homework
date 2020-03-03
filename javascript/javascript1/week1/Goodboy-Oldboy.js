const dogYearOfBirth = 2019;
const dogYearFuture = 2030;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {

  console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture)
} else {
  dogYear *= 7;
  console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture)
};

console.log(typeof(shouldShowResultInDogYears));
