class Weather {
   constructor(city, country) {
      this.appId = 'aeb23011a35277bf6d7a1649d72d0dd3';
      this.city = city;
      this.country = country;
   }

   async getWeather() {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.appId}`);

      const responseData = await response.json();

      return responseData;
   }

   changeLocation(city, country) {
      this.city = city;
      this.country = country;
   }
}