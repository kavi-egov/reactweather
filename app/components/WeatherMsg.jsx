var React = require('react');

var WeatherMsg = ({temp, city}) =>

        <div>
          <h1 className="text-center">
            temprature in {city} is {temp}
          </h1>
        </div> ;

module.exports = WeatherMsg;
