var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function() {
    return {isLoading: false, city: this.props.city, temp: this.props.temp};
  },

  handleSearch: function(cityName) {

    this.setState({isLoading: true, errorMsg: undefined, temp: undefined, city: undefined});
    var resultTemp = '';
    var that = this;
    openWeatherMap.getTemp(cityName).then(function(temp) {
      resultTemp = temp;
      that.setState({isLoading: false, city: cityName, temp: resultTemp});
    }, function(e) {
      that.setState({isLoading: false, errorMsg: e.message});
    });
  },

  componentDidMount: function() {

    var location = this.props.location.query.location;
    if(null!=location && location.length>0){
      this.handleSearch(location);
      window.location.hash='#/';
    }
  },

  componentWillReceiveProps: function(incomingProps) {
    var location = incomingProps.location.query.location;
    if(null!=location && location.length>0){
      this.handleSearch(location);
      window.location.hash='#/';
    }
  },

  render: function() {

    var {isLoading,
      city,
      temp, errorMsg
    } = this.state;

    function renderWeatherMsg(){

      if(isLoading)
        return (<h1 className="text-center"> fetching data from server </h1>);
      else if(null==city && null==temp)
        return (<h4 className="text-center">Search Weather</h4>);
      else
        return (<WeatherMsg city={city} temp={temp}/>);
    };

    function renderErrorModal() {

      if(null!=errorMsg)
        return <ErrorModal errorMsg={errorMsg}/>;
    }

    return (<div>
      <h1 className="text-center page-header">Get Weather</h1>
      <WeatherForm updateParent={this.handleSearch}/>
      {renderWeatherMsg()}
      {renderErrorModal()}
    </div>);
  }
});

module.exports = Weather;
