var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) =>

        <div>
          <h2>Nav component</h2>
          <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 900, color:'#FFFF00'}}>Get Weather </IndexLink>
          <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>about the weather </Link>
          <Link to='/example' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>example weathers </Link>
        </div> ;

module.exports = Navigation;
