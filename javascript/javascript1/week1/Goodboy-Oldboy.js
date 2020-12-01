let dogYearOfBirth = 2019;
let dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {

  console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture)
} else {
  dogYear *= 7;
  console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture)
};

console.log(typeof(shouldShowResultInDogYears));
