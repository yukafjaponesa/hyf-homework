const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=25e524a669334b226a450e77c8dd3ef8';
const units = '&units=metric';

function getWeather() {
  const button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
};

function weatherAsk() {
  const url = api + city + apiKey + units;
  loadJSON(url, gotData);
};

function gotData(data) {
  weather = data;
};
