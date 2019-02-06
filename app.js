// Init weather object
const weather = new Weather('Boston', 'United States');
const ui = new UI;

//document.addEventListener('DOMContentLoader', getWeather);



//function getWeather() {
   weather.getWeather()
      .then(results => {
         ui.paint(results);
         console.log(results);
      })
      .catch(err => {
         console.log(err);
      });
//}