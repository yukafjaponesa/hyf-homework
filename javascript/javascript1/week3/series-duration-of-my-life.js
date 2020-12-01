const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,
    //(24*3+1)/700800*100
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
    //824*3+14)/700800*100
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
    //60/700800*100
  }
]

lifeInMinute = 80*365*24*60;

gameOfThrones = seriesDurations[0].days*24*60+seriesDurations[0].hours*60;
sopranos = seriesDurations[1].days*24*60+seriesDurations[1].hours*60;
theWireInMin = seriesDurations[2].days*24*60+seriesDurations[2].hours*60;

partOfLife1 = gameOfThrones*100/lifeInMinute;
partOfLife2 = sopranos*100/lifeInMinute;
partOfLife = theWireInMin*100/lifeInMinute;
console.log(seriesDurations[0].days*24*60);
console.log(seriesDurations[1].days*24*60);
console.log(seriesDurations[2].days*24*60);
console.log("Game of thrones " + partOfLife1.toFixed(3) + "% of my life");
console.log("Sopranos " + partOfLife2.toFixed(3) + "% of my life");
console.log("the wire took " + partOfLife.toFixed(3) + "% of my life");

let total = (partOfLife1+partOfLife2+partOfLife);
console.log("In total that is " + total.toFixed(3) + "% of my life"); 

let a = seriesDurations;
console.log(a);
