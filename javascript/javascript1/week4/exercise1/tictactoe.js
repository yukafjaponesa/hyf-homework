const aPlayer = 'o';
const bPalyer = 'x';
const position = [
['x', 'o', ' '],
[' ', 'o', ' '],
[' ', 'o', 'x']
];
const position1 = [
  ['x', 'o', ' '],
  [' ', ' ', ' '],
  [' ', 'o', 'x']
];

{
    winner: "o",
    loser: "x",
    hasEnded: true,
    nextPlayer: o
}

//"o"always starts
const position = {
  ['x', ' ', ' '],
  [' ', 'o', ' '],
  [' ', 'o', '']
};

{
  winner:
}

function getRenderedGame(position) {

  return "*" + position[0][0]  + "*" + position[0][1] +  "*" + position[0][2] + "* \n"
  + "*" + position[1][0]  + "*" + position[1][1] +  "*" + position[1][2] + "* \n"
  + "*" + position[2][0] + "*" + position[2][1] +  "*" + position[2][2] + "*"
  //console.log(position[0]);//how do i get an element from an array
};
const renderedGame = getRenderedGame(position);
console.log(renderedGame);


function getGameinfo(position) {

};
const gameInfo = getGameinfo(position);
console.log(gameInfo);
