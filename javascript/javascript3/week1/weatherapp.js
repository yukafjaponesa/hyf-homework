//const fetchData = (cityName) => {
  document.getElementById('button').onclick = () => {
  const getLocation = document.getElementById('city').value;
  const cityName = getLocation;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=25e524a669334b226a450e77c8dd3ef8&units=metric`

  fetch(url)
    .then(response => response.json())
    .then(result => {
      const weatherData = result.weather;
      document.getElementById('result');
      console.log(weatherData);
      })
};
