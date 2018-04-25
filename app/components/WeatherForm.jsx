var React = require('react');

var WeatherForm = React.createClass({

  onSearch: function(e) {

    e.preventDefault();
    var cityName = this.refs.city.value;
    this.refs.city.value = '';
    if(cityName.length > 0)
    this.props.updateParent(cityName);
  },

  render: function() {

    return (
        <form onSubmit={this.onSearch}>
          <input placeholder='enter the place name' ref='city'/>
          <submit>Get Weather</submit>
        </form>
    );
  }
});

module.exports = WeatherForm;
