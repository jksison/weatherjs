// Init weather object
const weather = new Weather('London', 'uk');

document.addEventListener('DOMContentLoader', getWeather);



function getWeather() {
   weather.getWeather()
      .then(results => {
         console.log(results);
      })
      .catch(err => {
         console.log(err);
      });
}