const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];


function addSongToDatabase(song) {
  const moreSongs =
  [{
    songId: 5,
    title: 'I like me better',
    artist: 'Lauv',
  },
  {
    songId: 6,
    title: 'Love yourself',
    artist: 'Justin Bieber',
  }]
  songDatabase.push(song)
  return songDatabase
};

let a = addSongToDatabase({
  songId: 6,
  title: 'Love yourself',
  artist: 'Justin Bieber',
});
console.log(a);
//Now a question for you!
//Should this function return anything?
//What do you think, why/why not?

function getSongByTitle(title) { //title = blacer than black
  for(let i = 0; i < songDatabase.length; i++){
      if(title === songDatabase[i].title) { //title = blacer than black
        return title //title = blacker than black
      }
  }
   return "does not match"
};

let getSongs = getSongByTitle("My baby");
console.log(getSongs);


const myPlaylist = [];

function addSongToMyPlaylist(title) {
  for(let i = 0; i < songDatabase.length; i++) {
    if(songDatabase[i].title === "") { //title = blacer than black
      myPlaylist.push(title)
    }

    for(let j = 0; j < moreSongs.length; j++) {
      if(title === moreSongs[j].title) { //title = blacer than black
        myPlaylist.push(title)
      }
};

const myPlaylist = addSongToMyPlaylist("Blacker than black");
console.log(myPlaylist);
