var React = require('react');

var WeatherMsg = ({temp, city}) =>

        <div>
          <h4>
            the current city is {city} the city's temprature is {temp}
          </h4>
        </div> ;

module.exports = WeatherMsg;
