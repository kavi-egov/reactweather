var axios = require('axios');

const OPEN_WEATHER_MAP_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const appid = '03d073cc78b04ab8db900b44ed6d28c6';
const units = 'metric';

module.exports = {

  getTemp: function(location) {

    var encodedCity = encodeURIComponent(location);
    var apiUrl = `${OPEN_WEATHER_MAP_BASE_URL}q=${encodedCity}&appid=${appid}&units=${units}`;
    console.log(' the api url : '+apiUrl);

    return axios.get(apiUrl).then(function(res) {
      if (res.data.cod && res.data.message){
        console.log("the error iin success : "+res.data.message);
        throw new error(res.data.message);
      }
      else
        return res.data.main.temp;
    }, function(res) {
      throw new error(res.data.message);
    });
  }
};
