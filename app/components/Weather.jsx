var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({

  getInitialState: function() {
    return {isLoading: false, city: this.props.city, temp: this.props.temp};
  },

  getDefaultProps: function() {
    return {city: 'unknown', temp: 'unkown'};
  },

  handleSearch: function(cityName) {

    this.setState({isLoading: true});
    var resultTemp = '';
    var that = this;
    openWeatherMap.getTemp(cityName).then(function(temp) {
      resultTemp = temp;
      that.setState({isLoading: false, city: cityName, temp: resultTemp});
    }, function(error) {
      alert('error');
    });
  },

  render: function() {

    var {isLoading,
      city,
      temp
    } = this.state;

    function renderWeatherMsg(){

      if(isLoading)
        return (<h4> fetching data from server </h4>);
      else
        return (<WeatherMsg city={city} temp={temp}/>);
    };

    return (<div>
      <h1>Get Weather</h1>
      <WeatherForm updateParent={this.handleSearch}/>
      {renderWeatherMsg()}
    </div>);
  }
});

module.exports = Weather;
