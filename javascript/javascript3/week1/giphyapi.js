const api = "http://api.giphy.com/v1/gifs/search?";
const apiKey = "&api_key=xaoGqJvlFyO1480AAIPRg1FecpwZETEq"
const query = `&q=${query}`

function getGif() {
  const url = api + apiKey + query;
  loadJSON(url, gotData);
};

function gotData(data) {
  for(i = 0; i < data.length; i++)
  creatImg(data.data[i].images.original.url);
};

//const api = `http://api.giphy.com/v1/gifs/search?&api_key=xaoGqJvlFyO1480AAIPRg1FecpwZETEq&q=${query}`
// document.getElementById('submit').onclick =() => {
//   const word = document.getElementById('word');
// };
