class UI {
   constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.pressure = document.getElementById('w-pressure');
      this.wind = document.getElementById('w-wind');
   }

   paint(weather) {
      this.location.textContent = `${weather.name}, ${weather.sys.country}`;
      this.desc.textContent = weather.weather[0].description;
      this.string.textContent = `${Math.round(weather.main.temp)} °C`;
      this.icon.setAttribute('src', `http://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`);
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
      this.feelsLike.textContent = `Feels Like: ${Math.round(weather.main.temp)} °C`;
      this.pressure.textContent = `Pressure: ${weather.main.pressure} hpa`;
      this.wind.textContent = `Wind: ${weather.wind.speed} m/s (${weather.wind.deg}°)`;

   }
}