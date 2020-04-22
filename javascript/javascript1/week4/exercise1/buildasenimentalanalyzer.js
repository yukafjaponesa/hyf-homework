const allowedPositiveWords = ["super", "amazing", "awesome", "happy", "exciting"];
const allowedNegativeWords = ["sad", "horrible", "sick", "angry", "unhappy"];

function getSentimentScore(incomingString) {
  let result = {
    score: 0,
    positiveWords: [],
    negativeWords: [],
    neutralWords: []
  };
  const wordsInString = incomingString.split('');
  //console.log("wordsInString = ", wordsInString);
  for(let i = 0; i < wordsInString.length; i++) {
    const myWord = wordsInString[i];
    if (allowedPositiveWords.includes(myWord)) {
      result.score++;
      result.positiveWords.push(myWord);
    } else if(allowedNegativeWords.includes(myWord)) {
      result.score--;
      result.negativeWords.push(myWord)
    } else {
      result.neutralWords.push(myWord)
      //console.log("nothing happened")
      //neutralWords.push(myWord);
    }
  }
  return result
};

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/
