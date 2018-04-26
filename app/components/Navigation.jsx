var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({

  onSearch: function(e){
    e.preventDefault();
    alert('not yet implemented');
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
                <input type="search" placeholder="Search Weather"></input>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"></input>
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
