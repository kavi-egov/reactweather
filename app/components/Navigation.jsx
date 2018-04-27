var React = require('react');
var {Link, IndexLink} = require('react-router');

var locationquery = '/?location=';
var Navigation = React.createClass({

  onSearch: function(e){
    e.preventDefault();
    var city = this.refs.city.value;
    if(city.length>0){
    window.location.hash= `${locationquery}${city}`;
    this.refs.city.value='';
  }
  },

  render: function(){

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li>
              <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>about the weather </Link>
            </li>
            <li>
              <Link to='/example' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>example weathers </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather" ref="city"></input>
              </li>
              <li>
                <button type="submit" className="button hollow">Get Weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;

/*
<div>
  <h2>Nav component</h2>



</div>
*/
