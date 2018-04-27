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
      <div>
        <form onSubmit={this.onSearch}>
          <input type='search' placeholder='enter the place name' ref='city'/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
