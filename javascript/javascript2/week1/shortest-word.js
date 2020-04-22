const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
function findMinLengthWord (str) {
    let sh = Infinity;
    let shortest;
    for(let i = 0; i < str.length; i++) {
      if(str[i].length < sh) {
        sh = str[i].length;
        shortest = str[i];
      }
      /*let length = danishWords[i].length;
      let min = Math.min(length);
      return min;*/
    }
    return shortest;
};
console.log(findMinLengthWord(danishWords)); // returns 'ø'
